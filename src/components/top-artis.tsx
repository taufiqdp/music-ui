import { getTopArtists } from "@/lib/actions";
import Image from "next/image";

export default async function TopArtist() {
  const topArtists = await getTopArtists();

  return (
    <div className="bg-[#E91E63] border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000000]">
      <h2 className="text-white font-black text-2xl mb-6">
        TOP ARTISTS THIS MONTH
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {topArtists.map((artist, index) => (
          <div
            key={index}
            className="bg-white border-2 border-black p-4 shadow-[2px_2px_0px_0px_#000000] text-center"
          >
            <Image
              src={
                Array.isArray(artist.image)
                  ? artist.image[2]?.["#text"]
                  : "/placeholder.svg"
              }
              alt={artist.name}
              width={120}
              height={120}
              className="border-2 border-black mx-auto mb-3"
            />
            <p className="text-black font-bold text-lg">{artist.name}</p>
            <p className="text-gray-600 font-semibold">
              {artist.playcount} plays
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
