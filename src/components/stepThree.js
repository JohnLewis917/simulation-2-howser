import React, {Component} from 'react'
import axios from 'axios'


class Wizard extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
        this.handleMortgage = this.handleMortgage.bind(this)
        this.handleRent = this.handleRent.bind(this)
        
    }
    handleMortgage(event){
        this.setState({name: event.target.value})
    }
    handleRent(event){
        this.setState({address: event.target.value})
    }
    redirectToTargetPrevious = () => {
        this.props.history.push(`/Wizard/stepTwo`)
    }
    
    addHouse(){
        axios.post('/api/Dashboard', this.state)
        .then(res => {
        this.props.history.push('/')
        })
    }
    render(){
        
        return(
            <div>
                
                <form>
                    <h5>Monthly Mortgage Amount</h5>
                    <input className="input-1" type="text" size="35"  onChange={(e) => this.handleMortgage(e)}></input>
                    <br></br>
                    <h5>Desired Monthly Rent</h5>
                    <input className="input-2" type="text" size="35" onChange={(e) => this.handleRent(e)}></input>
                    <br></br>
                    <br></br>
                    <button color="primary" className="submitHouse" type="submit" onClick={this.redirectToTargetPrevious}>Previous Step</button>
                    <button color="primary" className="submitHouse" type="submit" onClick={() => this.addHouse()}>Complete</button>
                </form>
            
                
            </div>
        )
    }