import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';

const App = () => {

    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: 'd9cb7c93ecf436d3ccc22e8bf661667b2e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: ({command, articles }) => {
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                    setActiveArticle(-1)
                }else if(command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1 );
                }
            }
        })
    }, [])
    return (
        <div>
            <div className={classes.logoContainer}>
            <img src="https://portraitstonelabs.com/static/media/FaceBackground2.40b5fd0f.png" className={classes.alienLogo} alt="logo" />
            </div>
            <NewsCards articles={ newsArticles } activeArticle={activeArticle} />
        </div>
    )
}

export default App;