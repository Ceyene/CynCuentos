export const setFavorite = (payload) => ({
  // Este es el nombre/descripción que le vamos a dar a nuestro action
  type: "SET_FAVORITE",
  // El payload se le podría llamar como la acción de la UI
  payload,
});

export const deleteFavorite = (payload) => ({
  type: "DELETE_FAVORITE",
  payload,
});

export const loginRequest = (payload) => ({
  type: "LOGIN_REQUEST",
  payload,
});

export const logoutRequest = (payload) => ({
  type: "LOGOUT_REQUEST",
  payload,
});

export const registerRequest = (payload) => ({
  type: "REGISTER_REQUEST",
  payload,
});
