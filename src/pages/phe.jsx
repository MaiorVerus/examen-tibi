
import { Link } from "react-router-dom"

import Footer from "../comp/footer";

document.title = "PHE";
export default function PHE() {

  console.log("current doc is", document.title); //for testing


  return (
    <>

      <div className="main-wrapper">
        <main>

          <p>back to <Link to="/"> home page</Link></p>
          <article>
          </article>
          <hr />

          <h2>existentialism</h2>
          <ol type="I">
            <li>  principles of existentialism      </li>
            <li>aims of existentialism in education</li>
            <li>existentialism and curriculum</li>
            <li>existentialism and teaching methods</li>
            <li>existentialsm and teacher</li>
            <li>criticisms of existentialism</li>
            <li>what existentialism does not believe</li>
          </ol>
        </main >
      </div>

      <Footer />
    </>
  )

}