import Navigation from './Navigation/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';


const Layouts = (props) => {
    return (
        <>
            <Navigation/>
                {props.children}           
        </>
    )
}

export default Layouts
