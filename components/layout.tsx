import Footer from './common/Footer'
import Navbar from './common/Navbar'

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  )
}
