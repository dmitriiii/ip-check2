import React from 'react';
import axios from 'axios';

import Top from './compz/Top';
import Locator from './compz/Locator';
import Details from './compz/Details';

// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    const urlParams = new URLSearchParams(window.location.search);
    let appUserHash = '';
    if( urlParams.has('user') ){
      appUserHash = urlParams.get('user');
    }
    this.state = {
      appUserHash: appUserHash,
      appUserIp: '',
      sharingUrl: '',
      pageUrl: document.location.origin + document.location.pathname,
      response: ''
    };

    this.validateIPaddress = this.validateIPaddress.bind(this);
    
    // this.validateIPaddress();
  }


  validateIPaddress(ipaddress){
    ipaddress = window.atob(ipaddress);
    // console.log('validateIPaddress');
    // console.log(this.state.appUserHash);

    // console.log(ipaddress);

    // alert('fewwef');
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)){
      // alert("valid IP address!")
      return (true)
    }
    // alert("You have entered an invalid IP address!")
    return (false)
  } 

  // Checking if user came with copied link


  componentDidMount() {
    const sself = this;
    let ip = '';
    if( this.validateIPaddress(this.state.appUserHash) ){
      ip = window.atob(this.state.appUserHash);
    }
    // console.log(ip);
    // console.log(this.state.appUserHash);
    // console.log(atob(this.state.appUserHash));
    // sself.validateIPaddress(atob(sself.state.appUserHash));
    // // if( sself.state.appUserHash !== '' ){
    // //   sself.validateIPaddress( atob(this.state.appUserHash) );
    // //   ip = atob(sself.state.appUserHash);
    // //   // let decodedIp = atob(sself.state.appUserHash);
    // // }
    // // request to server getting an ip address
    axios.get('https://vpntester.org/wp-json/m5/ipaddr/',{params:{ ip: ip }})
    .then(function (response) {
      // console.log(response);
      let encodedIp = window.btoa(response.data.ip_data.query); 
      sself.setState((state, props) => ({
        // counter: state.counter + props.increment
        appUserHash: encodedIp,
        appUserIp: response.data.ip_data.query,
        sharingUrl: state.pageUrl + '?user=' + encodedIp,
        response: response.data.ip_data,
      }));
      // sself.setState({
      //   appUserHash: encodedIp,
      //   appUserIp: response.data.query,
      //   sharingUrl: sself.state.pageUrl + '?user=' + encodedIp
      // })
      // alert('Request');
      // console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {
    return (
      <div className="m5ip__app-wrr">
        <div className='container-fluid'>
          <Top datta={this.state}/>
          <Locator datta={this.state} />
          <Details datta={this.state} />
        </div>
      </div>
    );
  }
}


export default App;
