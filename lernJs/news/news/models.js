let iNews = 1

function News({ title, description, content, date, category }) {
    this.id = iNews
    this.title = title;
    this.description = description;
    this.content = content;
    this.date = date;
    this.category = category;
    iNews++
}

let iCategory = 1

function Category({ title }) {
    this.id = iCategory
    this.title = title;
    iCategory++
}