import { Component } from 'react'
import { Button } from './Button'

export class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('ERCON app error boundary:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="grid min-h-screen place-items-center bg-surface-dark px-5 text-center text-white">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">Application error</p>
            <h1 className="mt-5 text-section font-bold">Something did not load correctly.</h1>
            <p className="mt-6 text-white/68">
              The website foundation caught the issue instead of leaving a blank screen.
            </p>
            <div className="mt-8">
              <Button onClick={() => window.location.assign('/')}>Reload Home</Button>
            </div>
          </div>
        </main>
      )
    }

    return this.props.children
  }
}
