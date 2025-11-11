import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import Link from "next/link";
import { DashboardSquare02Icon, Video02Icon, UserMultiple02Icon } from "hugeicons-react";

const sidebarItems = [
    {
        label: "Início",
        href: "/painel",
        icon: <DashboardSquare02Icon />
    },
    {
        label: "Lives",
        href: "/painel/lives",
        icon: <Video02Icon />
    },
    {
        label: "Usuários",
        href: "/painel/users",
        icon: <UserMultiple02Icon />
    }
]

export default function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                <SidebarMenu>
                    {sidebarItems.map((item) => (
                        <SidebarMenuItem key={item.label}>
                            <SidebarMenuButton asChild>
                                <Link href={item.href}>
                                    {item.icon}
                                    <span>{item.label}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}