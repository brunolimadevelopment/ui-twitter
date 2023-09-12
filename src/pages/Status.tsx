import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Status.css'

const answers = [
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso'
]

export function Status() {
    return (
        <main className="status">
            <Header title="Tweet" />

            <Tweet content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam nihil adipisci assumenda velit! Neque quo fugiat possimus, aut pariatur iusto tempora tenetur perspiciatis magni ipsam. Ad quod cum necessitatibus eligendi?" />

            <Separator />

            <form className="answer-tweet-form">
                <label htmlFor="tweet">
                    <img src="https://avatars.githubusercontent.com/u/20023147?v=4" alt="Bruno Lima" />
                    <textarea id="tweet" placeholder="Tweet your answer" />
                </label>

                <button type="submit">Answer</button>
            </form>


            {answers.map(answer => {
                return <Tweet key={answer} content={answer} />
            })}

        </main>
    )
}