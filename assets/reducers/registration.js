// == Imports

import { CHANGE_FIELD } from '../actions/registration';

// == Initial State

const initialState = {
  pseudonym: '',
  password: '',
  confirmedPassword: '',
};

// == Reducer

const registrationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD: {
      const target = action.fieldName;
      return {
        ...state,
        [target]: action.newValue,
      };
    }
    default: return state;
  }
};

// == Export

export default registrationReducer;
