import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://63d304794abff88834170d21.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("erroe");
        navigate("/");
      }
    }
    fetchPizza();
  }, []);
  if (!pizza) {
    return <>fulll pizza ...</>;
  }
  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
