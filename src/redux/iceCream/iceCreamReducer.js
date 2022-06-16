import { BUY_ICECREAM } from "./iceCreamTypes"
import { produce } from "immer"

const initialState = {
  numOfIceCreams: 20,
}

const iceCreamReducer = produce((draft, action) => {
  switch (action.type) {
    case BUY_ICECREAM: {
      draft.numOfIceCreams = draft.numOfIceCreams - 1
      return draft
    }

    default:
      return draft
  }
}, initialState)
export default iceCreamReducer
