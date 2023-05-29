import logo from 'svg/blog-logo2.svg';

const Footer = () => {
  return (
    <>
      <footer className="bg-section bt-black">
        <div className="container">
          <div className="flex-center">
            <img src={logo} alt="" className="icon-l" />
          </div>

          <div className="row bb-black">
            <div className="grid-3">
              <h4>Posts</h4>
              <div className="flex-start-column mt-2">
                <a href="#" className="color-gray link-footer">
                  Mais vistos
                </a>
                <a href="#" className="color-gray link-footer">
                  Mais comentados
                </a>
                <a href="#" className="color-gray link-footer">
                  Mais populares
                </a>
                <a href="#" className="color-gray link-footer">
                  Mais recentes
                </a>
              </div>
            </div>
            <div className="grid-3">
              <h4>Categorias</h4>
              <div className="flex-start-column mt-2">
                <a href="#" className="color-gray link-footer">
                  Tecnologia
                </a>
                <a href="#" className="color-gray link-footer">
                  Games
                </a>
                <a href="#" className="color-gray link-footer">
                  Fotografia
                </a>
                <a href="#" className="color-gray link-footer">
                  Cinema
                </a>
              </div>
            </div>
            <div className="grid-6">
              <h4>Quer ser avisado dos novos posts do blog?</h4>
              <p className="my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                urna pharetra ut ac, pellentesque.
              </p>
              <div className="flex-start-row">
                <input type="text" placeholder="Digite o seu e-mail aqui" />
                <button className="btn ml-2">Cadastrar</button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="grid-9">
              <p className="ml-5">
                2023 | Todos os direitos reservados.
                <span className="color-white">Weslley Botelho</span>
              </p>
            </div>
            <div className="grid-3">
              <div className="flex-end-row">
                <a href="" className="icon-footer">
                  <img
                    src="svg/icon-facebook.svg"
                    alt=""
                    className="icon-s mr-2"
                  />
                </a>
                <a href="" className="icon-footer">
                  <img
                    src="svg/icon-instagram.svg"
                    alt=""
                    className="icon-s mr-2"
                  />
                </a>
                <a href="" className="icon-footer">
                  <img
                    src="svg/icon-youtube.svg"
                    alt=""
                    className="icon-s mr-2"
                  />
                </a>
                <a href="" className="icon-footer">
                  <img
                    src="svg/icon-twitter.svg"
                    alt=""
                    className="icon-s mr-5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
