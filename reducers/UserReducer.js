// import { fetchUsers } from "../Actions/friendship";
import { FETCH_USERS } from "../constants/actionCreators";

const INIT_STATE = {
    user: [],
    sport: ""
};

function UserReducer(state = INIT_STATE, action) {
    switch (action.type) {
        // case FETCH_USERS:
        //     return { ...state, users: action.payload };
        //     break;

        case "CHANGE_SPORT":
            return {...state, sport: action.payload}
        default:
            return state;
            break;
    }
}

export { UserReducer };