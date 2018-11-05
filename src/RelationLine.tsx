import * as React from 'react';
import Ball from './Ball';

import ReadyButton from './ReadyButton';


import './RelationLine.css';



/* const log = (text: any) => {
  console.log(text);  //tslint:disable-line
}*/

class RelationLine extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state={stringToRender: null, coordinates: [], prevBallData: null};
  }

  public componentWillReceiveProps(props: any) {
    if(this.state.prevBallData != null && props.currentSelect != null) {
      this.setState((prevState: any) => ({
        coordinates: [...prevState.coordinates, this.state.prevBallData],
        prevBallData: null
      }));
    }
    this.setState({stringToRender: props.currentSelect});
  }

  public clickBall= (e: any) => {
      if(this.props.currentSelect === null && this.state.stringToRender === null) {
        const name = e.currentTarget.id;
        const ind = this.state.coordinates.map((x: any) => {
          return x.name
        }).indexOf(name);
        const arr = [...this.state.coordinates];
        const ball = arr[ind];
        arr.splice(ind,1);
        this.setState({coordinates: arr, stringToRender: name, prevBallData: ball});
      }
  }

  public renderChips() {

      return this.state.coordinates.map((x: any) => {
          return (
              <Ball
                key={Math.random()}
                name={x.name}
                style={{
                  height: '30px',
                  left: x.x,
                  position: 'fixed',
                  top: x.y,
                  width:'30px',
                  zIndex:1,


                }}
                onClick={this.clickBall}

              />
          )
      });

  }

  public onClick = (e: any) => {
    e.persist();
    if(this.state.stringToRender != null) {
      this.setState((prevState: any) => ({
        coordinates: [...prevState.coordinates, {
          name: this.state.stringToRender,
          x: e.pageX,
          y: e.pageY
        }],
        prevBallData: null
      }));
          this.props.resetState();
    }
  };

  public checkReady = () => {
    if(this.props.ready) {
      return <ReadyButton data={this.state.coordinates} userData={this.props.userData} />;
    } else { return null; }
  }

  public render() {
    return (
      <div className="RelationLine">
        {this.checkReady()}
        <div className="Row">
          <p className="Col"> En vielä tunne </p>
          <p className="Col"> Tunnen jotenkuten </p>
          <p className="Col"> Tunnen hyvin </p>

        </div>

        <div className="Box" onClick={this.onClick}>
          {this.renderChips()}
        </div>

      </div>
    );
  }
}

export default RelationLine;
