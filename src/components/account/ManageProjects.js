import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { SITETITLE } from '../Constants';
import './account.css';
function ManageProjects() {
    return (
        <>
            <Helmet>
                <title>Home | {SITETITLE}</title>
            </Helmet>
            <section id="blog-page" className="pb-40 inner-page-hero blog-page-section division">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 mb-4 mb-sm-5">
                            <div className="border-0">
                                <div className="card-body">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-lg-6 mb-4 mb-lg-0">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-container me-2">
                                                    <img src="/assets/images/team-1.jpg" alt="..." className="profile-avatar" />
                                                </div>
                                                <div className="py-1-9 w-100 rounded">
                                                    <h3 className="h5 mb-0">name</h3>
                                                    <span>email</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="posts-category ico-20 animate__animated animate__fadeInUp">
                                                <h4>Latest Projects/Papers</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <Link to="/add-project" className="btn r-06 btn--theme hover--black submit w-100">Add New Project</Link>
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ManageProjects