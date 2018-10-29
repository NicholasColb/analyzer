import Chip from '@material-ui/core/Chip';
import * as React from 'react';

const names = [
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
  'Joonas Pöntinen'
];

class Names extends React.Component {

  public renderChips = () => {
    return names.map((x: string) => {
        return (
              <Chip key={x} label={x} />
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
