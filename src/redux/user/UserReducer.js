import { UserActionTypes } from "./UserType";

const INITIAL_STATE = {
    currentUser: null
}

const {SET_CURRENT_USER} = UserActionTypes

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case SET_CURRENT_USER:
          return {
            //   everything else on the state
              ...state,
              currentUser: action.payload
          }
      default:
          return state;
  }
};

export default UserReducer;
