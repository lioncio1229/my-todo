"use client";

import { useRef, useState } from "react";
import clsx from "clsx";
import NavItem from "./nav-item";
import Button from "@/components/ui/button";
import { Plus } from "lucide-react";
import Textfield from "@/components/ui/textfield";
import { HexColorPicker } from "react-colorful";
import Popper from "@/components/ui/popper";

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
    "#fb2d32",
    "#fe6902",
    "#f4b001",
    "#00c94d",
    "#287fff",
    "#a947ff",
    "#f1359d",
    "#615fff",
];

const defaultColorValue = predefinedColors[0] ?? "#287fff";

function CustomColorPicker({
    onPick,
    onCancel,
}: {
    onPick?: (hex: string) => void;
    onCancel?: () => void;
}) {
    const [color, setColor] = useState("#aabbcc");

    return (
        <div className="rounded-sm bg-white p-1 shadow-sm outline-1 outline-gray-200">
            <HexColorPicker color={color} onChange={setColor} />
            <div className="mt-2 flex gap-1">
                <Button size="small" variant="outlined" onClick={onCancel}>
                    Cancel
                </Button>
                <Button size="small" onClick={() => onPick?.(color)}>
                    Pick
                </Button>
            </div>
        </div>
    );
}

function AddGroup({
    onSave,
    onCancel,
}: {
    onSave?: (formData: FormData) => void;
    onCancel?: () => void;
}) {
    const radioRef = useRef<HTMLInputElement | null>(null);
    const [colorPickerEl, setColorPickerEl] = useState<HTMLElement | null>();
    const open = Boolean(colorPickerEl);

    return (
        <>
            <Popper
                anchorEl={colorPickerEl}
                open={open}
                placement="right"
                placementAlignment="center"
            >
                <CustomColorPicker
                    onPick={(hex) => {
                        radioRef.current!.value = hex;
                        radioRef.current!.checked = true;
                        setColorPickerEl(null);
                    }}
                    onCancel={() => setColorPickerEl(null)}
                />
            </Popper>
            <form
                action={onSave}
                className="space-y-5 rounded border border-gray-200 p-2"
            >
                <Textfield
                    name="groupName"
                    variantSize="small"
                    outlineWidth="thin"
                    autoFocus
                    autoComplete="off"
                />
                <div className="flex items-center justify-between gap-2">
                    {predefinedColors.map((color) => (
                        <input
                            key={color}
                            type="radio"
                            name="color"
                            defaultChecked={color === defaultColorValue}
                            defaultValue={defaultColorValue}
                            style={{ backgroundColor: color }}
                            className={clsx(
                                `size-[20px] cursor-pointer appearance-none rounded-sm checked:shadow-[0_0_0_2px_var(--color-white),0_0_0_4px_var(--color-gray-300)]`,
                            )}
                            aria-label={`Select color ${color}`}
                        />
                    ))}
                    <input
                        ref={radioRef}
                        type="radio"
                        name="color"
                        className={clsx(
                            `size-[20px] cursor-pointer appearance-none rounded-sm bg-[url(/color-picker.svg)] bg-cover checked:shadow-[0_0_0_2px_var(--color-white),0_0_0_4px_var(--color-gray-300)]`,
                        )}
                        aria-label={`Color picker`}
                        onClick={(e) =>
                            open
                                ? setColorPickerEl(null)
                                : setColorPickerEl(e.currentTarget)
                        }
                    />
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
        </>
    );
}

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
                <AddGroup
                    onSave={handleOnSave}
                    onCancel={() => setAddGroupOpen(false)}
                />
            )}
        </div>
    );
}
