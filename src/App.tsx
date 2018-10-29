import * as React from 'react';
import './App.css';
import logo from './logo.svg';
import Names from './Names';
import RelationLine from './RelationLine';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IV17 analyzer</h1>
        </header>

        <Names />
        <RelationLine />
      </div>
    );
  }
}

export default App;
