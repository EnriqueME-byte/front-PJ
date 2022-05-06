import axios from 'axios';
import { useEffect, useState } from "react"

export const useFetch = (url, metodo, body = {}) => {

    const [estado, setEstado] = useState({ datos: null });

    useEffect(() => {
        if (url != '') { //Se valida que haya una url si no, no se realzia la petición
            switch (metodo) {
                case '1': //post
                    axios.post(url, body)
                        .then(res => {
                            console.log(res);
                            setEstado({
                                datos: res
                            });
                        })
                    break;

                case '2':
                    axios.delete(url)
                        .then(res => {
                            console.log(res);
                        });
                    break;

                case '3': //get
                    axios.get(url)
                        .then(res => {
                            setEstado({
                                datos: res
                            });
                        });
                    break;

                case '4'://put
                    axios.put(url,body)
                        .then(res => {
                            console.log(res);
                        })
                    break;
            }
        }
    }, [url, metodo]);

    return estado;
}