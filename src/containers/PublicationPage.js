import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PublicationPageLayout from '../components/PublicationPageLayout';
import * as PublicationPageActions from '../actions/PublicationPageActions';

class PublicationPage extends React.Component {

  render() {
    return (
      <PublicationPageLayout {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.userState.id,
  title: state.publicationState.publication.title,
  description: state.publicationState.publication.description,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    ...PublicationPageActions,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PublicationPage);
