#!/usr/bin/env node
/**
 * YouTube integration via YouTube Data API v3
 * Supports: video info, search, captions
 */

const API_KEY = process.env.YOUTUBE_API_KEY;
const BASE = 'https://www.googleapis.com/youtube/v3';

async function api(endpoint, params = {}) {
  const ps = new URLSearchParams({ ...params, key: API_KEY });
  const url = `${BASE}${endpoint}?${ps}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`YouTube API error: ${res.status}`);
  return res.json();
}

async function videoInfo(videoId) {
  const data = await api('/videos', {
    part: 'snippet,contentDetails,statistics',
    id: videoId
  });
  if (!data.items?.length) throw new Error(`Video not found: ${videoId}`);
  const v = data.items[0];
  const { snippet, contentDetails, statistics } = v;
  return {
    id: videoId,
    title: snippet.title,
    description: snippet.description,
    channel: snippet.channelTitle,
    channelId: snippet.channelId,
    publishedAt: snippet.publishedAt,
    duration: contentDetails.duration,
    caption: contentDetails.caption === 'true',
    thumbnails: snippet.thumbnails,
    views: parseInt(statistics.viewCount || '0'),
    likes: parseInt(statistics.likeCount || '0'),
  };
}

async function search(query, { maxResults = 10 } = {}) {
  const data = await api('/search', {
    part: 'snippet',
    q: query,
    maxResults,
    type: 'video'
  });
  return (data.items || []).map(item => ({
    videoId: item.id.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    channel: item.snippet.channelTitle,
    channelId: item.snippet.channelId,
    publishedAt: item.snippet.publishedAt,
    thumbnail: item.snippet.thumbnails?.default?.url,
  }));
}

async function captions(videoId) {
  const data = await api('/captions', {
    part: 'snippet',
    videoId
  });
  return (data.items || []).map(c => ({
    id: c.id,
    language: c.snippet.language,
    name: c.snippet.name,
  }));
}

// --- CLI ---
const [, , cmd, ...args] = process.argv;

if (!API_KEY) {
  console.error('Error: YOUTUBE_API_KEY not set');
  process.exit(1);
}

try {
  switch (cmd) {
    case 'info': {
      const id = args[0];
      if (!id) throw new Error('Usage: youtube.js info <videoId>');
      console.log(JSON.stringify(await videoInfo(id), null, 2));
      break;
    }
    case 'search': {
      const query = args.join(' ');
      if (!query) throw new Error('Usage: youtube.js search <query>');
      console.log(JSON.stringify(await search(query), null, 2));
      break;
    }
    case 'captions': {
      const id = args[0];
      if (!id) throw new Error('Usage: youtube.js captions <videoId>');
      console.log(JSON.stringify(await captions(id), null, 2));
      break;
    }
    default:
      console.error('Commands: info, search, captions');
      process.exit(1);
  }
} catch (e) {
  console.error(e.message);
  process.exit(1);
}
