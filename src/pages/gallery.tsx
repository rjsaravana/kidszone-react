import "./style.css";

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="row gallery-row p-2">
        <div className="col-lg-4 col-md-4 col-12 mt-3 gal-image">
          <img src="../assets/gallery00.jpg" alt="img" />
        </div>
        <div className="col-lg-4 col-md-4 col-12 mt-3 gal-image">
          <img src="../assets/gallery01.jpg" alt="img" />
        </div>
        <div className="col-lg-4 col-md-4 col-12 mt-3 gal-image">
          <img src="../assets/gallery02.jpg" alt="img" />
        </div>
        <div className="col-lg-4 col-md-4 col-12 mt-3 gal-image">
          <img src="../assets/gallery03.jpg" alt="img" />
        </div>
        <div className="col-lg-4 col-md-4 col-12 mt-3 gal-image">
          <img src="../assets/gallery04.jpg" alt="img" />
        </div>
        <div className="col-lg-4 col-md-4 col-12 mt-3 gal-image">
          <img src="../assets/gallery05.jpg" alt="img" />
        </div>
      </div>
    </section>
  );
};

export { Gallery };