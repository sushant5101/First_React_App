import image_2 from './assets/home/image-2.png';
import Rectangle2 from './assets/home/Rectangle-17372.png';
import check from './assets/check.svg';
import style from './home.module.css';

export default function Home() {
    return (<>
        <div className={style.mainDiv}>
            <div className={style.landingBox}>

                <div className={style.textBox}>
                    <h1 className={style.header}>Digital Paints</h1>

                    <p className={style.paragraph}>Come join us and give us a occasion to become a part of your life allowing us to help you color your dream with digital way.</p>

                    <ul>
                        <li><img src={check} alt="check.svg" />Special Offer</li>
                        <li><img src={check} alt="check.svg" />Durable Colors</li>
                    </ul>
                    <a href="#" className={style.linkBtn}>Learn More</a>
                </div>
            </div>
            <div className={style.subDiv}>

                <div className={style.mainDiv2}>
                    <div className={style.textBox}>

                        <h1 className={style.header}>Digital Paints</h1>

                        <p className={style.paragraph}>Digital Paints, a division of Rang Mahal Group was a sapling two decade ago. However our strong core values committed professional and our dedication to serve our customer with the best helped this seedling to much into a big tree of million colors. We always promoted and practice ethical and environment friendly practices during our manufacturing, distribution and customers service activities.</p>
                        <a href="#" className={style.linkBtn}>Read More</a>

                    </div>

                    <img src={image_2} alt="image-2.png" />

                </div>

                <div className={style.mainDiv3}>
                    <div className={style.rectangleImg}>
                        <h1>We have <h1>15+ years</h1> of experience in paint industry.</h1>
                        <a href="#">Click here to find the store</a>
                    </div>
                </div>

                <div className={style.mainDiv4}>

                    <img src={Rectangle2} alt="Rectangle-17372.png" />

                    <div className={style.textBox}>

                        <h1 className={style.header}>RMG</h1>

                        <p className={style.paragraph}>Digital Paints, a division of Rang Mahal Group was a sapling two decade ago. However our strong core values committed professional and our dedication to serve our customer with the best helped this seedling to much into a big tree of million colors. We always promoted and practice ethical and environment friendly practices during our manufacturing, distribution and customers...</p>
                        <a href="#" className={style.linkBtn}>Read More</a>

                    </div>


                </div>

            </div>
            
        </div>
    </>
    );
}