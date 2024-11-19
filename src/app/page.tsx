"use client";

import Header from "@/components/header";
import Outlet from "@/components/outlet";
import SideBar from "@/components/sidebar";
import { SidebarProvider } from "@/providers/side-bar.provider";

export default function Home() {

  return (
    <SidebarProvider>
      <Header />
      <main className="flex fixed w-full">
        <SideBar />
        <Outlet />
      </main>
    </SidebarProvider>
    
  );
}
