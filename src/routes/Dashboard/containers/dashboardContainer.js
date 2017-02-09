import React, { Component } from 'react';
import { connect } from 'react-redux';
import { visitsIncrement, dashboardAddItem, dashboardEditItem } from '../modules/dashboardReducer';
import { loginAsync } from '../../../modules/session';
import Dashboard from '../../../components/Dashboard/dashboard';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      editedItemIndex: null
    }
  }

  componentDidMount() {
    this.props.visitsIncrement();
  }

  onChangeText(newText) {
    console.log(newText);
    this.setState({ inputValue: newText });
    // console.log(this.state.inputValue)
  }

  submitAction() {
    console.log("Submitted");
    console.log(this.state.inputValue)
    if(this.state.editedItemIndex === null) {
      this.props.dashboardAddItem(this.state.inputValue);
    } else {
      this.props.dashboardEditItem(this.state.inputValue, this.state.editedItemIndex);
    }

    this.setState({
      inputValue: '',
      editedItemIndex: null
    });
  }

  itemOnEdit(index) {
    const item = this.props.list[index];
    this.setState({
      inputValue: item.label,
      editedItemIndex: index
    });
  }

  render() {
    const buttonText = (this.state.editedItemIndex === null) ? 'Add item' : 'Edit item';
    return (
      <Dashboard
        {...this.props}
        onChangeText={(text) => this.onChangeText(text)}
        submitAction={() => this.submitAction()}
        itemOnEdit={(index) => this.itemOnEdit(index)}
        textInput={this.state.inputValue}
        buttonText={buttonText} />
    )
  }
}

const mapStateToProps = (state) => ({
  value: state.dashboard.visitsCount,
  list: state.dashboard.list,
  isNotLoggedIn: state.session.isNotLoggedIn,
  loginToken: state.session.loginToken
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

export default connect(mapStateToProps, { visitsIncrement, dashboardAddItem, dashboardEditItem, loginAsync })(DashboardContainer); // Promotes Dashboard component to a container
