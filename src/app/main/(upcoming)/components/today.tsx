import TodoList from "@/components/shared/todo-list";
import EventList from "@/components/shared/event-list";
import SectionCard from "./shared/section-card";
import Innercard from "./shared/inner-card";

export default function Today() {
    return (
        <SectionCard title="Today">
            <div className="flex gap-4">
                <div className="grow">
                    <Innercard title="Tasks">
                        <TodoList
                            list={[
                                {
                                    name: "Creating something that is todo",
                                    date: "All day",
                                    substasks: 5,
                                    group: {
                                        name: "Work",
                                        color: "#02b6f9",
                                    },
                                    checked: true,
                                },
                                {
                                    name: "Creating something that is todo",
                                    date: "All day",
                                    substasks: 5,
                                    group: {
                                        name: "Work",
                                        color: "#02b6f9",
                                    },
                                },
                                {
                                    name: "Creating something that is todo",
                                    date: "All day",
                                    substasks: 5,
                                    group: {
                                        name: "Work",
                                        color: "#02b6f9",
                                    },
                                },
                            ]}
                        />
                    </Innercard>
                </div>
                <div className="grow">
                    <Innercard title="Events">
                        <EventList
                            list={[
                                {
                                    name: "Creating something that is todo",
                                    date: "12pm to 1:30",
                                    substasks: 5,
                                    group: {
                                        name: "Work",
                                        color: "#02b6f9",
                                    },
                                    status: "occurred",
                                },
                                {
                                    name: "Creating something that is todo",
                                    date: "3pm to 7pm - Now",
                                    substasks: 5,
                                    group: {
                                        name: "Work",
                                        color: "#ffbb00",
                                    },
                                    status: "running",
                                },
                                {
                                    name: "Creating something that is todo",
                                    date: "7pm to 8pm",
                                    substasks: 5,
                                    group: {
                                        name: "Work",
                                        color: "#02b6f9",
                                    },
                                },
                            ]}
                        />
                    </Innercard>
                </div>
            </div>
        </SectionCard>
    );
}
