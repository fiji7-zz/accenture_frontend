import { SET_CATEGORY_DATA, SET_COORDINATOR_DATA } from './actionTypes';


export const setCategoryData = content => ({
  type: SET_CATEGORY_DATA,
  payload: {
    content
  }
});

export const setCoordinatorData = content => ({
    type: SET_COORDINATOR_DATA,
    payload: {
      content
    }
  });

export const fetchCategoryData = () => async dispatch => {
    const response = await fetch('http://www.mocky.io/v2/5bcdd3942f00002c00c855ba')
    .then(res => res.json())
    dispatch(setCategoryData(response))
}

export const fetchCoordinatorData = () => async dispatch => {
    const response = await fetch('http://www.mocky.io/v2/5bcdd7992f00006300c855d5')
    .then(res => res.json())
    dispatch(setCoordinatorData(response))
}