import React from 'react'

function Comments() {
    return (
        <div className="blog-comment mt-85">
                  <h4 className="b-details-inner-title">Comments</h4>
                  <ul>
                    <li>
                      <div className="single-comment">
                        <div className="comment-avatar-img">
                          <img src="img/blog/comment_avatar01.jpg" alt="img" />
                        </div>
                        <div className="comment-text">
                          <div className="comment-avatar-info">
                            <h5>Thomas Herlihy <span className="comment-date">November 17, 2019</span></h5>
                            <a href="/#" className="comment-reply-link">Leave Reply</a>
                          </div>
                          <p>Vehicula dolor amet consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimem egestliberos dolor auctor
                            tellus.</p>
                        </div>
                      </div>
                    </li>
                    <li className="comment-reply">
                      <div className="single-comment">
                        <div className="comment-avatar-img">
                          <img src="img/blog/comment_avatar02.jpg" alt="img" />
                        </div>
                        <div className="comment-text">
                          <div className="comment-avatar-info">
                            <h5>Thomas Herlihy <span className="comment-date">November 17, 2019</span></h5>
                            <a href="/#" className="comment-reply-link">Leave Reply</a>
                          </div>
                          <p>Vehicula dolor amet consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimem egestliberos dolor auctor
                            tellus.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
    )
}

export default Comments
