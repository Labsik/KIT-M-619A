import React from 'react';
import PropTypes from 'prop-types';

import Moment from 'react-moment';
import moment from 'moment';

const ProfileExperience = ({
  experience: { company, title, location, to, from, description },
}) => {
  return (
    <div>
      <h3 className='text-dark'>{company}</h3>
      <p>
        <Moment format='YYYY/MM/DD'>{moment.utc(from)}</Moment> -{' '}
        {!to ? ' Теперішній час' : <Moment format='YYYY/MM/DD'>{moment.utc(to)}</Moment>}
      </p>
      <p>
        <strong>Позиція: </strong> {title}
      </p>
      <p>
        <strong>Локація: </strong> {location}
      </p>
      <p>
        <strong>Опис: </strong> {description}
      </p>
    </div>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
