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
    componentDidMount(){
        this.getHouses()
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
    deleteAHouse=(id) => {
        axios.delete(`/api/Dashboard/${id}`)
        .then(() => {
            this.getHouses()
        })
        }
        
    
    redirectToTarget = () => {
        this.props.history.push(`/wizard/stepOne`)
    }
    render(){
        return(
            <div>
                <button color="primary"
                        className="addProp"
                        onClick={this.redirectToTarget}>Add New Property</button>
                
            

                {this.state.houses.map(el => 
                (<House id={el.id} housesObj={el} deleteAHouse={this.deleteAHouse} />))}

                
            
            </div>
        )
    }
}
export default Dashboard