import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import './Timeline.css'


const tweets = [
    'Meu primeiro tweet',
    'Teste',
    'Deu certo tweetar!'
]


export function Timeline() {
    return (
        <main className="timeline">
            <Header title="Home" />


            <form className="new-tweet-form">
                <label htmlFor="tweet">
                    <img src="https://avatars.githubusercontent.com/u/20023147?v=4" alt="Bruno Lima" />
                    <textarea id="tweet" placeholder="What's happening?" />
                </label>

                <button type="submit">Tweet</button>
            </form>

            <Separator />

            {tweets.map(tweet => {
                return <Tweet key={tweet} content={tweet} />
            })}

        </main>
    )
}