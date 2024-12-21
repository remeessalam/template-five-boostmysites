import { whyChooseUs } from "../../../../globals/constants";
import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import imagesone from "../../../../assets/images/chooseus1.jpg";
import imagestwo from "../../../../assets/images/chooseus2.jpg";
import imagesthree from "../../../../assets/images/chooseus3.jpg";
function SectionBlogs1() {
  return (
    <>
      <div
        className="section-full p-t110 p-b80 sx-bg-white sx-latest-blog-outer wow fadeInDown"
        data-wow-duration="1000ms"
      >
        <div className="container">
          {/* TITLE START */}
          <div className="section-head center">
            {/* <div className="sx-head-s-title">Our Blogs</div> */}
            <div className="sx-head-l-title">
              <h2 className="sx-title">
                Why Choose [your company name] Technologies
              </h2>
              <p>{whyChooseUs.mainHeading}</p>
            </div>
          </div>
          {/* TITLE END */}
          <div className="section-content">
            <div className="owl-carousel sx-latest-blog-1-carousel m-b30">
              {/*One block*/}
              {whyChooseUs.details.map((obj, i) => (
                <div key={obj.heading} className="item">
                  <div className="whychoose sx-latest-post-st-1 ">
                    <div
                      className="sx-post-media sx-img-effect img-reflection"
                      //   style={{ minHeight: "300px", objectFit: "cover" }}
                    >
                      <img src={obj.iamge} className="chooseusimage" alt="" />
                    </div>
                    <div className="sx-post-info p-t30">
                      <div className="sx-post-title ">
                        <h4 className="post-title">
                          {/* <NavLink to="/blogs/detail"> */}
                          {obj.heading}
                          {/* </NavLink> */}
                        </h4>
                      </div>
                      <div className="sx-post-meta ">
                        <p>{obj.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionBlogs1;
