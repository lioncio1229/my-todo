export type GroupType = {
    name?: string;
    color?: string;
};

export type ItemType = {
    id?: string;
    name?: string;
    substasks?: number;
    date?: string;
    group?: GroupType;
};

export type TodoItemType = ItemType & {
    checked?: boolean;
};

export type EventItemType = ItemType & {
    status?: "occurred" | "pending" | "running";
};
