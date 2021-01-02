import Footer from './Footer/Footer'
import Navigation from './Navigation/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';


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
