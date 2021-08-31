import React from 'react';
import Article from './Article';

function ArticleList({ posts }) {

    const articles = posts.map(post => <Article 
        title={post.title} 
        date={post.date}
        preview={post.preview}
        key={post.preview}
        minutes={post.minutes} />);

    return (
        <main>
            {articles}
        </main>
    );
};

export default ArticleList;