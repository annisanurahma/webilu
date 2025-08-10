import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

import Jokowi from '../img/kadidat/jokowi.jpeg'
import Amin from '../img/kadidat/amin.jpg'
import Bowo from '../img/kadidat/bowo.jpg'
import Uno from '../img/kadidat/uno.png'
import Pdip from '../img/logos/PDIP.jpg'
import Gerindra from '../img/logos/Logo-Gerindra-1.png'


const Kadidat = () => {
    return (
        <>
            <Navbar />

            <section class="py-5">
                <div class="container py-5 text-center">
                    <div class="row mb-5">
                        <div class="col-md-8 col-xl-6 text-center mx-auto">
                            <h3 class="fw-bold">Calon Kandidat Pemilu</h3>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-2 mx-auto">
                        <div class="col-xxl-12 mb-3 col-md-12 col-sm-12"><img class="img-size-partai" src={Pdip} />
                            <h3>PDIP</h3>
                        </div>
                        <div class="col mb-4">
                            <div><a href="#"><img class="rounded img-fluid shadow w-100 fit-cover size-foto-kadida" src={Jokowi} /></a>
                                <div class="py-4">
                                    <h4 class="fw-bold">Joko Widodo</h4>
                                    <p class="text-muted">Gubernur DKI JAkarta</p>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4">
                            <div><a href="#"><img class="rounded img-fluid shadow w-100 fit-cover size-foto-kadida" src={Amin} /></a>
                                <div class="py-4">
                                    <h4 class="fw-bold">Ma'ruf Amin</h4>
                                    <p class="text-muted">Ketua Umum MUI</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-2 mx-auto">
                        <div class="col-xxl-12 mb-3 col-md-12 col-sm-12"><img class="img-size-partai" src={Gerindra} />
                            <h3>Gerindra</h3>
                        </div>
                        <div class="col mb-4 col-xxl-6 col-md-6 col-sm-12">
                            <div><a href="#"><img class="rounded img-fluid shadow w-100 fit-cover size-foto-kadida" src={Bowo} /></a>
                                <div class="py-4">
                                    <h4 class="fw-bold">Prabowo Subianto</h4>
                                    <p class="text-muted">Ketua Umum Partai Gerindra</p>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4">
                            <div><a href="#"><img class="rounded img-fluid shadow w-100 fit-cover size-foto-kadida" src={Uno} /></a>
                                <div class="py-4">
                                    <h4 class="fw-bold">Sandiaga Uno</h4>
                                    <p class="text-muted">Mentri Pariwisata dan Ekonomi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Kadidat