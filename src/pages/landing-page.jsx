

import { Link } from "react-router-dom"


import '../css/landing-pg-styles.css';

let bodyStyle = document.body.style; 

export default function LandingPage() {

  bodyStyle.backgroundImage = "url('./images/main.jpg')";
  // console.log(bodyStyle.backgroundImage);

  
  return (
    <>
      <div className="main-wrapper">
        <article>
          <h1>Examen Tibi</h1>
          <p>
            <b>
              I never thought from very beginning to inscribe this humble script.
              DUE to the extensive breadth of instructional material concurrently
              being disseminated in school, I have decided to take matters into my
              own hands. By curating a digital file within my personal computing
              device systematically comprising list of questions corresponding to
              each question for formative assessment. Forsooth, rather than
              meandering through vast labyrinth of voluminous texts and references,
              I shall consult this most esteemed meticulously crafted Hypertext
              Markup document for refinement of my faculties. Verily, may the
              Supreme Arbiter of Wisdom illuminate my path, that I may acquire
              profound understanding and adequate recall of the subjects contained
              therein. AMEN!
            </b>
          </p>
        </article>

        <hr />

        <div className="cards">
          <Link to="/phe">
            <div className="card phe">PHE 🧠</div>
          </Link>
          <Link to="/wd">
            <div className="card wd">WD 🌳</div>
          </Link>
          <Link to="/enm">
            <div className="card enm">ENM 🧱</div>
          </Link>
        </div>

        <footer>
          <p className="copyright-p">
            &copy; {} examen tibi. 
          </p>
        </footer>
      </div>
    </>
  )
}
