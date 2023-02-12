import React from "react";
import { Text, View, HStack } from "native-base";

type TasksProps = {
    text: string;
}

const Tasks = ({ text }: TasksProps) => {
    return (
        <View bg='white' borderRadius='5px' px='10px' py="8px" marginBottom="12px">
            <HStack justifyContent='space-between' alignItems="center">
                <View>
                    <HStack justifyContent='center' alignItems="center">
                        <View w="20px" h="20px" bg="#55bcf6" borderRadius="5px" marginRight='10px'></View>
                        <Text>{text}</Text>
                    </HStack >
                </View>
                <View>
                    <View w="12px" h="12px" borderRadius="50%" borderWidth="3px" borderColor='#55bcf6'></View>
                </View>
            </HStack>
        </View>
    );
};

export default Tasks;
