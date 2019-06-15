import { LOAD_CONTACTS } from "../actions/contacts";

const InitialState = {
  contacts: []
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOAD_CONTACTS:
      return {
        contacts: [...action.contacts]
      };
    default:
      return state;
  }
};

export default reducer;
