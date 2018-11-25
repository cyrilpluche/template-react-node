import _action from "../actions";

const labels = _action.adminAction.labels

const initialState = {
    data: []
};

export function Admin (state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
};
