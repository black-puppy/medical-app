'use client'

import React, { ReactNode } from "react";
import { store } from "../../redux/store";
import { Provider } from "react-redux";

interface ReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
