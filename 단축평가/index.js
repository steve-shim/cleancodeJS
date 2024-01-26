function fetchData() {
  if (state.data) {
    return state.data;
  } else {
    return "Fetching...";
  }
}

function fetchData() {
  return state.data ? state.data : "Fetching...";
}

function fetchData() {
  return state.data || "Fetching...";
}

////////////////////////////////////////////////////////////

function favoriteDog(someDog) {
  let favoriteDog;

  if (someDog) {
    favoriteDog = someDog;
  } else {
    favoriteDog = "냐옹";
  }

  return favoriteDog + "입니다";
}

function favoriteDog(someDog) {
  return (someDog || "냐옹") + "입니다";
}

console.log(favoriteDog());
console.log(favoriteDog("포메"));
