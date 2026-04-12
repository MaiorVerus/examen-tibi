
import { Link } from "react-router-dom"

document.title = "ENM"

export default function PHE() {
  return (
    <>


      <div className="main-wrapper">
        <p>back to <Link to="/"> home page</Link></p>
        <article>
          <p><b>art of engineering materials</b></p>
        </article>
        <hr />
        <h2>Cladding</h2>
        <ol type="I">
          <details name="qa">
            <li>4 physical properties of cladding materials</li>
            <li>5 mechanical properties</li>
            <li>explain methods of manufacturing</li>
            <li>explain applications</li>
            <li>explain advantages</li>
            <li>factors to consider when cladding</li>
          </details>
        </ol>
        <h2>Polymers</h2>
        <ol type="I">
          <details name="qa">
            <li>Define it, explain its molecular structure and properties</li>
            <li>copolymers, advanced polymeric materials and plastics</li>
            <li>plastics, advanced plastics, types, plastic welding, plastic recycling</li>
            <ul>
              <li>types of plastics</li>
              <li>plastic welding techniques</li>
              <li>plastic recycling definition, why it matters, methods and its pros$cons</li>
              <li>plastic identification</li>
              <li>processing</li>
              <li>adv, disadvantages , applications</li>
            </ul>
            <li>machining</li>
            <li>heat bending</li>
            <li>plastic moulding processes (calendaring)</li>
            <li>fabrication of elostomers</li>
            <li>fabrication of fibers and films</li>
          </details>
        </ol>
        <h2>ceramics</h2>
        <ol type="I">
          <li>category, types of ceramic structure, properties, ceramic materials
            applicatins, drawbacks, flaws
          </li>
        </ol>
      </div>
    </>
  )

}