import Footer from './Footer/Footer'
import Navigation from './Navigation/Navigation'

const Layouts = (props) => {
    return (
        <>
            <Navigation/>
                {props.children}            
            <Footer/>
        </>
    )
}

export default Layouts
