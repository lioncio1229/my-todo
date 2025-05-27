import clsx from "clsx";
import Paper, { Elevation } from "./paper";

type CardProps = {
    title?: React.ReactNode;
    titleIcon?: React.ReactElement;
    headerAction?: React.ReactNode;
    headerPadding?: number | string;
    footer?: React.ReactElement;
    footerPadding?: number | string;
    headerBorder?: boolean;
    footerBorder?: boolean;
    cardPadding?: number | string;
    childrenPadding?: number | string;
    elevation?: Elevation;
    children?: React.ReactNode;
};

export default function Card({
    title,
    titleIcon,
    headerAction,
    headerPadding = 4,
    headerBorder = true,
    footer,
    footerPadding = 4,
    footerBorder = true,
    cardPadding = 0,
    childrenPadding = 4,
    elevation,
    children,
}: CardProps) {
    return (
        <Paper elevation={elevation}>
            <div style={{ padding: cardPadding }}>
                {(title || headerAction) && (
                    <div
                        style={{ padding: headerPadding }}
                        className={clsx("flex items-center", {
                            "border-b-1 border-gray-200": headerBorder,
                        })}
                    >
                        <div className="flex grow items-center gap-1">
                            {titleIcon}
                            {typeof title === "string" ? (
                                <h4 className="font-medium">{title}</h4>
                            ) : (
                                title
                            )}
                        </div>
                        {headerAction}
                    </div>
                )}
                <div style={{ padding: childrenPadding }}>{children}</div>
                {footer && (
                    <div
                        style={{ padding: footerPadding }}
                        className={clsx({
                            "border-1 border-gray-200": footerBorder,
                        })}
                    >
                        {footer}
                    </div>
                )}
            </div>
        </Paper>
    );
}
