
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
                        <li>Characteristics, adv, disadv and uses of protein, contact & synthetic</li>
                        <li>Stages, methods of glue setting,</li>
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
                        <li>Importance, types of fasteners and fittings</li>
                        <li>
                            Importance, classification, parts and their functions, nailing technique,
                            factors influence nail grip, clinch nailing
                            factors to consider when ordering, uprooting, safety, risks of nails
                        </li>
                        <li>
                            Adv, disadv , application, factors when ordering, types
                            functions&uses, factors infuence grip, head types, process
                            techniques, safety
                        </li>
                        <li>uses, benefit, parts, classification, types, considerations when
                            using bolts, procedure, safety, tips for bolting
                        </li>

                    </details>
                </ol>
                <h2>Layout</h2>
                <ol type="I">
                    <details name="qa">
                        <li>Define it</li>
                        <li>Factors to consider, different layout models</li>
                    </details>
                </ol>
                <h2>wood machine</h2>
                <ol type="I">
                    <details name="qa">
                        <li>Define it</li>
                        <li>classification of wood machines: <span className="check-hint"><i>check hint</i></span></li> {/*tooltip here */}
                        <h3>wood lathe</h3>
                        <li>parts, types, uses, safety precautions</li>
                        <li>aspects used to categorize: </li>
                    </details>
                </ol>
            </div>
        </>
    )

}