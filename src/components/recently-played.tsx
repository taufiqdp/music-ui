import Image from "next/image";
import { getRecentTracks } from "@/lib/actions";

function formatRelativeTime(uts: string): string {
  const now = Math.floor(Date.now() / 1000);
  const trackTime = parseInt(uts);
  const diffInSeconds = now - trackTime;

  if (diffInSeconds < 60) return "Just now";
  if (diffInSeconds < 3600)
    return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400)
    return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800)
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  return `${Math.floor(diffInSeconds / 604800)} weeks ago`;
}

export default async function RecentlyPlayed() {
  const recentlyPlayed = await getRecentTracks();
  return (
    <div className="bg-[#00BCD4] border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000000]">
      <h2 className="text-black font-black text-2xl mb-6">RECENTLY PLAYED</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recentlyPlayed.map((track, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_#000000]"
          >
            <Image
              src={
                Array.isArray(track.image)
                  ? track.image[2]?.["#text"]
                  : "/placeholder.svg"
              }
              alt={track.name}
              width={50}
              height={50}
              className="border-2 border-black"
            />
            <div className="flex-1">
              <p className="text-black font-bold">{track.name}</p>
              <p className="text-gray-600 font-semibold text-sm">
                {track.artist["#text"]} • {track.album["#text"]}
              </p>
            </div>
            <div className="text-gray-500 font-semibold text-sm px-4">
              {track.date?.uts
                ? formatRelativeTime(track.date.uts)
                : "Just now"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
