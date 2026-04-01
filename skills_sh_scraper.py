#!/usr/bin/env python3
"""
Skills.sh Scraper - Fetches all skills from the API with rate limiting.
Usage: python3 skills_sh_scraper.py
"""

import json
import time
import requests
from pathlib import Path

BASE_URL = "https://skills.sh/api/skills/all-time"
OUTPUT_FILE = Path(__file__).parent / "skills_sh_all.json"
RATE_LIMIT_DELAY = 1.0  # seconds between requests

def fetch_page(page: int, max_retries: int = 3) -> dict | None:
    """Fetch a single page from the API."""
    url = f"{BASE_URL}/{page}"
    
    for attempt in range(max_retries):
        try:
            response = requests.get(url, timeout=30)
            if response.status_code == 200:
                return response.json()
            elif response.status_code == 404:
                return None  # No more pages
            else:
                print(f"Page {page}: HTTP {response.status_code}, retry {attempt + 1}/{max_retries}")
        except Exception as e:
            print(f"Page {page}: Error {e}, retry {attempt + 1}/{max_retries}")
        
        time.sleep(2 ** attempt)  # Exponential backoff
    
    return None

def scrape_all_skills():
    """Scrape all skills pages until exhausted."""
    all_skills = []
    page = 1
    consecutive_failures = 0
    max_consecutive_failures = 3
    
    print(f"Starting scrape from {BASE_URL}")
    print("-" * 50)
    
    while True:
        print(f"Fetching page {page}...", end=" ", flush=True)
        
        data = fetch_page(page)
        
        if data is None:
            consecutive_failures += 1
            print("failed/empty")
            
            if consecutive_failures >= max_consecutive_failures:
                print(f"\nStopping after {max_consecutive_failures} consecutive failures")
                break
            
            time.sleep(RATE_LIMIT_DELAY * 2)
            continue
        
        skills = data.get("skills", [])
        
        if not skills:
            print("no skills")
            break
        
        consecutive_failures = 0
        all_skills.extend(skills)
        print(f"got {len(skills)} skills (total: {len(all_skills)})")
        
        # Rate limit between requests
        time.sleep(RATE_LIMIT_DELAY)
        page += 1
    
    return all_skills

def analyze_skills(skills: list) -> dict:
    """Generate overview statistics from skills data."""
    if not skills:
        return {}
    
    # Count by source/repo
    sources: dict = {}
    for s in skills:
        src = s.get("source", "unknown")
        sources[src] = sources.get(src, 0) + 1
    
    # Top sources
    top_sources = sorted(sources.items(), key=lambda x: x[1], reverse=True)[:20]
    
    # Install ranges
    installs = [s.get("installs", 0) for s in skills]
    
    return {
        "total_skills": len(skills),
        "unique_sources": len(sources),
        "top_sources": top_sources,
        "install_stats": {
            "max": max(installs),
            "min": min(installs),
            "avg": sum(installs) / len(installs)
        }
    }

def main():
    print("Skills.sh Scraper")
    print("=" * 50)
    
    # Scrape all skills
    skills = scrape_all_skills()
    
    if not skills:
        print("No skills fetched!")
        return
    
    # Analyze
    analysis = analyze_skills(skills)
    
    # Save raw data
    output = {
        "scraped_at": time.strftime("%Y-%m-%d %H:%M:%S UTC"),
        "skills": skills,
        "analysis": analysis
    }
    
    with open(OUTPUT_FILE, "w") as f:
        json.dump(output, f, indent=2)
    
    print("=" * 50)
    print(f"Done! Scraped {len(skills)} skills")
    print(f"Saved to: {OUTPUT_FILE}")
    print(f"\nTop 20 sources by skill count:")
    for src, count in analysis["top_sources"]:
        print(f"  {src}: {count}")

if __name__ == "__main__":
    main()
