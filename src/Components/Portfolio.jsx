import React from "react";
import "./Port.css";

const Portfolio = () => {
  return (
    <div>
      <div className="head">
        <img src="Screenshot (315).png" alt="profile photo" height="350px" width="100%"/>
      </div>
      <div>
    <section class="bg-white" id="Experience">
        <div class="container">
            <div class="row">
                <h1 class="col-12 text-center fw-semibold py-3">Experience</h1>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 px-5 py-4">
                    <i class="fa-solid fa-graduation-cap h1"></i>
                    <h3 class="ps-2 py-2 fw-semibold d-inline-block">Education</h3>
                    <div class="pb-3">
                        <h5>Diploma<span class="text-accent-4 fw-bold"></span></h5>
                        <p class="mb-0 py-1 fst-italic">2013-2016</p>
                        <p>I have Completed my diploma from Gramin polytechnic,Nanded</p>
                    </div>
                    <div class="pb-3">
                        <h5>12th<span class="text-accent-4 fw-bold"></span></h5>
                        <p class="mb-0 py-1 fst-italic">2011 - 2013</p>
                        <p>I have Completed my 12th from Latur Board</p>
                    </div>
                    <div class="pb-3">
                        <h5>10th<span class="text-accent-4 fw-bold"></span></h5>
                        <p class="mb-0 py-1 fst-italic">2010 - 2011</p>
                        <p>I have Completed my 10th from Latur Board</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 px-5 py-4  border-start">
                    
                    <h3 >Work Experience</h3>
                    <div class="pb-3">
                        <h5>Team Lead Exaltech Software</h5>
                        <p class="mb-0 py-1 fst-italic">2022 - present</p>
                        <p> I am working as a team leader in Exaltech software since 1 year. i which i have 4 members team and I am a team leader</p>
                    </div>
                    <div >
                        <h5>Developer Exaltech pvt.Ltd</h5>
                        <p >2019 - 2021</p>
                        <p>I have worked as an Jr.React developer in Exaltech pvt.Ltd. In this time period I have done some projects  </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-white" id="Experience">
        <div class="container">
            <div class="row">
                <h1 class="col-12 text-center fw-semibold py-3">Skills</h1>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 px-5 py-4">
                   
                    <h3 class="ps-2 py-2 fw-semibold d-inline-block">HTML</h3>
                    <p class="mb-0 py-1 fst-italic">1 year Experience</p><br />
                    <div class="pb-3">
                        <h3>CSS<span class="text-accent-4 fw-bold"></span></h3>
                        <p class="mb-0 py-1 fst-italic">1 year Experience</p><br />
                    </div>
                    <div class="pb-3">
                        <h5>JavaScript<span class="text-accent-4 fw-bold"></span></h5>
                        <p class="mb-0 py-1 fst-italic">1 year Experience</p><br />
                    </div>
                </div>
                <div class="col-12 col-md-6 px-5 py-4  border-start">
                <div class="pb-3">
                        <h5>React.js<span class="text-accent-4 fw-bold"></span></h5>
                        <p class="mb-0 py-1 fst-italic">1 year Experience</p><br />
                    </div>
                    <div class="pb-3">
                        <h5>Redux<span class="text-accent-4 fw-bold"></span></h5>
                        <p class="mb-0 py-1 fst-italic">1 year Experience</p><br />
                    </div>
                    <div class="pb-3">
                        <h5>Bootstrap<span class="text-accent-4 fw-bold"></span></h5>
                        <p class="mb-0 py-1 fst-italic">1 year Experience</p><br />
                    </div>
                </div>
            </div>
        </div>
    </section>
      </div>
    </div>
  );
};

export default Portfolio;
