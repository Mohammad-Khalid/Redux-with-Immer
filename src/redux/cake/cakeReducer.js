import { BUY_CAKE } from "./cakeTypes"
import { produce } from "immer"

const initialState = {
  numOfCakes: 10,
}

const cakeReducer = produce((draft, action) => {
  switch (action.type) {
    case BUY_CAKE: {
      draft.numOfCakes = draft.numOfCakes - action.payload
      break
    }

    default:
      return draft
  }
}, initialState)

// const cakeReducer = (state = initialState, action) =>
//   produce(state, (draft) => {
//     switch (action.type) {
//       case BUY_CAKE: {
//         draft.numOfCakes = draft.numOfCakes - action.payload
//         break
//       }

//       default:
//         return draft
//     }
//   })

export default cakeReducer
