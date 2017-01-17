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
  value: state.dashboard.visitsCount,
  list: state.dashboard.list
});

// Alternate mapStateToProps
/*
function mapStateToProps(state) {
  return {
    value: state.dashboard.visitsCount,
    list: state.dashboard.list
  }
}
*/

export default connect(mapStateToProps, { visitsIncrement })(DashboardContainer); // Promotes Dashboard component to a container
