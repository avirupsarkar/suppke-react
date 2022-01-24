import React from 'react'
import PostCard from './PostCard';

function Blog() {
    const blogs = [
      {id: 1, title:"Dietary Supplement Report Market Expected",  thumnail: "img/blog/blog_img01.jpg", description: "Orem Ipsum is simply dummy text the printing and types industry. Orem Ipsum is simpl text the printing and types industry.", date: "19. august. 2019" },

      {id: 2, title:"Supplementing Your Diet Towards Life",  thumnail: "img/blog/blog_img02.jpg", description: "Orem Ipsum is simply dummy text the printing and types industry. Orem Ipsum is simpl text the printing and types industry.", date: "19. august. 2019" },

      {id: 3, title:"Homeopathic consultation Acupunc Expected",  thumnail: "img/blog/blog_img03.jpg", description: "Orem Ipsum is simply dummy text the printing and types industry. Orem Ipsum is simpl text the printing and types industry.", date: "19. august. 2019" }
    ]
    return (
        <section id="blogs" className="blog-area gray-bg pt-110 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div className="section-title text-center mb-55">
                <h2>Blog &amp; Tips Suppke</h2>
                <div className="bar" />
                <p>There are many variations of passages of Lorem Ipsum that available, but the majority have fered
                  alteration in some form, by injected humour.</p>
              </div>
            </div>
          </div>

          <div className="row" >
          {
            blogs.map((blog) => {
              return (
                
                  <div className="col-lg-4 col-md-6" key={blog.id}>
                      <PostCard title={blog.title} description={blog.description} date={blog.date} thumnail={blog.thumnail}/>
                  </div>
                
              )
            })
          }
          </div>
        </div>
      </section>
    )
}

export default Blog
