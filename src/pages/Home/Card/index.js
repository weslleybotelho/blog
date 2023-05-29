const Card = () => {
  return (
    <>
      <div className="grid-4 p-0 card">
        <div className="thumb hidden">
          <a href="">
            <img src="img/01.png" alt="" />
          </a>
        </div>
        <div className="mt-2">
          <h6>01 NOV 2022</h6>
          <h6 className="uppercase color-primary">tecnologia</h6>

          <h4>O que esperar do cinema em 2023?</h4>
          <p className="mt-2">
            Et velit culpa id velit nostrud eiusmod ea officia. Laboris veniam
            aliqua excepteur sit sit. Incididunt eiusmod ex aliquip.
          </p>
          <div className="my-3">
            <a href="" className="link color-primary">
              Ler mais
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
