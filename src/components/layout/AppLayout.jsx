import { Outlet } from 'react-router-dom'
import { PageTransition } from '../animation/PageTransition'
import { ScrollProgress } from '../animation/ScrollProgress'
import { SmoothScrollProvider } from '../animation/SmoothScrollProvider'
import { BackToTop } from '../ui/BackToTop'
import { WhatsAppFloat } from '../ui/WhatsAppFloat'
import { Footer } from './Footer'
import { Header } from './Header'

export function AppLayout() {
  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      <Header />
      <PageTransition>
        <main id="main-content">
          <Outlet />
        </main>
      </PageTransition>
      <Footer />
      <BackToTop />
      <WhatsAppFloat />
    </SmoothScrollProvider>
  )
}
