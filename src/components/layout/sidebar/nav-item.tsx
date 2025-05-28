import clsx from "clsx";
import Link from "next/link";

export type NavItemProps = {
    href: string;
    icon?: React.ReactNode;
    label: string;
    count?: number;
    active?: boolean;
};

export default function NavItem({
    href,
    icon,
    label,
    count,
    active = false,
}: NavItemProps) {
    return (
        <li>
            <Link
                href={href}
                className={clsx(
                    "flex items-center justify-between gap-2 rounded-sm p-2 text-gray-900 hover:bg-gray-100",
                    {
                        "bg-gray-200 font-semibold hover:bg-gray-200": active,
                    },
                )}
            >
                <div
                    className={clsx("flex items-center gap-2", {
                        "[&_svg]:text-primary-text": active,
                    })}
                >
                    {icon}
                    <span>{label}</span>
                </div>
                {count && (
                    <div
                        className={clsx(
                            "rounded-sm bg-gray-300 px-3 py-[2px] text-xs font-semibold",
                            {
                                "bg-white": active,
                            },
                        )}
                    >
                        {count}
                    </div>
                )}
            </Link>
        </li>
    );
}
