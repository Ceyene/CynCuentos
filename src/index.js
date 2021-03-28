import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import App from "./routes/App";

const initialState = {
  user: {},
  playing: {},
  saved: [],
  trends: [
    {
      id: 1,
      slug: "story-1",
      title: "Sushi al revés",
      author: "Cyn Romero",
      type: "Terror",
      language: "Español",
      year: 2019,
      contentRating: "18+",
      length: "Microcuento",
      cover:
        "https://1.bp.blogspot.com/-DEjutMiBnnE/XyYWf7at8aI/AAAAAAAAWAw/3pJ6qr2aHPsXw-7Cp0NSJZNiD8VgfL9FgCLcBGAsYHQ/s1600/sushialreves.jpg",
      description: "Historia para las cinco líneas de agosto de 2019",
      source: "https://www.elfrascodehistorias.com/2019/08/sushi-al-reves.html",
    },
    {
      id: 2,
      slug: "story-2",
      title: "Cruzando Alvear",
      author: "Cyn Romero",
      type: "Paranormal",
      language: "Español",
      year: 2019,
      contentRating: "13+",
      length: "Relato",
      cover:
        "https://4.bp.blogspot.com/-tVURp49R7aA/XHGTvnm9LWI/AAAAAAAASPs/GC_GgvOWUGsPaQq0_7pfUSFxF3Vk_D7TACLcBGAs/s1600/cruzando%2Balvear.jpg",
      description: "Cuarta historia para el mes de febrero",
      source:
        "https://www.elfrascodehistorias.com/2019/02/cruzando-alvear.html",
    },
    {
      id: 3,
      slug: "story-3",
      title: "Hermosos, hermosos",
      author: "Cyn Romero",
      type: "Humor",
      language: "Español",
      year: 2019,
      contentRating: "ATP",
      length: "Relato",
      cover:
        "https://1.bp.blogspot.com/-1EeZ2lKOkDU/XyYXYrb-lDI/AAAAAAAAWA4/rr_EalmIf78CpxS0SLpEZKgGwgtTSkqWgCLcBGAsYHQ/s1600/hermososhermosos.jpg",
      description: "La historia de una mentira hermosa, para el reto juevero",
      source:
        "https://www.elfrascodehistorias.com/2019/08/hermosos-hermosos.html",
    },
    {
      id: 4,
      slug: "story-4",
      title: "Frío misterio",
      author: "Cyn Romero",
      type: "Terror",
      language: "Español",
      year: 2019,
      contentRating: "16+",
      length: "Relato",
      cover:
        "https://4.bp.blogspot.com/-xn-sNnXhu-w/XMj6cY_6pnI/AAAAAAAATGM/KK-h6SH3BGQjq-muO__ZgpAXNgQvhqUiACLcBGAs/s1600/Reto_semanal_1.jpg",
      description: "Relato para el desafío de Sueños de Tinta",
      source: "https://www.elfrascodehistorias.com/2019/05/frio-misterio.html",
    },
    {
      id: 5,
      slug: "story-5",
      title: "Disfrutalo",
      author: "Cyn Romero",
      type: "Terror",
      language: "Español",
      year: 2019,
      contentRating: "16+",
      length: "Relato",
      cover:
        "https://1.bp.blogspot.com/-B5JLZjwQGws/XQ6i5yeIriI/AAAAAAAATj0/rbuAQb54bRA1WqOP5vBeQ9xr1SdV09gPACLcBGAs/s1600/disfrutalo.jpg",
      description: "Pesadilla servida",
      source: "https://www.elfrascodehistorias.com/2019/06/disfrutalo.html",
    },
    {
      id: 6,
      slug: "story-6",
      title: "Presque Vu",
      author: "Cyn Romero",
      type: "Paranormal",
      language: "Español",
      year: 2019,
      contentRating: "13+",
      length: "Relato",
      cover:
        "https://4.bp.blogspot.com/-dSrVe-Kt61Q/XMjweEegAoI/AAAAAAAATGA/deN9ZCBgj8Q8ODIiGoKLkCTNXT1yH3NWQCLcBGAs/s1600/presque%2Bvu.jpg",
      description: "La búsqueda de un recuerdo soñado",
      source: "https://www.elfrascodehistorias.com/2019/04/presque-vu.html",
    },
    {
      id: 7,
      slug: "story-7",
      title: "Jamais Vu",
      author: "Cyn Romero",
      type: "Paranormal",
      language: "Español",
      year: 2019,
      contentRating: "ATP",
      length: "Relato",
      cover:
        "https://2.bp.blogspot.com/-f60SXfIRj8Q/XLuWQWN_C7I/AAAAAAAATAc/ZOES4SkVe7sHXLRf1AjUlzQ-ivHXM146gCLcBGAs/s1600/jamaisvu.jpg",
      description:
        "Olvido automático en un relato para el reto de Soñando uno de tus sueños",
      source: "https://www.elfrascodehistorias.com/2019/04/jamais-vu.html",
    },
    {
      id: 8,
      slug: "story-8",
      title: "Deja Vu",
      author: "Cyn Romero",
      type: "Drama",
      language: "Español",
      year: 2019,
      contentRating: "18+",
      length: "Relato",
      cover:
        "https://4.bp.blogspot.com/--1cGREfeD6o/XMTltGqVQxI/AAAAAAAATFw/xCJX7Zt0FCUx2tpIEm5hwSdUQPKvYEHiQCLcBGAs/s1600/deja%2Bvu.jpg",
      description: "Atisbo de un recuerdo para una memoria inmortal",
      source: "https://www.elfrascodehistorias.com/2019/04/deja-vu.html",
    },
    {
      id: 9,
      slug: "story-9",
      title: "Eternena",
      author: "Cyn Romero",
      type: "Humor",
      language: "Español",
      year: 2020,
      contentRating: "ATP",
      length: "Microcuento",
      cover:
        "https://1.bp.blogspot.com/-6s_N3x0pueU/XyY5aYJbqqI/AAAAAAAAWEY/1L-DcXwBidQbnRkf9vfeNtjsZbEORU1hwCLcBGAsYHQ/s1600/eternena.jpg",
      description: "Parodia de una cuarentena y un fugitivo de la ciudad",
      source: "https://www.elfrascodehistorias.com/2020/04/eternena.html",
    },
    {
      id: 10,
      slug: "story-10",
      title: "Metálica soledad",
      author: "Cyn Romero",
      type: "Fantasía",
      language: "Español",
      year: 2020,
      contentRating: "13+",
      length: "Microcuento",
      cover:
        "https://1.bp.blogspot.com/-F0XIPngzoJI/X0LHoDDeJeI/AAAAAAAAWPg/EjV_tpHnR-QpvvCtRzBZRyaxTDIboQgJwCLcBGAsYHQ/s1600/metalicasoledad.jpg",
      description: "Lo que ocurre cuando el ascensor cobra vida",
      source:
        "https://www.elfrascodehistorias.com/2020/08/metalica-soledad.html",
    },
  ],
  Novedades: [
    {
      id: 11,
      slug: "story-11",
      title: "Mood",
      author: "Cyn Romero",
      type: "Paranormal",
      language: "Español",
      year: 2019,
      contentRating: "16+",
      length: "Microcuento",
      cover:
        "https://1.bp.blogspot.com/-QOiWaf-48sM/XQgp3Z4IEZI/AAAAAAAATgc/2KE-QL_dfBoeepV4T6mkADw5WvbsnfmWgCLcBGAs/s1600/mood.jpg",
      description: "Cuando la bruja se pasó de pesimista con sus predicciones",
      source: "https://www.elfrascodehistorias.com/2019/06/mood.html",
    },
    {
      id: 12,
      slug: "story-12",
      title: "Los muertos no dan besos",
      author: "Cyn Romero",
      type: "Terror",
      language: "Español",
      year: 2020,
      contentRating: "18+",
      length: "Relato",
      cover:
        "https://1.bp.blogspot.com/-fB2Tj5CScsM/Xy9AjaGpw4I/AAAAAAAAWII/TO19BB9B9gsf6e-p1mwrn7Iac2ksW5hFwCLcBGAsYHQ/s1600/losmuertosnodanbesos.jpg",
      description: "Deliciosa pesadilla sensual",
      source:
        "https://www.elfrascodehistorias.com/2020/08/los-muertos-no-dan-besos.html",
    },
    {
      id: 13,
      slug: "story-13",
      title: "Fan",
      author: "Cyn Romero",
      type: "Paranormal",
      language: "Español",
      year: 2019,
      contentRating: "13+",
      length: "Microcuento",
      cover:
        "https://1.bp.blogspot.com/-2C_OUzk3ZCQ/XyYZb3aGw3I/AAAAAAAAWBQ/pu0sxQr1BWYy7gKPMFKlG2-UQPBqV5cJQCLcBGAsYHQ/s1600/fan.jpg",
      description: "Ella quería que la aplaudieran, pero solo humanos",
      source: "https://www.elfrascodehistorias.com/2019/09/fan.html",
    },
    {
      id: 14,
      slug: "story-14",
      title: "La pared roja",
      author: "Cyn Romero",
      type: "Terror",
      language: "Español",
      year: 2020,
      contentRating: "16+",
      length: "Relato",
      cover:
        "https://1.bp.blogspot.com/-PxH-gqg28-k/Xzl_wjhUVeI/AAAAAAAAWLI/Ys_RLt693sUd_F5IVo9QDIIhRvGSp5YZACLcBGAsYHQ/s1600/laparedroja.jpg",
      description: "Se mudó solo a una casa donde ya había alguien esperándolo",
      source: "https://www.elfrascodehistorias.com/2020/08/la-pared-roja.html",
    },
    {
      id: 15,
      slug: "story-15",
      title: "De reyes, locura y colas de sirena",
      author: "Cyn Romero",
      type: "Romance",
      language: "Español",
      year: 2019,
      contentRating: "16+",
      length: "Relato",
      cover:
        "https://1.bp.blogspot.com/-w7g7YzYiB4A/XTkpt4Ol56I/AAAAAAAATuU/kz_ojJC2QX4s-SuXN86EZq585ueO17WqACLcBGAs/s1600/sirenaaa%2B%25281%2529.jpg",
      description: "El amor no siempre viene cuando se lo espera",
      source:
        "https://www.elfrascodehistorias.com/2019/07/de-reyes-locura-y-colas-de-sirena.html",
    },
    {
      id: 16,
      slug: "story-16",
      title: "El felino y la luna",
      author: "Cyn Romero",
      type: "Humor",
      language: "Español",
      year: 2020,
      contentRating: "ATP",
      length: "Relato",
      cover:
        "https://1.bp.blogspot.com/-scDQA30osUA/XuZzv1COPaI/AAAAAAAAVtQ/qx9zA2dxegYXOvO3ww6xJ3liC_mMAua4wCLcBGAsYHQ/s1600/felinoluna.jpg",
      description:
        "Leyenda no oficial de la preferencia de los dioses por los gatos",
      source:
        "https://www.elfrascodehistorias.com/2020/06/el-felino-y-la-luna.html",
    },
    {
      id: 17,
      slug: "story-17",
      title: "Desde la ventana",
      author: "Cyn Romero",
      type: "Romance",
      language: "Español",
      year: 2014,
      contentRating: "16+",
      length: "Novela corta",
      cover: "https://a.wattpad.com/cover/14959749-k663673.jpg",
      description: "La historia de un amor adolescente, narrada por un gato",
      source:
        "https://www.wattpad.com/story/14959749-desde-la-ventana-cr%C3%B3nicas-gatunas-1",
    },
    {
      id: 18,
      slug: "story-18",
      title: "Kydara",
      author: "Cyn Romero",
      type: "Fantasía",
      language: "Español",
      year: 2015,
      contentRating: "16+",
      length: "Novela corta",
      cover: "https://a.wattpad.com/cover/121547486-k125859.jpg",
      description:
        "No apartes los ojos del brillo de la estrella, si no quieres ser enterrado por la tormenta",
      source:
        "https://www.wattpad.com/story/121547486-kydara-el-esp%C3%ADritu-del-desierto",
    },
    {
      id: 19,
      slug: "story-19",
      title: "El fantasma en mi tintero",
      author: "Cyn Romero",
      type: "Terror",
      language: "Español",
      year: 2013,
      contentRating: "16+",
      length: "Antología",
      cover: "https://a.wattpad.com/cover/62838427-k960281.jpg",
      description: "Microrrelatos terroríficos",
      source:
        "https://www.wattpad.com/story/62838427-el-fantasma-en-mi-tintero",
    },
    {
      id: 20,
      slug: "story-20",
      title: "El tarot de Madame Ceyene",
      author: "Cyn Romero",
      type: "Fantasía",
      language: "Español",
      year: 2018,
      contentRating: "16+",
      length: "Antología",
      cover: "https://a.wattpad.com/cover/146054468-k420016.jpg",
      description: "Un cuento por arcano del tarot",
      source:
        "https://www.wattpad.com/story/146054468-el-tarot-de-madame-ceyene",
    },
  ],
};
const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
