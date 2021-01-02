import Head from 'next/head'
import Layouts from '../Components/Layouts/Layouts'
import {StaticRouter as BrowserRouter } from 'react-router'

import HomeSection from '../Components/Home/Home'
const Index = () => {
    
    
    return (
        
        <>
        <Head>
          <title>React</title>         
        </Head>
        <BrowserRouter>

        <Layouts>        
            <HomeSection/>
        </Layouts>
        </BrowserRouter>
        </>
    )
}

export default Index