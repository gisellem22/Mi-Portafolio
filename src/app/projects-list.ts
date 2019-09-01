import { project } from './models/project';

export let projects: project[] = [
    {
        name: "POKEMÓN - I CHOOSE YOU",
        text: "Enciclopedia que agrupa información de los Pokémons de la primera generación, permitiendo al usuario realizar diversos filtros. Para su desarrollo se hizo consumo de una Api Rest de Pokémon, JavaScript y Bootstrap.",
        img: "../../../assets/img/projects/pokemon.JPG",
        demo: "https://gisellem22.github.io/SCL009-data-lovers/src/index.html",
        code: "https://github.com/gisellem22/SCL009-data-lovers"
    },
    {
        name: "GM-MD-LINKS",
        text: "Librería NPM para extraer los enlaces de directorios y/o archivos markdown (.md), validar sus status y obtener estadísticas. Desarrollada con JavaScript y Node Js.",
        img: "../../../assets/img/projects/gm-md-links.JPG",
        code: "https://github.com/gisellem22/SCL009-md-links"
    },
    {
        name: "OTRAS MIRADAS",
        text: "Plataforma web SPA con diseño mobile first desarrollada para servir de apoyo a los padres de niños con necesidades especiales de La Fundación Otras Miradas. Proyecto implementado con Angular, Bootstrap y Firebase.",
        img: "../../../assets/img/projects/otras-miradas.png",
        demo: "https://otrasmiradas01.firebaseapp.com/professionals",
        code: "https://github.com/gisellem22/SCL009-Otras-Miradas"
    },
    {
        name: "BURGUER QUEEN",
        text: "Plataforma web SPA diseñada para Tablet, que permite a los meseros de una cadena de restaurantes tomar los pedidos de los clientes.Implementado con Angular y Bootstrap como frameworks Front-End. FireStore como base de datos RealTime para almacenar los pedidos realizados.",
        img: "../../../assets/img/projects/burger-queen.JPG",
        demo: "https://burger-queen-dg.firebaseapp.com",
        code: "https://github.com/gisellem22/SCL009-Burger-Queen"
    },{
        name: "WOOD HOTEL-GROUP",
        text: "Interfaz web que ayude a un cliente en línea a encontrar el hotel más barato. Implementada con Angular, Firebase RealTime Firestore y Bootstrap.",
        img: "../../../assets/img/projects/hotel.JPG",
        demo: "https://desafio-hotel.firebaseapp.com",
        code: "https://github.com/gisellem22/Deseafio-Hotel"
    },
    {
        name: "Gigibook",
        text: "Interfaz web que represente la sección de comentarios de una plataforma. Implementada con Angular, Firebase RealTime Firestore y Bootstrap.",
        img: "../../../assets/img/projects/comentarios.JPG",
        demo: "https://desafio-comentarios.firebaseapp.com",
        code: "https://github.com/gisellem22/Desafio-Comentarios"
    }
]