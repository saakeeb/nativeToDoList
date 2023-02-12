import React, { useState } from "react";
import { NativeBaseProvider, Box, Heading, View, HStack } from "native-base";
import Tasks from "./Components/Tasks";
import InputField from "./Components/Input/InputField";
import ButtonField from "./Components/Button/ButtonField";

export default function App() {
  const [task, setTask] = useState<string>('');
  const [taskItems, setTaskItems] = useState<string[]>([]);

  const handleChange = (text: string) => {
    setTask(text);
    console.log(text);
  }

  const handleClick = () => {
    setTaskItems([...taskItems, task]);
    console.log('click');
    setTask('');
    // Keyboard.dismiss();
  }

  return (
    <NativeBaseProvider>
      <View bg="#e8eaed" h='100vh' px="4" position='relative'>
        <Box>
          <Heading py='2' size="md">Today's Tasks</Heading>
        </Box>
        <Box marginTop="12px">
          <Tasks text='Task 1' />
          <Tasks text='Task 2' />
          {
            taskItems.map((task, index) => {
              return (
                <Tasks key={index} text={task} />
              )
            })
          }
        </Box>
        <Box position='absolute' bottom="20px" left="20px" right='20px'>
          <View>
            <HStack justifyContent='space-around' alignItems="center" w="100%">
              <View w='75%'>
                <InputField placeHolder="Write a Task" value={task} onChange={handleChange}/>
              </View>
              <View>
                <ButtonField
                  text="+"
                  colorScheme='primary'
                  onClick={handleClick}
                />
              </View>
            </HStack>
          </View>
        </Box>
      </View>
    </NativeBaseProvider>
  );
}