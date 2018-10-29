
import * as React from 'react';
import './RelationLine.css';


class RelationLine extends React.Component {

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
      </div>
    );
  }
}

export default RelationLine;
