import React, { Component } from 'react'
import axios from 'axios';
import DigimonsCard from './DigimonsCard';

 class Main extends Component {
     constructor(props){
         super(props);
         this.state={
            serverLink:`http://localhost:3334`,
            showDigimons:false,
            Digimons:[],
         }
     }
     componentDidMount=async()=>{

        const Digimons=await axios.get(`${this.state.serverLink}/Digimons`);
        this.setState({
            Digimons:Digimons.data,
            showDigimons:true

        })
     }
     addToFavFun=async(digiData)=>{
         await axios.post(`${this.state.serverLink}/addToFav`,digiData)
     }
    render() {
        return (
            <>
                {this.state.showDigimons&&this.state.Digimons.map((Digimon,idx)=>{
                    return(
                        <DigimonsCard
                        Digimon={Digimon}
                        idx={idx}
                        addToFav={this.addToFavFun}
                        />
                    )
                })}
            </>
        )
    }
}

export default Main
