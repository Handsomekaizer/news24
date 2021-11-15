import { useReducer, useEffect } from 'react';
import axios from 'axios';

const actions = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error',
};

function reducer(state, action) {
  switch (action.type) {
    case actions.MAKE_REQUEST:
      return { loading: true, data: [] };
    case actions.GET_DATA:
      return { ...state, loading: false, data: action.payload.data };
    case actions.ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export default function GetJobs(search, page, pageSize) {
  const [state, dispatch] = useReducer(reducer, { data: [], loading: true });

  let keyword = search !== '' ? search.trim() : 'Technology';

  useEffect(() => {
    dispatch({ type: actions.MAKE_REQUEST });
    axios
      .get('news', {
        params: {
          page: page,
          q: keyword,
          pageSize: pageSize,
          language: 'en',
        },
      })
      .then((res) => {
        dispatch({ type: actions.GET_DATA, payload: { data: res.data } });
      })
      .catch((e) => {
        dispatch({
          type: actions.ERROR,
          payload: { error: e.response.data.message },
        });
      });
  }, [search, page]);

  return state;
}
