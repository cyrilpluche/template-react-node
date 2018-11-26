import _action from "../actions";

const labels = _action.adminAction.labels

const initialState = {
    isLoading: 0,
    data: [],
    labels: []
};

export function Admin (state = initialState, action) {
    switch (action.type) {
        case labels.LOAD:
            return { ...state, isLoading: state.isLoading + 1 };


        case labels.LOAD_DATA_SUCCESS:
            return { ...state, isLoading: state.isLoading - 1, data: action.payload.data, labels: action.payload.labels };

        case labels.LOAD_DATA_ERROR:
            return { ...state, isLoading: state.isLoading - 1 };


        case labels.UPDATE_DATA_SUCCESS:
            let updatedData = Array.from(state.data)
            updatedData[action.payload.index] = action.payload.element
            return {
                ...state,
                isLoading: state.isLoading - 1,
                data: updatedData
            };

        case labels.UPDATE_DATA_ERROR:
            return { ...state, isLoading: state.isLoading - 1 };


        case labels.DELETE_DATA_SUCCESS:
            return { ...state, isLoading: state.isLoading - 1, data: action.payload.data };

        case labels.DELETE_DATA_ERROR:
            return { ...state, isLoading: state.isLoading - 1 };


        default:
            return state
    }
};
