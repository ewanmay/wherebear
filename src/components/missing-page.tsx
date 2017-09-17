import * as React from 'react';
import * as FontAwesome from 'react-fontawesome';

class MissingPage extends React.Component {
  render() {
    return (
      <h1 className="missing-text">
        Loading   
        <FontAwesome
            name="circle-o-notch"
            spin={true}
          />
      </h1>
    );
  }
}

export default MissingPage;
