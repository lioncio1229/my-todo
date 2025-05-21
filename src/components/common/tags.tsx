"use client";

import { useState } from "react";
import Button from "./button";
import Tag from "./tag";
import TitleColorPicker from "./title-color-picker";
import { Plus } from "lucide-react";

const tagColors = ["#A8EFFF", "#FFA8EC"];

export default function Tags() {
    const [addTagOpen, setAddTagOpen] = useState(false);

    const handleOnSave = (formData: FormData) => {
        const groupName = formData.get("groupName");
        const color = formData.get("color");
        console.log("Group Name: ", groupName);
        console.log("Color: ", color);

        //TODO: Add data to database

        setAddTagOpen(false);
    };

    return (
        <div>
            <div className="mb-2 flex flex-wrap gap-1">
                {tagColors.map((color, i) => (
                    <Tag
                        key={i}
                        label={`Tag ${i + 1}`}
                        color="custom"
                        variant="contained"
                        customColor={color}
                        onDelete={() => {}}
                    />
                ))}
            </div>
            {!addTagOpen ? (
                <Button
                    variant="text"
                    color="primaryText"
                    startIcon={<Plus className="text-inherit" />}
                    fullWidth={false}
                    onClick={() => setAddTagOpen(true)}
                >
                    Add new tag
                </Button>
            ) : (
                <TitleColorPicker
                    placeholder="Enter tag name"
                    onSaveAction={handleOnSave}
                    onCancel={() => setAddTagOpen(false)}
                />
            )}
        </div>
    );
}
