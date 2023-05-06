import "./style.css";

const School = () => {
    return (
        <section id="school">
            <div className="school-title text-center col-12 mt-5">
                <h2 className="about-h1 about-color">School Educational</h2>
                <p className="about-p mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elitdo eiusmod. Lorem ipsum dolor
                    sit<br /> amet, consectetur adipiscing elitdo eiusmod</p>
            </div>
            <div className="row">
                <div className="school-card col-lg-4 col-md-6 col-12 mt-5">
                    <div className="item-image text-center m-0">
                        <img src="../assets/icons/elephant4.png" alt="img" />
                    </div>
                    <div className="card-box">
                        <h4 className="school-con-h4">Art Classes</h4>
                        <p className="school-con-p">Lorem ipsum dolor sit amet, consectetur adipiscing elitdo</p>
                    </div>
                </div>
                <div className="school-card col-lg-4 col-md-6 col-12 mt-5">
                    <div className="item-image text-center m-0">
                        <img src="../assets/icons/elephant1.png" alt="img" />
                    </div>
                    <div className="card-box">
                        <h4 className="school-con-h4">Education</h4>
                        <p className="school-con-p">Lorem ipsum dolor sit amet, consectetur adipiscing elitdo</p>
                    </div>
                </div>
                <div className="school-card col-lg-4 col-md-6 col-12 mt-5">
                    <div className="item-image text-center m-0">
                        <img src="../assets/icons/elephant3.png" alt="img" />
                    </div>
                    <div className="card-box">
                        <h4 className="school-con-h4">Activity Rooms</h4>
                        <p className="school-con-p">Lorem ipsum dolor sit amet, consectetur adipiscing elitdo</p>
                    </div>
                </div>
                <div className="school-card col-lg-4 col-md-6 col-12 mt-5">
                    <div className="item-image text-center m-0">
                        <img src="../assets/icons/elephant1.png" alt="img" />
                    </div>
                    <div className="card-box">
                        <h4 className="school-con-h4">Languages</h4>
                        <p className="school-con-p">Lorem ipsum dolor sit amet, consectetur adipiscing elitdo</p>
                    </div>
                </div>
                <div className="school-card col-lg-4 col-md-6 col-12 mt-5">
                    <div className="item-image text-center m-0">
                        <img src="../assets/icons/elephant4.png" alt="img" />
                    </div>
                    <div className="card-box">
                        <h4 className="school-con-h4">Birthday Party</h4>
                        <p className="school-con-p">Lorem ipsum dolor sit amet, consectetur adipiscing elitdo</p>
                    </div>
                </div>
                <div className="school-card col-lg-4 col-md-6 col-12 mt-5">
                    <div className="item-image text-center m-0">
                        <img src="../assets/icons/elephant5.png" alt="img" />
                    </div>
                    <div className="card-box">
                        <h4 className="school-con-h4">Healthy Food</h4>
                        <p className="school-con-p">Lorem ipsum dolor sit amet, consectetur adipiscing elitdo</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { School };