
import React from 'react';
import logo from '../logo.svg';


class HelloWorld extends React.Component{
    
    constructor(){
        super();

        this.state = {
            name:"Vadym"
        }
    }

    render(name){
        return(
        <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                {this.state.name}, Edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick ={()=>
                    {
                        this.setState({name:"Jack"})
                    }}>
                    Change text
                </button>
            </header>



        );
    }

}
/*

function HelloWorld(){

return(
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
);

}
*/
export default HelloWorld;