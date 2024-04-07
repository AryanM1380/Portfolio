import React from 'react';
import Stack from 'react-bootstrap/Stack';
import './EducationalBackground.css'; // Import CSS file for styling

const Education = () => {
    return (
        <div className="education-container">
            <Stack gap={3}>
                <div className="education-item">
                    <h3>Salamat Highschool</h3>
                    <p>2017 - 2020</p>
                    <p>Diploma of Math & physics in Iran</p>
                </div>
                <div className="education-item">
                    <h3>Fachhochschule Burgenland</h3>
                    <p>2020 - 2021</p>
                    <p>Learned German up to B1 level in Austria</p>
                </div>
                <div className="education-item">
                    <h3>Hamk Häme University of Applied Sciences</h3>
                    <p>2022 - present</p>
                    <p>Bachelor Degree in Computer Application, second year in Finland</p>
                </div>
            </Stack>
        </div>
    );
}

export default Education;
