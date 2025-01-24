import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { SITETITLE } from '../Constants';

function About() {
    return (
        <>
            <Helmet>
                <title>About | {SITETITLE}</title>
            </Helmet>
            <section id="job-position" className="pb-100 division">
                <div className="job-position-title b-border border--light" style={{ backgroundImage: "url(/assets/images/hero-3.jpg)" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 col-xl-9">
                                <div className="jb-txt text-center">
                                    <h2>About</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-xl-9">
                            <div className="txt-block position-info">
                                <h5>What is Pintex?</h5>
                                <p> Sagittis congue augue egestas integer velna purus purus magna nec suscipit fusce egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec ipsum augue luctus vitae egestas a laoreet molestie donec libero sapien dapibus congue tempor quisque{" "} <span> fusce cursus neque aliquam blandit fusce lacinia placerat and nulla justo molestie blandit justo diam aliquet tortor molestie sagittis lacinia undo and mullam molestie blandit luctus donec bibendum aliquet massa elementum </span> . Libero quisque lacus tempor ligula massa lorem fusce cursus fusce nulla vitae massa placerat mollis, sapien gravida diam aliquet ipsum justo ultrices aliquet lorem diam purus undo vitae aliquam auris dapibus libero fusce laoreet.{" "} </p>
                                <p> Congue augue sagittis egestas integer velna purus purus magna nec suscipit ipsum egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia a donec libero augue luctus vitae egestas a laoreet molestie donec libero sapien dapibus congue tempor placerat quisque fusce and cursus neque blandit fusce lorem nulla undo aliquam lacinia justo molestie blandit justo diam an aliquet tortor sagittis lacinia egestas.{" "} </p>
                                <h5>About the role:</h5>
                                <p> Congue augue sagittis egestas integer velna purus purus magna nec suscipit ipsum egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia a donec libero augue luctus vitae egestas a laoreet molestie donec libero sapien dapibus congue tempor placerat quisque fusce and cursus neque blandit fusce.{" "} </p>
                                <ul className="simple-list">
                                    <li className="list-item">
                                        <p> Quaerat sodales sapien undo velna purus euismod purus velna blandit turpis an auctor libero congue magna tempor sapien gravida laoreet turpis urna augue, viverra na augue libero eget pulvinar dapibus congue lorem nulla undo aliquam lacinia justo molestie.{" "} </p>
                                    </li>
                                    <li className="list-item">
                                        <p> Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien a congue diam egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec.{" "} </p>
                                    </li>
                                </ul>
                                <p> Congue augue sagittis egestas integer velna purus purus magna nec suscipit ipsum egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia a donec libero augue luctus vitae egestas a laoreet molestie donec libero sapien dapibus congue tempor placerat quisque fusce and cursus neque blandit fusce lorem nulla undo aliquam lacinia justo molestie blandit justo diam an aliquet tortor sagittis lacinia egestas.{" "} </p>
                                <h5>What you'll do:</h5>
                                <ul className="simple-list long-list">
                                    <li className="list-item">
                                        <p> Blandit velna vitae auctor congue magna and tempor sapien a gravida laoreet turpis. </p>
                                    </li>
                                    <li className="list-item">
                                        <p> Nemo ipsam egestas volute turpis dolores an aliquam quaerat sodales sapien lorem congue. </p>
                                    </li>
                                    <li className="list-item">
                                        <p> Quaerat sodales sapien euismod and purus blandit velna a vitae auctor congue and magna tempor sapien ipsum gravida laoreet turpis urna augue, viverra a augue eget pulvinar{" "} </p>
                                    </li>
                                    <li className="list-item">
                                        <p> Vitae auctor blandit velna congue magna and tempor sapien a turpis laoreet gravida </p>
                                    </li>
                                    <li className="list-item">
                                        <p> Laoreet turpis urna augue, viverra a augue eget, dictum tempor pulvinar dictum tempor. </p>
                                    </li>
                                    <li className="list-item">
                                        <p> Euismod purus blandit viverra undo augue dictum sapien tempor diam pulvinar </p>
                                    </li>
                                    <li className="list-item">
                                        <p> Vitae auctor ipsum congue magna tempor sapien eget gravida laoreet turpis </p>
                                    </li>
                                </ul>
                                <h5>We’re looking for someone who:</h5>
                                <ul className="simple-list long-list">
                                    <li className="list-item">
                                        <p> Sodales sapien quaerat euismod and purus{" "} <span> {" "} blandit velna a vitae auctor congue and magna tempor sapien ipsum gravida laoreet turpis urna augue, augue a viverra{" "} </span>{" "} pulvinar at laoreet augue luctus donec.{" "} </p>
                                    </li>
                                    <li className="list-item">
                                        <p> Sodales sapien quaerat euismod and purus blandit velna a vitae auctor congue diam magna tempor sapien ipsum gravida laoreet turpis urna augue, augue eget a viverra pulvinar{" "} </p>
                                    </li>
                                    <li className="list-item">
                                        <p> Blandit velna vitae auctor congue magna and tempor sapien a gravida laoreet turpis </p>
                                    </li>
                                    <li className="list-item">
                                        <p> Nemo ipsam egestas volute turpis dolores an aliquam quaerat sodales sapien congue augue egestas vitae purus justo lacus ligula ipsum primis cubilia </p>
                                    </li>
                                    <li className="list-item">
                                        <p> Quaerat sodales sapien euismod and purus blandit velna a vitae auctor donec congue magna tempor sapien ipsum gravida laoreet turpis urna augue, viverra a augue eget pulvinar{" "} </p>
                                    </li>
                                </ul>
                                <h5>What we can offer:</h5>
                                <p> Integer sagittis congue augue egestas velna purus purus magna nec suscipit ipsum egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia a donec libero augue luctus vitae egestas a laoreet molestie donec libero sapien dapibus congue tempor placerat quisque fusce and cursus neque blandit fusce lorem nulla undo aliquam lacinia justo molestie blandit justo diam an aliquet tortor sagittis lacinia egestas.{" "} </p>
                                <ul className="simple-list">
                                    <li className="list-item">
                                        <p> Quaerat sodales sapien undo velna purus euismod purus velna blandit turpis auctor sapien congue magna tempor sapien gravida laoreet turpis urna augue, viverra a augue eget diam pulvinar dapibus congue.{" "} </p>
                                    </li>
                                    <li className="list-item">
                                        <p> Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien congue augue egestas dapibus congue tempor undo quisque fusce cursus neque diam augue fusce sapien nulla ipsum primis lacinia ipsum vitae egestas a quisque molestie donec libero sapien lacinia ipsum a molestie.{" "} </p>
                                    </li>
                                </ul>
                                <p> Sagittis congue augue egestas integer velna purus purus magna nec suscipit ipsum egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia a donec libero augue luctus vitae egestas a laoreet molestie donec libero sapien dapibus congue tempor placerat quisque fusce and cursus neque blandit fusce lorem nulla undo aliquam lacinia justo molestie blandit justo diam an aliquet tortor sagittis lacinia egestas.{" "} </p>
                                <h5>How to apply</h5>
                                <p> Congue sagittis augue egestas integer velna purus purus magna nec suscipit and egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus vitae egestas a quisque molestie donec libero sapien dapibus congue tempor undo quisque fusce a cursus quisque blandit fusce.{" "} </p>
                                <ul className="simple-list">
                                    <li className="list-item">
                                        <p> Quaerat sodales sapien undo velna purus euismod purus velna blandit turpis auctor ociis congue magna tempor sapien gravida laoreet turpis urna augue, viverra a augue eget diam pulvinar dapibus congue vitae egestas a quisque molestie donec libero sapien dapibus.{" "} </p>
                                    </li>
                                    <li className="list-item">
                                        <p> Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien congue augue egestas luctus vitae egestas a laoreet molestie donec libero sapien dapibus congue.{" "} </p>
                                    </li>
                                </ul>
                                <div className="text-center">
                                    <a href="contacts.html" className="btn r-36 btn--theme hover--tra-black"> Apply for this job </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default About;
