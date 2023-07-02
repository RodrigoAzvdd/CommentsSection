import { useState } from "react"
import Button from "../Button"
import Input from "../Input"
import Textarea from "../Textarea"


export default function Form({ func }) {
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")

    const handleClick = ev => {
        ev.preventDefault()
        func(email, comment)
    }

    return (
        <form onSubmit={handleClick}> 
            <Input
                id={"email"}
                name={"email"}
                label={"Email"}
                type={"text"}
                func={setEmail}
            />

            <Textarea
                id={"comentario"}
                name={"comentario"}
                label={"Comentário"}
                rows={"5"}
                func={setComment}
            />

            <Button text={"Enviar comentário"} />
        </form>
    )
}
