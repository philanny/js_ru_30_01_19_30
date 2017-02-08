import React, { PropTypes } from 'react'
import Article from './Article'
import toggleOpenArticles from '../decorators/toggleOpenArticles'

function ArticleList(props) {
    const {articles, toggleOpenArticle, openArticleId} = props
    const articleElements = articles.map((article) => <li key={article.id}>
        <Article
            article={article}
            isOpen={openArticleId == article.id}
            toggleOpen={toggleOpenArticle}
        />
    </li>)

    return (
        <ul>
            {articleElements}
        </ul>
    )
}

ArticleList.propTypes = {
    //А вот сюда еще и из декоратора данные приходят
    articles: PropTypes.array.isRequired
}

ArticleList.defaultProps = {
    articles: []
}


export default toggleOpenArticles(ArticleList)


