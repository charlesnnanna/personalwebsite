import React from "react";
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Grid from "../components/grid";
import gridStyles from '../styles/grid.module.css';


const Tester = () => {
    return (
        
        <div >
            <Layout>
                <div className = {gridStyles.container}> 

                <div className = {gridStyles.gridItem1}>
                  <Grid header = 'Dopang'  description = 'NodeJS, Jquery, HTML and CSS'/>
                  </div>

                    <div className = {gridStyles.gridItem2}>
                  <Grid header = 'TimeChecker'  description = 'AWS Amplify, AWS Lambda, React'/>
                  </div>

                    <div className = {gridStyles.gridItem3}>
                  <Grid header = 'MaarioBros'  description = 'VueJS, NodeJS, Mongo, Express'/>
                    </div>
                  
                  <div className = {gridStyles.gridItem4}>
                  <Grid header = 'Terra'  description = 'ReactJS, Nodejs, NextJS, AWS Amplify'/>
                  </div>
                  
                  <div className = {gridStyles.gridItem5}>
                  <Grid header = 'BrownHill'  description = 'AngularJS, TypeScript, AWS Lambda'/>
                  </div>
                  
                  <div className = {gridStyles.gridItem6}>
                  <Grid header = 'TemplateStreak'  description = 'PHP, Laravel, ReactJS, MySQL'/>
                  </div>
                  
                  <div className = {gridStyles.gridItem7}>
                  <Grid header = 'OnePageLove'  description = 'Python, Django, VueJS, MySQL'/>
                  </div>
                
                  <div className = {gridStyles.gridItem8}>
                  <Grid header = 'Haber'  description = 'Gatsby, ReactJS, Serverless'/>
                  </div>
                  
                  <div className = {gridStyles.gridItem9}>
                  <Grid header = 'GithubForum'  description = 'ReactJS, NodeJS, Serverless, AWS Amplify'/>
                  </div>
                 
                  <div className = {gridStyles.gridItem10}>
                  <Grid
                  header = 'Vivahalliance'  description = 'WampServer, PHP, MySQL, Jquery, Bootstrap, CSS'/>
                  </div>
                  
                  
                  </div>
            
            </Layout>
            
        </div>
    )
}
export default Tester;