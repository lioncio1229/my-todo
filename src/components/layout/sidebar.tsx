"use client";

import {
    Menu,
    ChevronsRight,
    ListTodo,
    CalendarDays,
    StickyNote,
    Settings,
    LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import IconButton from "../ui/icon-button";
import Divider from "../ui/divider";

type SidebarListItemProps = {
    href: string;
    icon: React.ReactNode;
    label: string;
    count?: number;
};

function SidebarListItem({ href, icon, label, count }: SidebarListItemProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <li>
            <Link
                href={href}
                className={clsx(
                    "flex items-center justify-between gap-2 rounded-sm p-2 text-gray-900 hover:bg-gray-100",
                    {
                        "bg-gray-200 font-semibold hover:bg-gray-200": isActive,
                    },
                )}
            >
                <div
                    className={clsx("flex items-center gap-2", {
                        "[&_svg]:text-primary-text": isActive,
                    })}
                >
                    {icon}
                    <span>{label}</span>
                </div>
                {count && (
                    <div
                        className={clsx("rounded-sm bg-gray-300 px-3", {
                            "bg-white": isActive,
                        })}
                    >
                        {count}
                    </div>
                )}
            </Link>
        </li>
    );
}

const taskList: SidebarListItemProps[] = [
    {
        label: "Upcoming",
        href: "/main",
        icon: <ChevronsRight className="text-secondary-text" />,
        count: 5,
    },
    {
        label: "Today",
        href: "/main/today",
        icon: <ListTodo className="text-secondary-text" />,
    },
    {
        label: "Calendar",
        href: "/main/calendar",
        icon: <CalendarDays className="text-secondary-text" />,
    },
    {
        label: "Sticky Wall",
        href: "/main/sticky-wall",
        icon: <StickyNote className="text-secondary-text" />,
    },
];

const userPreferences: SidebarListItemProps[] = [
    {
        label: "Settings",
        href: "#",
        icon: <Settings className="text-secondary-text" />,
    },
    {
        label: "Sign out",
        href: "#",
        icon: <LogOut className="text-secondary-text" />,
    },
];

export default function Sidebar() {
    return (
        <nav className="h-full w-full rounded-lg border-1 border-gray-300 bg-linear-45 from-[#F3F4F6]/0 to-[#FBFDFF] p-4">
            <div className="flex h-full w-full flex-col gap-6">
                <div className="flex justify-between">
                    <h2 className="font-semibold">Menu</h2>
                    <IconButton>
                        <Menu className="text-secondary-text" />
                    </IconButton>
                </div>
                <div>
                    <h4 className="py-2 font-medium">TASK</h4>
                    <ul className="flex flex-col gap-2">
                        {taskList.map((item) => (
                            <SidebarListItem key={item.label} {...item} />
                        ))}
                    </ul>
                </div>
                <Divider />
                <div className="mt-auto">
                    <ul className="flex flex-col gap-2">
                        {userPreferences.map((item) => (
                            <SidebarListItem key={item.label} {...item} />
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
