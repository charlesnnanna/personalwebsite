import React from 'react';
import Container from '../components/container';
//import styles from '../styles/about-css-module.module.css';
import User from '../components/user';

const AboutCssModule = () => {
    return (
        <div>
            <Container>
            <h1> CSS Modules are fucking killing me</h1>
            <p>I think I'm gonna be using this for a while</p>
            </Container>

            <User avatar = 'https://images.unsplash.com/photo-1544620516-0c33a489688a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            username = 'Jane Crazy Doe'     excerpt = "I'm Jane Crazy Doe, I like dressing like a harlot and looking sexy for ment o fuck" />

            <User avatar = 'https://images.unsplash.com/photo-1584984647264-7e6f4e6d6b91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            username = 'Green Man'      excerpt = 'I am the green dude. As you can see, I took this picture in a green background' />

            <User avatar = 'https://images.unsplash.com/photo-1585168765909-076cbcee6e2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            username = 'Reca Gholami'       excerpt = 'I am Reca; the only decent fuck in this fucking demo website' />
        </div>
    )
}

export default AboutCssModule;