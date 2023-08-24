import React from "react";
import cls from "./Style.module.scss";
const NotFoundlock: React.FC = () => {
  return (
    <>
      <div className={cls.root}>
        <h1>
          <span>👀</span>
          <br />
          ничего не найдено
        </h1>
      </div>
    </>
  );
};
export default NotFoundlock;
