/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Error boundary - catches React errors and shows fallback UI
 */

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center px-6 py-16 text-center">
          <p className="text-gray-600 mb-4">Something went wrong. Please refresh the page.</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#FF6B00] text-white px-6 py-3 font-bold uppercase tracking-wider rounded-lg hover:bg-[#e56000] transition-colors"
          >
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
