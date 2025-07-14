import { Music, Disc3, User as UserIcon } from "lucide-react";
import Image from "next/image";
import { User } from "@/lib/types";
import { getUserProfile } from "@/lib/actions";

export default async function ProfileHeader() {
  const user: User = await getUserProfile();
  const registrationDate = new Date(user.registered["#text"] * 1000);
  const formattedDate = registrationDate.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-[#F7931E] border-4 border-black p-4 md:p-8 shadow-[8px_8px_0px_0px_#000000]">
      <div className="flex flex-col">
        <div className="flex flex-row gap-4 md:gap-8 mb-6 md:mb-0">
          <div className="relative">
            <Image
              src={
                Array.isArray(user.image)
                  ? user.image[2]?.["#text"]
                  : "/placeholder.svg"
              }
              alt="Profile"
              width={120}
              height={120}
              className="md:w-[200px] md:h-[200px] border-4 border-black shadow-[4px_4px_0px_0px_#000000]"
            />
          </div>
          <div className="flex flex-col justify-center md:justify-between flex-1">
            <div>
              <p className="text-black font-bold text-xl md:text-4xl mb-2 md:mb-3 text-left">
                {user.realname}
              </p>
              <div className="flex flex-col md:flex-row items-start gap-1 md:gap-4 text-black font-bold text-sm md:text-base text-left">
                <span>{user.country}</span>
                <span className="hidden md:inline">•</span>
                <span>Member since {formattedDate}</span>
              </div>
            </div>

            <div className="hidden md:flex flex-wrap justify-start gap-6 mt-4">
              <div className="bg-white border-3 border-black p-4 shadow-[4px_4px_0px_0px_#000000] min-w-[140px] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000] cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <Disc3 className="w-5 h-5 text-black" />
                  <span className="text-black font-bold text-sm">ALBUMS</span>
                </div>
                <div className="text-black font-black text-2xl">
                  {user.album_count}
                </div>
                <div className="text-black font-medium text-xs">listened</div>
              </div>

              <div className="bg-white border-3 border-black p-4 shadow-[4px_4px_0px_0px_#000000] min-w-[140px] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000] cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <UserIcon className="w-5 h-5 text-black" />
                  <span className="text-black font-bold text-sm">ARTISTS</span>
                </div>
                <div className="text-black font-black text-2xl">
                  {user.artist_count}
                </div>
                <div className="text-black font-medium text-xs">listened</div>
              </div>

              <div className="bg-white border-3 border-black p-4 shadow-[4px_4px_0px_0px_#000000] min-w-[140px] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000] cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <Music className="w-5 h-5 text-black" />
                  <span className="text-black font-bold text-sm">TRACKS</span>
                </div>
                <div className="text-black font-black text-2xl">
                  {user.playcount}
                </div>
                <div className="text-black font-medium text-xs">listened</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:hidden flex-col gap-3 mt-4">
          <div className="flex gap-3">
            <div className="bg-white border-3 border-black p-3 shadow-[4px_4px_0px_0px_#000000] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000] cursor-pointer flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Disc3 className="w-4 h-4 text-black" />
                <span className="text-black font-bold text-xs">ALBUMS</span>
              </div>
              <div className="text-black font-black text-xl">
                {user.album_count}
              </div>
              <div className="text-black font-medium text-xs">listened</div>
            </div>

            <div className="bg-white border-3 border-black p-3 shadow-[4px_4px_0px_0px_#000000] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000] cursor-pointer flex-1">
              <div className="flex items-center gap-2 mb-1">
                <UserIcon className="w-4 h-4 text-black" />
                <span className="text-black font-bold text-xs">ARTISTS</span>
              </div>
              <div className="text-black font-black text-xl">
                {user.artist_count}
              </div>
              <div className="text-black font-medium text-xs">listened</div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white border-3 border-black p-3 shadow-[4px_4px_0px_0px_#000000] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000] cursor-pointer w-full">
              <div className="flex items-center gap-2 mb-1">
                <Music className="w-4 h-4 text-black" />
                <span className="text-black font-bold text-xs">TRACKS</span>
              </div>
              <div className="text-black font-black text-xl">
                {user.playcount}
              </div>
              <div className="text-black font-medium text-xs">listened</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
