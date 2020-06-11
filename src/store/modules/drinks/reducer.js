import produce from 'immer';

const INITIAL_STATE = {
  name: null,
  id: null,
};

export default function category(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@drinks/ADD_DRINKS': {
        draft.name = action.strDrink;
        draft.id = action.idDrink;
        break;
      }
    }
  });
}
