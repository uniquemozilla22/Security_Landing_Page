import classes from './Navigation.module.css'
import {Col, Container,Row} from 'reactstrap'
import  { Link }  from 'react-router-dom'

const Navigation = () => {
    return (
        <div className={classes.nav_container}>
            <Container>
                <div className={classes.nav_logo}>
                    <h1>LO<br/>GO</h1>
                 </div>
                 
                 <div className={classes.nav_contain_items}>
                    <ul className={classes.nav_items}>
                        <li>
                            <Link to ="./" is-active>item1</Link>
                        </li>
                        <li>
                            <Link to ="./about">item2</Link>
                        </li>
                        <li>
                            <Link to ="./">item3</Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Navigation
