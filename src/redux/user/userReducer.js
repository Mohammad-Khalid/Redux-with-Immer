import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes"

import { produce } from "immer"

const initialState = {
  loading: false,
  users: [],
  error: "",
}

const reducer = produce((draft, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST: {
      draft.loading = true
      return draft
    }
    case FETCH_USERS_SUCCESS: {
      draft.loading = false
      draft.users = action.payload
      draft.error = ""
      return draft
    }
    case FETCH_USERS_FAILURE: {
      draft.loading = false
      draft.users = []
      draft.error = action.payload
      return draft
    }
    default:
      return draft
  }
}, initialState)

export default reducer
