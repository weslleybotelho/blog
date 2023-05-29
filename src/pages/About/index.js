import Header from 'pages/Header';
import Footer from 'pages/Footer';

import logo from '../../svg/blog.svg';

const About = () => {
  return (
    <>
      <Header />

      <section class="container">
        <div class="row">
          <div class="grid-6">
            <h1 class="h0">
              blog<span>.</span>
            </h1>
            <p class="mt-1">
              O blog é um projeto desenvolvido em React.js para o curso
              FrontPush.
            </p>
            <a href="" class="btn mt-4">
              Saber mais
            </a>
          </div>
          <div class="grid-6">
            <img src={logo} alt="" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
