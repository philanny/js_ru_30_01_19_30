import {articles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, SELECT_ARTICLE, SELECT_ARTICLE_BY_DATE} from '../constants'

export default (articles = defaultArticles, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id)
        case SELECT_ARTICLE:
            return defaultArticles.filter(article => payload.selection.map( elem => elem.value ).indexOf(article.id) !== -1)
        case SELECT_ARTICLE_BY_DATE:
            return defaultArticles.filter(article => payload.date == article.date)
    }

    return articles
}
