import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

import Navy from '../img/team/navy.jpg'
import Nisa from '../img/team/nisa.jpg'
import Farel from '../img/team/farel.jpg'
import Devon from '../img/team/devon.jpg'

const About = () => {
    return (
        <>
            <Navbar />
            <section class="py-5">
                <div class="container py-5">
                    <div class="row mb-4 mb-lg-5">
                        <div class="col-md-8 col-xl-6 text-center mx-auto">
                            <h2 class="fw-bold">Anggota Kelompok</h2>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-md-4 col-xxl-4 col-sm-6"><div class="container"><figure class="snip1563">
                            <img src={Navy} alt="sample110" />
                            <figcaption>
                                <h3>Navy Gibran Atallah Tupan</h3>
                                <p>(00000087546)</p>
                            </figcaption>
                            <a href="#"></a>
                        </figure>
                        </div></div>
                        <div class="col col-md-4 col-xxl-4 col-sm-6"><div class="container"><figure class="snip1563">
                            <img src={Nisa} alt="sample110" />
                            <figcaption>
                                <h3>Annisa Nurahmah </h3>
                                <p>(00000087578)</p>
                            </figcaption>
                            <a href="#"></a>
                        </figure>
                        </div></div>
                        <div class="col col-md-4 col-xxl-4 col-sm-6"><div class="container"><figure class="snip1563">
                            <img src={Farel} alt="sample110" />
                            <figcaption>
                                <h3>Farel</h3>
                                <p>(00000075163)</p>
                            </figcaption>
                            <a href="#"></a>
                        </figure>
                        </div></div>
                        <div class="col col-md-4 col-xxl-4 col-sm-6"><div class="container"><figure class="snip1563">
                            <img src={Devon} alt="sample110" />
                            <figcaption>
                                <h3>Devon</h3>
                                <p>(00000068985)</p>
                            </figcaption>
                            <a href="#"></a>
                        </figure>
                        </div></div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About