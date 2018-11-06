
import * as React from 'react';
import { Redirect, Route, Switch} from 'react-router-dom';
import App from './App';
import './App.css';
import Login from './Login';
import logo from './logo.svg';

class Main extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state={userName: null, password: null};

  }

  public passUserData = (name: string, pass: string) => {
    this.setState({userName: name, password: pass});
  }



  public render() {
    //tslint:disable
  //  const auth = this.state.password === null ? false : true;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IV17 analyzer</h1>
          <Redirect to="/login" />
        </header>

        <Switch>

          <Route path="/login" render={() =>{ return <Login passUserData={this.passUserData} />;}} />
          <Route  path="/main" render={() => {return <App userData={this.state} />;}} />
        </Switch>
      </div>
    );
  }
}

export default Main;
