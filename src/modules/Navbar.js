import pdfWhite from '../images/pdfWhite.png';
export default function Navbar() {

    function scrollToSection(num) {
        var section = document.getElementById("section" + num);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
    }

    return(
        <div className="navbar">
            <button className="navTitle" onClick={() => scrollToSection(0)}>Logan Witte</button>
            <div className="navButtonDiv">
                <button className="navButton" onClick={() => scrollToSection(2)}>About</button>
                <button className="navButton" onClick={() => scrollToSection(3)}>Skills</button>
                <button className="navButton" onClick={() => scrollToSection(4)}>Projects</button>
                <button className="navButton" onClick={() => scrollToSection(5)}>Experience</button>
                <button className="navButton" onClick={() => scrollToSection(6)}>Contact</button>
                <a href="/resources/resume.pdf" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
                    
                    <button className="navButton" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img src={pdfWhite} style={{width: '1.2em', height: '1.2em'}} alt="PDF Logo" />
                        Resume
                    </button>
                </a>
            </div>
            
        </div>
    )
}