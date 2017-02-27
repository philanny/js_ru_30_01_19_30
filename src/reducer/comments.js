import {ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS} from '../constants'
import {arrayToMap} from '../utils'
import {Record} from 'immutable'
import {DefaultReducerState} from './helpers'

const CommentModel = Record({
    id: null,
    user: null,
    text: null
})

const defaultState = new DefaultReducerState()

export default (state = defaultState, action) => {
    const {type, payload, randomId, response} = action

    switch (type) {
        case LOAD_COMMENTS + START:
            return state.set('isLoading', true)
        case LOAD_COMMENTS + SUCCESS:
            return state
                .set('isLoading', false)
                //почему .concat ? это же Map, используй .merge
                .updateIn(['entities'], comments => comments.concat(arrayToMap(response, CommentModel)));
        case ADD_COMMENT:
            //поменяй
            return state.set(randomId, {...payload.comment, id: randomId})
    }

    return state
}
