import classes from './Home.module.css'
import Image from 'next/image'
import {LocalCafe} from '@material-ui/icons';

const Home = () => {
    return (
        <>
            <div className={classes.Home_position}>
            <div className={classes.Home_row}>
                <div className={classes.Home_column_title}>
                    <div className={classes.Home_Title}>
                        <h3>We are <span>#Made4Security</span></h3>
                        <div className={classes.Coffee_Contact}>
                                <div className ={classes.Icon}>
                                    <LocalCafe/>
                                </div>
                                <h4>Grab a Coffee</h4>
                        </div>
                    </div>                
                </div>
                <div className={classes.Home_column_Image}>
                    <div className={classes.Home_image}>
                        <Image src ='/women.jpg' layout="intrinsic" height ={900} width={1200} alt='Women Hacking'/>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Home
