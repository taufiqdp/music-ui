import Image from "next/image";
import { getTopTracks } from "@/lib/actions";
import { Track } from "@/lib/types";

export default async function TopTrack() {
  const topTracks: Track[] = await getTopTracks();

  return (
    <div className="bg-[#9C27B0] border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000000]">
      <h2 className="text-white font-black text-2xl mb-6">
        TOP TRACKS THIS MONTH
      </h2>
      <div className="space-y-4">
        {topTracks.map((track, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_#000000]"
          >
            <span className="text-black font-black text-xl w-6">
              {index + 1}
            </span>
            <Image
              src={track.image[3]?.["#text"]}
              alt={track.name}
              width={60}
              height={60}
              className="border-2 border-black"
            />
            <div className="flex-1">
              <p className="text-black font-bold text-lg">{track.name}</p>
              <p className="text-gray-600 font-semibold">{track.artist.name}</p>
            </div>
            <div className="text-black font-bold px-4">{track.playcount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
