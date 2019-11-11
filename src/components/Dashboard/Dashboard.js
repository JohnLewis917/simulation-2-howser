import React, {Component} from 'react'
import House from '../House/House'
import axios from 'axios'

class Dashboard extends Component{

    constructor(){
        
        super()
        this.state = {
            houses: []
        }


    }
    
    getHouses(){
        axios.get('/api/Dashboard')
        .then(res => {
            this.setState({
                houses: res.data
            })
            console.log(res.data)
            
        })
    }
    deleteAHouse(){
        axios.delete('/api/Dashboard/:id')
        .then(res => {
            console.log(res)
            this.setState({
                houses: res.data 
            })
        })
        
    }
    redirectToTarget = () => {
        this.props.history.push(`/wizard`)
    }
    render(){
        return(
            <div>
                <button color="primary"
                        className="addProp"
                        onClick={this.redirectToTarget}>Add New Property</button>
                
            

                {this.state.houses.map(el => 
                (<House key={el.id} housesObj={el} />))}

                <House path='/House'/>
            
            </div>
        )
    }
}
export default Dashboard