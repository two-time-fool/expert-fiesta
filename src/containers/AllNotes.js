import React, { PureComponent } from 'react';
import Notes from '../components/Notes';
import { connect } from 'redux';

class AllNotes extends PureComponent {
  render() {
    return (
      <ul>
        <Notes />
      </ul>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllNotes);
