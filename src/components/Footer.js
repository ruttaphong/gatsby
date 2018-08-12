import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Want to know me more</h2>
            <p>I alway love to meet new people, just call or email me.</p>
            <ul className="actions">
                <li><Link to="/generic" className="button">CONTACT NOW</Link></li>
            </ul>
        </section>
        <section>
            <h2>Ruttaphong Worachartudomphong</h2>
            <dl className="alt">
                <dt>Address</dt>
                <dd>395 Moo7 Wangphong &bull; Parnburi, Prachuab Kirikhan 77120 &bull; Thailand</dd>
                <dt>Phone</dt>
                <dd>(66) 80-916-6690</dd>
                <dt>Email</dt>
                <dd><a href="mailto:maggotgluon@gmail.com">maggotgluon@gmail.com</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="#" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; Ruttaphong Worachartudomphong</p>
    </footer>
)

export default Footer
