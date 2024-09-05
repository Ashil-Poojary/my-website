"use client"
import ExperienceCard from "@/components/ExperienceCard";
import ProfileCard from "@/components/ProfileCard";
import ThemeBtns from "@/components/ThemeBtns";
import TobNav from "@/components/TobNav";
import { tabProp } from "@/models/btnProps";
import { useState } from "react";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(tabProp.ALL)
  const onTabClick = (tab: tabProp) => {
    setSelectedTab(tab)
  }
  return (
    <div className="bg-sky-blue dark:bg-dark-blue-gray isolate px-6 py-24 sm:py-32 lg:px-24 h-screen">
      <TobNav selectedTab={selectedTab} onTabClick={onTabClick} />

      <div className="lg:flex gap-2 mt-2">
        <div className="order-1 lg:order-2">
          <ThemeBtns />
        </div>

        <div className="order-2 mt-2 lg:order-1 lg:mt-0">
          <ProfileCard />
        </div>

       

      </div>
      <ExperienceCard />


    </div>


  );
}
