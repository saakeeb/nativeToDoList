import React from 'react';
import { Input } from "native-base";
// import { InputProps } from '../../AppProps';

type InputProps = {
    placeHolder: string;
    value: string;
    onChange: (e: any) => void;
}

const InputField = ({ placeHolder, value, onChange }: InputProps) => {
    return (
        <Input
            bg='#fff'
            borderWidth='md'
            borderColor='c0c0c0'
            variant="rounded"
            placeholder={placeHolder}
            h='40px'
            value={value}
            onChangeText={onChange}
            // w="100%"
        />
    );
};

export default InputField;