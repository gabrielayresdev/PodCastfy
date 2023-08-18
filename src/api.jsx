const client = "129690f837d241fb8b6e877e48212d61";
const secret = "f1d0b913dcb54734aeb9c2f51236a62b";

const string = `${client}:${secret}`;
const encoded = btoa(string);

export const getToken = () => {
  return {
    url: "https://accounts.spotify.com/api/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${encoded}`,
      },
      body: "grant_type=client_credentials",
    },
  };
};

export const getPodcast = (id, token) => {
  return {
    url: `https://api.spotify.com/v1/shows/${id}?market=BR`,
    options: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};
