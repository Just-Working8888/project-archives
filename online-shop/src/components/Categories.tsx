import React from "react";

type CategoriesProps = {
  value: number;
  onClickCategory: (idx: number) => void;
};
const categories = [
  "все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
export const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onClickCategory }) => {
  
    return (
      <div className="categories">
        <ul>
          {categories.map((catagoryName, i) => (
            <li
              key={i}
              onClick={() => onClickCategory(i)}
              className={value === i ? "active" : ""}
            >
              {catagoryName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
