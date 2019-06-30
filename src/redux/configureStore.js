import { createStore, combineReducers } from 'redux';
import { Projects } from './projects';
import { Comments } from './comments';
import { Categories } from './categories';
import { Certificates } from './certificates';
import { Biography } from './biography';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            projects: Projects,
            comments: Comments,
            certificates: Certificates,
            categories: Categories,
            biography: Biography
        })
    );

    return store;
}