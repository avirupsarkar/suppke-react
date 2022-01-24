import React from 'react';
import {Link} from 'react-router-dom';

function PostCard({title, thumnail, description, date}) {
  return (
	<div className="single-blog-post mb-30">
		<div className="b-post-thumb">
			<Link to="/blog-details"><img src={thumnail} alt="img" /></Link>
		</div>
		<div className="blog-content">
			<span>{date}</span>
			<h3><Link to="/blog-details">{title}</Link></h3>
			<p>{description}</p>
			<Link to="/blog-details">Read More <i className="fas fa-plus" /></Link>
		</div>
	</div>
  )
}

export default PostCard;
