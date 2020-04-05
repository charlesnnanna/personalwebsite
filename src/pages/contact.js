import React from 'react';
import { Link } from 'gatsby';
import Container from '../components/container';
import Layout from '../components/layout'

const Contact = () => {
    return (
        <div style = {{ color : `teal`}}>
            <Layout>
            <Container>
            <h1>How do I contact Charles Uthulor</h1>
            <p>Reach me at Charlesnnanna1667@gmail.com</p>
            <img src = 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt = ''/>
            </Container>
            </Layout>
           
        </div>
    )
}

export default Contact;