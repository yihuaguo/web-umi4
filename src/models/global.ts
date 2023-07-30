const global = {
    namespace: 'global',
    state: {
        address: '123',
    },
    effects: {
        // *address({ payload = '' }, { put }) {
        //     yield put({
        //         type: 'setAddress',
        //         payload: payload || '',
        //     });
        // },
    },
    reducers: {
        // setAddress(state, action) {
        //     return {
        //         ...state,
        //         address: action.payload,
        //     };
        // },
    },
};

export default global;