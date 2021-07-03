import { useEffect, useState } from "react";
import { fetcher } from "./utils/fetcher";
import UsersList from "./components/UsersList";
import "./App.css";

const App = () => {
  const [error, setError] = useState("");
  const [userValue, setUserValue] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async (user) => {
    error && setError("");
    try {
      const data = await fetcher(
        `https://api.github.com/search/users?q=${user}`
      );
      setData(data.items);
    } catch (err) {
      if (err === "rate_limit") {
        window.localStorage.setItem("rate_limit", new Date().getTime() + 60000);
        setError("Please wait a minute before retry.");
      } else {
        setError(err?.message);
      }
    }
  };

  useEffect(() => {
    const rateLimit = window.localStorage.getItem("rate_limit");

    if (!rateLimit || rateLimit < new Date().getTime()) {
      window.localStorage.removeItem("rate_limit");
      if (userValue !== "") {
        fetchData(userValue);
      }
    } else {
      setError("Please wait a minute before retry.");
    }
  }, [userValue]);

  return (
    <div>
      <input
        name="user"
        type="text"
        value={userValue}
        onChange={(e) => setUserValue(e.target.value)}
      />
      {error ? <p>{error}</p> : <UsersList data={data} />}
    </div>
  );
};

export default App;
