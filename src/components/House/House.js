import React, {Component} from 'react'



class House extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <box className="box-1">
                    <h4>{this.props.housesObj}</h4>
                    <div>
                    <button className="house-delete" type="delete">Delete</button>
                    </div>

                </box>
                
                 
            </div>
        )
    }
}
export default House