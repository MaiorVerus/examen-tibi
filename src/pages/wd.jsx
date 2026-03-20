
import { Link } from "react-router-dom"

document.title === "WD"

export default function WD() {
    return (
        <>
            {/* bodyStyle.backgroundImage = "url('/media/phe.png')";
            console.log(bodyStyle.backgroundImage); */}

            <div className="main-wrapper">
                <p>back to <Link to="/"> home page</Link></p>
                <article>
                    <p><b>art of carpentry</b></p>
                </article>
                <hr />
                <h2>WD</h2>
                <ol type="I">
                    <li>4 physical properties of cladding materials</li>
                    <li>5 mechanical properties</li>
                    <li>explain methods of manufacturing</li>
                    <li>explain applications</li>
                    <li>explain advantages</li>
                    <li>factors to consider when cladding</li>
                </ol>

            </div>
        </>
    )

}