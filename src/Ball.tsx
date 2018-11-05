import * as React from 'react';
import {
  greatPlaceStyle,
  greatPlaceStyleHover,
  infoBox,
  infoBoxAddOn,
  infoBoxAddOnHover,
  infoBoxHover
} from './HoverStyles';


class Ball extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state=({$hover: false});
  }
  public getInitials() {
    return (
      this.props.name.charAt(0) +
      this.props.name.split(' ')[1].charAt(0)
    );
  }
  public onHover = (e: any) => {
    this.setState({$hover: true});
  }

  public onNotHover = (e: any) => {
    this.setState({$hover: false});
  }


  public render() {
    const style = this.state.$hover ? greatPlaceStyleHover : greatPlaceStyle;
    const style2 = this.state.$hover ? infoBoxHover : infoBox;
    const style3 = this.state.$hover ? infoBoxAddOnHover : infoBoxAddOn;

    return (
      <div style={this.props.style} onMouseLeave={this.onNotHover} onMouseOver={this.onHover} >

          <figure id={this.props.name} onClick={this.props.onClick} style={style}  className="circle">{this.getInitials()}</figure>
          <div style={style2} className="hint__content">
            {this.props.name}
          </div>
          <div style={style3} />
      </div>
    );
  }
}

export default Ball;
