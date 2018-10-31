import Chip from '@material-ui/core/Chip';
import * as React from 'react';



class Names extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      names: [
        'Markus Ihamuotila',
        'Roosa Kujanpää',
        'Joonas Rasa',
        'Kasper Nurminen',
        'Atte Mäkinen',
        'Ella Huttunen',
        'Aleksi Löytynoja',
        'Samuel Moawad',
        'Sini Hölsä',
        'Elena Rima',
        'Arttu Engström',
        'Joonas Pöntinen',
        'Aapo Kinnari'
      ]
    }
  }

  public clickChip = (e: any) => {
            const index = this.state.names.indexOf(e.currentTarget.id); //tslint:disable-line
            const func = this.props.handler
            const promise = new Promise((resolve,reject) => {
              func(e.currentTarget.id, resolve);
            });

            promise.then((value) => {
              const array = [...this.state.names];
              array.splice(index, 1);
              this.setState({ names: array});
            });

  }

  public renderChips = () => {
    return this.state.names.map((x: string) => {

        const color = "default";
        return (
              <Chip key={x} color={color} id={x} label={x} onClick={this.clickChip}/>
        )
      });

  }
  public render() {
    return (
      <div className="App">
          {this.renderChips()}
      </div>
    );
  }
}

export default Names;
