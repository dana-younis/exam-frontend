import React, { Component } from 'react'
import axios from 'axios';
import UpdateDeleteCard from './UpdateDeleteCard';
import Form from './Form';

 class FavoriteDigimons extends Component {
    constructor(props){
        super(props);
        this.state={
           serverLink:`http://localhost:3334`,
           showDigimons:false,
           Digimons:[],
           showForm:false,
           newName:'',
           newLevel:'',
           newImg:'',
           index:0
    }}
    componentDidMount=async()=>{

       const Digimons=await axios.get(`${this.state.serverLink}/getFavoriteDigimons`);
       this.setState({
           Digimons:Digimons.data,
           showDigimons:true

       })
    }
    deleteDigimonFunc=async(index)=>{
        const id=this.state.Digimons[index]._id
        const Digimons=await axios.delete(`${this.state.serverLink}/deleteDigimon/${id}`);
        this.setState({
            Digimons:Digimons.data
        })
    }

    showFunc=(idx)=>{
        const chosen =this.state.Digimons[idx];
        this.setState({
            showForm:true,
            newName:chosen.name,
            index:idx,
            newLevel:chosen.level,
            newImg:chosen.img,

        })
    }
    updateNameFunc=(e=>this.setState({newName:e.target.value}))
    updateLevelFunc=(e=>this.setState({newLevel:e.target.value}))
    updateImgFunc=(e=>this.setState({newImg:e.target.value}))

    updateFunc=async(e)=>{
        e.preventDefault();
        const id=this.state.Digimons[this.state.index]._id;
const digimonData={
    newName:this.state.newName,
    newLevel:this.state.newLevel,
    newImg:this.state.newImg,
    
}
let updateData=await axios.put(`${this.state.serverLink}/updateDigimon/${id}`,digimonData)
this.setState({
    Digimons:updateData.data
})
    }


    render() {
        return (
            <>
               <h2>favorite page</h2>
               {this.state.showForm&&
               <Form 
               newName={this.state.newName}
newLevel={this.state.newLevel}
newImg={this.state.newImg}
updateNameFunc={this.updateNameFunc}
updateLevelFunc={this.updateLevelFunc}
updateImgFunc={this.updateImgFunc}
updateFunc={this.updateFunc}

               />}
               {this.state.showDigimons&&this.state.Digimons.map((digomon,idx)=>{
                   return(
                   <UpdateDeleteCard
                   index={idx}
                   digomon={digomon}
                   deleteDigimon={this.deleteDigimonFunc}
                   updateDigimon={this.showFunc}
                   />)
               })}
            </>
        )
    }
}

export default FavoriteDigimons
