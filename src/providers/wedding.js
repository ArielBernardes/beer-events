import {createContext,useState} from 'react';

export const WeddingContext = createContext([]);

export const WeddingProvider = ({children}) => {
    const [weddingList,setWeddingList] = useState([]);

    const addWeddingList = (item) => {
        setWeddingList([...weddingList, item]);
    }
    
    const removeFromWedding = (item) => {
        const newList = weddingList.filter(beer => beer !== item);
        setWeddingList(newList);
    }

    return (
        <WeddingContext.Provider value ={{weddingList,addWeddingList, removeFromWedding}} >
            {children}
        </WeddingContext.Provider>
    )
}