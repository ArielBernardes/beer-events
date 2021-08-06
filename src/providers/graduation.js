import {createContext, useState} from 'react';

export const GraduationContext = createContext([]);

export const GraduationProvider = ({children}) => {
    const [graduationList, setGraduationList] = useState([]);

    const addToGraduation = (item) => {
        setGraduationList([...graduationList, item]);
    }

    const removeFromGraduation = (item) => {
        const newList = graduationList.filter(beer=> beer !== item );
        setGraduationList(newList);
    }

    return (
        <GraduationContext.Provider value = {{graduationList,addToGraduation,removeFromGraduation}}>
            {children}
        </GraduationContext.Provider>
    )
}