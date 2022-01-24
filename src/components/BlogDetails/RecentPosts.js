import React from 'react'

function RecentPosts() {
    return (
        <div className="single-sidebar white-bg">
                    <div className="sidebar-title mb-25">
                      <h3>Recent Posts</h3>
                    </div>
                    <div className="rc-post">
                      <ul>
                        <li>
                          <div className="rc-post-thumb">
                            <a href="/#"><img src="img/blog/rc_post_thumb01.jpg" alt="img" /></a>
                          </div>
                          <div className="rc-post-content">
                            <h5><a href="/#">Express Manegment Effective</a></h5>
                            <span>November 22, 2019</span>
                          </div>
                        </li>
                        <li>
                          <div className="rc-post-thumb">
                            <a href="/#"><img src="img/blog/rc_post_thumb02.jpg" alt="img" /></a>
                          </div>
                          <div className="rc-post-content">
                            <h5><a href="/#">Customer Logisties Process Overall</a></h5>
                            <span>November 22, 2019</span>
                          </div>
                        </li>
                        <li>
                          <div className="rc-post-thumb">
                            <a href="/#"><img src="img/blog/rc_post_thumb03.jpg" alt="img" /></a>
                          </div>
                          <div className="rc-post-content">
                            <h5><a href="/#">Supply is warehouse Effective</a></h5>
                            <span>November 22, 2019</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
    )
}

export default RecentPosts
