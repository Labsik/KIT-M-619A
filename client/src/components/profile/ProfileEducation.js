import React from 'react';
import PropTypes from 'prop-types';

import Moment from 'react-moment';
import moment from 'moment';

const ProdileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description },
}) => {
  return (
    <div>
      <h3 className='text-dark'>{school}</h3>
      <p>
        <Moment format='YYYY/MM/DD'>{moment.utc(from)}</Moment> -{' '}
        {!to ? ' Now' : <Moment format='YYYY/MM/DD'>{moment.utc(to)}</Moment>}
      </p>
      <p>
        <strong>Ступень освіти: </strong> {degree}
      </p>
      <p>
        <strong>Спеціальність: </strong> {fieldofstudy}
      </p>
      <p>
        <strong>Опис: </strong> {description}
      </p>
    </div>
  );
};

ProdileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProdileEducation;
