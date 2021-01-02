import classes from './Navigation.module.css'
import {Col, Container,Row} from 'reactstrap'
import  { Link }  from 'react-router-dom'
import {Home,ImportContacts,ExitToApp,AccountCircleOutlined} from '@material-ui/icons';


const styles={
   largeIcons:{
    height:100,
    width:60
   }
}
const Navigation = () => {
    return (
        <>
            <div className={classes.nav_container}>
                <div className={classes.nav_logo}>
                    <h3>LO<br/>GO</h3>
                 </div>
                 
                 <div className={classes.nav_contain_items}>
                    <ul className={classes.nav_items}>
                        <li >
                            <Link to ="./" className="is_active"><Home /></Link>
                        </li>
                        <li>
                            <Link to ="./about"><ImportContacts/></Link>
                        </li>
                        <li>
                            <Link to ="./"><AccountCircleOutlined/></Link>
                        </li>
                    </ul>
                </div>
                <div className={classes.nav_login}>
                    <Link to ="./"><ExitToApp/></Link>
                </div>

            </div>
        </>
    )
}

export default Navigation
