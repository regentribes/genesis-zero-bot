---
name: youtube
description: YouTube Data API v3 integration for video info, search, and captions. Use when asked to look up a YouTube video, search for videos, or get video metadata.
---

# YouTube Skill

Uses YouTube Data API v3. Requires `YOUTUBE_API_KEY` in environment.

## Setup

1. Enable YouTube Data API v3 in Google Cloud Console
2. Create an API key
3. Add to `~/.openclaw/.env`: `YOUTUBE_API_KEY=your_key`

## Commands

```bash
# Video info (title, description, channel, views, likes, duration, thumbnails)
youtube.js info <videoId>

# Search videos
youtube.js search <query>

# List available caption tracks
youtube.js captions <videoId>
```

## Example

```bash
YOUTUBE_API_KEY=... youtube.js info 4NspcSe67hQ
```

## What it CAN do

- ✅ Video metadata: title, description, channel, publish date, duration, views, likes
- ✅ Video thumbnails (all sizes)
- ✅ Search by keyword
- ✅ List available caption tracks
- ✅ Related videos via search endpoint

## What it CANNOT do

- ❌ Watch/play video (no browser on server)
- ❌ Download transcript text directly (YouTube API doesn't allow this without OAuth + owner permission for most videos)
- ❌ Download video/audio

For transcripts, use the `video-transcript-downloader` skill with cookies, or a transcript API service.
