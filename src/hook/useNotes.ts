import { useContext } from 'react'
import { NotesContext } from '../context/NotesContext'

export function useNotes() {
    const values = useContext(NotesContext)
    return values
}