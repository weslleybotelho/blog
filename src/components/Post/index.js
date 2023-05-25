const Post = () => {
  return (
    <div className="post">
      <div className="img-post"></div>
      <h5>Tecnologia</h5>
      <h3>O guia definitivo sobre o blog</h3>
      <p>
        Dolore nostrud duis exercitation aute officia velit magna nostrud
        commodo id duis. Qui eiusmod fugiat magna enim. Officia commodo veniam
        excepteur fugiat anim do proident ipsum cillum elit tempor sint.
        Consequat ullamco nulla anim consequat consequat.
      </p>
      <div className="flex pt-2">
        <div className="img-profile"></div>
        <div className="desc-profile ml-2">
          <h6 className="color-blue">Fulano de Tal</h6>
          <p>Aug 2, 2020 - 8 min read</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
