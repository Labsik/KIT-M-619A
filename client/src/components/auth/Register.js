import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alertActions';
import { register } from '../../actions/authActions';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Паролі не співпадають', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <section className='container'>
        <h1 className='large text-primary'>Зареєструватись</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Створіть свій акаунт
        </p>
        <form className='form' onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Ім`я'
              name='name'
              value={name}
              onChange={(e) => onChange(e)}
              //  required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
              // required
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
              // minLength='6'
              value={password}
              onChange={(e) => onChange(e)}
              //  required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Підтвердити пароль'
              name='password2'
              // minLength='6'
              value={password2}
              onChange={(e) => onChange(e)}
              // required
            />
          </div>
          <input type='submit' className='btn btn-primary' value='Реєстрація' />
        </form>
        <p className='my-1'>
          Вже є профіль? <Link to='/login'>Увійти</Link>
        </p>
      </section>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { setAlert, register })(Register);
