import "./style.css";

const Home = () => {
    return (
        <div>
            <div className="home-content" id="home">
                <div className="row background-image">
                    <div className="col-lg-6 col-12 align-left">
                        <h3 className="text-subtitle-h3 ps-3 pe-3">THE BEST IN OUR SCHOOL!</h3>
                        <h1 className="text-subtitle-h1">Our Courses!</h1>
                        <p className="text-subtitle-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Sed eu dui
                            non diam eleifend egestas</p>
                        <div>
                            <button className="readmore-btn mt-3" type="button">Read More</button>
                        </div>
                    </div>
                </div>
                {/* <svg class="svg-1 curve-svg" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1428.75 62.05">
        <path class="cls-1" d="M-114,132s185,44,434,18c0,0,304-41,551,0,0,0,290.5,57.25,443.75.13v43.69H-114Z"
            transform="translate(114 -131.78)"></path>
    </svg> */}
            </div>
            <section>
                <div className="mt-5">
                    <div className="row">
                        <div className="col-lg-6 col-12 text-center order-1">
                            <div className="img-border">
                                <img className="img-children" src="../assets/children.jpg" alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 mt-5 pt-4 about-text-cen order-2">
                            <h1 className="about-h1 mt-0 about-color">About Happy Kids</h1><br />
                            <h1 className="about-h1 mt-2 enter-color">Entertainment</h1>
                            <p className="about-p mt-4">Lorem ipsum dolar sit amet, consectetur adipiscing elit.<br /> Donec dui
                                enim, pharetra at auctor vitae.</p>
                            <div>
                                <button className="readmore-btn mt-3 font-nunito" type="button">Read More</button>
                            </div>
                        </div>
                    </div>
                </div></section>
        </div>
    );
};

export { Home };