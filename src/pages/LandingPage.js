import profile from '../images/profile.jpg';
import linkedinLogo from '../images/linkedinlogo.png';
import githubLogo from '../images/githublogo.png';
import pdfBlack from '../images/pdfBlack.png';

export default function LandingPage() {

    function scrollToSection(num) {
        var section = document.getElementById("section" + num);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }

    return(
        <div className="landingDiv">

            <div className="enterDiv">
                <img className="profilePhoto" src={profile} alt="Profile"/>
                <div className="profileName">Logan Witte</div>
                <div className="profileDescription">
                    Computer science student @
                    <a href="https://ucf.edu" className="collegeLink">UCF</a>
                </div>
                <button className="enterPortfolioButton" onClick={() => scrollToSection(2)}>Enter Portfolio</button>
            </div>

            <div className="sectionDiv" id="section2">
                <div className="aboutDiv">
                    <div className="aboutTopDiv">
                        <div className="photoSocialDiv">
                            <img className="profilePhoto" src={profile} alt="Profile"/>
                            <div className="socialDiv">
                                <a href="https://www.linkedin.com/in/logan-witte-696637308/" target="_blank" rel="noreferrer">
                                    <button className="socialLink"><img src={linkedinLogo} style={{width: '70%'}} alt="linkedin Logo"/></button>
                                </a>
                                <a href="https://github.com/LoganWitte" target="_blank" rel="noreferrer">
                                    <button className="socialLink"><img src={githubLogo} style={{height: '70%'}} alt="github Logo"/></button>
                                </a>
                            </div>
                        </div>
                        <div className="aboutDescriptionDiv">
                            <h2>Logan Witte</h2>
                            UCF '25 Bachelors in Computer Science (In Progress)
                            <br /><br />
                            I am currently a student at the University of Central Florida who is passionate about computer science, programming, software engineering, web and game design, database management, and more.
                        </div>
                    </div>
                    <div className="aboutBottomDiv">
                        <h1>Learn more about my:</h1>
                        <div className="learnMoreDiv">
                            <button className="learnMoreButton" onClick={() => scrollToSection(3)}>Skills</button>
                            <button className="learnMoreButton" onClick={() => scrollToSection(4)}>Projects</button>
                            <button className="learnMoreButton" onClick={() => scrollToSection(5)}>Work Experience</button>

                            <a href="/resources/resume.pdf" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
                                <button className="learnMoreButton" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <img src={pdfBlack} style={{width: '1.2em', height: '1.2em'}} alt="PDF Logo" />
                                    Resume
                                </button>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="sectionDiv" id="section3">
                Skills
            </div>

            <div className="sectionDiv" id="section4">
                Projects
            </div>

            <div className="sectionDiv" id="section5">
                Experience
            </div>

            <div className="sectionDiv" id="section6" style={{borderBottom: 'none'}}>
                Contact
            </div>

        </div>
    )
}