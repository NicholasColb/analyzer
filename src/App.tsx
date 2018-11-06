import * as React from 'react';
import { Redirect } from 'react-router-dom';
import Names from './Names';
import RelationLine from './RelationLine';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state={selected: null, ready: false, userData: null};
  }
  public componentWillMount() {
    this.setState({userData: this.props.userData});
  }
  public stateResolver = (x:string, resolve:any) => {
      this.setState({selected: x, promise: resolve});
  }
  public stateResetter = () => {
    this.setState({selected: null});
    this.state.promise('foo');
  }

  public callReady = () => {
    this.setState({ready: true});
  }

  public firstName = () => {
    if (this.props.userData.userName != null) {
      return this.props.userData.userName.split(' ')[0];
    } else {
      return null;
    }
  }

  public render() {

    return (

        <div>

          {this.state.userData.userName === null ? <Redirect to="/login" /> : null}

                {!this.state.ready ? <p> Hey, {this.firstName()}! Please click your classmates into the green box </p>
                                   : <p> Click the submit button when you're ready! </p>
                }
              <Names handler={this.stateResolver} callReady={this.callReady} userName={this.props.userData.userName} />
              <RelationLine currentSelect={this.state.selected} resetState={this.stateResetter} ready={this.state.ready} userData={this.props.userData}  />


        </div>
    );
  }
}

export default App;
