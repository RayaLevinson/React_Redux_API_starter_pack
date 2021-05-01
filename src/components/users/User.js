import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setCurrentUser } from 'redux/actions/usersActions';

const User = ({ user }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onUserClicked = () => {
    dispatch(setCurrentUser(user));
    history.push(`/users/${user.id}`);
  };

  return (
    <div className='col'>
      <div className='card my-card' onClick={onUserClicked}>
        <div>{user.name}</div>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
