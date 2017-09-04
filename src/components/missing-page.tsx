import * as React from 'react';

class MissingPage extends React.Component {
  render() {
    return (
      <h1 className="missing-text">
        Uh oh! Something went wrong! <br /> 
        Our servers may be down currently.
        Check back later!
      </h1>
    );
  }
}

export default MissingPage;
