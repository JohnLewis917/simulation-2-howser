import React, {Component} from 'react'


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
        this.handleName = this.handleName.bind(this)
        this.handleAddress = this.handleAddress.bind(this)
        this.handleCity = this.handleCity.bind(this)
        this.handleState = this.handleState.bind(this)
        this.handleZip = this.handleZip.bind(this)
    }
    handleName(event){
        this.setState({name: event.target.name})
    }
    handleAddress(event){
        this.setState({address: event.target.address})
    }
    handleCity(event){
        this.setState({city: event.target.city})
    }
    handleState(event){
        this.setState({state: event.target.state})
    }
    handleZip(event){
        this.setState({zip: event.target.zip})
    }
    redirectToTarget = () => {
        this.props.history.push(`/`)
    }
    render(){
        return(
            <div>
                <h1>Add New Listing</h1>
                <button color="primary"
                        className="addProp"
                        onClick={this.redirectToTarget}>Cancel</button>
                <form>
                    <h5>Property Name</h5>
                    <input className="input-1" type="text" size="35" onChange={this.handleName}></input>
                    <br></br>
                    <h5>Address</h5>
                    <input className="input-2" type="text" size="35" onChange={this.handleAddress}></input>
                    <br></br>
                    <h5>City</h5>
                    <input className="input-3" type="text" size="30" onChange={this.handleCity}></input>
                    <br></br>
                    <h5>State</h5>
                    <input className="input-4" type="text" size="5" onChange={this.handleState}></input>
                    <br></br>
                    <h5>Zip Code</h5>
                    <input className="input-5" type="number" size="10" onChange={this.handleZip}></input>
                </form>
            
                
            </div>
        )
    }
}
export default Wizard