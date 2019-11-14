import React, {Component} from 'react'
import axios from 'axios'
import {Route} from 'react-router-dom'
import stepOne from '../stepOne'
import stepTwo from '../stepTwo'
import stepThree from '../stepThree'

class Wizard extends Component{

    redirectToTarget = () => {
        this.props.history.push(`/`)
    }
    
    
    
    
    

    
    render(){
        
        return(
            <div>
                <h1>Dashboard</h1>
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