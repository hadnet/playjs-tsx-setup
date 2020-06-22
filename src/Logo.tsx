/// <reference path='./png.d.ts' />
import React from 'react';
import ReactDOM from 'react-dom';
import styled, {keyframes} from 'styled-components';
import logo from '../public/logo.png'; 

type P = {}
type S = {}

export default class Logo extends React.PureComponent<P, S> {
  render() {
    return (
      <App>
        <Header>
          <Image src={logo} alt="logo" />
          <p>
            The power of TS + React + Styled Components 
          </p>
          <Link
            href="https://tinyurl.com/y7yybt69"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React with TypeScript
          </Link>
        </Header>
      </App>
    );
  }
}
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const 
App = styled.div`
  text-align: center;
`,
Header = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`,
Link = styled.a`
   color: #61dafb;
`,
Image = styled.img`
  animation: ${rotate} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;
