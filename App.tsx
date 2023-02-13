import React, { useState } from "react";
import { NativeBaseProvider, Box, Heading, View, HStack, ScrollView } from "native-base";
import Tasks from "./Components/Tasks/Tasks";
import InputField from "./Components/Input/InputField";
import ButtonField from "./Components/Button/ButtonField";

export default function App() {
  const [task, setTask] = useState<string>('');
  const [complete, setComplete] = useState<boolean>(false);
  const [taskItems, setTaskItems] = useState<string[]>([]);

  const handleInputChange = (text: string):void => {
    setTask(text);
  }

  const handleAddTask = ():void => {
    setTaskItems([...taskItems, task]);
    setTask('');
    // Keyboard.dismiss();
  }

  const handleDelete = (index: number):void => {
    let completeTask = [...taskItems];
    completeTask.splice(index, 1);
    setTaskItems(completeTask);
  }

  const HandleComplete = (): void => {
    complete ? setComplete(false) : setComplete(true);
  }

  return (
    <NativeBaseProvider>
      <View bg="#e8eaed" h='100vh' px="4" position='relative'>
        <Box>
          <Heading py='2' size="md">Today's Tasks</Heading>
        </Box>
        <Box marginTop="12px" maxH='360px' h="100%">
          <ScrollView>
            {/* <Tasks text='Task 1' onClick={handleDelete} key={100} index={100} />
            <Tasks text='Task 2' onClick={handleDelete} key={200} index={200} /> */}
            {
              taskItems.map((task, index) => {
                return (
                  <Tasks
                    key={index}
                    text={task}
                    onComplete={HandleComplete}
                    index={index}
                    onDelete={handleDelete}
                    complete={complete}
                  />
                )
              })
            }
          </ScrollView>
        </Box>
        <Box position='fixed' bottom="20px" left="20px" right='20px'>
          <View>
            <HStack justifyContent='space-around' alignItems="center" w="100%">
              <View w='75%'>
                <InputField placeHolder="Write a Task" value={task} onInputChange={handleInputChange} />
              </View>
              <View>
                <ButtonField
                  text="+"
                  colorScheme='primary'
                  onAddTask={handleAddTask}
                />
              </View>
            </HStack>
          </View>
        </Box>
      </View>
    </NativeBaseProvider>
  );
}