import { BUY_ICECREAM } from "./iceCreamTypes"
import { produce } from "immer"

const initialState = {
  numOfIceCreams: 20,
}

const iceCreamReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case BUY_ICECREAM: {
        draft.numOfIceCreams = draft.numOfIceCreams - 1
        break
      }

      default:
        return draft
    }
  })
export default iceCreamReducer
