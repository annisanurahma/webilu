import Header from '../component/Header'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <section>
                <div class="container py-5 bg-about-web mt-5 apa-pemilu">
                    <div class="row">
                        <div class="col-md-8 col-xl-6 text-center mx-auto">
                            <h3 class="fw-bold sub-judul">APA SIH PERAN PEMILU</h3>
                        </div>
                    </div>
                    <div class="py-5 p-lg-5">
                        <div class="row row-cols-1 row-cols-md-2 mx-auto width-900" >
                            <div class="col-xl-12 col-12 col-md-12 col-sm-12">
                                <section class="py-4 py-xl-5">
                                    <div class="container">
                                        <div class="text-center">
                                            <h4 class="fw-bold mb-4"><span class="span-font">Pemilu memainkan peran penting dalam membentuk kebijakan publik di negara demokratis. Melalui pemilu, warga negara memiliki kesempatan untuk memilih para pemimpin dan partai politik yang akan mewakili mereka dalam proses pengambilan keputusan. Artikel ini akan menguraikan mengapa pemilu memainkan peran penting dalam membentuk kebijakan publik, serta dampaknya terhadap proses demokrasi dan kehidupan masyarakat.</span><br /></h4><button class="btn btn-primary fs-5 me-2 py-2 px-4" type="button"><a href="pemilu">Baca Lebih Lanjut</a></button>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-4 py-xl-5 bg-heading-about-web mt-5">
                <div class="container">
                    <div class="text-white bg-dark border rounded border-0 p-4 p-md-5 bg-heading-about-web-contras">
                        <h2 class="fw-bold text-white mb-3">Tujuan Webilu</h2>
                        <p class="mb-4">Website ini bertujuan untuk memberikan pemahaman yang lebih baik tentang pemilu kepada pembaca, termasuk penjelasan tentang proses pemungutan suara, peran partai politik, kampanye politik, dan pentingnya hak suara.</p>
                        <div class="my-3"></div>
                    </div>
                </div>
            </section>
            <section>
                <div class="container py-5">
                    <div class="row mb-3">
                        <div class="col">
                            <h3 class="sub-judul fw-bold text-center">EDUKASI PEMILU</h3>
                        </div>
                    </div>
                    <div class="mx-auto width-900">
                        <div class="row row-cols-1 row-cols-md-2 d-flex justify-content-center">
                            <div class="col mb-4">
                                <div class="card bg-primary-light">
                                    <div class="card-body text-center px-4 py-5 px-md-5">
                                        <h5 class="fw-bold card-title mb-3">Mengapa Berpartisipasi Dalam Pemilu Penting?<br /></h5><button class="btn btn-primary btn-sm" type="button"><a href='partisipasi'>Baca Lebih Lanjut</a></button>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-4">
                                <div class="card bg-secondary-light">
                                    <div class="card-body text-center px-4 py-5 px-md-5">
                                        <h5 class="fw-bold card-title mb-3">Bagaimana Sistem Pemilu Berjalan?<br /></h5><button class="btn btn-secondary btn-sm" type="button"><a href='role'>Baca Lebih Lanjut</a></button>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-4">
                                <div class="card bg-info-light">
                                    <div class="card-body text-center px-4 py-5 px-md-5">
                                        <h5 class="fw-bold card-title mb-3">Peran Partai Politik itu Apa?</h5><button class="btn btn-info btn-sm" type="button"><a href='peran'>Baca Lebih Lanjut</a></button>
                                    </div>
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

export default Home