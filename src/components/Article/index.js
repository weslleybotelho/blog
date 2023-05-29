import Post from '../Post';

function Artile() {
  return (
    <section className="container">
      <h1>Articles</h1>
      <div className="mt-5 container-posts">
        <Post subtitle="tecnologia" title="O guia definitivo sobre o blog">
          1Dolore nostrud duis exercitation aute officia velit magna nostrud
          commodo id duis. Qui eiusmod fugiat magna enim. Officia commodo veniam
          excepteur fugiat anim do proident ipsum cillum elit tempor sint.
          Consequat ullamco nulla anim consequat consequat.
        </Post>
        <Post
          subtitle="fotografia"
          title="Quais as melhores fotografias de 2022"
        >
          2Dolore nostrud duis exercitation aute officia velit magna nostrud
          commodo id duis. Qui eiusmod fugiat magna enim. Officia commodo veniam
          excepteur fugiat anim do proident ipsum cillum elit tempor sint.
          Consequat ullamco nulla anim consequat consequat.
        </Post>
        <Post
          subtitle="cinema"
          title="Os 10 melhores filmes para o final de semana"
        >
          3Dolore nostrud duis exercitation aute officia velit magna nostrud
          commodo id duis. Qui eiusmod fugiat magna enim. Officia commodo veniam
          excepteur fugiat anim do proident ipsum cillum elit tempor sint.
          Consequat ullamco nulla anim consequat consequat.
        </Post>
      </div>
    </section>
  );
}

export default Artile;
