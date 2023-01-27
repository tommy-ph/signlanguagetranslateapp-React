const apiURL = "https://topaz-deciduous-piper.glitch.me";

export const fetchUser = (username) => {
  return fetch(`${apiURL}/translations?username=${username}`).then((response) =>
    response.json()
  );
};

export const createUser = (username) => {
  return fetch(`${apiURL}/translations`, {
    method: "POST",
    headers: {
      mode: 'cors',
      "X-API-Key": "hytgrvfedws",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      translations: [],
    }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Could not create new user");
    }
    return response.json();
  });
};
