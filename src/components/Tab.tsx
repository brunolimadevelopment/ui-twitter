import { Link } from 'react-router-dom'
import './Tab.css';

export function Tab(props) {

    return (
        <div className="notifications">
            <div class="notifications-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-yucp9h r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M22.99 11.295l-6.986-2.13-.877-.326-.325-.88L12.67.975c-.092-.303-.372-.51-.688-.51-.316 0-.596.207-.688.51l-2.392 7.84-1.774.657-6.148 1.82c-.306.092-.515.372-.515.69 0 .32.21.6.515.69l7.956 2.358 2.356 7.956c.09.306.37.515.69.515.32 0 .6-.21.69-.514l1.822-6.15.656-1.773 7.84-2.392c.303-.09.51-.37.51-.687 0-.316-.207-.596-.51-.688z" fill="#794BC4"></path></g></svg>
            </div>
            <div>
                <img src="https://github.com/brunolimadevelopment.png" alt="Bruno Lima" />

                <div className="notifications-content">
                    <div className="notifications-content-header">
                        <strong>Bruno Lima</strong>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, perspiciatis dolorum. Omnis explicabo voluptate dignissimos fugit neque nemo magni qui, cumque optio saepe aut. Hic iure animi velit aut dolorem!</p>
                </div>
            </div>
        </div>
    )
}