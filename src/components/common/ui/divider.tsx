import clsx from "clsx";

export type DividerProps = {
    orientation?: "horizontal" | "vertical";
};

export default function Divider({ orientation = "horizontal" }: DividerProps) {
    return (
        <div
            className={clsx("shrink-0 bg-gray-200", {
                "h-[1px] w-full": orientation === "horizontal",
                "h-full w-[1px]": orientation === "vertical",
            })}
        />
    );
}
