import clsx from "clsx";
import { X } from "lucide-react";
import { CSSProperties } from "react";
import { TinyColor } from "@ctrl/tinycolor";

type Variant = "contained" | "outlined";
type Color =
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info"
    | "primaryText"
    | "secondaryText"
    | "custom";
type Size = "small" | "large";

type Props = {
    label?: string;
    variant?: Variant;
    color?: Color;
    customColor?: CSSProperties["color"];
    size?: Size;
    loading?: boolean;
    fullWidth?: boolean;
    icon?: React.ReactNode;
    customDeleteIcon?: React.ReactNode;
    onClick?: () => void;
    onDelete?: () => void;
};

export default function Tag({
    label,
    variant = "contained",
    color = "primaryText",
    customColor,
    size = "large",
    fullWidth = false,
    icon,
    customDeleteIcon,
    onClick,
    onDelete,
}: Props) {
    const hasOnClick = Boolean(onClick);
    const isLight = new TinyColor(customColor).isLight();

    const mapClass = {
        contained: {
            primary: "bg-primary-main text-white",
            secondary: "bg-secondary-main text-primary-text",
            success: "bg-green-600 text-white",
            error: "bg-red-500 text-white",
            warning: "bg-amber-400 text-primary-text",
            info: "bg-blue-500 text-white",
            primaryText: "bg-gray-200 text-primary-text",
            secondaryText: "bg-gray-100 text-secondary-text",
            custom: "bg-[var(--background)] text-[var(--foreground)]",
        },
        outlined: {
            primary: "border-1 border-primary-main text-primary-main",
            secondary: "border-1 border-secondary-dark text-secondary-dark",
            success: "border-1 border-green-600 text-green-600",
            error: "border-1 border-red-500 text-red-600",
            warning: "border-1 border-amber-400 text-amber-400",
            info: "border-1 border-blue-500 text-blue-500",
            primaryText: "border-1 border-gray-300 text-primary-text",
            secondaryText: "border-1 border-gray-200 text-secondary-text",
            custom: "border-1 border-[var(--background)]",
        },
    };

    const mapHasOnClickClasses = {
        contained: {
            primary: "hover:bg-primary-dark",
            secondary: "hover:bg-secondary-dark",
            success: "hover:bg-green-700",
            error: "hover:bg-red-600",
            warning: "hover:bg-amber-500",
            info: "hover:bg-blue-600",
            primaryText: "hover:bg-gray-300",
            secondaryText: "hover:bg-gray-200",
            custom: "hover:bg-[color-mix(in_oklab,var(--background),#000_10%)]",
        },
        outlined: {
            primary: "hover:bg-primary-main/10",
            secondary: "hover:bg-secondary-main/10",
            success: "hover:bg-green-600/10",
            error: "hover:bg-red-500/10",
            warning: "hover:bg-amber-400/10",
            info: "hover:bg-blue-500/10",
            primaryText: "hover:bg-gray-100",
            secondaryText: " hover:bg-gray-100",
            custom: "hover:bg-[color-mix(in_oklab,var(--background),#fff_90%)]",
        },
    };

    const mapDeleteIconClasses = {
        contained: {
            primary: "text-white hover:bg-gray-200 hover:text-primary-main",
            secondary: "hover:text-secondary-dark hover:bg-gray-200",
            success: "hover:text-green-600 hover:bg-white",
            error: "hover:text-red-500 hover:bg-white",
            warning: "hover:text-amber-500 hover:bg-white",
            info: "hover:text-blue-600 hover:bg-white",
            primaryText: "hover:bg-gray-300",
            secondaryText: "hover:bg-gray-200",
            custom: "hover:bg-white hover:text-[var(--icon-color)]",
        },
        outlined: {
            primary: "hover:bg-primary-main/10",
            secondary: "hover:bg-secondary-main/10",
            success: "hover:bg-green-600/10",
            error: "hover:bg-red-500/10",
            warning: "hover:bg-amber-400/10",
            info: "hover:bg-blue-500/10",
            primaryText: "hover:bg-gray-100",
            secondaryText: " hover:bg-gray-100",
            custom: "hover:bg-[color-mix(in_oklab,var(--background),#fff_70%)]",
        },
    };

    return (
        <div
            role="button"
            style={
                {
                    ["--background"]: customColor,
                    ["--foreground"]: isLight
                        ? "var(--color-primary-text)"
                        : "var(--color-white)",
                    ["--icon-color"]: isLight
                        ? "var(--color-primary-text)"
                        : customColor,
                } as React.CSSProperties
            }
            {...(hasOnClick && { onClick })}
            className={clsx(
                "flex min-w-max items-center justify-between gap-2 rounded transition-colors duration-500",
                mapClass[variant][color],
                { "px-[5px] py-[3px] text-xs": size === "small" },
                { "px-[6px] py-1 text-sm": size === "large" },
                {
                    [`cursor-pointer ${mapHasOnClickClasses[variant][color]}`]:
                        hasOnClick,
                },
                { "w-full": fullWidth },
            )}
        >
            {icon}
            {label}
            {onDelete && (
                <div
                    className={clsx(
                        "cursor-pointer rounded-full text-inherit",
                        { "p-[2px]": size === "small" },
                        { "p-[3px]": size === "large" },
                        mapDeleteIconClasses[variant][color],
                    )}
                    onClick={onDelete}
                >
                    {customDeleteIcon ? (
                        customDeleteIcon
                    ) : (
                        <X className="size-4 text-inherit" />
                    )}
                </div>
            )}
        </div>
    );
}
