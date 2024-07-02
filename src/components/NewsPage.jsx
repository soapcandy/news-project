import { useEffect, useState } from "react";
import Category from "./Category";
import NewsList from "./NewsList";
import axios from "axios";
import { useParams } from "react-router-dom";

function NewsPage() {
  const [data, setData] = useState([]);
  const { category } = useParams();
  const selectCategory = category || "all";
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const news = async () => {
      setLoading(true);
      try {
        const query =
          selectCategory === "all" ? "" : `&category=${selectCategory}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=6b16364a82fb4060a0c0a421d9dff9ce`
        );
        setData(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    news();
  }, [selectCategory]);

  if (loading) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      <Category />
      {data.map((article) => (
        <NewsList key={article.url} article={article} />
      ))}
    </>
  );
}
export default NewsPage;
