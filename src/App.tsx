
import Sidebar from './components/sidebar'
import Navbar from './components/navbar'
import TodaySales from './components/todaySales'
import Level from './components/level'
import CustomerFulfilment from './components/customer_fulfilment'
import TopProducts from './components/topProducts'
import Earnings from './components/earnings'
import VisitorInsights from './components/visitorInsights'


function App() {
  return (
    <div className='mx-auto max-w-360 h-full flex flex-row'>
      <Sidebar />
      <main className='w-full flex flex-col gap-3 md:w-full lg:w-10/12 md:px-10 py-5 px-2'>
        <div className='w-full pl-7 md:pl-0'>
          <Navbar />
        </div>
        <div className='flex flex-col gap-5 lg:flex-row mt-3'>
          <div className='w-full lg:w-2/3'>
            <TodaySales />
          </div>
          <div className='w-full lg:w-1/3'>
            <Level />
          </div>
        </div>
        <div className='flex flex-col gap-5 lg:flex-row mt-3'>
          <div className='w-full lg:w-2/3'>
            <TopProducts />
          </div>
          <div className='w-full lg:w-1/3'>
            <CustomerFulfilment />
          </div>
        </div>
        <div className='flex flex-col gap-5 lg:flex-row mt-3'>
          <div className='w-full lg:w-1/3'>
            <Earnings />
          </div>
          <div className='w-full lg:w-2/3'>
            <VisitorInsights />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
