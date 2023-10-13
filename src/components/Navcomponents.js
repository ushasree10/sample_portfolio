import './style.css';
import { Link } from 'react-router-dom';
import  abs  from './images/abs.png';
import  pro  from './images/project.jpg';
import * as bootstrap from 'bootstrap';


const tooltips = document.querySelectorAll('.tt')
        tooltips.forEach((tooltip) => {
            new bootstrap.Tooltip(tooltip)
        })

        export function Home(){
            return(
                <div className="container mt-5">
                    <div className="row justify-content-center bg-dark">
                        <div className="col-lg-10" id="back">
                            <img src={abs} className="img-fluid" alt="" />
                            <div className="text-center text-light" id="back-text">
                                <h1>Welcome to My Portfolio</h1>
                                <p style={{ padding: "20px 0" }}>
                                    Hi, I'm Your Name, a passionate web developer. I create responsive and user-friendly websites and web applications. Explore my portfolio to see some of my recent projects.
                                </p>
                                <Link to="/projects" className="btn btn-primary">View Projects</Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        export function About() {
            return (
                <div className="container mt-5 pt-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-left mb-5">
                            <h2 className="mb-4">About Me</h2>
                            <p>
                                Hi there! I'm Your Name, a passionate and creative web developer based in Your City. With a strong background in web development and design, I create user-friendly and visually appealing websites. My expertise includes front-end and back-end technologies, allowing me to bring ideas to life from concept to implementation.
                            </p>
                            <p>
                                I am constantly exploring new technologies and frameworks to stay up-to-date with the latest trends in web development. My goal is to deliver high-quality solutions that meet the unique needs of my clients and users.
                            </p>
        
                            <h2 className="text-center mt-5 mb-4">My Skills</h2>
                            <ul className="list-unstyled"> 
                                <li>HTML, CSS, JavaScript</li>
                                <li>React.js, Vue.js</li>
                                <li>Node.js, Express.js</li>
                                <li>Database Management (SQL, MongoDB)</li>
                                <li>Responsive Web Design</li>
                                <li>Version Control (Git)</li>
                            </ul>
        
                            {/* Social Media Icons */}
                            <div className="mt-4 text-center">
                                <a href="https://github.com/your_github_profile" target="_blank" rel="noopener noreferrer" className="mr-3">
                                    <i className="bi bi-github icon"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/your_linkedin_profile" target="_blank" rel="noopener noreferrer" className="mr-3">
                                    <i className="bi bi-linkedin icon"></i>
                                </a>
                                <a href="https://www.instagram.com/your_instagram_profile" target="_blank" rel="noopener noreferrer" className="mr-3">
                                    <i className="bi bi-instagram icon"></i>
                                </a>
                                <a href="mailto:your.email@example.com">
                                    <i className="bi bi-envelope icon"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <i className="bi bi-person img-fluid rounded-circle mb-4" style={{ fontSize: '5rem' }}></i>
                        </div>
                    </div>
                </div>
            );
        }
        

        export function Projects() {
            return (
                <div className="projects-container">
                    <div className="container mt-5 pt-5">
                        <div className="row">
                            <div className="col-lg-4 mb-4">
                                <div className="card">
                                    <img src={pro} className="card-img-top" alt="Project 1" />
                                    <div className="card-body">
                                        <h5 className="card-title">Project 1</h5>
                                        <p className="card-text">Description of Project 1 goes here.</p>
                                        <a href="#" className="btn btn-primary">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4">
                                <div className="card">
                                    <img src={pro} className="card-img-top" alt="Project 2" />
                                    <div className="card-body">
                                        <h5 className="card-title">Project 2</h5>
                                        <p className="card-text">Description of Project 2 goes here.</p>
                                        <a href="#" className="btn btn-primary">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4">
                                <div className="card">
                                    <img src={pro} className="card-img-top" alt="Project 3" />
                                    <div className="card-body">
                                        <h5 className="card-title">Project 3</h5>
                                        <p className="card-text">Description of Project 3 goes here.</p>
                                        <a href="#" className="btn btn-primary">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }


export function Contact() {
    return (
        <div className="container mt-5 pt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <h2 className="text-center mb-4">Get in Touch</h2>
                    <p className="lead text-center">Questions to ask? Fill out the form to contact me directly...</p>

                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address:</label>
                            <input type="email" className="form-control" id="email" placeholder="e.g. xyz@gmail.com" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input type="text" className="form-control" id="name" placeholder="e.g. John Doe" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">What is your question about?</label>
                            <select className="form-select" id="subject" required>
                                <option value="" disabled selected>Select an option</option>
                                <option value="web development">Web Development</option>
                                <option value="design">Design</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Your message:</label>
                            <textarea className="form-control" id="message" rows="5" required></textarea>
                        </div>

                        <div className="mb-3 text-center">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


