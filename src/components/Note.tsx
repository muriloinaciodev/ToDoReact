import { Button } from "@chakra-ui/react"
import '../styles/Note.scss'
import { useNotes } from "../hook/useNotes"

type NoteProps = {
    text:string
    id: string
}

export function Note({ text, id }: NoteProps) {
    const {notes, setNotes} = useNotes()

    function handleDelNote (){
        const result = notes.filter(note => note.id != id)
        setNotes(result)
    }
    return (
        <div id={id} className="note">
            <p>{text}</p>
            <Button colorScheme="red" onClick={handleDelNote}>Del</Button>
        </div>
    )
}