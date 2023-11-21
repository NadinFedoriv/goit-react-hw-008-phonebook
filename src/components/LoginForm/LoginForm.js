import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import './LoginForm.scss';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit} autoComplete="off">
      <label className="label">
        Email
        <input className="input" type="email" name="email" />
      </label>
      <label className="label">
        Password
        <input className="input" type="password" name="password" />
      </label>
      <button className="button" type="submit">
        Log In
      </button>
    </form>
  );
};
