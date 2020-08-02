import React, { Component } from 'react';
import { logError } from "../libs/errorLib";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logError(error, errorInfo);
  }

  render() {
    return this.state.hasError ? (
      <div>
        <h3>Desculpe, houve um problema ao carregar esta página.</h3>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
