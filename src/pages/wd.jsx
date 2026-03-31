
import { Link } from "react-router-dom"

document.title === "WD"

export default function WD() {
    return (
        <>

            <div className="main-wrapper">
                <p>back to <Link to="/"> home page</Link></p>
                <article>
                    <p><b>art of carpentry</b></p>
                </article>
                <hr />
                <h2>WD</h2>
                <h2>ADHESIVES</h2>
                <ol type="I">
                    <details name="qa">
                        <li>Define terms: adhesive, open time, assembly time, setting time, curing time, pot life, thermoplastic, thermosetting adhesives</li>
                        <li>Uses, importance, characteristics, types of adhesives</li>
                        <li>Mechanical fasteners vs adhesives</li>
                        <li>Characteristics, adv, disadv and uses of protein, contact &amp; synthetic</li>
                        <li>Stages, methods of glue setting</li>
                        <li>Thermosetting vs thermoplastic</li>
                        <li>Factors affecting setting of glue</li>
                        <li>importance Of Proper Setting</li>
                        <li>tools to set glue</li>
                        <li>Factors To Consider When Selecting Adhesives</li>
                        <li>How is glue supplied</li>
                        <li>Application procedures</li>
                    </details>
                </ol>
                <h2>Fasteners and Fittings</h2>
                <ol type="I">
                    <details name="qa">
                        <li>Differentiate</li>
                        <li>Importance, types</li>
                        <li>Importance, classification, uprooting, safety, risks of nails</li>
                        <li>Adv, disadv , application, factors when ordering, types, technique of screws&nbsp;</li>
                    </details>
                </ol>
                <h2>Layout</h2>
                <ol type="I">
                    <details name="qa">
                        <li>Define it</li>
                        <li>Factors to consider, different layout models</li>
                    </details>
                </ol>
            </div>
        </>
    )

}