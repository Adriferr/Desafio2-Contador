import {useState} from "react";

export default function Main2(){

    const [numero, setNumero] = useState(0)
    const adicionar = () =>{
        if(numero<10){
            setNumero(numero + 1);
        }
        
    }
    const remover = () =>{
        if(numero>0){
            setNumero(numero - 1);   
        }
       
    }

    return (
        
        <>
        <h1 style={{color:'purple'}}>{numero}</h1>
        <button onClick={adicionar} style={{backgroundColor:'blue'}}>+</button>
        <button onClick={remover} style={{backgroundColor:'red'}}>-</button>
        </>
    )
}
