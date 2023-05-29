import logo from 'svg/blog-logo2.svg';
import iconFacebook from 'svg/icon-facebook.svg';
import iconInstagram from 'svg/icon-instagram.svg';
import iconTwitter from 'svg/icon-twitter.svg';
import iconYoutube from 'svg/icon-youtube.svg';

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque.
              </p>
              <div className="flex-start-row">
                <input type="text" placeholder="Digite o seu e-mail aqui" />
                <button className="btn ml-2">Cadastrar</button>
              </div>
            </div>
          </div>

          <div className="row footer-icons">
            <div className="grid-9">
              <p className="ml-5">
                2023 | Todos os direitos reservados.
                <span className="color-white">Weslley Botelho</span>
              </p>
            </div>
            <div className="grid-3">
              <div className="flex-end-row ">
                <a href="https://www.facebook.com/santtos.weslley" className="icon-footer">
                  <img src={iconFacebook} alt="" className="icon-s mr-2" />
                </a>
                <a href="https://instagram.com/weslleybotelho_" className="icon-footer">
                  <img src={iconInstagram} alt="" className="icon-s mr-2" />
                </a>
                <a href="https://instagram.com/weslleybotelho_" className="icon-footer">
                  <img src={iconYoutube} alt="" className="icon-s mr-2" />
                </a>
                <a href="https://twitter.com/wesdavid_" className="icon-footer">
                  <img src={iconTwitter} alt="" className="icon-s mr-5" />
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
