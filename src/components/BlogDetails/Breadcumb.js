import React from 'react'

function Breadcumb() {
    return (
        <section className="breadcrumb-area breadcrumb-bg d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="breadcrumb-content text-center">
                <h2>Blog single post</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/index.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Blog Details</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Breadcumb
