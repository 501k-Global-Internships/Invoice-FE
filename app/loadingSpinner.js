import React from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import './loadingSpinner.css';

const LoadingSpinner = ({ loading }) => {
  return (
    loading && (
      <div className="loading-spinner-overlay">
        <ClipLoader loading={true} size={25} color="grey" />
      </div>
    )
  );
};

LoadingSpinner.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default LoadingSpinner;
