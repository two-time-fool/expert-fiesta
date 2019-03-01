import React, { PureComponent } from 'react';
import Notes from '../components/Notes';
// import { connect } from 'tls';

class AllNotes extends PureComponent {
  render() {
    return (
      <ul>
        <Notes />
      </ul>
    );
  }
}

export default AllNotes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllNotes);
