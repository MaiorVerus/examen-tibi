
import { Link } from "react-router-dom"

document.title === "PHE";

export default function PHE() {

  console.log(document.title);
  

  return (
    <>

      <div className="main-wrapper">
        <p>back to <Link to="/"> home page</Link></p>
        <article>
        </article>
        <hr />
        <h2>Physical and Health Education</h2>
        <ol type="I">
          <li>explain the concept of physical fitness</li>
          <li>explain the components of physical fitness</li>
          <li>explain the benefits of physical fitness</li>
          <li>explain the factors affecting physical fitness</li>
          <li>explain the principles of training</li>
          <li>explain the methods of training</li>
        </ol>
      </div>
    </>
  )

}