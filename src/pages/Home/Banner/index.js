const Banner = () => {
  return (
    <>
      <section className="container">
        <div className="img-banner hidden">
          <img src="img/02.png" alt="" />
        </div>
        <div className="row mt-3">
          <h6 className="color-gray text-center">01 NOV 2022</h6>
          <h6 className="uppercase color-primary text-center">tecnologia</h6>

          <h3 className="text-center">O que esperar do cinema em 2023?</h3>
          <p className="text-center mt-2">
            Et velit culpa id velit nostrud eiusmod ea officia. Laboris veniam
            aliqua excepteur sit sit. Incididunt eiusmod ex aliquip.
          </p>
          <div className="my-3 flex-center">
            <a href="" className="link color-primary">
              Ler mais
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
