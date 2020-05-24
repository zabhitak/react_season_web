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
        
        this.state = { lat: 40 }; //state object
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude })
                //we did not
                //this.state.lat = position.coord.latitiude
            },
            (err)=> console.log('abhinav')  
        );
    }

    render() {
        
        
        return <div>Latitude :{ this.state.lat } </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
