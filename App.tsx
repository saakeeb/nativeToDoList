import React from "react";
import { NativeBaseProvider, Box, Heading, View } from "native-base";
import Tasks from "./Components/Tasks";

export default function App() {
  return (
    <NativeBaseProvider>
      <View bg="#e8eaed" h='100vh' px="4">
        <Box>
          <Heading py='2' size="md">Today's Tasks</Heading>
        </Box>
        <Box marginTop="12px">
          <Tasks text='Task 1' />
          <Tasks text='Task 2' />
        </Box>
      </View>
    </NativeBaseProvider>
  );
}