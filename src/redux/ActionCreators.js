import * as ActionTypes from './ActionTypes';
import { PROJECTS } from '../shared/projects';


export const addComment = (projectId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        projectId: projectId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchProjects = () => (dispatch) => {

    dispatch(projectsLoading(true));

    setTimeout(() => {
        dispatch(addProjects(PROJECTS));
    }, 2000);
}

export const projectsLoading = () => ({
    type: ActionTypes.PROJECTS_LOADING
});

export const projectsFailed = (errmess) => ({
    type: ActionTypes.PROJECTS_FAILED,
    payload: errmess
});

export const addProjects = (projects) => ({
    type: ActionTypes.ADD_PROJECTS,
    payload: projects
});