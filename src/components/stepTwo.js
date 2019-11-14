import React, {Component} from 'react'
import axios from 'axios'


class StepTwo extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
        this.handleImage = this.handleImage.bind(this)
        
    }
    handleImage(event){
        this.setState({name: event.target.value})
    }
    redirectToTargetNext = () => {
        this.props.history.push(`/Wizard/stepThree`)
    }
    redirectToTargetPrevious = () => {
        this.props.history.push(`/Wizard/stepOne`)
    }
    render(){
        
        return(
            <div>
                
                <form>
                    {/* <img src="" alt="" type="image"/> */}
                    <input className="input-1" type="text" size="35"  onChange={(e) => this.handleImage(e)}></input>
                    <br></br>
                    <br></br>
                    <button color="primary" className="submitHouse" type="submit" onClick={this.redirectToTargetPrevious}>Previous Step</button>
                    <button color="primary" className="submitHouse" type="submit" onClick={this.redirectToTargetNext}>Next Step</button>
                </form>
            
                
            </div>
        )
    }
}
export default StepTwo