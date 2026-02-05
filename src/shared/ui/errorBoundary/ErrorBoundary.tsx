import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false, error: null };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="p-10 text-center border-2 border-dashed border-red-200 rounded-xl">
            <h2 className="text-xl font-bold text-accent-red">
              Something went wrong in this section.
            </h2>
            <p className="font-bold text-accent-red">{this.state.error?.message}</p>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
