import { SET_CATEGORY_DATA, SET_COORDINATOR_DATA } from '../actionTypes';

const initialState = [];

export const formCategoryData = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY_DATA: {
      const { content } = action.payload;
      return [
        ...state,
        ...content
      ];
    }
    default:
      return state;
  }
};

export const formCoordinatorData = (state = initialState, action) => {
  switch (action.type) {
    case SET_COORDINATOR_DATA: {
      const { content } = action.payload;
      return [
        ...state,
        ...content
    ];
    }
    default:
      return state;
  }
};

