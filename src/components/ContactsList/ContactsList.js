import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/App/app-actions';
import styles from './ContactList.module.scss';
import PropTypes from 'prop-types';
import { getFilter } from '../../redux/contacts-selectors';

const ContactList = ({ value, changeFilter }) => (
  <label className={styles.label}>
    Find contacts by name:
    <input
      type="text"
      value={value}
      onChange={changeFilter}
      className={styles.input}
    ></input>
  </label>
);

ContactList.propTypes = {
  value: PropTypes.string,
  changeFilter: PropTypes.func,
};

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  changeFilter: event => dispatch(changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
