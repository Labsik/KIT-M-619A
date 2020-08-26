import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profileActions';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className='hide-sm'>{exp.title}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{moment.utc(exp.from)}</Moment> -{' '}
        {exp.to === null ? (
          ' Теперішній час'
        ) : (
          <Moment format='YYYY/MM/DD'>{moment.utc(exp.to)}</Moment>
        )}
      </td>
      <td>
        <button
          onClick={() => deleteExperience(exp._id)}
          className='btn btn-danger'
        >
          Видалити
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Інфомація про роботу</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Назва компанії</th>
            <th className='hide-sm'>Позиція</th>
            <th className='hide-sm'>Період роботи</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);
