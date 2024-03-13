
import { Todo } from './todo/Todo'
import styled from 'styled-components'

function App() {

  return (
    <AppContainer>
      <div>
        <BackgroundTopRight src="/images/background-top-right.png" />
      </div>
      <TitleWrapper>
        <Title>To do List</Title>
      </TitleWrapper>
      <Todo />
      <BackgroundBottomLeft src="/images/background-bottom-left.png" />
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 100vw;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  flex-shrink: 0;
  @media (max-width: 1024px) {
    width: 70%;
  }
`;
const Title = styled.h1`
  font-family: Inter;
  font-size: 8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -3.533px;
  text-transform: uppercase;
  text-align: left;

  background: linear-gradient(98deg, #EB5757 4.09%, #9B51E0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const BackgroundTopRight = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const BackgroundBottomLeft = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  @media (max-width: 1024px) {
    display: none;
  }
`;

