export type InputProps = {
    placeHolder: string;
    value: string;
    task: string | undefined;
    onChange: (e: string) => void;
}