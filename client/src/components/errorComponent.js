import React, { Component } from 'react';
// import {  useRouteError } from "react-router-dom"

class ErrorComponent extends Component {
  render() {
    return (
      <div style={{ width: '100%', height: 500, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>404 Not Found</h2>
          <h3 style={{ fontSize: '1.5rem' }}>Oops, something went wrong.</h3>
          <p style={{ fontSize: '1.2rem', color: '#888' }}>The page you are looking for does not exist.</p>
          <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1688448886~exp=1688449486~hmac=042576b8097dd16cc3875c6ed779414932e4c27ddb78ef087aa9722840b4946a" alt="Error 404" style={{ maxWidth: '40%', marginTop: '1rem' }} />
        </div>
      </div>
    );
  }
}

export default ErrorComponent;