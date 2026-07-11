import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { LoadingScreen } from './components/ui/LoadingScreen'
import { routes } from './data/routes'

const ProductDetailsPage = lazy(() => import('./pages/Products/ProductDetailsPage.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFoundPage.jsx'))

export function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route element={<AppLayout />}>
            {routes.map(({ Component, path }) => (
              <Route element={<Component />} key={path} path={path} />
            ))}
            <Route element={<ProductDetailsPage />} path="/products/:slug" />
            <Route element={<NotFoundPage />} path="*" />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
