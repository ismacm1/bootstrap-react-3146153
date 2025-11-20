import React from 'react'
 export const SectionCards = () => {
  return (
   <div className="container mt-5">

  {/* Título */}
  <h1 className="fw-bold text-center mb-5" style={{ fontSize: "48px" }}>Metrika</h1>

  <div className="row justify-content-center g-4">

    {/* COLUMNA 1 */}
    <div className="col-12 col-md-3 d-flex flex-column gap-4">

      {/* Resume (alto) */}
      <div
        className="text-white text-center rounded d-flex flex-column justify-content-center"
        style={{ height: "260px", background: "#C33737" }}
      >
        <i className="bi bi-download fs-1"></i>
        <span className="fw-semibold fs-4">Resume</span>
      </div>

      {/* Contacts (cuadro mediano) */}
      <div
        className="text-white text-center rounded d-flex flex-column justify-content-center"
        style={{ height: "200px", background: "#D94796" }}
      >
        <i className="bi bi-geo-alt-fill fs-1"></i>
        <span className="fw-semibold fs-4">Contacts</span>
      </div>

    </div>

    {/* COLUMNA 2 */}
    <div className="col-12 col-md-3 d-flex flex-column gap-4">

      {/* About Us */}
      <div
        className="text-white text-center rounded d-flex flex-column justify-content-center"
        style={{ height: "120px", background: "#2E9E5E" }}
      >
        <i className="bi bi-journal-text fs-2"></i>
        <span className="fw-semibold fs-5">About Us</span>
      </div>

      {/* Our Team */}
      <div
        className="text-white text-center rounded d-flex flex-column justify-content-center"
        style={{ height: "120px", background: "#2E9E5E" }}
      >
        <i className="bi bi-people-fill fs-2"></i>
        <span className="fw-semibold fs-5">Our Team</span>
      </div>

      {/* Blog */}
      <div
        className="text-white text-center rounded d-flex flex-column justify-content-center"
        style={{ height: "120px", background: "#E19529" }}
      >
        <i className="bi bi-pencil-square fs-2"></i>
        <span className="fw-semibold fs-5">Blog</span>
      </div>

      {/* Feedback */}
      <div
        className="text-white text-center rounded d-flex flex-column justify-content-center"
        style={{ height: "120px", background: "#D9A404" }}
      >
        <i className="bi bi-envelope-fill fs-2"></i>
        <span className="fw-semibold fs-5">Feedback</span>
      </div>

    </div>

    {/* COLUMNA 3 (OUR WORKS GRANDE) */}
    <div className="col-12 col-md-4 d-flex flex-column justify-content-center">

      <div
        className="text-white text-center rounded d-flex flex-column justify-content-center"
        style={{ height: "450px", background: "#24AADB" }}
      >
        <i className="bi bi-images fs-1 mb-2"></i>
        <span className="fw-semibold fs-3">Our Works</span>
      </div>

    </div>

  </div>
</div>
  )
}





