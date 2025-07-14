"use server";

import { Artist, RecentTrack, Track, User } from "./types";

const API_KEY = process.env.LAST_FM_API_KEY;
const BASE_URL = process.env.LAST_FM_BASE_URL;

async function makeRequest(endpoint: string, params: Record<string, string>) {
  const url = new URL(endpoint, BASE_URL);
  url.searchParams.append("api_key", API_KEY!);
  url.searchParams.append("format", "json");

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.append(key, value);
  }

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  return response.json();
}

export async function getUserProfile(): Promise<User> {
  const params = {
    method: "user.getinfo",
    user: process.env.LAST_FM_USER!,
  };
  const data = await makeRequest(BASE_URL!, params);
  return data.user as User;
}

export async function getTrackInfo(mbid: string) {
  const params = {
    method: "track.getinfo",
    mbid,
    username: process.env.LAST_FM_USER!,
  };
  const data = await makeRequest(BASE_URL!, params);
  return data.track;
}

export async function getTopTracks(): Promise<Track[]> {
  const params = {
    method: "user.gettoptracks",
    user: process.env.LAST_FM_USER!,
    limit: "4",
    period: "1month",
  };
  const data = await makeRequest(BASE_URL!, params);
  return data.toptracks.track;
}

export async function getTopArtists(): Promise<Artist[]> {
  const params = {
    method: "user.gettopartists",
    user: process.env.LAST_FM_USER!,
    limit: "4",
    period: "1month",
  };
  const data = await makeRequest(BASE_URL!, params);
  return data.topartists.artist;
}

export async function getRecentTracks(): Promise<RecentTrack[]> {
  const params = {
    method: "user.getrecenttracks",
    user: process.env.LAST_FM_USER!,
    limit: "5",
  };
  const data = await makeRequest(BASE_URL!, params);
  return data.recenttracks.track;
}
