import logo from './logo.svg';
import './App.css';
import Welcome from './states/Welcome';
import Counter from './states/setStateExp';
import EventBind from './EventBinding/EventBind';
import Parent from './methodProps/Parent';
import GreetUser from './conditionalRendering/GreetUser';
import NameList from './listRendering/NameList';

import RefDemo from './refs/RefDemo';
import InputRef from './refs/InputRef';
import FWInput from './refs/FWInput';
import PortalDemo from './portal/PortalDemo';
import Hero from './ErrorHandling/Hero';
import ErrorHandling from './ErrorHandling/ErrorHandling';
import ClickCounter from './HigherOrderComponents/ClickCounter';
import HoverCounter from './HigherOrderComponents/HoverCounter';
import CounterOne from './RenderProps/CounterOne';
import HoverOne from './RenderProps/HoverOne';
import CounterProp from './RenderProps/CounterProp';

import User from './renderPropsExcise/User';
import UserInfo from './renderPropsExcise/UserInfo';
import ComponentC from './context/ComponentC';
import { UserProvider } from './context/UserContext';
import ThemeContext from './themeContext/ThemeContext';
import ToolBar from './themeContext/ToolBar';


function App() {
  
  return (
    <div className="App">
    {/* <GreetUser username="Nithesh Gowda"></GreetUser> */}
    {/* <NameList></NameList> */}
    {/* <UserForm></UserForm> */}
    {/* <RefDemo></RefDemo> */}
    {/* <InputRef></InputRef> */}
    {/* <FWInput></FWInput> */}
    {/* <PortalDemo></PortalDemo> */}
    {/* <ErrorHandling>
    <Hero heroname="Nithesh"></Hero>
    </ErrorHandling>
    <ErrorHandling>
    <Hero heroname="Supreeth"></Hero>
    </ErrorHandling>
    <ErrorHandling>
    <Hero heroname="Pavan"></Hero>
    </ErrorHandling>
    <ErrorHandling>
    <Hero heroname="Joker"></Hero>
    </ErrorHandling> */}
    {/* <ClickCounter></ClickCounter>
    <HoverCounter></HoverCounter> */}
    {/* <CounterProp render={(count, incrementCount)=>(
      <CounterOne count={count} incrementCount={incrementCount}></CounterOne>
    )}/>
    <CounterProp render = {(count, incrementCount) =>(
      <HoverOne count={count} incrementCount={incrementCount}/>
    )}></CounterProp> */}
    {/* <User render={(user)=>(
      <UserInfo user={user}/>
    )}/> */}
    {/* <UserProvider value='Nithesh'>
      <ComponentC></ComponentC>
    </UserProvider> */}
    <ThemeContext.Provider value='dark'>
      <ToolBar></ToolBar>
    </ThemeContext.Provider>
      
    </div>
  
  )
  
}

export default App;
