import React from 'react';
import HomePageLayout from '../components/HomePageLayout';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HomePageActions from '../actions/HomePageActions';

class HomePage extends React.Component {
  render() {
    return (
      <HomePageLayout {...this.props} />
    );
  }
}


const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    ...HomePageActions,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
