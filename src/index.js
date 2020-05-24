import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from './Spinner';
// const App = () =>{
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err)=> console.log('abhinav')
//     )
//     return <div>  </div>
// }

class App extends React.Component {
  // constructor(props){
  //     super(props);

  //     this.state = { lat: null, errorMessage: ''}; //state object
  //     window.navigator.geolocation.getCurrentPosition(
  //         (position) => {
  // this.setState({ lat: position.coords.latitude })
  //we did not
  //this.state.lat = position.coord.latitiude
  // },
  // (err)=> {
  //     this.setState({errorMessage: err.message });
  // }
  // );
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
    //   return <div>Latitude: {this.state.lat}</div>;
    return <SeasonDisplay 
    lat= {this.state.lat}/>
    }

    return <Spinner message="Please accept location request" />;
  }
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
