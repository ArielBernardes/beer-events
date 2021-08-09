import {createContext, useState} from 'react';

export const ConfraternizationContext = createContext([]);

export const ConfraternizationProvider = ({children}) => {
    const [confraternizationList,setConfraternizationList] = useState([]);

    const addToConfraternization = (item) => {
        setConfraternizationList([...confraternizationList, item]);
        
    }
    
    const removeFromConfraternization = (item) => {
        const remove = confraternizationList.filter((beer,index,arr)=> arr.indexOf(item) !== index)
        setConfraternizationList(remove);
    }

    return (
        <ConfraternizationContext.Provider value = {{confraternizationList,addToConfraternization,removeFromConfraternization}}>
            {children}
        </ConfraternizationContext.Provider>
    )
}