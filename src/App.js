import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import NewDiary from './pages/NewDiary';
import SlideShow from './pages/SlideShow';
import Login from './components/Login';

function App() {
  return (
    <ContainerWrap>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/index' element={<Index />} />
        <Route path='/write' element={<NewDiary />} />
        <Route path='/slideshow/:date' element={<SlideShow />} />
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
