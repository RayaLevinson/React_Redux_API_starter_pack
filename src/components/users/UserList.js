import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveUsers } from 'redux/actions/usersActions';
import User from 'components/users/User';

const UserList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const { loading, error } = useSelector((state) => state.async);

  useEffect(() => {
    dispatch(retrieveUsers());
  }, [dispatch]);

  return (
    <div>
      <div className='text-center'>
        {loading && <h2>Loading...</h2>}
        {error && <h3>{error}</h3>}
      </div>
      <div className='row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2 mt-2'>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
