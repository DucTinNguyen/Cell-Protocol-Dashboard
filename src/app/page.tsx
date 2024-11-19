"use client";

import Outlet from "@/components/outlet";
import SideBar from "@/components/sidebar";

export default function Home() {

  return (
    <main className="flex">
      <SideBar />
      <Outlet />
    </main>
  );
}
