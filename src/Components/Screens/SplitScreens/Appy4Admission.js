import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Appy4Admission() {
  return (
    <>
    <div className="">
    <Header/>
    <div className="container overflow-scroll">
    <div className="overflow-scroll m-0 p-0">
        <div className="row overflow-auto">
          <div classNameName="">
          <form  className="form-control border-0 shadow mt-4 px-5" >
                <div className="h5 border-bottom text-center  p-3"><p>Apply for Admission</p></div>
              <div className="row mb-3">
                <div className="col-12">
                    <label for="name">Name</label>
                    <input type="text" id="name" className="w-100 form-control shadow-sm " required />
                 </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                    <label for="m_name">Mother's Name</label>
                    <input type="text" id="m_name" className="w-100 form-control shadow-sm  " required />
                 </div>
                 <div className="col-6">
                    <label for="f_name">Father's Name</label>
                    <input type="text" id="f_name" className="w-100 form-control shadow-sm " required />
                 </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                    <label for="contact">Contact</label>
                    <input type="text" id="m_name" className="w-100 form-control shadow-sm " required />
                 </div>
                 <div className="col-6">
                    <label for="mail">Email</label>
                    <input type="text" id="f_name" className="w-100 form-control shadow-sm " required />
                 </div>
              </div>
              <div className="row mb-3">
                <div className="col-4">
                    <label for="education">Education</label>
                    <input type="text" id="education" className="w-100 form-control shadow-sm" required />
                 </div>
                 <div className="col-4">
                    <label for="dob">Date Of Birth</label>
                    <input type="date" id="dob" className="w-100 form-control shadow-sm " required />
                 </div>
                 <div className="col-4">
                    <label for="gg">Gender</label>
                    <input type="text" id="gg" className="w-100 form-control shadow-sm " required />
                 </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                    <label for="add">Address</label>
                    <textarea name="add" id="add" cols="173" rows="6" className="border rounded shadow-sm form-control " required></textarea>
                 </div>
              </div>
              <div className="row">
                  <div className="col-12">
                      <input type="submit" value="Add" className="w-100 py-2 fw-bold  text-white bg-dark border-0 rounded" />
                  </div>
              </div>
            </form>
          </div>
        </div>
    </div>
          <Footer/>
    </div>
    </div>

    </>
  )
}

export default Appy4Admission