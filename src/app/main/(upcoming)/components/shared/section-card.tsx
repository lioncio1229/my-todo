import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

type Props = {
    title?: string;
    childrenPadding?: string;
    children?: React.ReactNode;
};

export default function SectionCard({
    title,
    childrenPadding = "0 12px 12px 12px",
    children,
}: Props) {
    return (
        <Card
            title={<h2 className="font-bold">{title}</h2>}
            headerPadding="12px"
            childrenPadding={childrenPadding}
            headerBorder={false}
            headerAction={
                <Button
                    variant="text"
                    color="secondary"
                    fullWidth={false}
                    startIcon={<CalendarDays size={20} />}
                >
                    View on calendar
                </Button>
            }
        >
            {children}
        </Card>
    );
}
