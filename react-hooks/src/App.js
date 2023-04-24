import logo from './logo.svg';
import './App.css';
// import Counter from './counter/Counter';
// import Name from './useStateObj/Name';
// import ListItems from './useStateWithArray/ListItems';
// import UseEffectCounter from './useEffectHook/UseEffectCounter';
// import CounterTwo from './useEffectCondition/CounterTwo';
// import HookMouse from './useEffectCondition/HookMouse';
// import HookMouseCleanUp from './useEffectCondition/HookMouseCleanUp';
// import IntervalHookCounter from './useEffectCondition/IntervalHookCounter';
// import DataFetching from './useEffectCondition/DataFetching';
// import FetchSingleData from './useEffectCondition/FetchSingleData';
// import { Component } from 'react';
// import ComponentC from './useContext/ComponentC';
import React from 'react';
import UseReducerCounter from './useReducer/UseReducerCounter';
import UseReducerCounterObj from './useReducer/UseReducerCounterObj';
import DataFetchingReducer from './useReducer/DataFetchingReducer';


// export const UserNameContext = React.createContext()
// export const LastNameContext = React.createContext()
function App() {
  return (
    <div className="App">
      {/* <UseEffectCounter></UseEffectCounter> */}
      {/* <CounterTwo></CounterTwo> */}
      {/* <HookMouseCleanUp></HookMouseCleanUp> */}
      {/* <IntervalHookCounter></IntervalHookCounter> */}
      {/* <DataFetching></DataFetching> */}
      {/* <FetchSingleData></FetchSingleData> */}
      {/* <UserNameContext.Provider value={'Nithesh'}>
        <LastNameContext.Provider value={'Gowda'}>
        <ComponentC></ComponentC>
        </LastNameContext.Provider> 
      </UserNameContext.Provider> */}
      {/* <UseReducerCounter></UseReducerCounter> */}
      {/* <UseReducerCounterObj></UseReducerCounterObj> */}
      <DataFetchingReducer></DataFetchingReducer>
    </div>
  );
}

export default App;
