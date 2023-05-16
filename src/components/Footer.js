import './Footer.css';
import Rules from "./footer/Rules";
import MainRuleBlock from "./footer/MainRuleBlock";

function Footer() {
    return (
        <footer>
            <div className="content">
                <MainRuleBlock/>
                <div className="line"></div>
                <Rules/>
            </div>
        </footer>
    );
}

export default Footer;
