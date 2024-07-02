import { NavLink } from "react-router-dom";
import "../styles/category.css";

function Category() {
  const categories = [
    {
      name: "all",
      text: "전체보기",
    },
    {
      name: "business",
      text: "비즈니스",
    },
    {
      name: "entertainment",
      text: "엔터테인먼트",
    },
    {
      name: "health",
      text: "건강",
    },
    {
      name: "science",
      text: "과학",
    },
    {
      name: "sports",
      text: "스포츠",
    },
    {
      name: "technology",
      text: "기술",
    },
  ];

  return (
    <div className="container2">
      {categories.map((c) => (
        <NavLink
          className="category"
          key={c.name}
          to={c.name === "all" ? "/" : `/${c.name}`}
        >
          {c.text}
        </NavLink>
      ))}
    </div>
  );
}
export default Category;
