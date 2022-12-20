import styled from 'styled-components';
import './app.css';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ContainerWrap>
      <Cotainer>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/index' element={<Index />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Cotainer>
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

const Cotainer = styled.main`
  height: 100vh;
`;
