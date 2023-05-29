import Header from 'pages/Header';
import Footer from 'pages/Footer';

import Card from 'pages/Home/Card';

import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';

import api from 'services/api';

const Search = () => {
  const { word_search } = useParams();

  const [word, setWord] = useState(word_search);
  const [search, setSearch] = useState([]);

  const initialValueForm = {
    search: '',
  };

  const [form, setForm] = useState(initialValueForm);

  useEffect(() => {
    if (word) {
      api.get(`/posts?q=${word}`).then(response => {
        setSearch(response.data);
      });
    }
  }, [word]);

  function onChange(event) {
    const { value, name } = event.target;

    setForm({ ...form, [name]: value });

    console.log(form);
  }

  function handleSearch(e) {
    e.preventDefault();

    setWord(form.search);
  }

  return (
    <>
      <Header />

      <section className="container">
        <h6 className="uppercase color-primary text-center">
          {search.length} resultados
        </h6>
        <h4 className="text-center">"{word}"</h4>

        <form onSubmit={handleSearch}>
          <div className="row">
            <div className="grid-2 disappear"></div>
            <div className="grid-8 flex-center">
              <input
                type="text"
                name="search"
                placeholder="Buscar..."
                onChange={onChange}
              ></input>
              <button className="btn ml-2">Buscar</button>
            </div>
            <div className="grid-2 disappear"></div>
          </div>
        </form>

        <div className="row mt-4">
          {search.map(item => {
            return <Card key={item.id} content={item} />;
          })}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Search;
