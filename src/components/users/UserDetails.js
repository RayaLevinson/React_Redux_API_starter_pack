import { useSelector } from 'react-redux';

const UserDetails = () => {
  const { currentUser } = useSelector((state) => state.users);
  const { loading, error } = useSelector((state) => state.async);

  return (
    <div className='mt-3'>
      {loading && <h2>Loading...</h2>}
      {error && <h3>{error}</h3>}
      {currentUser && (
        <div className='card'>
          <div>
            <p>{currentUser?.name}</p>
            <p>{currentUser?.email}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
