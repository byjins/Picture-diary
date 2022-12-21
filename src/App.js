import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import NewDiary from './pages/NewDiary';

function App() {
  return (
    <ContainerWrap>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/index' element={<Index />} />
        <Route path='/write' element={<NewDiary />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ContainerWrap>
  );
}

export default App;

const ContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  margin: auto;
`;
