import Head from 'next/head'
import Image from 'next/image'
import IndexComp from '../components/indexComp'
import Navbar from '../components/navbar'
import { useAnimation } from'framer-motion'
import IndexScroll from '../components/indexScrool'

export default function Home() {
  const Scontrols = useAnimation()
  


  return (
    <div className='snap-y snap-mandatory overflow-scroll'>
      <Head>
        <title>Electric Cars, Solar & Clean Energy</title>
        <meta name="description" content="Tesla clone by wai" />
        <link rel="icon" href="/tesla-logo-red.png" />
      </Head>
       
      <Navbar fill='black' position={'fixed'}/>
      <IndexScroll />
      <div className="snap-start">
        <IndexComp photo={'/index/1.jpg'} model={'Model 3'} order={true}/>
      </div>
      <div className="snap-start">
        
      </div>
      <div className="snap-start">
        <IndexComp photo={'/index/3.jpg'} model={'Model S'} order={true}/>
      </div>
      <div className="snap-start">
        <IndexComp photo={'/index/4.jpg'} model={'Model X'} order={true}/>
      </div>
      <div className="snap-start">
        <IndexComp photo={'/index/5.jpg'} model={'Solar Panels'} order={false}/>  
      </div>
      <div  className="snap-start">
        <IndexComp photo={'/index/6.jpg'} model={'Solar Roof'} order={false}/>
      </div>       
    </div>  
  )
}
