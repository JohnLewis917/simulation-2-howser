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
        axios.get('/api/dashboard')
        .then(res => {
            this.setState({
                houses: res.data
            })
        })
    }
    deleteAHouse(){
        axios.delete('/api/Dashboard/:id')
        .then(res => {
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
                
                {this.state.houses.map(el => (<House housesObj = {el} key={el.id}/>))}


                <House path='/House'/> 
                



            </div>
        )
    }
}
export default Dashboard