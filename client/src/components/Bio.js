function Bio() {
    return (
        <div className="row row-cols-lg-2 mx-5 bio">
        <div className="col col-lg-6 mx-5 ">
            <p id="#scrollbio" className="fs-2">Computer Science Engineering Graduate</p>
            <p className="fs-5 ">
                I'm interested in front-end development, learned few and many on the way, have a look at my work at my <a>Github</a>
                <p className="fs-5 txt">(Python, C, PHP, HTML, JS, ReactJS, Machine Learning)</p>
            </p>
        </div>
        <div className="col col-lg-4 ">
                <img src={require("../static/images/img3.png")} alt="img..." className="card-img  img2"></img>
            </div>
        <br/>
        <br/>
        </div>
        
    );
}

export default Bio;