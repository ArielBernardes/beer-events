import axios from 'axios';
import {createContext, useEffect, useState} from 'react';

export const BeerContext = createContext([]);

export const BeerProvider = ({children}) => {
    
    const [beerList, setBeerList] = useState([]);

       useEffect( ()=> {
           axios.get('https://api.punkapi.com/v2/beers')
            .then(res => {
            console.log(res)
            setBeerList(res.data)
            })
            .catch(e=> console.log(e))
    },[]);

    return (
        <BeerContext.Provider value = {{beerList}}>
            {children}
        </BeerContext.Provider>
    )
    
}