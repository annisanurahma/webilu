import img1 from '../img/bg-caroussel-head1.jpg'
import img2 from '../img/bg-caroussel-head2.jpg'
import img3 from '../img/bg-caroussel-head3.jpg'

const Header = () => {
    return (
        <>
            <section>
                <div class="carousel slide carousel-head" data-bs-ride="carousel" id="carousel-1">
                    <div class="carousel-inner h-100">
                        <div class="carousel-item active h-100"><img class="w-100 d-block position-absolute h-100 fit-cover img-head" src={img1} alt="Slide Image" />
                            <div class="container d-flex flex-column justify-content-center h-100">
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <div class="width-head">
                                            <h1 class="text-uppercase fw-bold heading-carousel">Pemilu, Suara Rakyat Berkumpul<br /> Demokrasi Kita Tumbuh Bersama</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item h-100"><img class="w-100 d-block position-absolute h-100 fit-cover img-head " src={img2} alt="Slide Image" />
                            <div class="container d-flex flex-column justify-content-center h-100">
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <div class="width-head">
                                            <h1 class="text-uppercase fw-bold heading-carousel">Bersatu dalam Suara<br /> Demokrasi Terwujud</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item h-100"><img class="w-100 d-block position-absolute h-100 fit-cover img-head" src={img3} alt="Slide Image" />
                            <div class="container d-flex flex-column justify-content-center h-100">
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <div class="width-head">
                                            <h1 class="text-uppercase fw-bold heading-carousel">Demokrasi Memilih<br /> Pemilu Menentukan Masa Depan</h1>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div><a class="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span class="carousel-control-prev-icon"></span><span class="visually-hidden">Previous</span></a><a class="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span class="carousel-control-next-icon"></span><span class="visually-hidden">Next</span></a></div>
                    <ol class="carousel-indicators">
                        <li data-bs-target="#carousel-1" data-bs-slide-to="0" class="active"></li>
                        <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carousel-1" data-bs-slide-to="2"></li>
                    </ol>
                </div>
            </section>
        </>
    )
}

export default Header