"use client";

import { useState, useLayoutEffect } from "react";
import TodoItem from "./todo-item";
import type { TodoItemType } from "@/types";
import Button from "../ui/button";
import { SquareArrowDown } from "lucide-react";

type Props = {
    list?: TodoItemType[];
};

export default function TodoList({ list = [] }: Props) {
    const [showAllVisible, setShowAllVisible] = useState(false);

    useLayoutEffect(() => {}, []);

    return (
        <div className="relative">
            <div className="[&>div]:not-first:pt-3 [&>div]:not-last:border-b-1 [&>div]:not-last:border-b-gray-200 [&>div]:not-last:pb-3">
                {list.map((item) => (
                    <TodoItem key={item.name} {...item} />
                ))}
            </div>
            <div className="absolute bottom-0 left-0 flex w-full items-center justify-center bg-[linear-gradient(to_top,var(--color-white)_30%,rgba(255,255,255,0.5)_80%,rgba(255,255,255,0))] py-4">
                <Button
                    variant="text"
                    color="secondaryText"
                    size="small"
                    fullWidth={false}
                    startIcon={<SquareArrowDown size={16} />}
                >
                    Show all
                </Button>
            </div>
        </div>
    );
}
