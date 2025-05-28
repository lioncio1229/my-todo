export type GroupType = {
    name?: string;
    color?: string;
};

export type TodoItemType = {
    name?: string;
    checked?: boolean;
    substasks?: number;
    date?: string;
    group?: GroupType;
};
