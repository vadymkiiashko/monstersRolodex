
import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from "./components/search-box/search-box.component"


class App extends React.Component {
  constructor(){
    super();
    this.state ={
        monsters :[],
        search :""
    };

   
  }

  handleChange=(e)=>{
      this.setState({search:e.target.value})
    }


componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(resposnse => resposnse.json())
        .then(users => this.setState({monsters:users}))
}


render(){

  const {monsters , search } = this.state;
  console.log(monsters)
  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="App">
      <h1 className="title"> Monsters Project</h1>
      <SearchBox  placeholder ="searchmonsters" handleChange = {this.handleChange} />
      
      <CardList monsters={filteredMonsters}>
      </CardList>
     
    </div>
  );
}

}

export default App;
