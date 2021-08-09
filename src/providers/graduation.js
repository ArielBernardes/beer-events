import {createContext, useState} from 'react';

export const GraduationContext = createContext([]);

export const GraduationProvider = ({children}) => {
    const [graduationList, setGraduationList] = useState([]);

    const addToGraduation = (item) => {
        setGraduationList([...graduationList, item]);
    }

    const removeFromGraduation = (item) => {
        const remove = confraternizationList.filter((beer,index,arr)=> arr.indexOf(item) !== index)
        setGraduationList(remove);
    }

    return (
        <GraduationContext.Provider value = {{graduationList,addToGraduation,removeFromGraduation}}>
            {children}
        </GraduationContext.Provider>
    )
}