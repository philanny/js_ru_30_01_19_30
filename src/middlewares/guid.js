export default store => next => action => {
    if (!action.commentIds) return next(action);

    const {payload, commentIds, ...rest} = action

    let getId = () => {
        let n = Math.floor((1 + Math.random()) * 1000);
        if (commentIds.some(id => n === id)) {
            return getId()
        } else {
            return n
        }
    }

    next({...rest, payload: { ...payload, commentId: getId()}})
}