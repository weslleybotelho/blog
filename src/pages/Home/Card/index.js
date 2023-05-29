import { Link } from 'react-router-dom';

const Card = ({ content }) => {
  return (
    <>
      <div className="grid-4 p-0 card hidden">
        <div className="thumb hidden">
          <Link to={'/post/' + content.id}>
            <img src={content.imageUrl} alt="" />
          </Link>
        </div>
        <div className="p-2">
          <h6 className="color-gray">{content.date}</h6>
          <h6 className="uppercase color-primary">{content.category}</h6>

          <Link to={'/post/' + content.id} className="link-title">
            <h4>{content.title}</h4>
          </Link>
          <p className="my-2">{content.resume}</p>
          <Link to={'/post/' + content.id} className="link color-primary p-0">
            Ler mais
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
