import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {stepTwo} from '../dux/reducer'


class StepTwo extends Component{
    constructor(){
        super()
        
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
                    
                    <input className="input-1" name="image" type="text" size="35"  onChange={(e) => this.props.stepTwo(e)}></input>
                    <br></br>
                    <br></br>
                    <button color="primary" className="submitHouse" type="submit" onClick={this.redirectToTargetPrevious}>Previous Step</button>
                    <button color="primary" className="submitHouse" type="submit" onClick={this.redirectToTargetNext}>Next Step</button>
                </form>
            
                
            </div>
        )
    }
}
function mapStateToProps(state){
    return state
}
export default connect (mapStateToProps, {stepTwo})(StepTwo)