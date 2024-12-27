import ArtworkScrollable from "@/components/ArtworkScrollable";
import Navbar from "@/components/Navbar";

export default async function Home() {
  return (
    <div className="p-8 pb-24 bg-white">
      <ArtworkScrollable />
      <Navbar />
    </div>
  );
}
