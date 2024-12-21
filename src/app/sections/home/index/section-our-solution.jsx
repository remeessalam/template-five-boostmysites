import ItodoImage from "../../../elements/itodo-img";
import solution from "../../../../assets/images/solution.jpg";
function Sectionoursolutiion() {
  return (
    <>
      <div className="section-full  p-t110 p-b80 sx-bg-white sx-about-bx1-outer">
        <div className="container">
          <div className="section-content">
            <div className="sx-about-bx1-content-wrap">
              <div className="row">
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-content">
                    <h2 className="sx-title">Our solutions</h2>
                    {/* <span className="sx-title-2">
                      Empowering Innovation Through Software Solutions
                    </span> */}
                    <p>
                      Our solutions are meticulously crafted not only to address
                      your immediate needs but also to anticipate the challenges
                      of tomorrow., we are dedicated to delivering innovative,
                      tailor-made solutions that yield real results. At [your
                      company name] we understand that each organization is
                      unique. That’s why we take the time to understand your
                      specific goals and challenges, allowing us to create
                      bespoke strategies that drive success and propel your
                      business forward. Let us partner with you to navigate the
                      future with confidence and creativity.
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-media">
                    <div className="sx-dot-bx">
                      <ItodoImage src="images/about/dotted-pic.png" alt="" />
                    </div>
                    <div className="sx-ab-img-outer">
                      <div className="sx-ab-img-section-2">
                        <img src={solution} alt="our solution" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sectionoursolutiion;
