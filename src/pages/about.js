import React from 'react'
import Layout from '../components/layout';

const About = () => {
    return (
        <div style = {{color : `orange`}}>
            <Layout>
            
            <h1>This is the Abouts Page</h1>
            <p>Waoh, Ive gotta say this, Gatsby is FUCKING AWESOME</p>
            <img src = 'https://images.unsplash.com/photo-1553531580-652231dae097?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt = ''/>
            </Layout>
            
        </div>
    )
}

export default About;