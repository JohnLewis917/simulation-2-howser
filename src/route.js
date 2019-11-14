import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Wizard from './components/Wizard/Wizard'
import StepOne from './components/stepOne'

export default(

        <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/wizard' component={Wizard}/>
            {/* <Route exact path='/wizard/stepOne' component={StepOne}/> */}
        </Switch>
    
)

 