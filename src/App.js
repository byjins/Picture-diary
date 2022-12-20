import styled from 'styled-components';
import Header from './components/Header';
import './app.css';

function App() {
  return (
    <ContainerWrap>
      <Header />
      <main>여기에 콘텐츠 들어가야징~~</main>
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
