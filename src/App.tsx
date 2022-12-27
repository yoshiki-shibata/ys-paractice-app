import React from 'react';
import {  Button, ChakraProvider } from '@chakra-ui/react'

import theme from "./theme/theme"
import { MainRouter } from "./router/Router"

export default function App() {
  return (
    <ChakraProvider theme={theme}>
        <MainRouter/>
    </ChakraProvider>
  );
} 