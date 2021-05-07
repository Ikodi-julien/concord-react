/* Here there's only data and actions regarding login, for instance pseudo or favs are mentionned in 'userReducer' */

const authState = {
  password: 'bob',
  email: 'jefume@despieds.fr',
  token: '3568dgfbh854dwqfb4wdfb'
}

const reducer = (stateActuel=authState, action={}) => {
  switch (action.type) {
    default :
      return {
        ...stateActuel
      }
  }
}

export default reducer;
