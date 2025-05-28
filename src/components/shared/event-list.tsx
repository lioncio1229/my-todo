import EventItem from "./event-item";
import type { EventItemType } from "@/types";

type Props = {
    list?: EventItemType[];
};

export default function EventList({ list = [] }: Props) {
    return (
        <div className="[&>div]:not-first:pt-3 [&>div]:not-last:border-b-1 [&>div]:not-last:border-b-gray-200 [&>div]:not-last:pb-3">
            {list.map((item) => (
                <EventItem key={item.name} {...item} />
            ))}
        </div>
    );
}
