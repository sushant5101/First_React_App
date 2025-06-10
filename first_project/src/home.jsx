import image_2 from './assets/home/image-2.png';
import Rectangle2 from './assets/home/Rectangle-17372.png';
import img1 from './assets/home/distemper.jpg';
import img2 from './assets/home/image-2-1.png';
import img3 from './assets/home/image.png';
import img4 from './assets/home/image-1.png';
import img5 from './assets/home/primer.jpg';
import img6 from './assets/home/image-3.png';
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
                    <a href="#" className={style.linkBtn}>Click here to find the store</a>
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

            <div className={style.subDiv}>

                <div className={style.mainDiv5}>
                    <div className={style.textBox}>

                        <h1 className={style.header}>Categories</h1>

                        <p className={style.paragraph}>Discover our high range quality paint and coating Products. Explore the right solution for your needs.</p>
                        <a href="#" className={style.linkBtn}>Read More</a>

                    </div>

                    <div className={style.photos}>

                        <div className={style.img1}>
                            <img src={img1} alt="distemper.jpg" />
                            <a>Distemper</a>
                        </div>

                        <div className={style.img2}>
                            <img src={img2} alt="image-2-1.png" />
                            <a>Enamels</a>
                        </div>

                        <div className={style.img3}>
                            <img src={img3} alt="image.png" />
                            <a>Exterior Paints</a>
                        </div>

                        <div className={style.img4}>
                            <img src={img4} alt="image-1.png" />
                            <a>Interior Paints</a>
                        </div>

                        <div className={style.img5}>
                            <img src={img5} alt="primer.jpg" />
                            <a>Primers</a>
                        </div>

                        <div className={style.img6}>
                            <img src={img6} alt="image-3.png" />
                            <a>Putty And Primers</a>
                        </div>

                    </div>

                </div>


            </div>

            <div className={style.popularProducts}>
                <h1>Our Popular Products</h1>
                <p>
                    We are committed to the best products and quality keeping in mind the environment friendly as well as health friendly products.
                </p>
                <div className={style.scrollElement}>
                    
                </div>

                
            </div>

        </div>
    </>
    );
}