import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Blog.css"; // Optional for custom styling

const recentPosts = [
  {
    img: "src/assets/blog/blog-1.jpg",
    date: "Tue, December 12",
    author: "Julia Parker",
    title: "Eum ad dolor et. Autem aut fugiat debitis",
    excerpt:
      "Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores eum ipsa est officiis. Modi qui magni est...",
    delay: 200,
  },
  {
    img: "src/assets/blog/blog-2.jpg",
    date: "Fri, September 05",
    author: "Mario Douglas",
    title: "Et repellendus molestiae qui est sed omnis",
    excerpt:
      "Voluptatem nesciunt omnis libero autem tempora enim ut ipsam id. Odit quia ab eum assumenda. Quisquam omnis doloribus...",
    delay: 400,
  },
  {
    img: "src/assets/blog/blog-3.jpg",
    date: "Tue, July 27",
    author: "Lisa Hunter",
    title: "Quia assumenda est et veritati",
    excerpt:
      "Quia nam eaque omnis explicabo similique eum quaerat similique laboriosam. Quis omnis repellat sed quae consectetur magnam...",
    delay: 600,
  },
  {
    img: "src/assets/blog/blog-4.jpg",
    date: "Tue, Sep 16",
    author: "Mario Douglas",
    title: "Pariatur quia facilis similique deleniti",
    excerpt:
      "Et consequatur eveniet nam voluptas commodi cumque ea est ex. Aut quis omnis sint ipsum earum quia eligendi...",
    delay: 600,
  },
];

const RecentBlogPosts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="recent-blog-posts section py-5">
      <div className="container section-title text-center mb-4" data-aos="fade-up">
        <h2 className="fw-bold">Recent Blog Posts</h2>
      </div>

      <div className="container">
        <div className="row gy-5">
          {recentPosts.map((post, index) => (
            <div
              className="col-xl-3 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={post.delay}
            >
              <div className="post-box bg-white p-3 shadow-sm h-100 rounded">
                <div className="post-img mb-3">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="img-fluid w-100 rounded"
                  />
                </div>
                <div className="meta small text-muted mb-2">
                  <span className="post-date">{post.date}</span>
                  <span className="post-author"> / {post.author}</span>
                </div>
                <h3 className="post-title h6">{post.title}</h3>
                <p className="mb-2">{post.excerpt}</p>
                <a
                  href="blog-details.html"
                  className="readmore stretched-link text-decoration-none text-primary fw-semibold"
                >
                  <span>Read More</span>{" "}
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogPosts;
