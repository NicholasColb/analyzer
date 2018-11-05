
import * as React from 'react';
import { Route} from 'react-router-dom';
import App from './App';
import Login from './Login';

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
      <div>
        <Route path="/login" render={() =>{ return <Login passUserData={this.passUserData} />;}} />
        <Route  path="/main" render={() => {return <App userData={this.state} />;}} />

      </div>
    );
  }
}

export default Main;
