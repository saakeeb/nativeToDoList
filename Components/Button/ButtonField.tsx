import React from 'react';
import { Button } from "native-base";

type ButtonProps = {
    text: string;
    colorScheme: string;
    onClick: () => void;
}

const ButtonField = ({ text, colorScheme = 'primary', onClick }: ButtonProps) => {
    return (
        <Button
            variant="ghost"
            colorScheme={colorScheme}
            bg="#fff"
            borderRadius="50%"
            h='40px'
            w="40px"
            onPress={() => onClick()}
        >
            {text}
        </Button>
    );
};

export default ButtonField;