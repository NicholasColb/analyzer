
import * as React from 'react';
import { Redirect } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MaterialUiInput from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockIcon from '@material-ui/icons/Lock';


import {
  cardStyle,
  headlineStyle,
  lockIconStyle,
  // loginGuideStyle,
  loginPageContainer
} from './LoginStyles';

export interface IFetchError extends Error {
  res: Response;
}

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
const handleErrors = (res: Response) => {
  if(!res.ok) {
    const e: IFetchError = {
      ...new Error(res.statusText),
      res,
    };
    throw e
  }
  return res;
};
class Login extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state={name: '', password: null, redirect: false};

  }

  public handleNameChange = (event: any) => {
    this.setState({name: event.target.value});
  }
  public handlePassChange = (event: any) => {
    this.setState({password: event.target.value});
  }

  public onClick = (event: any) => {
    if(this.state.name != null && this.state.password != null) {
      const url = "http://35.228.39.186/login";
      const auth = 'Basic ' + new Buffer(this.state.name + ':' + this.state.password).toString('base64');
      fetch(url, {
        headers: {
          'Authorization': auth,
          'Content-Type': 'application/json',

        },
        method: 'GET',
      })
      .then(handleErrors)
      .then(response => {
          this.props.passUserData(this.state.name, this.state.password);
          this.setState({redirect: true});
      })  //tslint:disable-line
      .catch(error => alert('login failed - please try again'));    //tslint:disable-line
    }
  }

  public render() {


    return (
        <div style={loginPageContainer}>
          <Typography gutterBottom={true} style={headlineStyle} variant="display3">Welcome</Typography>
          <Card style={cardStyle}>
            <CardContent>
              <FormControl>
                <Select
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    input={<MaterialUiInput id="nameHelper" />}
                >
                  {names.map((option: any) => {
                    return <MenuItem  key= {option} value={option}>{option}</MenuItem>;
                  })}
                </Select>
                <FormHelperText>Who are you?</FormHelperText>
              </FormControl>
              <br />
              <TextField
                label="Password"
                type="password"
                margin="normal"
                onChange={this.handlePassChange}
              />
              <br />
              <br />
              <br />
              <Button variant="contained" color="primary" onClick={this.onClick}>
                Login
              </Button>
              <br />
              <LockIcon style={lockIconStyle} />
            </CardContent>
          </Card>
          {this.state.redirect ? <Redirect to="/main" /> : null}
        </div>


    );
  }
}

export default Login;
