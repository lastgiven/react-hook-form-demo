import { createContext } from 'react';

const APP_CONTEXT = createContext();
const AppContextProvider = APP_CONTEXT.Provider;
const AppContextConsumer = APP_CONTEXT.Consumer;

export { AppContextProvider, AppContextConsumer, APP_CONTEXT };