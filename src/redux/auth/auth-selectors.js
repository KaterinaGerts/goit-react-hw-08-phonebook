const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;
console.log(getUsername);

const authSelectors = {
  getIsLoggedIn,
  getUsername,
}

export default authSelectors;