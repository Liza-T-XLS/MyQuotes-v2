// == Imports

// == Initial State

const initialState = {
  // ici l'état initial
  pseudonym: '',
  password: '',
  confirmPassword: '',
};

// == Reducer

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return state;
  }
};

// == Export

export default userReducer;
