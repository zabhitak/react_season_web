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
    render() {
        window.navigator.geolocation.getCurrentPosition(
                    (position) => console.log(position),
                    (err)=> console.log('abhinav') 
        );
        return <div>Latitude : </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
