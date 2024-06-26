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
    </div>
  )
}

export default Home
