import Post from '../Post';

function Artile() {
  return (
    <section className="container">
      <h1>Article.js</h1>
      <div className="mt-5 container-posts">
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  );
}

export default Artile;
