import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
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
      title: "Como sueñan las sirenas",
      author: "Cyn Romero",
      type: "Fantasía",
      language: "Español",
      year: 2019,
      contentRating: "16+",
      length: "Relato",
      cover:
        "https://1.bp.blogspot.com/-1B3lzaCczgA/YHTTO7nL81I/AAAAAAAAYNY/eXxwcbUGD7g4_8AatbjpE4YcLS6hmgKoQCLcBGAsYHQ/s769/COMOSUENANLASSIRNAS.jpg",
      description: "Historia para el concurso Sonidos fantásticos",
      source:
        "https://www.elfrascodehistorias.com/2021/04/como-suenan-las-sirenas-concurso.html",
    },
    {
      id: 2,
      slug: "story-2",
      title: "La canción del cielo",
      author: "Cyn Romero",
      type: "Ciencia ficción",
      language: "Español",
      year: 2019,
      contentRating: "13+",
      length: "Relato",
      cover:
        "https://1.bp.blogspot.com/-jXwJeZUjn6Q/YAcjbc3IVcI/AAAAAAAAXeI/wawaHYYFsMMi_Gj5rjoQBuH3ohvucFOBACLcBGAsYHQ/s1080/LaCancionDelCielo.jpg",
      description: "Microrreto para El tintero de oro",
      source:
        "https://www.elfrascodehistorias.com/2021/01/la-cancion-del-cielo-ciegas-microrretos.html",
    },
    {
      id: 3,
      slug: "story-3",
      title: "Higos para la luna",
      author: "Cyn Romero",
      type: "Humor",
      language: "Español",
      year: 2019,
      contentRating: "ATP",
      length: "Relato",
      cover:
        "https://1.bp.blogspot.com/-XYhRLe3rVzM/YIluC0uILII/AAAAAAAAYQM/mlA12vXe3LwNv_s9Dl1oTkG4mCuFCBiUACLcBGAsYHQ/s1080/HigosParaLaLuna.png",
      description: "La historia de una mentira hermosa, para el reto juevero",
      source:
        "https://www.elfrascodehistorias.com/2020/12/higos-para-la-luna.html",
    },
    {
      id: 4,
      slug: "story-4",
      title: "TuYo",
      author: "Cyn Romero",
      type: "Paranormal",
      language: "Español",
      year: 2019,
      contentRating: "16+",
      length: "Relato",
      cover:
        "https://1.bp.blogspot.com/-U0dbomsxIsQ/YImCi9W1epI/AAAAAAAAYRA/XmfgTFQQOW86NrNH0t6NU80Re6VLlalFwCLcBGAsYHQ/s599/tuyo.jpg",
      description: "La extraña historia de cuando encontré a mi otro yo",
      source: "https://www.elfrascodehistorias.com/2016/10/tuyo.html",
    },
    {
      id: 5,
      slug: "story-5",
      title: "Ex-machina",
      author: "Cyn Romero",
      type: "Humor",
      language: "Español",
      year: 2019,
      contentRating: "ATP",
      length: "Relato",
      cover:
        "https://1.bp.blogspot.com/-ve9FpEQS9EA/YIl-p4fxxCI/AAAAAAAAYQY/XVTMgr1_mhwZB4_zY022SHEQJAJ_UP3QQCLcBGAsYHQ/s599/exmachina.jpg",
      description:
        "Cupido enojado, en un relato para los 52 retos de El libro del escritor",
      source: "https://www.elfrascodehistorias.com/2017/02/ex-machina.html",
    },
    {
      id: 6,
      slug: "story-6",
      title: "La chica de humo",
      author: "Cyn Romero",
      type: "Drama",
      language: "Español",
      year: 2019,
      contentRating: "16+",
      length: "Relato",
      cover:
        "https://1.bp.blogspot.com/-T5QmLdAkV6k/YImDe9XQbAI/AAAAAAAAYRI/So85aQuxVhcSrg3T1CU1qsuFhAqJqPiBgCLcBGAsYHQ/s602/chicadehumo.jpg",
      description: "Historia a partir de una canción de mi infancia",
      source:
        "https://www.elfrascodehistorias.com/2019/11/la-chica-de-humo.html",
    },
    {
      id: 7,
      slug: "story-7",
      title: "Metálica soledad",
      author: "Cyn Romero",
      type: "Fantasía",
      language: "Español",
      year: 2020,
      contentRating: "13+",
      length: "Microcuento",
      cover:
        "https://1.bp.blogspot.com/-MNd2oAjvHWo/YIl_eDbdKII/AAAAAAAAYQg/4lOkQKeXK-sfrOIvNmHbQioYhp9CI4AZACLcBGAsYHQ/s601/mtalicasoledad.jpg",
      description: "Lo que ocurre cuando el ascensor cobra vida",
      source:
        "https://www.elfrascodehistorias.com/2020/08/metalica-soledad.html",
    },
    {
      id: 8,
      slug: "story-8",
      title: "Los muertos no dan besos",
      author: "Cyn Romero",
      type: "Terror",
      language: "Español",
      year: 2020,
      contentRating: "18+",
      length: "Relato",
      cover:
        "https://1.bp.blogspot.com/-87IOKO2TJu0/YImAA4HiSPI/AAAAAAAAYQo/zBMIMHjHIiIGUEt4DolpgzMBikYe8jW5QCLcBGAsYHQ/s600/losmuertos.jpg",
      description: "Deliciosa pesadilla sensual",
      source:
        "https://www.elfrascodehistorias.com/2020/08/los-muertos-no-dan-besos.html",
    },
    {
      id: 9,
      slug: "story-9",
      title: "La pared roja",
      author: "Cyn Romero",
      type: "Terror",
      language: "Español",
      year: 2020,
      contentRating: "16+",
      length: "Relato",
      cover:
        "https://1.bp.blogspot.com/-PvNk3csw3Zg/YImAdx45dfI/AAAAAAAAYQw/OBgauA0r0NsqjK2p5mul9klo8-Q-I5uwwCLcBGAsYHQ/s601/paredroja.jpg",
      description: "Se mudó solo a una casa donde ya había alguien esperándolo",
      source: "https://www.elfrascodehistorias.com/2020/08/la-pared-roja.html",
    },
    {
      id: 10,
      slug: "story-10",
      title: "El felino y la luna",
      author: "Cyn Romero",
      type: "Humor",
      language: "Español",
      year: 2020,
      contentRating: "ATP",
      length: "Relato",
      cover:
        "https://1.bp.blogspot.com/-2-h_WlBvV0w/YImA7fU5sTI/AAAAAAAAYQ4/lBfnno09VJceOKDJWA09l8k_vzKiq9kcwCLcBGAsYHQ/s601/elfelinoylaluna.jpg",
      description:
        "Leyenda no oficial de la preferencia de los dioses por los gatos",
      source:
        "https://www.elfrascodehistorias.com/2020/06/el-felino-y-la-luna.html",
    },
  ],
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
