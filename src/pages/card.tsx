import "./style.css";

const Card = () => {
    return (
        <section>
            <div className="row mt-4 pt-4">
                <div className="col-lg-4 col-12 ">
                    <div className="card card-1 m-2 align-items-center card-color1">
                        <img className="image1 mt-5" style={{ width: '70%' }} src="../assets/icons/animals1(1).png" alt="img" />
                        <h4>Playground</h4>
                        <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.</p>
                        <h5>Read More <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} fill="currentColor" className="bi bi-star star-rotate ms-2" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg></h5>
                    </div>
                </div>
                <div className="col-lg-4 col-12 ">
                    <div className="card card-2 m-2 align-items-center">
                        <img className="image2 mt-5" style={{ width: '62%' }} src="../assets/icons/animals2.png" alt="img" />
                        <h4>Entertainment</h4>
                        <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.</p>
                        <h5>Read More <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} fill="currentColor" className="bi bi-star star-rotate ms-2" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg></h5>
                    </div>
                </div>
                <div className="col-lg-4 col-12 ">
                    <div className="card card-3 m-2 align-items-center">
                        <img className="image3 mt-5" style={{ width: '47%' }} src="../assets/icons/animals3.png" alt="img" />
                        <h4>Environment</h4>
                        <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.</p>
                        <h5>Read More <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} fill="currentColor" className="bi bi-star star-rotate ms-2" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg></h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Card };