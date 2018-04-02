const initialState = {experiences: []}

const experienceReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_EXPERIENCE':
      return {
        ...state,
        experiences: [...state.experiences, {
          title: action.title,
          date: action.date,
          details: action.details,
          recommendation: action.recommendation
        }]
      }
    default:
      return state
  }
}

export default experienceReducer;

