import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profileActions';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    bio: '',
    twitter: '',
    facebook: '',
    instagram: '',
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    company,
    website,
    location,
    status,
    skills,
    bio,
    twitter,
    facebook,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    createProfile(formData, history);
  };
  return (
    <Fragment>
      <h1 className='large text-primary'>Створи свій профіль!</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Напиши про себе інформацію
      </p>
      <small>* = необхідні для заповнення поля</small>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <select name='status' value={status} onChange={(e) => onChange(e)}>
            <option value='0'>* Вибери свою позицію</option>
            <option value='Developer'>Девелопер</option>
            <option value='Business Analytic'>Бізнес-аналітик</option>
            <option value='Manager'>Менеджер</option>
            <option value='Devops'>Адміністратор мереж</option>
            <option value='SMM'>СММщік</option>
            <option value='Intern'>Інтерн</option>
            <option value='Other'>Other</option>
          </select>
          <small className='form-text'>
            Вибери свою позицію
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Компаня'
            name='company'
            value={company}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
           Компанія
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Вебсайт'
            name='website'
            value={website}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
           Твій власний вебсайт
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Локація'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
           Місто, в якому мешкаєш
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Навички'
            name='skills'
            value={skills}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
           Напиши свої основні навички через кому (наприклад: CISCO, HTML5, CSS3)
          </small>
        </div>

        <div className='form-group'>
          <textarea
            placeholder='Твоя біографія'
            name='bio'
            value={bio}
            onChange={(e) => onChange(e)}
          ></textarea>
          <small className='form-text'>Напиши дещо про себе</small>
        </div>

        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
           Додай свої соціальні мережі
          </button>
          <span>За власним бажанням</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x'></i>
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x'></i>
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={(e) => onChange(e)}
              />
            </div>

           

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x'></i>
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={(e) => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type='submit' className='btn btn-primary my-1' value='Надіслати' />
        <Link className='btn btn-light my-1' to='/dashboard'>
         Назад
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
