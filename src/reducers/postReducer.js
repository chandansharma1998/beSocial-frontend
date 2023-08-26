export const postReducer = (state={
    posts:[], error:false, uploading:false
}, action) => {
    switch (action.type){
        case "UPLOAD_START":
            return {...state, uploading:true, error:false}
        case "UPLOAD_SUCCESS":
            return {...state, posts:[action.newPost,...state.posts], uploading:false, error:false}
        case "UPLOAD_FAIL":
            return {...state, uploading:false, error:true}
        case "FETCHING_START":
            return {...state, uploading:true, error:false }
        case "FETCHING_SUCCESS":
            return {...state, posts:action.data, uploading:false, error:false}
        case "FETCHING_FAIL":
            return {...state, uploading:false, error:true}
        default:
            return state;
    }
}

export default postReducer