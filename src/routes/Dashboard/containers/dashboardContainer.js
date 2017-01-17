import React, { Component } from 'react';
import { connect } from 'react-redux';
import { visitsIncrement } from '../modules/dashboardReducer';
import Dashboard from '../../../components/Dashboard/dashboard';

class DashboardContainer extends Component {
  componentDidMount() {
    this.props.visitsIncrement();
  }

  render() {
    return (
      <Dashboard {...this.props} />
    )
  }
}

const mapStateToProps = (state) => ({
  value: state.dashboard,
});

export default connect(mapStateToProps, { visitsIncrement })(DashboardContainer); // Promotes Dashboard component to a container
