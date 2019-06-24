import { PROJECTS } from '../shared/projects';
import { COMMENTS } from '../shared/comments';
import { BIOGRAPHY } from '../shared/biography';
import { CERTIFICATES } from '../shared/certificates';
import { CATEGORIES } from '../shared/categories';

export const initialState = {
    dishes: PROJECTS,
    comments: COMMENTS,
    biographies: BIOGRAPHY,
    certificates: CERTIFICATES,
    categories: CATEGORIES
};

export const Reducer = (state = initialState, action) => {
    return state;
};