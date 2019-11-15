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
                        <h6>
                            {this.props.housesObj.name}
                         </h6>
                         <h6>
                             {this.props.housesObj.address}
                         </h6>
                         <h6>
                             {this.props.housesObj.city}
                         </h6>
                         <h6>
                             {this.props.housesObj.state}
                         </h6>
                         <h6>
                             {this.props.housesObj.zip_code}
                         </h6>
                         <img src= {this.props.housesObj.image}/>
                    </div>
                    
                </div>
                <button className="delete" type="submit" onClick={() => this.props.deleteAHouse(this.props.housesObj.id)}>Delete</button> 
            
                
                 
            </div>
        )
    }
}
export default House