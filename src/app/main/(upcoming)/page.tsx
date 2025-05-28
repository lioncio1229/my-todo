import Image from "next/image";
import TodaysTaskCardAnalytics from "./components/todays-task-card-analytics";
import OverdueTaskCard from "./components/overdue-task-card";
import SectionCard from "./components/section-card";
import Innercard from "./components/inner-card";
import TodoList from "@/components/shared/todo-list";
import EventList from "@/components/shared/event-list";

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
        </>
    );
}
