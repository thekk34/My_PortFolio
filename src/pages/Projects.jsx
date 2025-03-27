import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";

import Particle from "../components/Particle";
import Oregg from "../assets/projects/Oregg.png";
import To_do from "../assets/projects/To_do.png";
import portfolio from "../assets/projects/portfolio.png";
import EventManagement from "../assets/projects/EventManagement.png";
import weather_forecast from "../assets/projects/weather_forecast.png";


const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Oregg}
              isBlog={false}
              title="Oregg"
              description="Oregg is a JavaScript-based web platform that provides healthy and tasty food. It focuses on delivering nutritious meals through an interactive online experience."
              ghLink="https://github.com/thekk34/Oregg"
              demoLink="https://thekk34.github.io/Oregg/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={To_do}
              isBlog={false}
              title="To Do List"
              description="A To-Do List app in React allows users to add, complete, and delete tasks with state management using useState"
              ghLink="https://github.com/thekk34/ToDoList"
              demoLink="https://thekk34.github.io/ToDoList/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="A Portfolio Website using HTML, CSS, and JavaScript showcases your skills, projects, and contact details. It includes sections like About Me, Projects, Skills, and Contact, with interactive elements for a better user experience"
              ghLink="https://github.com/thekk34/PortFolio"
              demoLink="https://thekk34.github.io/PortFolio/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EventManagement}
              isBlog={false}
              title="Event Management"
              description="An Event Management app in React helps users create, manage, and track events efficiently using useState and useEffect. It can include features like scheduling, reminders, and RSVP management.."
              ghLink="https://github.com/thekk34/Event_Management"
              demoLink="https://thekk34.github.io/Event_Management/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather_forecast}
              isBlog={false}
              title="Weather Forecast"
              description="A Weather Forecast app in React fetches real-time weather data using APIs like OpenWeatherMap. It displays temperature, humidity, and conditions based on user input. "
              ghLink="https://github.com/thekk34/WeatherForeCast"
              demoLink="https://the-weather-forecasting.netlify.app"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects