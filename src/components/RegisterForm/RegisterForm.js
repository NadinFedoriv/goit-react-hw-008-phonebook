import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import './RegisterForm.scss';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit} autoComplete="off">
      <label className="label">
        Username
        <input className="input" type="text" name="name" />
      </label>
      <label className="label">
        Email
        <input className="input" type="email" name="email" />
      </label>
      <label className="label">
        Password
        <input className="input" type="password" name="password" />
      </label>
      <button className="button" type="submit">
        Register
      </button>
    </form>
  );
};
