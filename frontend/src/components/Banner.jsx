import IPL_Logo from "../../public/IPL_Logo.png"
import "./Banner.css"

export default function Banner() {
    return (
        <div class="banner">
            <img src={IPL_Logo} alt="IPL_Logo" class="banner-image" />
        </div>
    );
}