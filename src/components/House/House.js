import React, {Component} from 'react'



class House extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                
                 <button className="house-delete" type="delete">Delete</button>
                 
            </div>
        )
    }
}
export default House