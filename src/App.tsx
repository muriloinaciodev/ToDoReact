import { FormCreateToDo } from './components/FormCreateToDo'
import { NotesList } from './components/NotesList'
import './styles/app.scss'


function App() {
  return (
    <div className='mainContent'>
      <FormCreateToDo/>
      <NotesList />
    </div>
  )
}

export default App
