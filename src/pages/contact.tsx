import "./style.css";

const Contact = () => {
  return (

    <section id="contact">
      <div className="row mt-5 mb-5">
        <div className="col-lg-6 col-md-12 col-12 mt-4">
        <iframe
            className="google-map"
            style={{ width: "90%", height: "100%" }}
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=tiruchengode+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          allowFullScreen={true}></iframe>
        </div>
        <div className="col-lg-6 col-md-12 col-12 mt-sm-4 contact-content">
          <div>
            <h3 className="about-color">Contact me</h3>
          </div>
          <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <input className="mt-3" type="text" placeholder="Your name *" />
          <input className="mt-3" type="email" placeholder="Your E-mail *" />
          <textarea className="mt-3" rows={3} placeholder="Message" />
          <button className="readmore-btn post-btn mt-3" type="button">Post A Comment</button>
        </div>
      </div>
      </section>

  );
};

export { Contact };