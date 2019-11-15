import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {stepOne} from '../dux/reducer'


class StepOne extends Component{
    constructor(){
        super()
        
        // this.handleName = this.handleName.bind(this)
        // this.handleAddress = this.handleAddress.bind(this)
        // this.handleCity = this.handleCity.bind(this)
        // this.handleState = this.handleState.bind(this)
        // this.handleZip = this.handleZip.bind(this)
    }
    // handleName(event){
    //     this.setState({name: event.target.value})
    // }
    // handleAddress(event){
    //     this.setState({address: event.target.value})
    // }
    // handleCity(event){
        
    //     this.setState({city: event.target.value})
    // }
    // handleState(event){
    //     this.setState({state: event.target.value})
    // }
    // handleZip(event){
    //     this.setState({zip: event.target.value})
    // }
    redirectToTarget = () => {
        this.props.history.push(`/Wizard/stepTwo`)
    }
    render(){
        
        return(
            <div>
                <h1>Add New Listing</h1>
                
                <form>
                    <h5>Property Name</h5>
                    <input className="input-1" name="name" type="text" size="35"  onChange={(e) => this.props.stepOne(e)}></input>
                    <br></br>
                    <h5>Address</h5>
                    <input className="input-2" name="address" type="text" size="35" onChange={(e) => this.props.stepOne(e)}></input>
                    <br></br>
                    <h5>City</h5>
                    <input className="input-3" name="city" type="text" size="30"  onChange={(e) => this.props.stepOne(e)}></input>
                    <br></br>
                    <h5>State</h5>
                    <input className="input-4" name="state" type="text" size="5"  onChange={(e) => this.props.stepOne(e)}></input>
                    <br></br>
                    <h5>Zip Code</h5>
                    <input className="input-5" name="zip" type="number" size="10" onChange={(e) => this.props.stepOne(e)}></input>
                    <br></br>
                    <br></br>
                    <button color="primary" className="submitHouse" type="submit" onClick={this.redirectToTarget}>Next Step</button>
                </form>
            
                
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {name: state.name,
            address: state.address,
            city: state.city,
            state: state.state,
            zip_code: state.zip_code}
}
export default connect(mapStateToProps, {stepOne})(StepOne)