import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../actions/authActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '', 
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <section className='container'>
        <h1 className='large text-primary'>Увійти</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Увійдіть в особистий акаунт
        </p>
        <form className='form' onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
            <small className='form-text'>
             Якщо ви хочете мати фото в своєму профілі, залогіньтесь з тієї пошти, яку використовували на Gravatar
            </small>
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Пароль'
              name='password'
              minLength='6'
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
          </div>

          <input type='submit' className='btn btn-primary' value='Увійти' />
        </form>
        <p className='my-1'>
          Досі не маєте акаунт? <Link to='/register'>Зареєструватись</Link>
        </p>
      </section>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { login })(Login);
