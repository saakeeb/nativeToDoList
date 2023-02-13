export type InputProps = {
    placeHolder: string;
    value: string;
    onInputChange: (e: any) => void;
}

export type TasksProps = {
    text: string;
    onComplete: () => void;
    onDelete: (e: number) => void;
    index: number;
    complete: boolean;
}

export type ButtonProps = {
    text: string;
    colorScheme: string;
    onAddTask: () => void;
}