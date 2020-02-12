export const SEARCH_USER = (setSearchValue) => {
    return {
        type: "SEARCH_USER",
        payload: setSearchValue
    }
};


export const USER_AMOUNT = (amount) => {
    return {
        type: "USER_AMOUNT",
        payload: amount
    }
};