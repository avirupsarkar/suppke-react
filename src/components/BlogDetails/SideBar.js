import React from 'react';
import Category from './Category'
import RecentPosts from './RecentPosts'
import Searchbar from './Searchbar'
import Tags from './Tags'

function SideBar() {
    return (
        <aside className="blog-sidebar">
        <div className="widget mb-40">
          <Searchbar/>
        </div>
        <div className="widget mb-40">
          <Category/>
        </div>
        <div className="widget mb-40">
          <RecentPosts/>
        </div>
        <div className="widget">
          <Tags/>
        </div>
      </aside>
    )
}

export default SideBar
