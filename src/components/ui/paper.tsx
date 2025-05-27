import clsx from "clsx";

export type Elevation = 0 | 1 | 2 | 3 | 4 | 5;

type Props = {
    children?: React.ReactNode;
    elevation?: Elevation;
    className?: string;
};

export default function Paper({ elevation = 0, className, children }: Props) {
    const elevationClasses = {
        0: "shadow-none",
        1: "shadow-xs",
        2: "shadow-sm",
        3: "shadow-md",
        4: "shadow-lg",
        5: "shadow-2xl",
    };

    return (
        <div
            className={clsx(
                "rounded-sm border-1 border-gray-200 bg-white shadow-lg",
                elevationClasses[elevation],
                className,
            )}
        >
            {children}
        </div>
    );
}
