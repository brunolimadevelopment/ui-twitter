import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Status.css'


export function Status() {


    const [newAnswer, setNewAnswer] = useState('')

    const [answers, setAnswers] = useState([
        'Concordo...',
        'Olha, faz sentido!',
        'Parabéns pelo progresso'
    ])

    function createNewAnswer(event: FormEvent) {
        event.preventDefault()

        setAnswers([newAnswer, ...answers])
        setNewAnswer('')
    }

    function handleHotkeySubmit(event: KeyboardEvent) {
        if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
            setAnswers([newAnswer, ...answers])
            setNewAnswer('')
        }
    }

    return (
        <main className="status">
            <Header title="Tweet" />

            <Tweet content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam nihil adipisci assumenda velit! Neque quo fugiat possimus, aut pariatur iusto tempora tenetur perspiciatis magni ipsam. Ad quod cum necessitatibus eligendi?" />

            <Separator />

            <form onSubmit={createNewAnswer} className="answer-tweet-form">
                <label htmlFor="tweet">
                    <img src="https://avatars.githubusercontent.com/u/20023147?v=4" alt="Bruno Lima" />
                    <textarea onChange={(event) => {
                        setNewAnswer(event.target.value)
                    }} value={newAnswer} onKeyDown={handleHotkeySubmit} id="tweet" placeholder="Tweet your answer" />
                </label>

                <button type="submit">Answer</button>
            </form>


            {answers.map(answer => {
                return <Tweet key={answer} content={answer} />
            })}

        </main>
    )
}