const initialState = {
  friends: [
    {
      id: 1,
      name: 'testfriend',
      age: 30,
      email: 'ben@lambdaschool.com',
    },
    {
      id: 2,
      name: 'testfriend2',
      age: 45,
      email: 'austen@lambdaschool.com',
    }
  ],
  error: null
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default rootReducer;