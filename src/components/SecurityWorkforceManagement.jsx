import { Link } from "react-router-dom";
import kingLogo from "../assets/king.png";
import announcementShot from "../assets/security-screenshots/annoucment.png";
import ownerPayrollShot from "../assets/security-screenshots/owner-payroll.png";
import guardPayrollShot from "../assets/security-screenshots/payroll-guard.png";
import "./SecurityWorkforceManagement.css";

export const SecurityWorkforceManagement = () => {
  return (
    <main className="security-page">
      <div className="security-shell">
        <header className="security-hero">
          <div className="security-hero-head">
            <div>
              <p className="security-eyebrow">Security Operations Product</p>
              <div className="security-title-line">
                <div className="security-inline-logo" aria-label="Project logo">
                  <img
                    src={kingLogo}
                    alt="Security Workforce logo"
                    className="security-inline-logo-img"
                  />
                </div>
                <h1 className="security-title">Security Workforce Management Platform</h1>
              </div>
              <p className="security-subtitle">
                A secure, role-driven platform that streamlines scheduling, payroll, and
                communication for private security teams across multiple locations.
              </p>
            </div>
          </div>

          <div className="security-hero-meta">
            <div className="security-kpi"><strong>3</strong><span>Role Dashboards</span></div>
            <div className="security-kpi"><strong>2</strong><span>Payroll Cycles</span></div>
            <div className="security-kpi"><strong>JWT</strong><span>Secure Auth Layer</span></div>
          </div>

          <div className="security-tech-row">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>JWT</span>
            <span>Luxon</span>
          </div>
        </header>

        <section className="security-section">
          <h2>Overview</h2>
          <p>
            Built to replace fragmented operational tools with one secure workspace where owners,
            supervisors, and guards can manage schedules, payroll, and communication in real time.
          </p>
          <div className="security-problem-grid">
            <article>
              <h3>Communication gaps</h3>
              <p>Important updates were hard to track across distributed locations.</p>
            </article>
            <article>
              <h3>Manual scheduling</h3>
              <p>Shift planning relied on spreadsheets and repeated data entry.</p>
            </article>
            <article>
              <h3>Payroll errors</h3>
              <p>Semi-monthly calculations often caused reconciliation issues.</p>
            </article>
            <article>
              <h3>Permission risk</h3>
              <p>Teams needed strict role boundaries for production safety.</p>
            </article>
          </div>
        </section>

        <section className="security-section">
          <h2>Role-Based System</h2>
          <div className="security-role-grid">
            <article className="security-role-card">
              <h3>Owner</h3>
              <ul>
                <li>Manage users and locations</li>
                <li>Broadcast announcements</li>
                <li>Oversee payroll submissions</li>
              </ul>
            </article>
            <article className="security-role-card">
              <h3>Supervisor</h3>
              <ul>
                <li>Create and publish schedules</li>
                <li>Assign guards by location</li>
                <li>Submit pay-period records</li>
              </ul>
            </article>
            <article className="security-role-card">
              <h3>Guard</h3>
              <ul>
                <li>View assigned schedules</li>
                <li>Log completed shifts</li>
                <li>Submit pay-period entries</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="security-section">
          <h2>Scheduling & Payroll</h2>
          <ol className="security-flow-list">
            <li>Weekly schedules are published with overlap prevention logic.</li>
            <li>Shift logs validate time ranges and overnight boundaries.</li>
            <li>Entries auto-group into 1–15 and 16–end-of-month payroll windows.</li>
            <li>Submitted periods become immutable for audit-safe payroll history.</li>
          </ol>

          <div className="security-shot-grid">
            <figure className="security-shot-image-wrap">
              <img
                src={ownerPayrollShot}
                alt="Owner payroll review and submission screen"
                className="security-shot-image"
              />
              <figcaption className="security-shot-caption">Owner payroll review</figcaption>
            </figure>
            <figure className="security-shot-image-wrap">
              <img
                src={guardPayrollShot}
                alt="Guard pay-period entry screen"
                className="security-shot-image"
              />
              <figcaption className="security-shot-caption">Guard pay-period entry</figcaption>
            </figure>
          </div>
        </section>

        <section className="security-section">
          <h2>Announcements</h2>
          <p>
            Owners and supervisors send location-aware updates so guards receive only relevant
            operational communication.
          </p>
          <figure className="security-shot-image-wrap security-shot-wide">
            <img
              src={announcementShot}
              alt="Location-aware announcement broadcast screen"
              className="security-shot-image"
            />
            <figcaption className="security-shot-caption">Location-scoped announcement feed</figcaption>
          </figure>
        </section>

        <section className="security-section">
          <h2>Architecture & Security</h2>
          <div className="security-two-col">
            <div>
              <h3>Backend Architecture</h3>
              <ul>
                <li>Modular controllers, routes, and middleware</li>
                <li>Centralized validation and error handling</li>
                <li>Schema models for users, shifts, payroll, and announcements</li>
              </ul>
            </div>
            <div>
              <h3>Security Controls</h3>
              <ul>
                <li>JWT authentication and protected routing</li>
                <li>Role middleware and API-level permission checks</li>
                <li>Immutable payroll locks after submission</li>
              </ul>
            </div>
          </div>

          <div className="security-footer-cta">
            <Link to="/#projects" className="security-btn security-btn-secondary">
              Back to Projects
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SecurityWorkforceManagement;
