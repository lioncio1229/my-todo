import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { Plus } from "lucide-react";

type Props = {
    title?: React.ReactNode;
    children?: React.ReactNode;
};

export default function Innercard({ title, children }: Props) {
    return (
        <Card
            title={title}
            headerPadding="12px"
            childrenPadding="12px"
            headerBorder={false}
            headerAction={
                <Button
                    variant="text"
                    color="secondaryText"
                    size="small"
                    fullWidth={false}
                    startIcon={<Plus size={16} />}
                >
                    Add new task
                </Button>
            }
        >
            {children}
        </Card>
    );
}
