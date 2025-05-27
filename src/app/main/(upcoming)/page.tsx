import Image from "next/image";
import TodaysTaskCardAnalytics from "./components/todays-task-card-analytics";

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
            <div className="flex">
                <TodaysTaskCardAnalytics />
            </div>
        </>
    );
}
