import Head from 'next/head'
import Image from 'next/image'
import IndexComp from '../components/indexComp'
import Navbar from '../components/navbar'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from'framer-motion'
import Test from '../components/modelS/test'

export default function Home() {
  const Scontrols = useAnimation()
  


  return (
    <div>
      <Head>
        <title>Electric Cars, Solar & Clean Energy</title>
        <meta name="description" content="Tesla clone by wai" />
        <link rel="icon" href="/tesla-logo-red.png" />
      </Head>
      
      <Navbar fill='black' position={'fixed'}/>
      <IndexComp photo={'/index/1.jpg'} model={'Model 3'} order={true}/>
      <IndexComp photo={'/index/2.jpg'} model={'Model Y'} order={true}/>
      <IndexComp photo={'/index/3.jpg'} model={'Model S'} order={true}/>
      <IndexComp photo={'/index/4.jpg'} model={'Model X'} order={true}/>
      <IndexComp photo={'/index/5.jpg'} model={'Solar Panels'} order={false}/>
      <IndexComp photo={'/index/6.jpg'} model={'Solar Roof'} order={false}/>
      
      
    </div>  
  )
}
