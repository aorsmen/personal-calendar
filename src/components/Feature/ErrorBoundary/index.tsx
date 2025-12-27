import React from "react";

type FallbackRender = (args: {
  error: Error;
  reset: () => void;
}) => React.ReactNode;

export type ErrorBoundaryProps = {
  children: React.ReactNode;

  /**
   * Optional fallback UI.
   * - If a ReactNode: rendered as-is.
   * - If a function: called with { error, reset }.
   */
  fallback?: React.ReactNode | FallbackRender;

  /**
   * Called when the boundary catches an error.
   */
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;

  /**
   * Called when the user triggers a reset.
   * Useful for clearing state (e.g., query caches) or navigating.
   */
  onReset?: () => void;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.props.onError?.(error, errorInfo);
  }

  private handleReset = () => {
    this.props.onReset?.();
    this.setState({ hasError: false, error: null });
  };

  render() {
    const { hasError, error } = this.state;
    const { fallback, children } = this.props;

    if (hasError && error) {
      if (typeof fallback === "function") {
        return fallback({ error, reset: this.handleReset });
      }

      if (fallback) {
        return fallback;
      }

      // Default fallback UI
      return (
        <div role="alert" style={{ padding: 16 }}>
          <h2 style={{ marginTop: 0 }}>Something went wrong.</h2>
          <p style={{ opacity: 0.8 }}>{error.message}</p>
          <button type="button" onClick={this.handleReset}>
            Try again
          </button>
        </div>
      );
    }

    return children;
  }
}
