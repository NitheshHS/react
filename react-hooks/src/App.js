import logo from './logo.svg';
import './App.css';
import Counter from './counter/Counter';
import Name from './useStateObj/Name';
import ListItems from './useStateWithArray/ListItems';
import UseEffectCounter from './useEffectHook/UseEffectCounter';
import CounterTwo from './useEffectCondition/CounterTwo';
import HookMouse from './useEffectCondition/HookMouse';
import HookMouseCleanUp from './useEffectCondition/HookMouseCleanUp';
import IntervalHookCounter from './useEffectCondition/IntervalHookCounter';
import DataFetching from './useEffectCondition/DataFetching';
import FetchSingleData from './useEffectCondition/FetchSingleData';



function App() {
  return (
    <div className="App">
      {/* <UseEffectCounter></UseEffectCounter> */}
      {/* <CounterTwo></CounterTwo> */}
      {/* <HookMouseCleanUp></HookMouseCleanUp> */}
      {/* <IntervalHookCounter></IntervalHookCounter> */}
      {/* <DataFetching></DataFetching> */}
      <FetchSingleData></FetchSingleData>
    </div>
  );
}

export default App;
