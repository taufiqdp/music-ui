export type User = {
  name: string;
  age: string;
  subscriber: string;
  realname: string;
  bootstrap: string;
  playcount: string;
  artist_count: string;
  playlists: string;
  track_count: string;
  album_count: string;
  image?: Array<{
    size: string;
    "#text": string;
  }>;
  registered: {
    unixtime: string;
    "#text": number;
  };
  country?: string;
  gender?: string;
  url: string;
  type: string;
};

export type Track = {
  streamable: {
    fulltrack: string;
    "#text": string;
  };
  mbid?: string;
  name: string;
  image: Array<{
    size: string;
    "#text": string;
  }>;
  artist: {
    url: string;
    name: string;
    mbid: string;
  };
  url: string;
  duration: string;
  "@attr"?: {
    rank: string;
  };
  playcount?: string;
};

export type Artist = {
  streamable: string;
  image: Array<{
    size: string;
    "#text": string;
  }>;
  mbid?: string;
  url: string;
  playcount: string;
  "@attr"?: {
    rank: string;
  };
  name: string;
};

export type RecentTrack = {
  artist: {
    mbid: string;
    "#text": string;
  };
  streamable: string;
  image: Array<{
    size: string;
    "#text": string;
  }>;
  mbid?: string;
  album: {
    mbid: string;
    "#text": string;
  };
  name: string;
  url: string;
  date: {
    uts: string;
    "#text": string;
  };
};
