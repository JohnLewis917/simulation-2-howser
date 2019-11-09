import React, {Component} from 'react'
import House from '../House/House'
import Axios from 'axios'

class Dashboard extends Component{

    constructor(){
        super()
        this.state = {
            houses: []
        }

    }
    // componentDidMount(){
    //     axios.get('/api/dashboard')
    //     .then(res => {
    //         this.setState({
    //             houses: res.data
    //         })
    //     })
    // }
    redirectToTarget = () => {
        this.props.history.push(`/wizard`)
    }
    render(){
        
        return(
            <div>
                {this.state.houses.map((house, key) =>
                <House house={house} key={house.id}/> )}
                



                <button color="primary"
                        className="addProp"
                        onClick={this.redirectToTarget}>Add New Property</button>
            </div>
        )
    }
}
export default Dashboard