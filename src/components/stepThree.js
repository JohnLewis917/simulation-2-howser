import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {stepThree} from '../dux/reducer'


class StepThree extends Component{
    constructor(){
        super()
        // this.state = {
        //     name: '',
        //     address: '',
        //     city: '',
        //     state: '',
        //     zip: 0
        // }
    //     this.handleMortgage = this.handleMortgage.bind(this)
    //     this.handleRent = this.handleRent.bind(this)
        
    // }
    // handleMortgage(event){
    //     this.setState({name: event.target.value})
    // }
    // handleRent(event){
    //     this.setState({address: event.target.value})
    }
    redirectToTargetPrevious = () => {
        this.props.history.push(`/Wizard/stepTwo`)
    }
    
    addHouse(){
        axios.post('/api/Dashboard', this.props)
        .then(res => {
        this.props.history.push('/')
        })
    }
    render(){
        
        return(
            <div>
                
                <form>
                    <h5>Monthly Mortgage Amount</h5>
                    <input className="input-1" name="mortgage" type="text" size="35"  onChange={(e) => this.props.stepThree(e)}></input>
                    <br></br>
                    <h5>Desired Monthly Rent</h5>
                    <input className="input-2" name="rent" type="text" size="35" onChange={(e) => this.props.stepThree(e)}></input>
                    <br></br>
                    <br></br>
                    <button color="primary" className="submitHouse" type="submit" onClick={this.redirectToTargetPrevious}>Previous Step</button>
                    <button color="primary" className="submitHouse" type="submit" onClick={() => this.addHouse()}>Complete</button>
                </form>
            
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}
export default connect (mapStateToProps, {stepThree})(StepThree)