import React from 'react'
import { Helmet } from "react-helmet";
import { SITETITLE } from '../Constants';

function AddProject() {
  return (
    <>
      <Helmet>
        <title>Home | {SITETITLE}</title>
      </Helmet>
      <div className="create-project">
        <section id="blog-page" className="  inner-page-hero blog-page-section division">
          <div className="container mt-2">
            <div className="row justify-content-center ">
              <div className="col-12 col-lg-10 col-xl-8 wow animate__animated animate__fadeInDown ">
                <div className="card py-4 px-1 px-lg-4">
                  <h1 className="text-center h1-title "> Submit Your Video/Visual Abstract </h1>
                  <br />
                  <div className=" row my-4 ">
                    <div className="col-12 col-md-4 text-center d-flex align-items-center justify-content-center ">
                      <label className="label" htmlFor="new-project"> New Project </label>
                      <input type="radio" id="new-project" name="entrytype" className="mx-2" defaultValue={1} defaultChecked="" />
                    </div>
                    <div className="col-12 col-md-4 text-center d-flex align-items-center justify-content-center">
                      <label className="label" htmlFor="add-paper"> Add Paper to Project </label>
                      <input type="radio" id="add-paper" name="entrytype" className="mx-2" defaultValue={2} />
                    </div>
                    <div className="col-12 col-md-4 text-center d-flex align-items-center justify-content-center">
                      <label className="label" htmlFor="new-paper"> New Paper </label>
                      <input type="radio" id="new-paper" name="entrytype" className="mx-2" defaultValue={3} />
                    </div>
                  </div>
                  <div className=" Fcontainer register-page">
                    <div className="text-center">
                      <p className="text-center"> Please fill out the following information for validation and submission. </p>
                    </div>
                    <form className="register-page-form">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="form-wrap mb-2">
                            <label htmlFor="first_name"> First Name{" "} <strong className="text-danger required_label"> * </strong>
                            </label>
                            <input type="text" id="first_name" name="first_name" placeholder="John" className="form-control" defaultValue="" />
                          </div>
                        </div>
                        <div className="col-12 col-md 6">
                          <div className="form-wrap mb-2">
                            <label htmlFor="last_name"> Last Name{" "} <strong className="text-danger required_label"> * </strong>
                            </label>
                            <input type="text" id="last_name" name="last_name" placeholder="Doe" className="form-control" defaultValue="" />
                          </div>
                        </div>
                        <div className="col-12 col-md-12">
                          <div className="form-wrap mb-2">
                            <label htmlFor="affiliation"> Affiliation{" "} <strong className="text-danger required_label"> * </strong>
                            </label>
                            <select type="text" id="affiliation" name="affiliation" placeholder="Your Affiliation" className="form-control select">
                              <option value="">Select Affiliation</option>
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
                        <div className="col-sm-12">
                          <div className="row">
                            <div className="col-5 col-sm-3 col-md-3 col-lg-2 me-0 me-md-2">
                              <label>Collaborators</label>
                            </div>
                            <div className="col-5 col-sm-3 col-md-4 col-lg-2 me-0 me-md-2">
                              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="me-2" color="green" style={{ color: "green" }} height={25} width={25} xmlns="http://www.w3.org/2000/svg">
                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="collaboration-entry">
                          <div className="row align-items-center">
                            <div className="col-12 col-md-6 mb-2">
                              <div className="form-wrap">
                                <label> Collaborator Type{" "} <strong className="text-danger required_label"> * </strong>
                                </label>
                                <select id="collaborations[0].collaboratortype" name="collaborations[0].collaboratortype" className="form-control">
                                  <option value="">Select Collaborator Type</option>
                                  <option value={3}>Researcher</option>
                                  <option value={2}>Government</option>
                                  <option value={1}>Student</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12 col-md-6 mb-2">
                              <div className="form-wrap">
                                <label> Collaborator Affiliation{" "} <strong className="text-danger required_label"> * </strong>
                                </label>
                                <select id="collaborations[0].collaboratoraffiliation" name="collaborations[0].collaboratoraffiliation" className="form-control select">
                                  <option value=""> Select Collaborator Affiliation </option>
                                  <option value={12}>Kyoto University</option>
                                  <option value={11}>Other</option>
                                  <option value={10}>McMaster University</option>
                                  <option value={9}>University of Toronto</option>
                                  <option value={8}> University of New Brunswick </option>
                                  <option value={2}>NSERC Network</option>
                                  <option value={1}>University of Waterloo</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12 col-md-6 mb-2">
                              <div className="form-wrap">
                                <label> Collaborator Name{" "} <strong className="text-danger required_label"> * </strong>
                                </label>
                                <input type="text" id="collaborations[0].collaborator_name" name="collaborations[0].collaborator_name" className="form-control" placeholder="Enter Collaborator Name " defaultValue="" />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 mb-2">
                              <div className="form-wrap">
                                <label> Collaborator Email <strong />
                                </label>
                                <input type="email" id="collaborations[0].collaborator_email" name="collaborations[0].collaborator_email" className="form-control" placeholder="Enter Collaborator Email" defaultValue="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-wrap mb-2">
                            <label htmlFor="orcid"> ORCID <strong />
                            </label>
                            <input type="text" id="orcid" name="orcid" placeholder="Enter your ORCID" className="form-control" defaultValue="" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-wrap mb-2">
                            <label htmlFor="project_title"> New Project Title{" "} <strong className="text-danger required_label"> * </strong>
                            </label>
                            <input type="text" id="project_title" name="project_title" placeholder="Enter the title of your New Project " className="form-control" defaultValue="" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-wrap mb-2">
                            <label htmlFor="doi"> DOI <strong />
                            </label>
                            <input type="text" id="doi" name="doi" placeholder="Enter the DOI of your project/paper" className="form-control" defaultValue="" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-wrap mb-2">
                            <label htmlFor="project_detail_link"> Project Link{" "} <strong className="text-danger required_label"> * </strong>
                            </label>
                            <input type="text" id="project_detail_link" name="project_detail_link" placeholder="Enter the project link" className="form-control" defaultValue="" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-wrap mb-2">
                            <label htmlFor="link"> Post youtube link <strong />
                            </label>
                            <input type="text" id="link" name="link" placeholder="Enter the post youtube link " className="form-control" defaultValue="" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-wrap mb-2">
                            <label> Upload your institution ID{" "} <strong className="text-danger required_label"> * </strong>
                            </label>
                            <input type="file" id="institution_id" name="institution_id" accept="image/*,application/pdf" className="form-control-md" defaultValue="" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-wrap mb-2">
                            <label> Upload your video abstract <strong />
                            </label>
                            <input type="file" id="video_abstract" name="video_abstract" accept="video/*" className="form-control-md" defaultValue="" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-wrap mb-2">
                            <label> Upload your visual abstract <strong />
                            </label>
                            <input type="file" id="visual_abstract" name="visual_abstract" accept="image/*" className="form-control-md" defaultValue="" />
                          </div>
                        </div>
                        <div className="col-12 col-md-12">
                          <div className="form-wrap mb-2">
                            <label> Description <strong />
                            </label>
                            <textarea id="description" rows={5} name="description" className="form-control" style={{ minHeight: 100 }} defaultValue={""} />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-4">
                        <input type="radio" id="agrement" name="fav_language" className="me-2" defaultValue="agree" />
                        <label htmlFor="agrement"> *By using our service, you agree to our{" "} <a className="ms-1" style={{ color: "rgb(244, 93, 8)" }} href="/citeecho/terms-and-conditions" target="_blank" data-discover="true"> Terms And Conditions </a>
                        </label>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <button type="submit" className="btn r-06 btn--theme hover--black submit w-100" disabled=""> Submit </button>
                        </div>
                        <div className="col-12 col-md-6 mt-3 mt-md-0">
                          <button type="button" className="btn   cancel w-100" style={{ backgroundColor: "rgb(172, 168, 168)" }}> Cancel </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default AddProject