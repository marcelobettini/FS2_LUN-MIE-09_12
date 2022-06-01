//REDUCER: Es una función que recibe dos params, state y action. State es el estado actual que incluye data (los pokemon), filter y selectedPokemon. Y action es un objeto que define las mutaciones que se aplicarán al estado y el nuevo estado a ser retornado. Es muy común usar un switch statement. La clave de ese switch es el tipo de la acción (action.type). Ese tipo es un string.
const pokemonReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_SELECTED_POKEMON":
      return {
        ...state,
        selectedPokemon: action.payload,
      };
    default:
      return state;
  }
};
export default pokemonReducer;
