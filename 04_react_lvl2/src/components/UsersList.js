const UsersList = ({ data }) => {
  if (data.length === 0) return <p>No data.</p>;

  return (
    <ul>
      {data.map((i) => (
        <li key={i.id}>{i.login}</li>
      ))}
    </ul>
  );
};

export default UsersList;
