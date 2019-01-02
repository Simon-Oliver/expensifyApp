// Higer Order Component HOC - Renders another component
// Reuse Code
// Render hijacking

import React from 'react';
import ReactDOM from 'react-dom';

const Info = ({ info }) => (
  <div>
    <h1>Info</h1>
    <p> The info is {info} </p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is privat Info please don't share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

// requireAuthentication
const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthentiated ? <WrappedComponent {...props} /> : <p>You are not logged in!!!!</p>}
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  //   <AdminInfo isAdmin={false} info="_____This is the details" />,
  //   document.querySelector('#app')
  // );
  <AuthInfo isAuthentiated={false} info="_____This is the details" />,
  document.querySelector('#app')
);
