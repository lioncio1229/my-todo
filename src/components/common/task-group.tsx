"use client";

import { useState } from "react";
import NavItem from "../layout/sidebar/nav-item";
import Button from "@/components/common/ui/button";
import { Plus } from "lucide-react";
import TitleColorPicker from "@/components/common/title-color-picker";

const groupList = [
    {
        label: "Personal",
        icon: <div className="size-[20px] rounded-sm bg-orange-500"></div>,
        count: 12,
    },
    {
        label: "Today",
        icon: <div className="size-[20px] rounded-sm bg-blue-300"></div>,
    },
    {
        label: "Calendar",
        icon: <div className="size-[20px] rounded-sm bg-yellow-500"></div>,
        count: 29,
    },
    {
        label: "Sticky Wall",
        icon: <div className="size-[20px] rounded-sm bg-violet-500"></div>,
    },
];

export default function TaskGroup() {
    const [addGroupOpen, setAddGroupOpen] = useState(false);

    const handleOnSave = (formData: FormData) => {
        const groupName = formData.get("groupName");
        const color = formData.get("color");
        console.log("Group Name: ", groupName);
        console.log("Color: ", color);

        //TODO: Add data to database

        setAddGroupOpen(false);
    };

    return (
        <div>
            <ul className="mb-2">
                {groupList.map((item) => (
                    <NavItem
                        key={item.label}
                        href="/main/group"
                        icon={item.icon}
                        label={item.label}
                        count={item.count}
                    />
                ))}
            </ul>
            {!addGroupOpen ? (
                <Button
                    variant="text"
                    color="primaryText"
                    startIcon={<Plus className="text-inherit" />}
                    fullWidth={false}
                    onClick={() => setAddGroupOpen(true)}
                >
                    Add new list
                </Button>
            ) : (
                <TitleColorPicker
                    onSaveAction={handleOnSave}
                    onCancel={() => setAddGroupOpen(false)}
                />
            )}
        </div>
    );
}
