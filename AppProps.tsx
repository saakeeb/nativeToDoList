export type InputProps = {
    placeHolder: string;
    value: string;
    onInputChange: (e: any) => void;
}

export type TasksProps = {
    text: string;
    onComplete: (e: string) => void;
    onDelete: (e: string) => void;
    id: string;
    complete: boolean;
}

export type ButtonProps = {
    text: string;
    colorScheme: string;
    onAddTask: () => void;
}

export type taskItemsProps = {
    name: string;
    complete: boolean;
    id: string
}