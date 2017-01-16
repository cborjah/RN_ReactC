import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, doubleAsync } from '../modules/dashboardReducer';
import Dashboard from '../../../components/Dashboard/dashboard';

const mapStateToProps = (state) => ({
  value: state.dashboard,
});

export default connect(mapStateToProps, { increment, doubleAsync })(Dashboard); // Promotes Dashboard component to a container
