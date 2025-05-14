import { createElement } from "react";
import clsx from "clsx";

export type TexfieldVariant = "outlined" | "standard";
export type TextfieldVariantSize = "small" | "large";

export type TextfieldProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "className"
> & {
    variant?: TexfieldVariant;
    variantSize?: TextfieldVariantSize;
    label?: string;
    error?: string;
    InputAdornmentWrapper?: React.ElementType<{ children: React.ReactNode }>;
    inputAdornment?: React.ReactNode;
    inputAdornmentPosition?: "start" | "end";
    outlineWidth?: "thick" | "thin";
};

function DefaultInputAdornmentWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-inherit z-10 flex w-12 items-center justify-center bg-white p-2 pr-3 dark:bg-black">
            {children}
        </div>
    );
}

export default function Textfield({
    variant = "standard",
    variantSize = "large",
    error,
    label,
    InputAdornmentWrapper = DefaultInputAdornmentWrapper,
    inputAdornment,
    inputAdornmentPosition = "end",
    outlineWidth = "thick",
    ...rest
}: TextfieldProps) {
    return (
        <div>
            {label && (
                <label
                    htmlFor={rest.id}
                    className={clsx(
                        "block font-medium",
                        {
                            "font-normal text-red-500": error,
                        },
                        { "text-sm": variantSize === "small" },
                        { "text-base": variantSize === "large" },
                    )}
                >
                    {label}
                </label>
            )}
            <div
                className={clsx(
                    "flex items-center overflow-hidden",
                    { "flex-row-reverse": inputAdornmentPosition === "start" },
                    {
                        "rounded-sm border-gray-200 has-[input:focus]:border-blue-300":
                            variant === "outlined",
                    },
                    {
                        "border-gray-200 has-[input:focus]:border-blue-300":
                            variant === "standard",
                    },
                    {
                        "border-2":
                            variant === "outlined" && outlineWidth === "thick",
                    },
                    {
                        "border-1":
                            variant === "outlined" && outlineWidth === "thin",
                    },
                    {
                        "border-b-2":
                            variant === "standard" && outlineWidth === "thick",
                    },
                    {
                        "border-b-1":
                            variant === "standard" && outlineWidth === "thin",
                    },
                    { "border-red-500": error },
                    {
                        "has-[input:focus]:border-red-300": error,
                    },
                    {
                        "h-8": variantSize === "small",
                    },
                    {
                        "h-12": variantSize === "large",
                    },
                )}
            >
                <input
                    {...rest}
                    className={clsx(
                        "text-primary-text w-full p-2 outline-hidden placeholder:font-light placeholder:text-gray-300",
                    )}
                />
                {InputAdornmentWrapper
                    ? createElement(InputAdornmentWrapper, null, inputAdornment)
                    : inputAdornment}
            </div>
            {error && (
                <span
                    className={clsx(
                        "block pt-1 font-light text-red-500",
                        { "text-xs": variantSize === "small" },
                        { "text-sm": variantSize === "large" },
                    )}
                >
                    {error}
                </span>
            )}
        </div>
    );
}
