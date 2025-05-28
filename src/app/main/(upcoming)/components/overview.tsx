import TodaysTaskCardAnalytics from "./shared/todays-task-card-analytics";
import OverdueTaskCard from "./shared/overdue-task-card";

export default function Overview() {
    return (
        <div className="flex gap-4">
            <div>
                <TodaysTaskCardAnalytics />
            </div>
            <div className="basis-100">
                <OverdueTaskCard />
            </div>
        </div>
    );
}
