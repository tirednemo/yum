import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="container-fluid footer">
                <div className="row text-center">
                    <div className="col-md">
                        <ul className="list-unstyled quick-links">
                            <li><a href="#"> Terms & Policy </a></li>
                            <li><a href="#"> About </a></li>
                            <li><a href="#"> FAQ </a></li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <ul className="list-unstyled quick-links">
                            <li><a href="#"> Delivery Policy </a></li>
                            <li><a href="#"> Loyalty Program </a></li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <ul className="list-unstyled quick-links">
                            <li><a href="#"> Support </a></li>
                            <li><a href="#"> Contact Us </a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <ul className="list-unstyled list-inline social text-center">
                        <li className="list-inline-item"><a href="#"> <i className="fa-brands fa-square-facebook"></i> </a></li>
                        <li className="list-inline-item"><a href="#"> <i className="fa-brands fa-twitter"> </i> </a></li>
                        <li className="list-inline-item"><a href="#"> <i className="fa-brands fa-instagram"> </i> </a></li>
                        <li className="list-inline-item"><a href="#"> <i className="fa-solid fa-envelope"> </i> </a></li>
                        <li className="list-inline-item"><a href="#"> <i className="fa-solid fa-headset"> </i> </a></li>
                    </ul>
                </div>
                <div className="row">
                    <div className="text-center text-white">
                        <p> 2023 &copy; <a href="#" target="_blank"> YumCast </a> | All right Reserved </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer