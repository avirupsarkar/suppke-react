import React from 'react'

function Searchbar() {
    return (
        <div className="single-sidebar search-sidebar-md">
                    <div className="sidebar-title mb-25">
                      <h3>Search</h3>
                    </div>
                    <div className="sidebar-form">
                      <form action="/#">
                        <input type="text" placeholder="Search type..." />
                        <button><i className="fas fa-search" /></button>
                      </form>
                    </div>
                  </div>
    )
}

export default Searchbar
