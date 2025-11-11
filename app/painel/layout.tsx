import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import AppSidebar from "./_components/app-sidebar";

export default function PainelLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full h-full flex-1">
                {children}
            </main>
        </SidebarProvider>
    )
}