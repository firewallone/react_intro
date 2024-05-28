import { Component, ErrorInfo, ReactElement } from "react";

interface IProps {
  children: ReactElement;
  fallback: ReactElement;
}

class ErrorBoundary extends Component<IProps> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
