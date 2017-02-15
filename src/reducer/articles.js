import {articles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, SELECT_ARTICLE, SELECT_ARTICLE_BY_DATE} from '../constants'

export default (articles = defaultArticles, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id)
        case SELECT_ARTICLE:
            //вспомни, что редюсеры - чистые функции, нельзя брать внешние переменные
            //по сути ты удаляешь статьи, а должен хранить здесь список всех статей, а фильтровать где-то в другом месте(например в коннекте)
            return defaultArticles.filter(article => payload.selection.map( elem => elem.value ).indexOf(article.id) !== -1)
        case SELECT_ARTICLE_BY_DATE:
            return defaultArticles.filter(article => payload.date == article.date)
    }

    return articles
}
