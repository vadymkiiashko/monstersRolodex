import React from "react";


class Monsters extends React.Component{
    constructor(){
        super();
        this.state ={
            monsters :[]
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resposnse => resposnse.json())
            .then(users => this.setState({monsters:users}))
    }

    render(){
        
        return(
            <div>
                {
                    this.state.monsters.map( monster => <h1 key={monster.id}>{monster.name}</h1>)
                }
            </div>
        )
            
 }


}
export default Monsters;