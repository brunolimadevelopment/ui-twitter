import { ChatCircle, ArrowsClockwise, Heart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import './Tweet.css';

export function Tweet(props) {
    //console.log(props);
    return (
        <Link to="/status" className="tweet">
            <img src="https://github.com/brunolimadevelopment.png" alt="Bruno Lima" />

            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>Bruno Lima</strong>
                    <span>@brunolima</span>
                </div>
                <p>{props.content}</p>

                <div className="tweet-content-footer">
                    <button type="button">
                        <ChatCircle />
                        20
                    </button>
                    <button type="button">
                        <ArrowsClockwise />
                        20
                    </button>
                    <button type="button">
                        <Heart />
                        20
                    </button>

                </div>
            </div>
        </Link>
    )
}