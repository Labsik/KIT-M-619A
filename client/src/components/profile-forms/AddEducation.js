import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profileActions';

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    description,
    current,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='large text-primary'>Додати освіту</h1>
      <p className='lead'>
        <i className='fas fa-graduation-cap' /> Університет
      </p>
      <small>* = необхідні для заповнення поля</small>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addEducation(formData, history);
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Університет'
            name='school'
            value={school}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Ступінь'
            name='degree'
            value={degree}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Спеціальність'
            name='fieldofstudy'
            value={fieldofstudy}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <h4>З</h4>
          <input type='date' name='from' value={from} onChange={onChange} />
        </div>
        <div className='form-group'>
          <p>
            <input
              type='checkbox'
              name='current'
              checked={current}
              value={current}
              onChange={() => setFormData({ ...formData, current: !current })}
            />{' '}
            Теперішнє місце навчання
          </p>
        </div>
        <div className='form-group'>
          <h4>По</h4>
          <input
            type='date'
            name='to'
            value={to}
            onChange={onChange}
            disabled={current}
          />
        </div>
        <div className='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Опис'
            value={description}
            onChange={onChange}
          />
        </div>
        <input type='submit' className='btn btn-primary my-1' value='Зберігти' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Повернутись
        </Link>
      </form>
    </Fragment>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(withRouter(AddEducation));
