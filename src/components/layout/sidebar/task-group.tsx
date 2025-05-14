"use client";

import { useState } from "react";
import clsx from "clsx";
import NavItem from "./nav-item";
import Button from "@/components/ui/button";
import { Plus } from "lucide-react";
import Textfield from "@/components/ui/textfield";

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

const predefinedColors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
];

function AddGroup({
    onSave,
    onCancel,
}: {
    onSave?: (formData: FormData) => void;
    onCancel?: () => void;
}) {
    return (
        <form
            action={onSave}
            className="space-y-5 rounded border border-gray-200 p-2"
        >
            <Textfield
                name="groupName"
                variantSize="small"
                outlineWidth="thin"
                autoFocus
            />
            <div className="flex items-center justify-between gap-2">
                {predefinedColors.map((color) => (
                    <input
                        key={color}
                        type="radio"
                        name="color"
                        className={clsx(
                            `size-[20px] rounded-sm ${color} cursor-pointer appearance-none checked:shadow-[0_0_0_2px_var(--color-white),0_0_0_4px_var(--color-gray-300)]`,
                        )}
                        aria-label={`Select color ${color}`}
                    ></input>
                ))}
            </div>
            <div className="flex items-center justify-end gap-2">
                <Button
                    type="button"
                    variant="outlined"
                    color="secondaryText"
                    size="small"
                    fullWidth={false}
                    onClick={onCancel}
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                    color="primary"
                    size="small"
                    fullWidth={false}
                >
                    Save
                </Button>
            </div>
        </form>
    );
}

export default function TaskGroup() {
    const [addGroupOpen, setAddGroupOpen] = useState(false);

    return (
        <div>
            <ul className="pb-2">
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
                <AddGroup onCancel={() => setAddGroupOpen(false)} />
            )}
        </div>
    );
}
