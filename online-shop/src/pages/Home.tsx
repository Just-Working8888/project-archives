import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/store";
import { selectFilter } from "../redux/filter/selectors";
import { setCategoryId, setCurrentPage } from "../redux/filter/slice";
import { selectPizzaData } from "../redux/pizza/selectors";
import { fetchPizzas } from "../redux/pizza/slice";
import {
  Categories,
  SortPopup,
  PizzaBlock,
  Skeleton,
  Paginate,
} from "../components";


const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  import("../utils/math").then((math) => {
    console.log(math.add(16, 26));
  });

  const { items, status } = useSelector(selectPizzaData);
  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);

  const onClickCategory = useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);
  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const searh = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        searh,
        currentPage: String(currentPage),
      })
    );
  };

  // useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1)) as unknown as SerchPizzaParams;
  //     const sort = list.find((obj) => obj.sortProperty === params.sortBy);
  //     dispatch(setFilter({
  //         searchValue: params.searh,
  //         categoryId: Number(params.category),
  //         currentPage: Number(params.currentPage),
  //         sort: sort || list[0],
  //       })
  //     )
  //     isMounted.current = true;
  //   }
  // }, []);

  useEffect(() => {
    getPizzas();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  // useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify({
  //       sortProperty: sort.sortProperty,
  //       categoryId,
  //       currentPage,
  //     });
  //     navigate(`?${queryString}`);
  //   }

  //   isMounted.current = true;
  // }, [categoryId, sort.sortProperty, currentPage]);

  const pizzas = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);
  const sceletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>      
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onClickCategory={onClickCategory} />
          <SortPopup value={sort} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        {status === "error" ? (
          <div>
            <h2>ERROR </h2>
            <p>we can`t tace pizzas pleas try agayn</p>
          </div>
        ) : (
          <div className="content__items">
            {status === "loading" ? sceletons : pizzas}
          </div>
        )}

        <Paginate CurrentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </>
  );
};
export default Home;
