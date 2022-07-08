import React, { createContext, useReducer } from "react";

type Actions =
  | { type: "set_name"; payload: string }
  | { type: "set_fav_number"; payload: string }
  | { type: "set_open"; payload: boolean }
  | { type: "set_screen"; payload: number }
  | { type: "set_name_screen_next_disabled"; payload: boolean };

interface State {
  name: string;
  favNumber: string;
  open: boolean;
  screen: number;
  nameScreenNextDisabled: boolean;
}

interface IContext {
  state: State;
  setName: (name: string) => void;
  setFavNumber: (number: string) => void;
  setOpen: (isOpen: boolean) => void;
  setScreen: (screen: number) => void;
  setNameScreenNextDisabled: (nameScreenNextDisabled: boolean) => void;
}

export const Context = createContext<IContext | null>(null);

const reducer = (state: State, { type, payload }: Actions) => {
  switch (type) {
    case "set_name":
      return { ...state, name: payload };
    case "set_fav_number":
      return { ...state, favNumber: payload };
    case "set_open":
      return { ...state, open: payload };
    case "set_screen":
      return { ...state, screen: payload };
    case "set_name_screen_next_disabled":
      return { ...state, nameScreenNextDisabled: payload };
    default:
      return state;
  }
};

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    favNumber: "",
    open: true,
    screen: 0,
    nameScreenNextDisabled: true,
  });

  const setName = (name: string) => {
    dispatch({ type: "set_name", payload: name });
  };

  const setFavNumber = (number: string) => {
    dispatch({ type: "set_fav_number", payload: number });
  };

  const setOpen = (isOpen: boolean) => {
    dispatch({ type: "set_open", payload: isOpen });
  };

  const setScreen = (screen: number) => {
    dispatch({ type: "set_screen", payload: screen });
  };

  const setNameScreenNextDisabled = (nameScreenNextDisabled: boolean) => {
    dispatch({
      type: "set_name_screen_next_disabled",
      payload: nameScreenNextDisabled,
    });
  };

  return (
    <Context.Provider
      value={{
        state,
        setName,
        setFavNumber,
        setOpen,
        setScreen,
        setNameScreenNextDisabled,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
