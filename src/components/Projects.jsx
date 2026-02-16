import React, { useEffect } from "react";
import "./Projects.css";

const Projects = () => {
  useEffect(() => {
    const items = document.querySelectorAll('[data-animate]');
    const timeline = document.querySelector('.timeline');

    const animateTimelineItems = () => {
      const triggerBottom = window.innerHeight * 0.85;
      items.forEach(item => {
        if (item.getBoundingClientRect().top < triggerBottom) {
          item.classList.add('show');
        }
      });
    };

    const animateTimelineLine = () => {
      const trigger = window.innerHeight * 0.25;
      if (timeline.getBoundingClientRect().top < trigger) {
        timeline.classList.add('animate-line');
      }
    };

    const onScroll = () => {
      animateTimelineItems();
      animateTimelineLine();
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('load', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('load', onScroll);
    };
  }, []);

  return (
    <section className="timeline-container" id="projects">
      <h1 className="timeline-title">PROJECTS</h1>

      <div className="timeline">
        {/* Project One */}
        <div className="timeline-item left" data-animate>
          <div className="timeline-year">2025</div>
          <div className="timeline-content">
            <h2 className="project-title">Tajiri Vault</h2>
            <p className="project-desc">
              Tajiri Vault is a comprehensive financial wellness application designed to empower users with actionable financial insights. The platform features an AI-powered chatbot to assist with budgeting, categorize transactions, set and track financial goals, and provide personalized recommendations. Users can engage with a community page to share knowledge, daily tips, and achievements. The app also includes an AI-driven receipt scanner that automatically organizes expenses, maintains a detailed transaction history, and offers data-driven insights to optimize financial planning. Tajiri Vault leverages advanced LLM capabilities to provide intelligent, real-time guidance for smarter financial decisions.{" "}
              <a href="#" className="project-link" target="_blank" rel="noopener">Learn More →</a>
            </p>
          </div>
        </div>

        {/* Project Two */}
        <div className="timeline-item right" data-animate>
          <div className="timeline-year">2026</div>
          <div className="timeline-content">
            <h2 className="project-title">SecureOps Manager</h2>
            <p className="project-desc">
              SecureOps Manager is a robust security management platform designed to streamline operations across multiple locations. It supports three roles—Guard, Supervisor, and Owner—each with tailored dashboards and permissions. Owners can manage locations, assign personnel, and broadcast announcements. Supervisors can create schedules, monitor shifts, and communicate with guards. Guards can track working hours, view assigned shifts, and submit pay data. The platform ensures efficient workforce management, transparent communication, and real-time reporting, optimizing security operations across all sites.{" "}
              <a href="#" className="project-link" target="_blank" rel="noopener">Learn More →</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
