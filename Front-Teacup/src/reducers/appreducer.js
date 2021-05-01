export const initialState = {
  text:'Bonjour'
};


const reducer = (stateActuel = initialState, action = {}) => {

  switch (action.type) {
     
      default:
        return {
          ...stateActuel
        };
  }
}

export default reducer;
