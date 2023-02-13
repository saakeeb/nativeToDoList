import React from 'react';
import { Input } from "native-base";
import { InputProps } from '../../AppProps';

const InputField = ({ placeHolder, value, onInputChange }: InputProps) => {
    return (
        <Input
            bg='#fff'
            borderWidth='md'
            borderColor='c0c0c0'
            variant="rounded"
            placeholder={placeHolder}
            h='40px'
            value={value}
            onChangeText={onInputChange}
            // w="100%"
        />
    );
};

export default InputField;