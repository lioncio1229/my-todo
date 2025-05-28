import Image from "next/image";
import TodaysTaskCardAnalytics from "./components/todays-task-card-analytics";
import OverdueTaskCard from "./components/overdue-task-card";
import SectionCard from "./components/section-card";
import Innercard from "./components/inner-card";
import TodoItem from "@/components/shared/todo-item";
import TodoList from "@/components/shared/todo-list";

export default function Page() {
    return (
        <>
            <div className="flex items-center gap-3 py-2 font-bold">
                <h2>Upcoming</h2>
                <div className="flex items-center">
                    <h2 className="rounded-sm border-1 border-gray-200 px-2 py-1">
                        12
                    </h2>
                    <Image
                        src="/calendar.svg"
                        alt="Calendar"
                        width={50}
                        height={50}
                    />
                </div>
            </div>
            <div className="flex gap-4">
                <div>
                    <TodaysTaskCardAnalytics />
                </div>
                <div className="basis-100">
                    <OverdueTaskCard />
                </div>
            </div>
            <SectionCard title={<h3 className="font-medium">Today</h3>}>
                <div className="flex gap-4">
                    <div className="grow">
                        <Innercard title="Task">
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
                </div>
            </SectionCard>
        </>
    );
}
