import { Button, Textarea } from "@chakra-ui/react"
import { FormEvent } from "react"
import '../styles/FormCreateToDo.scss'
import { useNotes } from "../hook/useNotes"

export function FormCreateToDo(){
  const { notes, setNotes } = useNotes()

  function handleAddNote (event: FormEvent){
    event.preventDefault()
    const textArea = document.getElementById('text') as HTMLTextAreaElement

    const text = textArea.value.trim()
    if (!text) return
    setNotes([...notes, {id: crypto.randomUUID(), text:text}])

    textArea.value = ''
    textArea.focus()
  }

  return (
    <form className="formCreate" onSubmit={handleAddNote}>
      <label htmlFor=""></label>
      <Textarea 
        placeholder="Sua anotação..." 
        resize="none"
        id="text"
      />
      <Button 
        colorScheme="green"
        type="submit"
      >
        Adicionar anotação
      </Button>
    </form>
  )
}