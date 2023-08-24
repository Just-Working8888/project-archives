const categories = [
    new Category({ title: 'Politics' }),
    new Category({ title: 'Public' }),
    new Category({ title: 'Sport' }),
    new Category({ title: 'Science' }),
    new Category({ title: 'Technology' }),
    new Category({ title: 'Entertainment' }),
    new Category({ title: 'Health' }),
];


const news = [

    new News({ title: 'Title', description: 'Description', content: 'Content', date: '09-08-2023', category: 1}),
    new News({ title: 'Title 2', description: 'Description 2', content: 'Content 2', date: '10-08-2023', category: 2}),
    new News({ title: 'Title 3', description: 'Description 3', content: 'Content 3', date: '11-08-2023', category: 2}),
    new News({ title: 'Title 4', description: 'Description 4', content: 'Content 4', date: '12-08-2023', category: 3}),
    new News({ title: 'Title 5', description: 'Description 5', content: 'Content 5', date: '13-08-2023', category: 1}),
    new News({ title: 'Title 6', description: 'Description 6', content: 'Content 6', date: '14-08-2023', category: 4}),
    new News({ title: 'Title 7', description: 'Description 7', content: 'Content 7', date: '15-08-2023', category: 2}),
    new News({ title: 'Title 8', description: 'Description 8', content: 'Content 8', date: '16-08-2023', category: 3}),

]

console.log(categories)
console.log(news)