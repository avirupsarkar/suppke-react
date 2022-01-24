import React from 'react'

function CommentForm() {
    return (
        <div className="comment-reply-box mt-85">
                  <h4 className="b-details-inner-title">Post a Comment</h4>
                  <form action="#" className="comment-form">
                    <textarea name="message" id="comment-message" placeholder="Your Comment" defaultValue={""} />
                    <div className="row">
                      <div className="col-md-6">
                        <input type="text" placeholder="Your Name*" />
                      </div>
                      <div className="col-md-6">
                        <input type="email" placeholder="Your Email*" />
                      </div>
                    </div>
                    <button className="btn">Submit</button>
                  </form>
                </div>
    )
}

export default CommentForm
