const experienceReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_EXPERIENCE':
      return [
        ...state,
        {
          title: action.title,
          date: action.date,
          details: action.details,
          recommendation: action.recommendation
        }
      ]
    default:
      return state
  }
}

export default experienceReducer;

