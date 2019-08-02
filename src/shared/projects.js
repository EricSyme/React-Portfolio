export const PROJECTS =
    [
        {
            id: 0,
            name:'Projects',
            image: '/assets/images/work2.jpg',
            category: 'home',
            featured: true,
            description:'Here you will find projects that are underway or finished. This entire portfolio website is the main project, and is built with the React JavaScript library; SPA, Redux, and Thunk. '
        },
        {
            id: 1,
            name:'API Key -- My 1st Weather App',
            image: '/assets/images/seattle.png',
            category: 'mains',
            featured: false,
            sandbox: "https://codesandbox.io/embed/myweatherapp-l5jly?fontsize=14",
            description:'This solo project fetches an API from openweathermap.org and returns data.  This simple app uses three components and is of basic layout. The goal was to learn how to use an API key and how to structure basic data return.  One slightly challenging detail was that the temperature data from the API returns in Kelvin, and I needed to find out how to convert to Fehrenheit. The next step is to call a geo-location API and load data associated to the location of the user as well as refine the search field. '
        },
        {
            id: 2,
            name:'React -- Ristorante ConFusion',
            image: '/assets/images/reactConfusion.png',
            category: 'mains',
            featured: false,
            sandbox: "https://codesandbox.io/embed/github/EricSyme/React-ConFusion/tree/master/?fontsize=14",
            description:'An updated and Reactified version of the Bootstrap project, this React.js app operates as a single-page application using Redux, Thunk, and Fetch to use with a JSON server to hold data that is changed by the user.  Similarly, this portfolio site offers the ability to add to the comments of each project.  Go ahead, add a comment by clicking the button to the right. '
        },
        {
            id: 3,
            name:'Bootstrap -- Ristorante ConFusion',
            image: '/assets/images/confusion.png',
            category: 'mains',
            featured: false,
            description:'Developing a website for Restaurant ConFusion using HTML, CSS, HTML, JavaScript and Bootstrap.  On the home page, a navbar was created with the user in mind; links to the other pages, the restaurant icon, and the login modal for users is housed here.  '
        }
    ];