/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * ErrorBoundary component to catch JavaScript errors anywhere in the component tree
 * Displays a fallback UI instead of crashing the entire application
 *
 * @example
 * <ErrorBoundary>
 *   <YourComponent />
 * </ErrorBoundary>
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error details for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    this.setState({
      error,
      errorInfo,
    });

    // You can also log the error to an error reporting service here
    // Example: logErrorToService(error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      // Custom fallback UI provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI with Party On Wheels branding
      return (
        <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center p-4">
          <motion.div
            className="max-w-2xl w-full bg-black border-4 border-[#FF6B00] rounded-3xl p-8 md:p-12 shadow-[0_0_100px_rgba(255,107,0,0.3)] relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Animated Background Accents */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#FF6B00] opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#39FF14] opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse"></div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-6">
              {/* Error Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#e56000] mb-4"
                animate={{
                  rotate: [0, 10, -10, 10, 0],
                }}
                transition={{
                  duration: 0.5,
                  repeat: 3,
                  ease: 'easeInOut',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-12 h-12 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
              </motion.div>

              {/* Title */}
              <div className="space-y-2">
                <div className="inline-block bg-[#39FF14] px-4 py-1 -skew-x-12 mb-2">
                  <span className="text-black font-black text-sm uppercase tracking-wider skew-x-12 inline-block">
                    Oops!
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight font-['Bebas_Neue'] text-white leading-none">
                  Something Went Wrong
                </h1>
                <p className="text-[#FF6B00] text-lg md:text-xl font-bold">
                  The party bus hit a speed bump
                </p>
              </div>

              {/* Error Message */}
              <div className="bg-zinc-900 border-2 border-[#FF6B00] rounded-lg p-4 text-left">
                <p className="text-white text-sm md:text-base font-medium">
                  Don't worry! Our team has been notified and we're working on getting things back on track.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <motion.button
                  onClick={this.handleReset}
                  className="px-8 py-4 bg-gradient-to-r from-[#FF6B00] to-[#e56000] text-black font-black uppercase tracking-wider rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(255,107,0,0.6)] transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try Again
                </motion.button>
                <motion.a
                  href="/"
                  className="px-8 py-4 bg-zinc-900 border-2 border-[#39FF14] text-[#39FF14] font-black uppercase tracking-wider rounded-lg hover:bg-[#39FF14] hover:text-black transition-all text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Go Home
                </motion.a>
              </div>

              {/* Contact Info */}
              <div className="pt-6 border-t-2 border-zinc-800">
                <p className="text-zinc-400 text-sm mb-3">
                  Need immediate assistance?
                </p>
                <a
                  href="tel:+19853339762"
                  className="text-[#39FF14] hover:text-white font-bold text-lg transition-colors"
                >
                  Call us: 985-333-9762
                </a>
              </div>

              {/* Debug Info (only in development) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-6 text-left">
                  <summary className="cursor-pointer text-zinc-500 hover:text-zinc-300 text-sm font-bold uppercase mb-2">
                    Error Details (Dev Only)
                  </summary>
                  <div className="bg-red-950 border-2 border-red-500 rounded-lg p-4 overflow-auto max-h-64">
                    <pre className="text-red-200 text-xs">
                      {this.state.error.toString()}
                      {this.state.errorInfo?.componentStack}
                    </pre>
                  </div>
                </details>
              )}
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
