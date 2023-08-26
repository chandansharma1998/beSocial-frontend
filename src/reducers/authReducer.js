const authReducer = (
    //initial state
    state = {authData:null, loading:false, error:false},
    action
) => {
    switch (action.type) {
        case "AUTH_START":
            return {...state, loading:true, error:false}
        case "AUTH_SUCCESS":
            localStorage.setItem("profile",JSON.stringify({...action?.data}))
            return {authData:action.data, loading:false, error:false}
        case "AUTH_FAIL":
            return {...state, loading:false, error:true}
        case "LOGOUT":
            localStorage.removeItem("store")
            localStorage.removeItem("profile")
            return {...state, authData:null, loading:false, error:false }
        case "UPDATE_START":
            return {...state, loading:true, error:false}
        case "UPDATE_SUCCESS":
            localStorage.setItem("profile",JSON.stringify({...action?.data}))
            return {authData:action.data, loading:false, error:false}
        case "UPDATE_FAIL":
            return {...state, loading:false, error:true}
        case "FOLLOW_USER":
            return {...state, authData:{...state.authData,user:{...state.authData.user, followings:[...state.authData.user.followings,action.id]}}}
        case "UNFOLLOW_USER":
            return {...state, authData:{...state.authData, user:{...state.authData.user, followings:[...state.authData.user.followings.filter(personId => personId !== action.id)]}}}
        default:
            return state;
    }
}

export default authReducer