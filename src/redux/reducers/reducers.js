const initialStore = {
    userList: [],
    searchValue: 10,
    userAmount: 0,
};

const reducer = (state = initialStore, action) => {
    switch (action.type) {
        case 'SEARCH_USER':
            return { ...state, searchValue: action.payload };
       
        default:
            return state;
    }
};

export default reducer;