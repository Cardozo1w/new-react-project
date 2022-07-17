import { counterAction, counterState } from "../interfaces/interfaces"

export const counterReducer = (state: counterState, action: counterAction): counterState => {

    const { counter, changes } = state

    switch (action.type) {
        case 'IncreaseBy':
            return {
                previous: counter,
                counter: counter + action.payload.value,
                changes: changes + 1,
            }

        case 'reset':
            return {
                counter: 0,
                changes: 0,
                previous: 0
            }
        default:
            return state

    }

}