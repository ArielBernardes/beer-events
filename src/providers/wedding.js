import {createContext,useState} from 'react';

export const WeddingContext = createContext([]);

export const WeddingProvider = ({children}) => {
    const [weddingList,setWeddingList] = useState([]);

    const addWeddingList = (item) => {
        setWeddingList([...weddingList, item]);
    }
    
    const removeFromWedding = (item) => {
        const remove = confraternizationList.filter((beer,index,arr)=> arr.indexOf(item) !== index)
        setWeddingList(remove);
    }

    return (
        <WeddingContext.Provider value ={{weddingList,addWeddingList, removeFromWedding}} >
            {children}
        </WeddingContext.Provider>
    )
}