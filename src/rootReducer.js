const DEFAULT_STATE = {
  memes: []
};

function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, memes: [...state.memes, action.payload] }
    case 'REMOVE':
      return { ...state, memes: state.memes.filter(meme => meme.id !== action.payload.id) }
    default:
      return state;
  }
}

export default rootReducer;
