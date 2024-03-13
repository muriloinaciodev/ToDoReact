import { ReactNode, createContext, useState } from 'react'

type NotesContextProviderProps = {
    children: ReactNode
}

type NotesContextType = {
    notes: NotesType[]
    setNotes: Function
}

type NotesType = {
    id: string
    text:string
}

export const NotesContext = createContext({} as NotesContextType)

export function NotesContextProvider(props:NotesContextProviderProps){
    const [notes, setNotes] = useState([])
    return (
        <NotesContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NotesContext.Provider>
    )
}