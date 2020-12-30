import Head from 'next/head'
import Layouts from '../Components/Layouts/Layouts'

const Index = () => {
    return (
        <>
        <Head>
            <title>React</title>
        </Head>
        <Layouts>        
            <h1>This is the Home application</h1>
        </Layouts>
        </>
    )
}

export default Index