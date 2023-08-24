const makeMessage = () => `
        Select option:
          1. Add news
          2. List of news
          3. Delete news
          4. Edit news
          5. Get one news
          0. Exit
    `;

const getCurrentDate = () => {
  const now = new Date();
  const date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
  const month =
    now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
  const year = now.getFullYear();
  return `${date}-${month}-${year}`;
};

const getAllCategoryAsMessage = () => {
  let message = "Select category";
  for (const category of categories) {
    message += `\n${category.id}. ${category.title}`;
  }
  return message;
};

const createNews = ({ title, content, description, date, category }) =>
  news.push(
    new News({
      title,
      content,
      description,
      date,
      category,
    })
  );

const leftJoinAndSelect = ({ data, relationData, dataField }) => {
  return data.map((item) => {
    item[dataField] = relationData.find(
      (innerItem) => innerItem.id === item[dataField]
    );
    return item;
  });
};

const getNews = () => {
  return leftJoinAndSelect({
    data: news,
    relationData: categories,
    dataField: "category",
  });
};

const deleteNewsView = () => {
  const idToDelete = +prompt("Введите id объекта для удаления:");

  const indexToDelete = news.findIndex((item) => item.id === idToDelete);

  if (indexToDelete !== -1) {
    news.splice(indexToDelete, 1);
  }
};

const editNewsView = () => {
  const id = +prompt("chhose id");
  const data = news;
  const data2 = data.findIndex((item) => item.id === id);
  const title = prompt("title");
  const description = prompt("description");
  const content = prompt("content");
  const categories = prompt(getAllCategoryAsMessage());
  data[data2].title = title;
  data[data2].description = description;
  data[data2].content = content;
  data[data2].content = content;
  data[data2].category = categories;
  alert("edited content successfully");
};

const getOneNewsView = () => {
  const id = +prompt("chhose id");
  const data = news;
  const data2 = data.findIndex((item) => item.id === id);
  const title = data[data2].title;
  const description = data[data2].description;
  const content = data[data2].content;
  const categories = data[data2].category;
  alert(title, description, content, categories);
};

