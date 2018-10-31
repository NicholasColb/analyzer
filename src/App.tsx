import * as React from 'react';
import './App.css';
import logo from './logo.svg';
import Names from './Names';
import RelationLine from './RelationLine';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state={selected: null};
  }

  public stateResolver = (x:string, resolve:any) => {
      this.setState({selected: x, promise: resolve});
  }
  public stateResetter = () => {
    this.setState({selected: null});
    this.state.promise('foo');
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IV17 analyzer</h1>
        </header>

        <Names handler={this.stateResolver} />
        <RelationLine currentSelect={this.state.selected} resetState={this.stateResetter}  />
      </div>
    );
  }
}

export default App;
