import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './GlobalStyle';
import Logo from './Logo';
import Switch from './Switch';

type S = {
  checked: boolean;
}

class App extends React.PureComponent<{}, S> {
  state = {
    checked: true
  }
  
  handleChange =() => {
    this.setState(state => ({checked: !state.checked}));
  }
  
  render() {
    let {checked} = this.state;
    return (
      <>
        <Switch onChange={this.handleChange} checked={checked} />
        <GlobalStyle dark={checked} />
        <Logo />
      </>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
