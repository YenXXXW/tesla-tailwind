import Head from 'next/head'
import IndexComp from '../components/indexComp'
import Navbar from '../components/navbar'
import { useAnimation } from'framer-motion'

export default function Home() {

  return (
    <div className='snap-y snap-mandatory h-screen  overflow-y-scroll'>
      <Head>
        <title>Electric Cars, Solar & Clean Energy</title>
        <meta name="description" content="Tesla clone by wai" />
        <link rel="icon" href="/tesla-logo-red.png" />
      </Head>
       
      <Navbar fill='black' position={'fixed'}/>
      <div className="snap-start">
        <IndexComp photo={'/index/1.jpg'} model={'Model 3'} order={true}  arrow={true}/>
      </div>
      <div className="snap-start">
        <IndexComp photo={'/index/3.jpg'} model={'Model S'} order={true} arrow={false}/>
      </div>
      <div className="snap-start">
        <IndexComp photo={'/index/4.jpg'} model={'Model X'} order={true} arrow={false}/>
      </div>
      <div className="snap-start">
        <IndexComp photo={'/index/2.jpg'} model={'Model Y'} order={true} arrow={false}/>
      </div>
      <div className="snap-start">
        <IndexComp photo={'/index/5.jpg'} model={'Solar Panels'} order={false} arrow={false}/>  
      </div>
      <div  className="snap-start">
        <IndexComp photo={'/index/6.jpg'} model={'Solar Roof'} order={false} arrow={false}/>
      </div>       
    </div>  
  )
}
