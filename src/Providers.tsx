import type { FC, PropsWithChildren } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { configureStore } from '@reduxjs/toolkit';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { counterSlice } from 'stores/counter';

const store = configureStore({ reducer: counterSlice.reducer });

const Providers: FC<PropsWithChildren> = ({ children }) => (
  <HelmetProvider>
    <ChakraProvider>
      <Router>
        <ReduxProvider store={store}>{children}</ReduxProvider>
      </Router>
    </ChakraProvider>
  </HelmetProvider>
);

export default Providers;
