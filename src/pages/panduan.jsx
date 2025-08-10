import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

import Panduan from '../img/panduan-pemilu.jpg'

const panduan = () => {
    return (
        <>
            <Navbar />
            <section class="py-5">
                <div class="container py-5">
                    <div class="row mb-4 mb-lg-5">
                        <div class="col-md-8 col-xl-6 text-center mx-auto">
                            <h3 class="fw-bold">Tata Cara Meilih di TPS</h3>
                        </div>
                        <div class="col col-12 mt-3 text-center"><img src={Panduan} width="100%" /></div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default panduan