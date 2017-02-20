import {normalizedComments as defaultComments} from '../fixtures'
import {arrayToMap} from '../utils'
import {ADD_COMMENT} from '../constants'

const defaultState = arrayToMap(defaultComments)

export default (state = defaultState, action) => {
    const {type, payload} = action

    switch (type) {
        case ADD_COMMENT:
            // ...{ [payload.commentId] лишний спрэд
            return { ...state, ...{ [payload.commentId]: { ...payload.comment, id: payload.commentId } } }
    }

    return state
}
