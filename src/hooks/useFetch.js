import axios from 'axios';
import { useEffect, useState } from "react"

export const useFetch = (url,metodo,body={}) => {

    const [estado, setEstado] = useState({datos : null});
    
    useEffect(()=>{
        switch(metodo){
            case '1' : //post
                axios.post(url,body)
                .then(res => {
                    console.log(res);
                    setEstado({
                        datos : res
                    });
                })
                break;

            case '2' :
                //delete
                break;

            case '3' : //get
                axios.get(url)
                .then(res => {
                    setEstado({
                        datos : res
                    });
                });
                break;
            
            case '4' :
                //get
                break;
        }
    },[url,metodo]);

    return estado;
}