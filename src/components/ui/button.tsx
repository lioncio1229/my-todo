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
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
};

export default function Button({
    variant = "contained",
    color = "primary",
    size = "medium",
    disabled,
    loading,
    fullWidth = true,
    onClick,
    startIcon,
    endIcon,
    children,
    ...rest
}: Props) {
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
            primary:
                "border-1 border-primary-main text-primary-main hover:bg-primary-main/10",
            secondary:
                "border-1 border-secondary-main text-secondary-main hover:bg-secondary-main/10",
            success:
                "border-1 border-green-600 text-green-600 hover:bg-green-600/10",
            error: "border-1 border-red-500 text-red-600 hover:bg-red-500/10",
            warning:
                "border-1 border-amber-400 text-amber-400 hover:bg-amber-400/10",
            info: "border-1 border-blue-500 text-blue-500 hover:bg-blue-500/10",
            primaryText:
                "border-1 border-gray-300 text-primary-text hover:bg-gray-100",
            secondaryText:
                "border-1 border-gray-200 text-secondary-text hover:bg-gray-100",
        },
        text: {
            primary: "text-primary-main hover:bg-primary-main/5",
            secondary: "text-secondary-main hover:bg-secondary-main/5",
            success: "text-green-600 hover:bg-green-600/5",
            error: "text-red-500 hover:bg-red-500/5",
            warning: "text-amber-400 hover:bg-amber-400/5",
            info: "text-blue-500 hover:bg-blue-500/5",
            primaryText: "text-primary-text hover:bg-gray-100",
            secondaryText: "text-secondary-text hover:bg-gray-50",
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
                "flex cursor-pointer items-center justify-center gap-2 rounded p-2 transition-colors duration-500",
                mapClass[variant][color],
                sizeClasses[size],
                { "w-full": fullWidth },
            )}
            disabled={disabled || loading}
            onClick={onClick}
        >
            {startIcon}
            {children}
            {endIcon}
        </button>
    );
}
