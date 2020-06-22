import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './globalStyle';
import Logo from './logo'

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
