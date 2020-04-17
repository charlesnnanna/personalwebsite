import React from 'react';
import myImage from '../images/logo.png';
import {Link} from 'gatsby';
import LayoutStyles from '../styles/layout.module.css';
import FooterStyles from '../components/footer.module.css'
import Footer from './footer';

const ListLink = props => (
    <li  style = {{display : `inline-block`, marginRight : `40px`}}>
        <Link to = {props.to} className = {LayoutStyles.ListLink} >{props.children}
        </Link>
    </li>
)

const Layout = ({children}) => {
    return (
        <div>

        
        <div className = {LayoutStyles.layout}>
            <header className = {LayoutStyles.header} style = {{marginBottom : `1rem`, marginTop : `0`}}>
            <Link to = '/'>
            <img style = {{ width : `300px`,
             height : `70px`,
             float : `left`,
             overflow : `hidden`,
             display : `inline`,
             marginLeft : `0`
            }}
             src = {myImage} alt = 'Charles Uthulor'/>
            </Link>
            <ul className = {LayoutStyles.fulllist}>
                <ListLink to= '/'>Projects</ListLink>
                <ListLink to= '/'>Services</ListLink>
                <ListLink to= '/'>Testimonials</ListLink>
                 <ListLink to = '/about'>About</ListLink>
                <ListLink to = '/contact'>Contact</ListLink>
                
            </ul>
            </header>
           
           
           {children}

               
           
        </div>
        <Footer/>

        </div>
    )
}

export default Layout;