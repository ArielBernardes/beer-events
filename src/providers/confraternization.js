import {createContext, useState} from 'react';

export const ConfraternizationContext = createContext([]);

export const ConfraternizationProvider = ({children}) => {
    const [confraternizationList,setConfraternizationList] = useState([]);

    const addToConfraternization = (item) => {
        setConfraternizationList([...confraternizationList, item]);
        
    }
    
    const removeFromConfraternization = (item) => {
        const newList = confraternizationList.filter(beer=> beer !== item);
        setConfraternizationList(newList);
    }

    return (
        <ConfraternizationContext.Provider value = {{confraternizationList,addToConfraternization,removeFromConfraternization}}>
            {children}
        </ConfraternizationContext.Provider>
    )
}