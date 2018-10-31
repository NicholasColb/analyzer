
import * as React from 'react';
import Ball from './Ball';
import './RelationLine.css';


class RelationLine extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state={stringToRender: null, coordinates: []};
  }

  public componentWillReceiveProps(props: any) {
    this.setState({stringToRender: props.currentSelect});
  }

  public renderChips() {

      return this.state.coordinates.map((x: any) => {
          return (
              <Ball
                key={Math.random()}
                name={x.name}
                style={{
                  left: x.x,
                  position: 'fixed',
                  top: x.y,
                }}

              />
          )
      });

  }

  public onClick = (e: any) => {
    if(this.state.stringToRender != null) {
      e.persist();
      console.log('inner width:' + window.innerWidth); //tslint:disable-line
      console.log('x' + e.pageX); //tslint:disable-line
      console.log('y: ' + e.screenY); //tslint:disable-line
      this.setState((prevState: any) => ({
        coordinates: [...prevState.coordinates, {
          name: this.state.stringToRender,
          x: e.pageX,
          y: e.pageY
        }]
      }));
      this.props.resetState();
    }
  };

  public render() {
    return (
      <div className="RelationLine">
        <div className="Row">
          <p className="Col"> En vielä tunne </p>
          <p className="Col"> Tunnen jotenkuten </p>
          <p className="Col"> Tunnen hyvin </p>

        </div>
        <hr
          className="Timeline"
        />
        <div className="Box" onClick={this.onClick}>
          {this.renderChips()}
        </div>

      </div>
    );
  }
}

export default RelationLine;
