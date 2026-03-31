

import "../css/comp-styles/footer.css"
// import "../css/global-stylesheet.css"

export default function Footer() {
    console.log("footer loaded also ✔");
    
    return (<>
        <footer>
            <div className="ft-top">
                <hr />
                <div className="ft-motto-wrapper">
                    <div class="ft-diamond-sm"></div>
                    <div class="ft-diamond"></div>
                    <div class="ft-motto">
                        Examen Tibi
                        <small>Prove thyself — in all things</small>
                    </div>
                    <div class="ft-diamond"></div>
                    <div class="ft-diamond-sm"></div>
                </div>
            </div>
            {/* <hr /> */}
            <p className="copyright-p">
                &copy; {new Date().getFullYear()} examen tibi.
            </p>
        </footer>
    </>)
}