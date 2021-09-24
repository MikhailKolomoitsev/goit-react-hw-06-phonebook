import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer'
import logger from 'redux-logger'

// const middleware = [...getDefaultMiddleware(), logger]

const store = configureStore({
    reducer: {
        contacts: reducer
    },
    // middleware,
    devTools: process.env.NODE_ENV === 'development',
})
export default store