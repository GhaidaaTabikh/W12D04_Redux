// create the initial state for the reducer

const initialState = {
  articles: [],
};

//create article reducer
const articleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_ARTICLES":
      return { articles: [...payload] };
    case "ADD_ARTICLE":
      return { articles: [...state.articles, payload] };
    case "UPDATE_ARTICLE":
      update = state.articles.map((element, index) => {
        if (element.id === payload.id) return payload;
        return element;
      });
      return { articles: update };
    case "DELETE_ARTICLE":
      return {
        articles: state.articles.filter((element, index) => {
          element.id !== payload.id;
        }),
      };
      default:
      //  {  articles: [],};
      return state;
  }
};

export default articleReducer

//ACTION

export const setArticle = (articles) => {
  return {
    type: "SET_ARTICLES",
    payload: articles,
  };
};

export const addArticle = (article) => {
  return {
    type: "ADD_ARTICLE",
    payload: article,
  };
};
export const updateArticle = (article) => {
  return {
    type: "UPDATE_ARTICLE",
    payload: article,
  };
};
export const deleteArticle = () => {
  return {
    type: "DELETE_ARTICLE",
    payload: id,
  };
};
