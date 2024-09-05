import ProfileCard from "@/components/ProfileCard";
import ThemeBtns from "@/components/ThemeBtns";
import TobNav from "@/components/TobNav";

export default function Home() {
  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-24 h-screen ">
      <TobNav />

      <div className=" lg:flex gap-2 mt-2 ">
        <ProfileCard />

        <ThemeBtns />
      </div>
    </div>
  );
}
