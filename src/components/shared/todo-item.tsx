import type { Group } from "@/types";
import { Clock } from "lucide-react";

type Props = {
    name?: string;
    checked?: boolean;
    date?: string;
    group?: Group;
};

function TodoMetaData({
    icon,
    name,
}: {
    icon: React.HTMLElementType;
    name: string;
}) {}

export default function TodoItem({ name, checked, date, group }: Props) {
    return (
        <div className="flex gap-2">
            <input
                id="remember-me"
                type="checkbox"
                className="checkbox-primary-main"
            />
            <div>
                <div>{name}</div>
                <div className="flex [&_>div]:not-last:border-r-1 [&_>div]:not-last:border-gray-200">
                    <div className="text-secondary-text flex items-center gap-1 px-4">
                        <Clock size={16} />
                        <span className="text-secondary-text text-sm">
                            All day
                        </span>
                    </div>
                    <div className="text-secondary-text flex items-center gap-1 px-4">
                        <Clock size={16} />
                        <span className="text-secondary-text text-sm">
                            All day
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
