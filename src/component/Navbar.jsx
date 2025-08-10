import Logo from '../img/logos/web-logo.png'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-light navbar-expand-md sticky-top navbar-shrink py-3 background-nav" id="mainNav">
                <div class="container"><a class="navbar-brand d-flex align-items-center" href="/"><img class="img-logo" src={Logo} herf="home" /></a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navcol-1">
                        <ul class="navbar-nav mx-auto text-navbar">
                            <li class="nav-item"><a class="nav-link active" href="home">BERANDA</a></li>
                            <li class="nav-item"><a class="nav-link" href="panduan" >PANDUAN</a></li>
                            <li class="nav-item"><a class="nav-link" href="data" >DATA</a></li>
                            <li class="nav-item" ><a class="nav-link" href="kadidat" >KANDIDAT</a></li>
                            <li class="nav-item" ><a class="nav-link" href="aboutus" >ABOUT US</a></li>
                            <li class="nav-item"></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar