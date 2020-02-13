import fakeData from '../../data/data';

const initialStore = {
    userList: fakeData,
    searchValue: '',
    userAmount: 0,
    popUpVisible: true,
    popUpDataId: 5,
};

const reducer = (state = initialStore, action) => {
    switch (action.type) {
        case 'SEARCH_USER':
            return { ...state, searchValue: action.payload };

        case 'USER_AMOUNT':
            return { ...state, userAmount: action.payload };    
       
        case 'MUTATE_USER':
            return { ...state, userAmount: action.payload }; 

        default:
            return state;
    }
};

export default reducer;