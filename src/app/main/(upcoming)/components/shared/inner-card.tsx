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
            title={<h3 className="font-medium">{title}</h3>}
            headerPadding="12px"
            childrenPadding="12px"
            headerBorder={false}
            headerAction={
                <Button
                    variant="text"
                    color="secondaryText"
                    fullWidth={false}
                    startIcon={<Plus />}
                >
                    Add new task
                </Button>
            }
        >
            {children}
        </Card>
    );
}
