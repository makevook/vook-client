import { Footer } from '@/components/layout'
import { main } from '@/components/layout/Layout.css'
import { Search } from '@/components/Search/Search'
import { Term } from '@/components/Term/Term'

const Home = () => {
  return (
    <div className={main}>
      <div style={{ flex: 1 }}>
        <Search />
        <Term />
      </div>
      <Footer />
    </div>
  )
}

export default Home
