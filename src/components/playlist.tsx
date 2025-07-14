import Image from "next/image";
import { Button } from "./ui/button";
import { Play } from "lucide-react";

type Playlist = {
  name: string;
  tracks: number;
  image?: string;
};

export default function Playlists({ playlists }: { playlists: Playlist[] }) {
  return (
    <div className="bg-[#4CAF50] border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000000]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-black font-black text-2xl">PUBLIC PLAYLISTS</h2>
        <Button className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-black border-2 border-black shadow-[2px_2px_0px_0px_#000000] rounded-none">
          SHOW ALL
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {playlists.map((playlist, index) => (
          <div
            key={index}
            className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_#000000] group cursor-pointer hover:shadow-[6px_6px_0px_0px_#000000] transition-all"
          >
            <div className="relative mb-4">
              <Image
                src={playlist.image || "/placeholder.svg"}
                alt={playlist.name}
                width={160}
                height={160}
                className="w-full border-2 border-black"
              />
              <Button className="absolute bottom-2 right-2 bg-[#25D366] hover:bg-[#20B858] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000000] rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-4 h-4" />
              </Button>
            </div>
            <h3 className="text-black font-bold text-lg mb-1">
              {playlist.name}
            </h3>
            <p className="text-gray-600 font-semibold">
              {playlist.tracks} tracks
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
