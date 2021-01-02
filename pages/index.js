import Head from 'next/head'
import Layouts from '../Components/Layouts/Layouts'
import {BrowserRouter } from 'react-router-dom'

const Index = () => {
    <div>
    <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
        font-family: 'Montserat',sans-serif;
        background-color:#56B786;

      }
    `}</style>
  </div>
    
    return (
        
        <>
        <BrowserRouter>

        <Layouts>        
            <h1>This is the Home application</h1>
        </Layouts>
        </BrowserRouter>
        </>
    )
}

export default Index