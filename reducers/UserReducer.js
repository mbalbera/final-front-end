// import { fetchUsers } from "../Actions/friendship";
import { FETCH_USERS } from "../constants/actionCreators";

const INIT_STATE = {
    user: [],
    sport: "",
    microMode: false
};

function UserReducer(state = INIT_STATE, action) {
    switch (action.type) {
    //     case "FETCH_USERS":
    //         return { ...state, users: action.payload };
        case "CHANGE_SPORT":
            return {...state, sport: action.payload}
        case "CHANGE_MICROMODE":
            return { ...state, microMode: !microMode }
        default:
            return state;
        break;
    }
}

export { UserReducer };