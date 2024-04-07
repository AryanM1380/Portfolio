import React from 'react';
import Card from 'react-bootstrap/Card';
import './workExperience.css'; // Import the CSS file for styling

const WorkExperience = () => {
  return (
    <Card>
      <Card.Header className="experience-title">Work Experience</Card.Header>
      <Card.Body>
        <section>
          <div className="experience">
            <h5 className="company-name">lightningchart</h5>
            <p className="date">May 2024 - Present</p>
            <p className="job-description">
              DVP testing, Creating demo dashboards, Data analytics.
            </p>
          </div>
        </section>
        <section>
          <div className="experience">
            <h5 className="company-name">Bovi oy</h5>
            <p className="date">Februrary 2024 - Present</p>
            <p className="job-description">
              Designer and developer of the Bovi oy website with WordPress, focusing on search and filter functionality for restaurants, cafes, and bars advertisement.
            </p>
          </div>
        </section>
      </Card.Body>
    </Card>
  );
}

export default WorkExperience;
