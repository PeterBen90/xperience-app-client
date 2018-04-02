export const ADD_EXPERIENCE = 'ADD_EXPERIENCE';
export const addExperience = (title, date, details, recommendation) => ({
    type: ADD_EXPERIENCE,
    title,
    date,
    details,
    recommendation,
});

export const DELETE_EXPERIENCE = 'DELETE_EXPERIENCE';
export const deleteExperience = () => ({
    type: DELETE_EXPERIENCE,
});

export const EDIT_EXPERIENCE = 'EDIT_EXPERIENCE';
export const editExperience = () => ({
    type: EDIT_EXPERIENCE,
});

