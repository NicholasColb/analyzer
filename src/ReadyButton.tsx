import Button from '@material-ui/core/Button';
import * as React from 'react';



class ReadyButton extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public onClick = () => {
    if(confirm('Send results to server?')) {
        const url = 'https://localhost:443/insert';
        const arr = this.props.data.map((e: any) => {
          return ({name: e.name, rank: e.x});
        });
        const userName = this.props.userData.userName.toString();
        const password = this.props.userData.password.toString();
        const auth = 'Basic ' + new Buffer(userName + ':' + password).toString('base64');
        const payload = {
          name: userName,
          relations: arr
        };


        fetch(url, {
          body: JSON.stringify(payload),
          headers: {
            'Authorization': auth,
            'Content-Type': 'application/json',

          },
          method: 'POST',

        }).then((response: any) =>{ console.log(response);}); //tslint:disable-line
    }
  }


  public render() {

    return (
      <Button variant="contained" color="primary" onClick={this.onClick}>
        Submit
      </Button>
    );
  }
}

export default ReadyButton;
