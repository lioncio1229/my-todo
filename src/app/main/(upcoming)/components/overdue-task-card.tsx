import Paper from "@/components/ui/paper";
import Button from "@/components/ui/button";
import { View } from "lucide-react";

type Props = {
    overdue?: number;
};

export default function OverdueTaskCard({ overdue = 20 }: Props) {
    return (
        <Paper className="flex h-full w-full flex-col items-center justify-between space-y-2 p-3">
            <h3 className="font-medium">Overdue Tasks</h3>
            <h2 className="font-semibold text-red-600">{overdue}</h2>
            <Button
                variant="text"
                color="secondaryText"
                size="small"
                startIcon={<View size={16} />}
                fullWidth={false}
            >
                Show overdues
            </Button>
        </Paper>
    );
}
