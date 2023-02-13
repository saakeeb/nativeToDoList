import React from 'react';
import { Button } from "native-base";
import { ButtonProps } from '../../AppProps';

const ButtonField = ({ text, colorScheme = 'primary', onAddTask }: ButtonProps) => {
    return (
        <Button
            variant="ghost"
            colorScheme={colorScheme}
            bg="#fff"
            borderRadius="50%"
            h='40px'
            w="40px"
            onPress={() => onAddTask()}
        >
            {text}
        </Button>
    );
};

export default ButtonField;