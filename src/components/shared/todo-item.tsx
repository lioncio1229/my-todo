"use client";

import clsx from "clsx";
import { Clock, ChevronRight } from "lucide-react";
import type { TodoItemType } from "@/types";

type Props = TodoItemType & {
    onClick?: (id?: string) => void;
    onChange?: (checked: boolean) => void;
};

export default function TodoItem({
    id,
    name,
    checked,
    substasks = 10,
    date = "All day",
    group,
    onClick,
    onChange,
}: Props) {
    return (
        <div className="flex gap-3">
            <input
                id="remember-me"
                type="checkbox"
                className="checkbox-green-600"
                checked={checked}
                onChange={(e) => onChange?.(e.target.checked)}
            />
            <div
                className="group flex grow cursor-pointer items-center justify-between gap-3"
                onClick={() => onClick?.(id)}
            >
                <div className="space-y-2">
                    <div
                        className={clsx({
                            "font-normal text-gray-400 line-through": checked,
                        })}
                    >
                        {name}
                    </div>
                    <div className="flex [&_>div]:pr-2 [&_>div]:not-first:pl-2 [&_>div]:not-last:border-r-1 [&_>div]:not-last:border-gray-200">
                        <div className="text-secondary-text flex items-center gap-2">
                            <Clock size={16} />
                            <span className="text-secondary-text text-sm">
                                {date}
                            </span>
                        </div>
                        <div className="text-secondary-text flex items-center gap-2">
                            <div
                                className={
                                    "rounded-sm bg-gray-300 px-3 py-[2px] text-xs font-semibold"
                                }
                            >
                                {substasks}
                            </div>
                            <span className="text-secondary-text text-sm">
                                Substasks
                            </span>
                        </div>
                        <div className="text-secondary-text flex items-center gap-2">
                            <div
                                style={{ backgroundColor: group?.color }}
                                className="size-[20px] rounded-sm"
                            ></div>
                            <span className="text-secondary-text text-sm">
                                {group?.name}
                            </span>
                        </div>
                    </div>
                </div>
                <div
                    role="button"
                    className="h-max w-max transition-transform duration-100 group-hover:translate-x-[2px]"
                >
                    <ChevronRight className="size-8 text-gray-400" />
                </div>
            </div>
        </div>
    );
}
