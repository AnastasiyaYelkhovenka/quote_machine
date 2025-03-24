import React from "react";

import './app.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";

const quotes = [
    {
        quote: 'Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.',
        author: 'Princess Diana'
    },
    {
        quote: 'I think the biggest disease the world suffers from in this day and age is the disease of people feeling unloved. ' +
            'I know that I can give love for a minute, for half an hour, for a day, for a month, but I can give. I am very happy to do that, I want to do that.',
        author: 'Princess Diana'
    },
    {
        quote: 'We can all fight against loneliness by engaging in random acts of kindness.',
        author: 'Gail Honeyman'
    },
    {
        quote: 'Not to sound too Pollyanna-ish, but I think most people are decent, caring human beings. ' +
            'You don\'t necessarily see that reflected in fiction maybe, because possibly it\'s perceived as not having much dramatic potential.',
        author: 'Gail Honeyman'
    },
    {
        quote: 'I often think that the night is more alive and more richly colored than the day.',
        author: 'Vincent Van Gogh'
    },
    {
        quote: 'For my part I know nothing with any certainty, but the sight of the stars makes me dream.',
        author: 'Vincent Van Gogh'
    },
    {
        quote: 'The most important thing is to try and inspire people so that they can be great in whatever they want to do.',
        author: 'Kobe Bryant'
    },
    {
        quote: 'Everything negative - pressure, challenges - is all an opportunity for me to rise.',
        author: 'Kobe Bryant'
    },
];

const quotesLength = quotes.length;

function getRandomIndex() {
    return Math.floor(Math.random() * quotesLength);
}

const App = () => {
    const [index, setIndex] = React.useState(0);

    const updateIndex = () => {
        setIndex(getRandomIndex());
    }

    return (
        <div id="quote-box">
            <p id="text">“ {quotes[index].quote}</p>
            <header id="author">- {quotes[index].author}</header>
            <footer>
                <a
                    id="tweet-quote"
                    href="https://twitter.com/intent/tweet"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faSquareXTwitter} />
                </a>
                <button id="new-quote" onClick={updateIndex}>New quote</button>
            </footer>

        </div>
    );
}

export default App;
