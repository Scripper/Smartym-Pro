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

export const MUTATE_USER = (newData) => {
    return {
        type: "MUTATE_USER",
        payload: newData
    }
};

export const USER_ID = (userId) => {
    return {
        type: "USER_ID",
        payload: userId
    }
};

export const CLOSE_MODAL = () => {
    return {
        type: "CLOSE_MODAL",
    }
};