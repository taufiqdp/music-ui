import ProfileHeader from "./profile-header";
import TopTrack from "./top-track";
import TopArtist from "./top-artis";
import RecentlyPlayed from "./recently-played";
import Playlists from "./playlist";

export default function Profile() {
  const playlists = [
    {
      name: "My Vibes 2024",
      tracks: 47,
      image: "/placeholder.svg?height=160&width=160",
    },
    {
      name: "Workout Hits",
      tracks: 32,
      image: "/placeholder.svg?height=160&width=160",
    },
    {
      name: "Chill Sunday",
      tracks: 28,
      image: "/placeholder.svg?height=160&width=160",
    },
    {
      name: "Road Trip Mix",
      tracks: 65,
      image: "/placeholder.svg?height=160&width=160",
    },
  ];
  return (
    <div className="relative min-h-screen p-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      ></div>

      <div className="relative max-w-7xl mx-auto space-y-8">
        <ProfileHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TopTrack />
          <TopArtist />
        </div>

        <RecentlyPlayed />

        <Playlists playlists={playlists} />
      </div>
    </div>
  );
}
