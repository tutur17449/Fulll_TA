export const fetcher = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url, { method: "GET" })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          if (res.status === 403 || res.status === 429) {
            reject("rate_limit");
          }
          reject("error");
        }
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => reject(err));
  });
};
