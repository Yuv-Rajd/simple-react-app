


function Projects() {
    return (
    <div className="row  col-lg-12 justify-content-md-center" id="scrollprojects">
        <h2 className="fs-2 txt mx-5 mb-5 mt-5 text-center" >PROJECTS</h2>
        <div className=" project row row-cols-lg-2 col-lg-8 my-2 mb-2  ">
            <div className="col col-lg-8">
                <div class="card prj" style={{width :30+"rem"}}>
                    <div class="card-body">
                        <h5 class="card-title txt">Airdrop Management System</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush mx-5">
                    <li class=" txt2"><b>Tools :</b> Python, VS code</li>
                    <li class=" txt2"><b>Duration :</b> 2 months</li>
                    <li class=" txt2"><b>Category :</b>Academic Project</li>
                    </ul>
                    <div class="card-body mx-5">
                        <button type="button" class="btn  btn-outline-primary txt">View Code</button>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4 my-auto">
                <img src={require("../static/images/img.png")} alt="img..." className="card-img"></img>
            </div>
        </div>



        <div className=" project row row-cols-lg-2 col-lg-8 my-2 mb-2  ">
            <div className="col col-lg-8">
                <div class="card prj" style={{width :30+"rem"}}>
                    <div class="card-body">
                        <h5 class="card-title txt">Airdrop Management System</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush mx-5">
                    <li class=" txt2"><b>Tools :</b> Python, VS code</li>
                    <li class=" txt2"><b>Duration :</b> 2 months</li>
                    <li class=" txt2"><b>Category :</b>Academic Project</li>
                    </ul>
                    <div class="card-body mx-5">
                        <button type="button" class="btn  btn-outline-primary txt">View Code</button>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4 my-auto">
                <img src={require("../static/images/img.png")} alt="img..." className="card-img"></img>
            </div>
        </div>
    </div>
    );
}

export default Projects;