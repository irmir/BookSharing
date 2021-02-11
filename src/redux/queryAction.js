export const getBook = (data) => ({
    type: 'GET_BOOK',
    payload: data
}) 

export const getUserData = (data) => ({
    type: 'GET_USER_DATA',
    payload: data
})

export const getDataLocation = (data) => ({
    type: 'GET_DATA_LOCATION',
    payload: data
})
