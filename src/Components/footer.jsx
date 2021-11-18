import React from 'react'
import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, Storefront} from "@material-ui/icons";
import '../styles/footer.css'
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="left">
                <div className="logo">
                    <Storefront />
                    <h4>E-Commerce</h4>
                </div>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolores ullam quidem officiis veritatis similique mollitia nostrum in tempora doloremque ea, nulla sapiente eum aut, dicta perspiciatis obcaecati? Explicabo, non?</p>
                <div className="sm-container">
                    <div className="sm-icon">
                        <Facebook />
                    </div>
                    <div className="sm-icon">
                        <Instagram />
                    </div>
                    <div className="sm-icon">
                        <Twitter />
                    </div>
                </div>
            </div>
            <div className="center">
                <h4>Useful Links</h4>
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Men's Fashion</li>
                    <li>Women's Fashion</li>
                    <li>My Account</li>
                    <li>Orders</li>
                </ul>
            </div>
            <div className="right">
                <h4>Contact</h4>
                <div className="contact">
                    <Room style={{marginRight:"10px"}} />
                    00000, 00 Ave, Unknown, Unknown, Un
                </div>
                <div className="contact">
                    <Phone style={{marginRight:"10px"}} />
                    +1 234 567 8901
                </div>
                <div className="contact">
                    <MailOutline style={{marginRight:"10px"}} />
                    abc@example.com
                </div>
            </div>
        </div>
    )
}

export default Footer
