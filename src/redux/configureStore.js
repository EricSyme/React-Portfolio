import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Projects } from './projects';
import { Comments } from './comments';
import { Categories } from './categories';
import { Certificates } from './certificates';
import { Biography } from './biography';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            projects: Projects,
            comments: Comments,
            certificates: Certificates,
            categories: Categories,
            biography: Biography
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}