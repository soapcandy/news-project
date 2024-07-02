import "../styles/newsList.css";

function NewsList({ article }) {
  const { author, title, description, url, urlToImage, publishedAt } = article;

  return (
    <div className="container">
      <img className="img" src={urlToImage} alt="thumbnail"></img>
      <div>
        <a className="a" href={url} target="_blank">
          <div>{title}</div>
        </a>
        <div>{description}</div>
        <div>
          {publishedAt} {author}
        </div>
      </div>
    </div>
  );
}

export default NewsList;
