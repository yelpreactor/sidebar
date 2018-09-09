const hoursOfOperationReducer = (state = [], action) => {
  if (action.type === 'CHANGE_HOURS_OF_OPERATION') {
    return action.hoursOfOperation;
  }
  return state;
};

export default hoursOfOperationReducer;