import {DELETE_ARTICLE, LOAD_ALL_ARTICLES, FAIL, SUCCESS, START, ADD_COMMENT} from '../constants'
import {arrayToMap} from '../utils'

const defaultState = {
    isLoading: false,
    entities: arrayToMap([])
}


export default (state = defaultState, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            //todo fix me
            return state.filter(article => article.id !== payload.id)

        case LOAD_ALL_ARTICLES + START:
            return {...state, isLoading: true}

        case LOAD_ALL_ARTICLES + SUCCESS:
            return {
                ...state,
                entities: arrayToMap(action.response),
                isLoading: false
            }

        case ADD_COMMENT:
            let commentsListByArticleId = state.entities[payload.articleId].comments
            commentsListByArticleId.push(payload.commentId)

            return {
                //аналогично ...{entities: то же, что и entities:
                ...state, ...{entities: {...state.entities, ...{[payload.articleId]: {...state.entities[payload.articleId], ...{commentsListByArticleId}}}}}
            }
    }

    return state
}
