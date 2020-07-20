import React,{Component} from "react";
import Enfant from "./Enfant"


class Maman extends Component{
state={
    ordreMaman:null,
    repenseENfant:null
}

//initialisation
initialisation1=()=>{
    this.setState({
        repenseENfant:""
    })
}
//initialisation2
initialisation2=()=>{
    this.setState({
        ordreMaman:""
    })
}
//method a envoyer dans une props
repenseENFENT=()=>{
    this.setState({
        repenseENfant:"tinquiete pas yema inchalah je vais faire de mon mieu"
    })
}

afficherOrdreMaman=()=>{
this.setState({
    ordreMaman:"il faut que tu soit le meilleur mon fils ta tellement galerer ..!!"
})
}

    render(){
      return(
         <div style={{textAlign:"center"}}>
            <button  onClick={this.afficherOrdreMaman} onDoubleClick={this.initialisation2}>ordre de yema</button>
            <br/>
         <p >{this.state.ordreMaman}</p>
              <hr/>
              <Enfant initialisation1={this.initialisation1}  repenseENFENT={this.repenseENFENT} lestate={this.state}/>
          </div>
      )




    }
}
export default Maman;