import "./style.css";

const Timeline = () => {
    return (
        <section id="timeline">
            <div className="row mt-5 mb-5 pt-5 pb-5">
                <div className="col-lg-6 col-md-6 mt-3 pe-5 col-12 text-end card-box">
                    <h3 className="timeline-h3">2012</h3>
                    <h5>Outdoor Activity</h5>
                    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                </div>
                <div className="col-lg-6 col-md-6 col-12 ps-5 text-start timeline-image">
                    <div className="timeline-border ms-3">
                        <img src="../assets/circle-children4.jpg" alt="img" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 mt-4 pe-5 d-flex justify-content-end timeline-image">
                    <div className="timeline-border me-3">
                        <img src="../assets/gallery00.jpg" alt="img" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 mt-5 ps-5 text-start card-box">
                    <h3 className="timeline-h3">2011</h3>
                    <h5>Outdoor Activity</h5>
                    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                </div>
                <div className="col-lg-6 col-md-6 mt-5 pe-5 col-12 text-end card-box">
                    <h3 className="timeline-h3">2010</h3>
                    <h5>Outdoor Activity</h5>
                    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                </div>
                <div className="col-lg-6 col-md-6 col-12 mt-4 ps-5 text-start timeline-image">
                    <div className="timeline-border ms-3">
                        <img src="../assets/gallery01.jpg" alt="img" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 pe-5 mt-4 d-flex justify-content-end timeline-image">
                    <div className="timeline-border me-3">
                        <img src="../assets/gallery02.jpg" alt="img" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 mt-5 ps-5 col-12 text-start card-box">
                    <h3 className="timeline-h3">2009</h3>
                    <h5>Outdoor Activity</h5>
                    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                </div>
            </div>
        </section>
    );
};

export { Timeline };