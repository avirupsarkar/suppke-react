import React from 'react'
import CommentForm from './CommentForm'
import Comments from './Comments'
import SideBar from './SideBar'


function BlogContent() {
    return (
        <section className="blog-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-blog-list">
                <div className="blog-list-thumb mb-35">
                  <img src="img/blog/blog_list_thumb01.jpg" alt="img" />
                </div>
                <div className="blog-list-content blog-details-content">
                  <div className="blog-details-date mb-10">
                    <ul>
                      <li><a href="/#"><i className="far fa-user" />Admin</a></li>
                      <li><i className="far fa-clock" /> February 22, 2019</li>
                    </ul>
                  </div>
                  <h2>Ocean Shipping Lines Word Relationship</h2>
                  <p>Express dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimem egestliberos dolor auctor
                    tellus, eu consectetur neque elit quis nunc. Cras elementum pretiumi Nullam justo efficitur, trist ligula pellentesque
                    ipsum. Quisque thsr augue ipsum, vehicula tellus maximus. Was popularised in the 1960s withs the release of Letraset
                    sheets containing Lorem Ipsum passags, and more recently with desktop publishing software like Aldus PageMaker including
                    versions.</p>
                  <p>Rxpress dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimem egestlibers dolosr auctor
                    tellus, eu consectetur neque elit quis nunc. Cras elementum pretiumi Nullam justo efficitur, trist ligula pellentesque
                    ipsum. Quisque thsr augue ipsum, vehicula tellus maximus.</p>
                  <blockquote>
                    Elementum pretiumi Nullam justo efficitur trist ligula pellentesqe ipsum quisque augue psum vehicula tellus tellus vitae
                    condimem maximus.
                  </blockquote>
                  <p>Vehicula dolor amet consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimem egestliberos dolor auctor
                    tellus, eu consectetur neque elit quis nunc. Cras elementum pretiumi Nullam justo efficitur, trist ligula pellentesque
                    ipsum. Quisque thsr augue ipsum, vehicula tellus maximus.</p>
                  <div className="blog-details-img">
                    <img src="img/blog/blog_details_img01.jpg" alt="img" />
                    <img src="img/blog/blog_details_img02.jpg" alt="img" />
                  </div>
                  <p>Express dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimem egestliberos dolor auctor
                    tellus, eu consectetur neque elit quis nunc. Cras elementum pretiumi Nullam justo efficitur, trist ligula pellentesque
                    ipsum. Quisque thsr augue ipsum, vehicula tellus maximus. Was popularised in the 1960s withs the release of Letraset
                    sheets containing Lorem Ipsum passags, and more recently with desktop publishing software like Aldus PageMaker including
                    versions.</p>
                  <p>Vehicula dolor amet consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimem egestliberos dolor auctor
                    tellus, eu consectetur neque elit quis nunc. Cras elementum pretiumi Nullam justo efficitur, trist ligula pellentesque
                    ipsum. Quisque thsr augue ipsum, vehicula tellus maximus.</p>
                  <div className="blog-list-meta">
                    <ul>
                      <li className="blog-post-date">
                        <div className="blog-details-tag">
                          <i className="fas fa-tags" />
                          <a href="/#">Warehouse</a>
                          <a href="/#">Ocean</a>
                          <a href="/#">Freight</a>
                          <a href="/#">Railway</a>
                        </div>
                      </li>
                      <li className="blog-post-share">
                        <a href="/#"><i className="fab fa-facebook-f" /></a>
                        <a href="/#"><i className="fab fa-twitter" /></a>
                        <a href="/#"><i className="fab fa-pinterest-p" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="avatar-post mt-70 mb-60">
                  <ul>
                    <li>
                      <div className="post-avatar-img">
                        <img src="img/blog/post_avatar_img.png" alt="img" />
                      </div>
                      <div className="post-avatar-content">
                        <h5>Thomas Herlihy</h5>
                        <p>Vehicula dolor amet consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimem
                          egestliberos dolor auctor
                          tellus.</p>
                        <div className="post-avatar-social mt-15">
                          <a href="/#"><i className="fab fa-facebook-f" /></a>
                          <a href="/#"><i className="fab fa-twitter" /></a>
                          <a href="/#"><i className="fab fa-pinterest-p" /></a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="blog-next-prev">
                  <ul>
                    <li className="blog-prev">
                      <a href="/#"><img src="img/icon/left_arrow.png" alt="img" />Previous Post</a>
                    </li>
                    <li className="blog-next">
                      <a href="/#">Next Post<img src="img/icon/right_arrow.png" alt="img" /></a>
                    </li>
                  </ul>
                </div>
                <Comments/>
                <CommentForm/>
              </div>
            </div>
            <div className="col-lg-4">
             <SideBar/>
            </div>
          </div>
        </div>
      </section>
    )
}

export default BlogContent
