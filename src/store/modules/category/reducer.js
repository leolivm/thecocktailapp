import produce from 'immer';

const INITIAL_STATE = {
  name: null,
  id: null,
};

export default function category(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@category/ADD_CATEGORY': {
        draft.name = action.name;
        draft.id = action.id;
        break;
      }
    }
  });
}
