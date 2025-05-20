import clsx from "clsx";
import { MouseEventHandler } from "react";

type Size = "small" | "large";

type Props = {
    size?: Size;
    children: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function IconButton({
    size = "large",
    children,
    onClick,
}: Props) {
    return (
        <button
            type="button"
            className={clsx(
                "h-max w-max cursor-pointer rounded-full hover:bg-gray-100",
                { "p-2": size === "large" },
                { "p-1": size === "small" },
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
