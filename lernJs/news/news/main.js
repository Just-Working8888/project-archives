const bootstrap = () => {
    alert('Welcome to our console app')

    loop: while(true) {
        const message = makeMessage()
        const option = +prompt(message)

        switch (option) {
            case 1:
                createNewsView()
                break
            case 2:
                getAllNewsView()
                break
            case 3:
                deleteNewsView()
                break
            case 4:
                editNewsView()
                break
            case 5:
                getOneNewsView()
                break    
            default:
                alert('Good bye!')
                break loop
        }

    }

}

bootstrap()