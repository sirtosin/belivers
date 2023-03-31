import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.log("err", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="min-h-screen flex flex-col space-y-4 items-center justify-center">
          <h1 className=" text-4xl capitalize font-semibold">
            Something went wrong.
          </h1>

          <button
            className="rounded-full py-2 px-6  bg-blue-500 text-white w-max capitalize font-semibold"
            onClick={() => window.location.reload()}
          >
            refresh
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
