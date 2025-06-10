import logo from './assets/cropped-digital-white.png'
import searchIcon from './assets/search.png'

export default function Header() {
    return (
        <>
            <nav>
                <div id='logoDiv'>

                    <img src={logo} alt="logo" />

                </div>
                <div>
                    <ul id='navul'>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT US</a></li>
                    <li><a href="#">PRODUCTS</a></li>
                    <li><a href="#">FIND STORE</a></li>
                    <li><a href="#">NEWS & EVENTS</a></li>
                    <li><a href="#">CONTACT US</a></li>
                </ul>

                </div>
                <div id='searchIconDiv'>
                    <img src={searchIcon} alt="Search" />
                </div>
            </nav>
            <hr />
        </>
    );
}