"use client";

import { useState } from "react";
import clsx from "clsx";
import NavItem from "./nav-item";
import Button from "@/components/ui/button";
import { Plus, X, Palette } from "lucide-react";
import Textfield from "@/components/ui/textfield";
import { HexColorPicker } from "react-colorful";
import Popper from "@/components/ui/popper";
import IconButton from "@/components/ui/icon-button";
import Card from "@/components/ui/card";
import ClickawayListener from "@/components/ui/clickaway-listener";

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
    color,
    onChange,
    onClose,
}: {
    color?: string;
    onChange?: (hex: string) => void;
    onClose?: () => void;
}) {
    return (
        <Card
            title="Custom"
            titleIcon={<Palette size={20} className="text-secondary-text" />}
            headerAction={
                <IconButton onClick={onClose}>
                    <X />
                </IconButton>
            }
            headerPadding="2px 4px"
        >
            <HexColorPicker color={color} onChange={onChange} />
            <div
                style={{ backgroundColor: color }}
                className="mt-1 h-8 rounded-sm border border-gray-200"
            ></div>
        </Card>
    );
}

function AddGroup({
    onSave,
    onCancel,
}: {
    onSave?: (formData: FormData) => void;
    onCancel?: () => void;
}) {
    const [colorPickerEl, setColorPickerEl] = useState<HTMLElement | null>();
    const [pickerColor, setPickerColor] = useState("#fff");
    const [useCustomColor, setUseCustomColor] = useState(false);

    const open = Boolean(colorPickerEl);

    return (
        <>
            <Popper
                anchorEl={colorPickerEl}
                open={open}
                placement="right"
                placementAlignment="center"
            >
                <ClickawayListener onClickAway={() => setColorPickerEl(null)}>
                    <div className="block bg-transparent">
                        <CustomColorPicker
                            color={pickerColor}
                            onChange={(hex) => {
                                setPickerColor(hex);
                            }}
                            onClose={() => setColorPickerEl(null)}
                        />
                    </div>
                </ClickawayListener>
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
                            value={color}
                            style={{ backgroundColor: color }}
                            className={clsx(
                                `size-[20px] cursor-pointer appearance-none rounded-sm checked:shadow-[0_0_0_2px_var(--color-white),0_0_0_4px_var(--color-gray-300)]`,
                            )}
                            aria-label={`Select color ${color}`}
                            onClick={() => setUseCustomColor(false)}
                        />
                    ))}
                    <input
                        type="radio"
                        name="color"
                        value={pickerColor}
                        style={{
                            ...(useCustomColor && {
                                backgroundColor: pickerColor,
                            }),
                        }}
                        className={clsx(
                            `size-[20px] cursor-pointer appearance-none rounded-sm checked:shadow-[0_0_0_2px_var(--color-white),0_0_0_4px_var(--color-gray-300)]`,
                            {
                                "bg-transparent bg-[url(/color-picker.svg)] bg-cover":
                                    !useCustomColor,
                            },
                        )}
                        aria-label={`Color picker`}
                        onClick={(e) => {
                            open
                                ? setColorPickerEl(null)
                                : setColorPickerEl(e.currentTarget);
                            setUseCustomColor(true);
                        }}
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
