// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => (props) => (
  <div>
    {props.isAdmin && <p>This is private info. Please don't share!</p>}
    <WrappedComponent {...props} />
  </div>
);

const requireAuthentication = (WrappedComponent) => (props) => (
  <div>
    {props.isAuthenticated ? (
      <div>
        <p>You are an authorised user.</p>
        <WrappedComponent {...props} />
      </div>)
      :
      (
        <div>
          <p>You are NOT authorised!</p>
        </div>
      )
    }
  </div>
);


// requireAuthentication

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin info="There are the details" />,
//   document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated info="There are the details" />, document.getElementById('app'));
