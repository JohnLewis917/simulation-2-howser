import React, {Component} from 'react'



class House extends Component{
    constructor(){
        super()
    }
    render(){
        
        return(
            <div>
                <div className="box-1">
                    <div>
                        <h4>
                            {this.props.housesObj}
                         </h4>
                    </div>
                    
                </div>
                <button className="delete" onClick={() => this.deleteAHouse()}>Delete</button> 
            
                
                 
            </div>
        )
    }
}
export default House