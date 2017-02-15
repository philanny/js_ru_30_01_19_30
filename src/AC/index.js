import {INCREMENT, DELETE_ARTICLE, SELECT_ARTICLE} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function doSelect(selection) {
    return {
        type: SELECT_ARTICLE,
        payload: { selection }
    }
}