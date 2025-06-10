import styles from './footer.module.css'
import pin from './assets/location.svg';
import phone from './assets/phone.svg';
import mail from './assets/mail.svg';

export default function Footer() {
    return (
        <>
            <div className={styles.mainDiv}>

                <div className={styles.info1}>
                    <h2>Get In Touch</h2>
                    <p>"Unlock Colorful Transformations. Reach us for Paint Perfection."</p>
                    <ul>
                        <li><img src={pin} alt="" />Ithari-6, Sunsari</li>
                        <li><img src={mail} alt="" />info.digitalpaints@gmail.com</li>
                        <li><img src={phone} alt="" />977-25-590300</li>
                    </ul>
                </div>

                <div className={styles.info2}>
                    <h2>Our Products</h2>
                    <a href="#">
                        Sealing-Lite Interior Emulsion
                    </a>
                    <a href="#">
                        DIGITAL INTERIOR CEMENT PRIMER
                    </a>
                    <a href="#">
                        SWEET-SHINE INTERIOR EMULSION
                    </a>
                </div>

                <div className={styles.info3}>
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">News & Events</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className={styles.info4}>
                    <h2>NewsLetter</h2>
                    <div className={styles.inputBox}>

                        <input placeholder='Your Email' type="email" name="email" className={styles.email} />
                        <input type="button" value="Sign Up" className={styles.button} />

                    </div>
                </div>

            </div >
            <p className={styles.copyRight}>@{new Date().getFullYear()} <a href="#"> Bihanitech. </a>All rights reserved.</p>
        </>
    );
}