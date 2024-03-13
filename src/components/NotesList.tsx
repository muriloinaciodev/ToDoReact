import { Note } from './Note'
import '../styles/NotesList.scss'
import { useNotes } from '../hook/useNotes'

export function NotesList() {
  const { notes } = useNotes()
  return (
    <div className='notesList'>
      {
        notes.map(note => (
          <Note id={note.id} key={note.id} text={note.text}/>
        ))
      }
    </div>
  )
}