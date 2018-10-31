import * as React from 'react';
import './Ball.css';

class Ball extends React.Component<any, any> {

  public getInitials() {
    return (
      this.props.name.charAt(0) +
      this.props.name.split(' ')[1].charAt(0)
    );

  }
  public render() {
    return (
        <figure style={this.props.style} className="circle">{this.getInitials()}</figure>
    );
  }
}

export default Ball;
