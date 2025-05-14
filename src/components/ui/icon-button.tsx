import { MouseEventHandler } from "react";

export default function IconButton({
    children,
    onClick,
}: {
    children: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
    return (
        <button
            type="button"
            className="h-max w-max cursor-pointer rounded-full p-2 hover:bg-gray-100"
            onClick={onClick}
        >
            {children}
        </button>
    );
}
