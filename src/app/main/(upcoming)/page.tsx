import TodoItem from "@/components/shared/todo-item";

export default function Page() {
    return (
        <div className="pl-4">
            <h1>Upcoming</h1>
            <TodoItem
                name="Creating something that is todo"
                group={{ name: "Work", color: "#00b7fd" }}
            />
        </div>
    );
}
