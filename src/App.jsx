import { AppRouter } from './AppRouter'
import { ErrorBoundary } from './components/ui/ErrorBoundary'

const App = () => {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  )
}

export default App
