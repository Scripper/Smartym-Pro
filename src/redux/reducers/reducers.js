import fakeData from '../../data/data';

const initialStore = {
    userList: fakeData,
    searchValue: '',
    userAmount: 0,
    popUpVisible: false,
    popUpDataId: 1,
    popUpData: null,
};

const getPopData = (state, action) => {
    let userIndex;
    const singleUser = state.userList.filter((item, index) => {
        if(item.id === action.payload) {
            userIndex = index
            return true
        }
        return false
    });
    return { ...state, popUpVisible: true, popUpData: singleUser[0], popUpDataId: userIndex }
}

const setNewUserList = (state, action) => {
    const newUserList = [...state.userList]
    newUserList.splice(state.popUpDataId,1, action.payload)
    return { ...state, userList: newUserList, popUpVisible: false }
}

const reducer = (state = initialStore, action) => {
    switch (action.type) {
        case 'SEARCH_USER':
            return { ...state, searchValue: action.payload };

        case 'USER_AMOUNT':
            return { ...state, userAmount: action.payload };    
       
        case 'MUTATE_USER':
            return setNewUserList(state, action) 

        case 'USER_ID':
            return getPopData(state, action);     
            
        case 'CLOSE_MODAL':
            return { ...state, popUpVisible: false };   

        default:
            return state;
    }
};

export default reducer;