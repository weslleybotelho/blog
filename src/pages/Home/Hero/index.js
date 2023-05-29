import logo from 'svg/blog.svg';

const Hero = () => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="grid-6">
            <h1 className="h0">
              blog<span>.</span>
            </h1>
            <p className="mt-1">
              Um blog para todos. Escrever. Ler. Comentar. Contribuir. Aprender.
              Conectar.
            </p>
            <a href="" className="btn mt-4">
              Começar a escrever
            </a>
          </div>
          <div className="grid-6">
            <img src={logo} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
