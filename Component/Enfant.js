import React from 'react'

 const Enfant=(props)=> {
    console.log() 
    const apresOrdremere= props.lestate.ordreMaman !== null ?(<button onClick={props.repenseENFENT} onDoubleClick={props.initialisation1}>respenseEnfant</button>):(<button disabled>respenseEnfant</button>)

    return (
        <div>
         {/* <button onClick={this.props.repenseENFENT}>repense</button> */}
         
         <p>{props.lestate.repenseENfant}</p>
            {apresOrdremere} 
        </div>
    )
}

export default Enfant;
