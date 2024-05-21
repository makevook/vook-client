import { Header, Footer } from '@/components/layout'
import { main } from '@/components/layout/Layout.css'
import { Search } from '@/components/Search/Search'
import { Term } from '@/components/Term/Term'

const Home = () => {
  return (
    <main className={main}>
      <Header />

      <div style={{ flex: 1 }}>
        <Search />
        <Term />
      </div>

      <Footer />
    </main>
  )
}

export default Home
