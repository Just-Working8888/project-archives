const createNewsView = () => {
   const title = prompt('Enter title of news')
   const content = prompt('Enter content of news')
   const description = prompt('Enter description of news')
   const date = getCurrentDate()
   let category = null;
   while (true) {
        const categoryId = +prompt(getAllCategoryAsMessage())
        category = categories.find(item => item.id === categoryId)
        if (!category) alert('Category not found')
        else break
   }
   createNews({
    title,
    content,
    description,
    date,
    category: category.id
   })
   alert('Added successfully')
}

const getAllNewsView = () => {
    let message = 'All news:'
    const renderedNews = getNews()
    console.log(renderedNews)
    for (const itemNews of renderedNews) {
        message += `\n${itemNews.title} - ${itemNews.category.title}`
    }
    alert(message)
}


