import React from "react";
import { Text, View, HStack, Box, Card, Pressable } from "native-base";
import { TasksProps } from "../../AppProps";

const Tasks = ({ text, id, onDelete, complete, onComplete }: TasksProps) => {
    return (
        <Card bg='white' px='10px' py="8px" marginBottom="12px">
            <HStack justifyContent='space-between' alignItems="center">
                <View>
                        {
                            complete ?
                                (
                                    <HStack justifyContent='center' alignItems="center">
                                    <Pressable onPress={() => onComplete(id)}>
                                            {({
                                                isHovered,
                                                isFocused,
                                                isPressed
                                            }) => {
                                                return <Box marginRight='12px' h="20px" w="20px" bg="#ec76aa" borderColor={isPressed ? "#ec76aa" : isHovered ? '#ec76aa' : '#55bcf6'} style={{
                                                    transform: [{
                                                        scale: isPressed ? 0.9 : 1.1
                                                    }]
                                                }} rounded="4" shadow={4}>
                                                </Box>;
                                            }}
                                        </Pressable>
                                        <Text strikeThrough>{text}</Text>
                                    </HStack>
                                )
                                :
                                (
                                    <HStack justifyContent='center' alignItems="center">
                                    <Pressable onPress={() => onComplete(id)}>
                                            {({
                                                isHovered,
                                                isFocused,
                                                isPressed
                                            }) => {
                                            return <Box marginRight='12px' h="20px" w="20px" bg='#55bcf6' borderColor={isPressed ? "#ec76aa" : isHovered ? '#ec76aa' : '#55bcf6'} style={{
                                                    transform: [{
                                                        scale: isPressed ? 0.9 : 1.1
                                                    }]
                                                }} rounded="4" shadow={4}>
                                                </Box>;
                                            }}
                                        </Pressable>
                                        <Text>{text}</Text>
                                    </HStack>
                                )
                        }
                </View>
                <View>
                    <Pressable onPress={() => onDelete(id)}>
                        {({
                            isHovered,
                            isFocused,
                            isPressed
                        }) => {
                            return <Box h="16px" w="16px" bg={isPressed ? "#ec76aa" : ''} borderColor={isPressed ? "#ec76aa" : isHovered ? 'red' : '#55bcf6'} style={{
                                transform: [{
                                    scale: isPressed ? 0.9 : 1.1
                                }]
                            }} rounded="50" shadow={3} borderWidth="3">
                            </Box>;
                        }}
                    </Pressable>
                </View>
            </HStack>
        </Card>
    );
};

export default Tasks;
