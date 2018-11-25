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

        case labels.LOAD_MEMBERS_SUCCESS:
            return { ...state, isLoading: state.isLoading - 1, data: action.payload.members, labels: action.payload.labels };

        case labels.LOAD_MEMBERS_ERROR:
            return { ...state, isLoading: state.isLoading - 1 };

        default:
            return state
    }
};
