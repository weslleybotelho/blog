import Header from 'pages/Header';
import Footer from 'pages/Footer';

import logo from '../../svg/blog-logo2.svg';

const Login = () => {
  return (
    <>
      <Header />

      <section className="container">
        <div className="grid-4 disappear"></div>
        <div className="grid-4">
          <div className="flex-center">
            <img src={logo} alt="" className="icon-l" />
          </div>

          <h5 className="text-center">Olá, faça o login para continuar</h5>

          <form action="">
            <input
              type="text"
              name="user"
              placeholder="Digite seu usuário"
              className="mt-3"
            />
            <input
              type="password"
              name="password"
              placeholder="Digite a sua senha"
              className="mt-2"
            />
            <button href="" className="btn w-100 mt-4">
              Enviar
            </button>
          </form>
        </div>
        <div className="grid-4 disappear"></div>
      </section>

      <Footer />
    </>
  );
};

export default Login;
