
import { Link } from "react-router-dom"

import Footer from "../comp/footer";



import css from '../css/landing-pg-styles.module.css';

let bodyStyle = document.body.style;

export default function LandingPage() {



  return (
    <>
      <div className="main-wrapper">
        <main>
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
          <p>therefore, what do you wish to quiz yourself on? </p>
          <div className={css["cards"]}>
            <Link to="/phe">
              <div className={css["card"] + " " + css["phe"]} title="pedagogy">
                PHE 🧠 <span className={css["card-span"]}>Pedagogy</span>
              </div>
            </Link>
            <Link to="/wd">
              <div className={css["card"] + " " + css["wd"]} title="wood">WD 🌳<span className={css["card-span"]}>Technology</span> </div>
            </Link>
            <Link to="/enm">
              <div className={css["card"] + " " + css["enm"]} title="engineering materials">
                ENM 🧱 <span className={css["card-span"]}>Engineering</span>
              </div>
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
