import React from 'react';
import ReactDOM from 'react-dom';

// const App = () =>{
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err)=> console.log('abhinav') 
//     )
//     return <div>  </div>
// }

class App extends React.Component{
    constructor(props){
        super(props); 
        
        this.state = { lat: null, errorMessage: ''}; //state object
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude })
                //we did not
                //this.state.lat = position.coord.latitiude
            },
            (err)=> {
                this.setState({errorMessage: err.message });
            }  
        );
    }

    render() {
        if(this.state.errorMessage && !this.state.lat){
        return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>
        }
        
            return <div>Loading</div>

        // return (
        // <div>
        //     Latitude :{ this.state.lat } 
        //     <br /> 
        //     Error: {this.state.errorMessage}
        // </div>
        // )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
