import clsx from "clsx";

type Variant = "contained" | "outlined" | "text";
type Color =
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info"
    | "primaryText"
    | "secondaryText";
type Size = "small" | "medium" | "large";

type Props = Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "className"
> & {
    variant?: Variant;
    color?: Color;
    size?: Size;
    loading?: boolean;
    fullWidth?: boolean;
};

export default function Button({
    variant = "contained",
    color = "primary",
    size = "medium",
    disabled,
    loading,
    fullWidth = true,
    onClick,
    children,
    ...rest
}: Props) {
    const baseClasses =
        "cursor-pointer rounded p-2 transition-colors duration-500";

    const mapClass = {
        contained: {
            primary: "bg-primary-main hover:bg-primary-dark text-white",
            secondary:
                "bg-secondary-main hover:bg-secondary-dark text-primary-text",
            success: "bg-green-600 hover:bg-green-700 text-white",
            error: "bg-red-500 hover:bg-red-600 text-white",
            warning: "bg-amber-400 hover:bg-amber-500 text-primary-text",
            info: "bg-blue-500 hover:bg-blue-600 text-white",
            primaryText: "bg-gray-200 hover:bg-gray-300 text-primary-text",
            secondaryText: "bg-gray-100 hover:bg-gray-200 text-secondary-text",
        },
        outlined: {
            primary: "border-1 border-primary-main text-primary-main",
            secondary: "border-1 border-secondary-main text-secondary-main",
            success: "border-1 border-green-600 text-green-600",
            error: "border-1 border-red-500 text-red-600",
            warning: "border-1 border-amber-400 text-amber-400",
            info: "border-1 border-blue-500 text-blue-500",
            primaryText: "border-1 border-gray-200 text-primary-text",
            secondaryText: "border-1 border-gray-100 text-secondary-text",
        },
        text: {
            primary: "text-primary-main",
            secondary: "text-secondary-main",
            success: "text-green-600",
            error: "text-red-500",
            warning: "text-amber-400",
            info: "text-blue-500",
            primaryText: "text-primary-text",
            secondaryText: "text-secondary-text",
        },
    };

    const sizeClasses = {
        small: "px-2 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
    };

    return (
        <button
            {...rest}
            className={clsx(
                baseClasses,
                mapClass[variant][color],
                sizeClasses[size],
                { "w-full": fullWidth },
            )}
            disabled={disabled || loading}
            onClick={onClick}
        >
            {loading ? <span>Loading...</span> : children}
        </button>
    );
}
