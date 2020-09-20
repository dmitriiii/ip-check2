import React from 'react';
import Top from './compz/Top';
import Locator from './compz/Locator';
import Details from './compz/Details';

// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // User from url
      topUser: ''
    };
  }


  // Checking if user came with copied link
  checkUrl(){
    const urlParams = new URLSearchParams(window.location.search);
    if( urlParams.has('user') ){
      this.setState({topUser: urlParams.get('user')});
    }
  }

  componentDidMount() {
    this.checkUrl();
    // const user = 
    // console.log( user );
  }


  render() {
    return (
      <div className="m5ip__app-wrr">
        <div className='container-fluid'>
          <Top />
          <Locator />
          <Details />
        </div>
      </div>
    );
  }
}


export default App;
