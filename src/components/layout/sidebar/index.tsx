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
import { usePathname } from "next/navigation";
import IconButton from "../../ui/icon-button";
import Divider from "../../ui/divider";
import NavItem from "./nav-item";
import TaskGroup from "./task-group";

const taskList = [
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

const userPreferences = [
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
    const pathname = usePathname();

    return (
        <nav className="h-full w-full rounded-lg border-1 border-gray-200 bg-linear-45 from-[#F3F4F6]/0 to-[#FBFDFF] p-4">
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
                            <NavItem
                                key={item.label}
                                {...item}
                                active={item.href === pathname}
                            />
                        ))}
                    </ul>
                </div>
                <Divider />
                <div>
                    <h4 className="py-2 font-medium">LIST</h4>
                    <TaskGroup />
                </div>
                <div className="mt-auto">
                    <ul className="flex flex-col gap-2">
                        {userPreferences.map((item) => (
                            <NavItem
                                key={item.label}
                                {...item}
                                active={item.href === pathname}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
