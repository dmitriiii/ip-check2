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
      appUserFromUrl: '',
      appUserIp: ''
    };
  }


  // Checking if user came with copied link
  checkUrl(){
    const urlParams = new URLSearchParams(window.location.search);
    if( urlParams.has('user') ){
      this.setState({appUserFromUrl: urlParams.get('user')});
    }
  }

  componentDidMount() {
    this.checkUrl();
    // request to server getting an ip address
    this.setState({
      appUserIp: '185.199.8.103'
    });
    
  }


  render() {
    let topprops = {
      appUserIp: this.state.appUserIp
    };
    return (
      <div className="m5ip__app-wrr">
        <div className='container-fluid'>
          <Top datta={topprops}/>
          <Locator />
          <Details />
        </div>
      </div>
    );
  }
}


export default App;
