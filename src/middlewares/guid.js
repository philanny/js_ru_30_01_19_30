export default store => next => action => {
	//через мидлвары будут проходить все экшины, суть в том, что делать их нужно максимально реюзабильными. Не завязывайся на один экшин
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
