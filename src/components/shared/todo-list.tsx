import TodoItem from "./todo-item";
import type { TodoItemType } from "@/types";

type Props = {
    list?: TodoItemType[];
};

export default function TodoList({ list = [] }: Props) {
    return (
        <div className="[&>div]:not-first:pt-3 [&>div]:not-last:border-b-1 [&>div]:not-last:border-b-gray-200 [&>div]:not-last:pb-3">
            {list.map((item) => (
                <TodoItem key={item.name} {...item} />
            ))}
        </div>
    );
}
