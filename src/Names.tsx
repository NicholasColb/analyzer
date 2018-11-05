import Chip from '@material-ui/core/Chip';
import * as React from 'react';
import './Names.css';

const names = [
  'Markus Ihamuotila',
  'Roosa Kujanpää',
  'Joonas Rasa',
  'Kasper Nurminen',
  'Katariina Korolainen',
  'Atte Mäkinen',
  'Ella Huttunen',
  'Aleksi Löytynoja',
  'Samuel Moawad',
  'Sini Hölsä',
  'Elena Rima',
  'Arttu Engström',
  'Antti Kari-Koskinen',
  'Ella Palo',
  'Juhana Saarinen',
  'Aura Kiiskinen',
  'Anni Kivilaakso',
  'Riikka Eskola',
  'Satu Reijonen',
  'Eino Vuorinen',
  'Sanni Lares',
  'Aili Hukka',
  'Emma Kankkunen',
  'Liva Westerback',
  'Julia Korhonen',
  'Marika Sillanpää',
  'Ella Anttila',
  'Inkeri Rouvinen',
  'Max Naumanen',
  'Ville Pelkonen'

];

class Names extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    const arr = names;
    const ind = names.indexOf(this.props.userName);
    arr.splice(ind,1)
    this.state = {
      names: arr
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
              if(array.length === 0) {
                this.props.callReady();
              }

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
      <div className="Names">
          {this.renderChips()}

      </div>
    );
  }
}

export default Names;
