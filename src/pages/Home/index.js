// Components
import Hero from './Hero';
import Card from './Card';
import Banner from './Banner';
import Main from './Main';

import star from 'svg/icon-star.svg';

// API
import api from 'services/api';

// Hooks
import { useState, useEffect } from 'react';

const Home = () => {
  const [main, setMain] = useState([]);
  const [mostseen, setMostseen] = useState([]);
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    api.get('/posts?star=5&_limit=2&_order=desc').then(response => {
      setMain(response.data);
    });

    api.get('/posts?_sort=date&_order=desc&_limit=1').then(response => {
      setBanner(response.data);
    });

    api.get('/posts?_limit=3').then(response => {
      setMostseen(response.data);
    });

    console.log(main);
    console.log(mostseen);
    console.log(banner);
  }, []);

  return (
    <>
      <Hero />

      <section className="container">
        <div className="row">
          <div className="grid-6">
            <img src={star} alt="" className="icon-l" />

            <h3 className="mt-1">
              Os melhores e mais bem votados posts do mês
            </h3>
            <p className="mt-2">
              Et velit culpa id velit nostrud eiusmod ea officia. Laboris veniam
              aliqua excepteur sit sit. Incididunt eiusmod ex aliquip incididunt
              eiusmod non eiusmod nulla eu. Voluptate et aute adipisicing ipsum
              eiusmod irure eiusmod irure fugiat mollit ullamco tempor.
              Consectetur cillum consectetur.
            </p>
          </div>
          <div className="grid-6">
            {main.map(item => {
              return <Main key={item.id} content={item} />;
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <h3 className="ml-2">Mais vistos</h3>

        <div className="row mt-4">
          <Card />
        </div>
      </section>

      <Banner />
    </>
  );
};

export default Home;
