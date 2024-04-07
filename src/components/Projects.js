import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Projects.css'; 

const Projects = () => {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Bovi oy</Accordion.Header>
                <Accordion.Body>
                    <p>Februrary 2024 - present</p>
                    <p>Designer and developer of the Bovi oy website with WordPress, focusing on search and filter functionality for restaurants, cafes, and bars advertisement.</p>
                    <a href="#">Link: #Not lunch yet</a>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Miniprojects</Accordion.Header>
                <Accordion.Body>
                    <p>2023</p>
                    <p>Worked on mini-projects with Python language.</p>
                    <a href="https://github.com/AryanM1380">Link: My Github</a>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Hamk Project</Accordion.Header>
                <Accordion.Body>
                    <p>August 2023 - October 2023</p>
                    <p>This project focuses on providing constructive feedback to students based on their responses to questions. The aim is to improve overall learning outcomes by analyzing data and creating insightful charts that highlight trends and areas for improvement.</p>
                    <a href="https://github.com/Joonas22013/Group-7">Link: Github of project</a>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Website for Pizzurger Restaurant</Accordion.Header>
                <Accordion.Body>
                    <p>January 2023 - March 2023</p>
                    <p>This project is tailored for Hamk University, aiming to design, develop, and implement a comprehensive Restaurant Management system for Pizzurger.</p>
                    <a href="https://github.com/Timo-joinllur/Team4_WEBPROG">Link: Github of project</a>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Projects;
