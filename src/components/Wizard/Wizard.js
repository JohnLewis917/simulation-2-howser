import React, {Component} from 'react'
import axios from 'axios'
import {Route} from 'react-router-dom'
import stepOne from '../stepOne/stepOne'
import stepTwo from '../stepTwo/stepTwo'
import stepThree from '../stepThree/stepThree'

class Wizard extends Component{

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
                
                <Route path='/wizard/stepOne' component={stepOne}/>
                <Route path='/wizard/stepTwo' component={stepTwo}/>
                <Route path='/wizard/stepThree' component={stepThree}/>
                
            
                
            </div>
        )
    }
}
export default Wizard