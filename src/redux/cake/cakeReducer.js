import { BUY_CAKE } from "./cakeTypes"
import { produce } from "immer"

const initialState = {
  numOfCakes: 10,
}

const cakeReducer = produce((draft, action) => {
  switch (action.type) {
    case BUY_CAKE: {
      draft.numOfCakes = draft.numOfCakes - action.payload
      return draft
    }

    default:
      return draft
  }
}, initialState)

export default cakeReducer
