import React, { useState } from "react";
import { NativeBaseProvider, Box, Heading, View, HStack, ScrollView } from "native-base";
import Tasks from "./Components/Tasks/Tasks";
import InputField from "./Components/Input/InputField";
import ButtonField from "./Components/Button/ButtonField";
import { v4 as uuidv4 } from 'uuid';
import { taskItemsProps } from "./AppProps";

export default function App () {
  const [task, setTask] = useState<string>('');
  const [taskItems, setTaskItems] = useState<taskItemsProps[]>([]);

  const handleInputChange = (text: string):void => {
    setTask(text);
  }

  const handleAddTask = ():void => {
    // setTaskItems([...taskItems, task]);
    setTaskItems([...taskItems, { name: task, complete: false, id: uuidv4() }]);
    setTask('');
    // Keyboard.dismiss();
  }

  const handleDelete = (index: string):void => {
    let completeTask = [...taskItems];
    let indexNum = completeTask.findIndex(task => task.id === index);
    completeTask.splice(indexNum, 1);
    setTaskItems(completeTask);
  }

  const handleComplete = (index: string): void => {
    let updatedTaskItems = [...taskItems];
    const indexNum = updatedTaskItems.findIndex(task=> task.id === index);
    updatedTaskItems[indexNum].complete = !updatedTaskItems[indexNum].complete;
    setTaskItems(updatedTaskItems);
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
              taskItems.map((text) => {
                return (
                  <Tasks
                    key={text.id}
                    text={text.name}
                    onComplete={handleComplete}
                    id={text.id}
                    onDelete={handleDelete}
                    complete={text.complete}
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