const initialState = {
  experiences: []
}

const experienceReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_EXPERIENCE_SUCCESS':
      return {
        ...state,
        experiences: [...state.experiences, {
          title: action.title,
          date: action.date,
          location: action.location,
          details: action.details,
          recommendation: action.recommendation
        }]
      }

    case 'FETCH_EXPERIENCES_SUCCESS':
      return {
        ...state,
        experiences: action.experiences
      }

    default:
      return state
  }
}

export default experienceReducer;

