const initState = ["Alex", "John", "Sam", "George", "Andrew"];

const peopleReducer = (state = initState, action) => {
  if (action.type === "ADD_NEW_USER") {
    return state.concat(`Alex${Date.now()}`);
  }
  return state;
};

export default peopleReducer;
