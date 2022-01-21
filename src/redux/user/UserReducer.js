// import React from 'react';
// import { connect } from 'react-redux';
const INITIAL_STATE = {
    currentUser: null
}
const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case 'SET_CURRENT_USER':
          return {
              ...state,
              currentUser: action.payload
          }
      default:
          return state;
  }
};

export default UserReducer;
// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(UserReducer);
