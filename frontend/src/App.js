import React,{useState  } from 'react';
import styled from "styled-components";
import bg from './img/bg.jpg';
import { MainLayout } from './styles/Layout';
import Orb from './components/Orb/Orb';
import Navigation from './components/Navigation/Navigation';
import { useMemo } from 'react/cjs/react.development';
import Dashboard from './components/Dashboard/Dashboard';
import Income from './components/Income/Income';
import Expenses from './components/Expenses/Expense';
import { useGlobalContext } from './context/globalContext.js';

function App() {

  const [active, setActive] = useState(1);

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
          
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
        // break
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() =>{
    return <Orb /> 
  },[])
  
   
    return (
      <AppStyled bg={bg} className="App">
         {orbMemo}
        <MainLayout>
        <Navigation active={active}  setActive={setActive} />
        <main>
          {displayData()}
        </main>
        </MainLayout>
      </AppStyled>
    );
  }


const AppStyled= styled.div`
  height:100vh;
  background-image:url(${props => props.bg});
  position:relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
