import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './GlobalStyle';
import Logo from './Logo'

type P = {}
type S = {}

class App extends React.PureComponent<P,S> {
  render() {
    return (
      <>
      <GlobalStyle dark />
      <Logo />
      </>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
