import React from 'react'
import { Helmet } from "react-helmet";
import { SITETITLE } from '../Constants';

function HomePage() {
    return (
        <>
            <Helmet>
                <title>Home | {SITETITLE}</title>
            </Helmet>
            <section id="blog-page" className="pb-40 inner-page-hero blog-page-section division">
                <div className="container">

                    <div className="row ">
                        <div className="col">
                            <div className="posts-category ico-20 animate__animated animate__fadeInUp">
                                <h5 className="text-indigo mb-2">Search Projects/Papers</h5>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center mb-2 animate__animated animate__fadeInUp ">
                        <div className="col">
                            <div className="card border-0" style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px" }}>
                                <div className="card-body">
                                    <div className="search-filter-container animate__animated animate__fadeInUp">
                                        <div className="filters-container">
                                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                                                <div className="col">
                                                    <input type="text" id="searchBox" placeholder="Search For Projects/Papers" className="form-control my-2" />
                                                </div>
                                                <div className="col">
                                                    <select id="collaborationFilter" className="form-select my-2">
                                                        <option value="">All Collaboration Types</option>
                                                        <option value={3}>Researcher</option>
                                                        <option value={2}>Government</option>
                                                        <option value={1}>Student</option>
                                                    </select>
                                                </div>
                                                <div className="col">
                                                    <select id="affiliationFilter" className="form-select my-2">
                                                        <option value="">All Affiliations</option>
                                                        <option value={12}>Kyoto University</option>
                                                        <option value={11}>Other</option>
                                                        <option value={10}>McMaster University</option>
                                                        <option value={9}>University of Toronto</option>
                                                        <option value={8}>University of New Brunswick</option>
                                                        <option value={2}>NSERC Network</option>
                                                        <option value={1}>University of Waterloo</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col">
                            <div className="posts-category ico-20 animate__animated animate__fadeInUp">
                                <h4>Latest Projects/Papers</h4>
                            </div>
                        </div>
                    </div>
                    <div className="posts-wrapper">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                            <div className="col">
                                <div className="blog-post wow animate__animated animate__fadeInUp">
                                    <div className="blog-post-img r-12">
                                        <img className="img-fluid" src="/assets/images/blog/img-01.jpg" alt="blog-post-image" />
                                    </div>
                                    <div className="blog-post-txt">
                                        <span className="post-tag color--theme">Tutorials</span>
                                        <h5>
                                            <a href="single-post.html"> Integer posuere AI donec ipsum a porta justo auctor </a>
                                        </h5>
                                        <p> Sagittis congue augue egestas a velna integer purus filis magna suscipit... </p>
                                        <div className="blog-post-meta">
                                            <ul className="post-meta-list ico-10">
                                                <li>
                                                    <p className="p-sm">July 25, 2024</p>
                                                </li>
                                                <li className="meta-list-divider">
                                                    <p>
                                                        <span className="flaticon-minus-1" />
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="p-sm">8 min read</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="blog-post wow animate__animated animate__fadeInUp">
                                    <div className="blog-post-img r-12">
                                        <img className="img-fluid" src="/assets/images/blog/img-02.jpg" alt="blog-post-image" />
                                    </div>
                                    <div className="blog-post-txt">
                                        <span className="post-tag color--theme">Pintex News</span>
                                        <h5>
                                            <a href="single-post.html">A ligula risus diam auctor</a>
                                        </h5>
                                        <p> Congue sagittis augue egestas velna integer and purus filis suscipit magna felis turpis and blandit augue mauris.. </p>
                                        <div className="blog-post-meta">
                                            <ul className="post-meta-list ico-10">
                                                <li>
                                                    <p className="p-sm">July 19, 2024</p>
                                                </li>
                                                <li className="meta-list-divider">
                                                    <p>
                                                        <span className="flaticon-minus-1" />
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="p-sm">5 min read</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="blog-post wow animate__animated animate__fadeInUp">
                                    <div className="blog-post-img r-12">
                                        <img className="img-fluid" src="/assets/images/blog/img-03.jpg" alt="blog-post-image" />
                                    </div>
                                    <div className="blog-post-txt">
                                        <span className="post-tag color--theme">Insights</span>
                                        <h5>
                                            <a href="single-post.html"> Donec sapien augue and integer turpis cursus </a>
                                        </h5>
                                        <p> Congue sagittis augue egestas a velna integer purus filis suscipit magna... </p>
                                        <div className="blog-post-meta">
                                            <ul className="post-meta-list ico-10">
                                                <li>
                                                    <p className="p-sm">July 02, 2024</p>
                                                </li>
                                                <li className="meta-list-divider">
                                                    <p>
                                                        <span className="flaticon-minus-1" />
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="p-sm">6 min read</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage