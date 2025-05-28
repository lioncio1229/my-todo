"use client";

import clsx from "clsx";
import { Clock, ChevronRight } from "lucide-react";
import type { EventItemType } from "@/types";

type Props = EventItemType & {
    onClick?: (id?: string) => void;
};

export default function EventItem({
    id,
    name,
    substasks = 10,
    date = "All day",
    group,
    status = "pending",
    onClick,
}: Props) {
    return (
        <div
            className={clsx(
                "group flex grow cursor-pointer items-center justify-between gap-3",
                { "opacity-50": status === "occurred" },
            )}
            onClick={() => onClick?.(id)}
        >
            <div className="space-y-2">
                <div>{name}</div>
                <div className="flex [&_>div]:pr-2 [&_>div]:not-first:pl-2 [&_>div]:not-last:border-r-1 [&_>div]:not-last:border-gray-200">
                    <div
                        className={clsx(
                            "flex items-center gap-2",
                            {
                                "font-medium text-green-600":
                                    status === "running",
                            },
                            {
                                "text-secondary-text font-normal":
                                    status === "pending",
                            },
                        )}
                    >
                        <Clock size={16} />
                        <span className="text-sm text-inherit">{date}</span>
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
    );
}
