/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from "@ioc:Adonis/Core/Route";

const data = {
  tool_links: [
    {
      name: "将棋の駒ジェネレータ",
      relative_url: "shogi-piece-generator",
      thumbnail_url: "thumbnails/shogi-piece-generator.jpeg",
    },
    {
      name: "〇〇好き異常行動者否定ジェネレータ",
      relative_url: "gene-1",
      thumbnail_url: "thumbnails/gene-1.jpeg",
    },
    {
      name: "BoxDancer",
      relative_url: "box-dancer",
      thumbnail_url: "thumbnails/box-dancer.jpeg",
    },
  ],
  game_links: [
    {
      name: "画像ピンボール",
      relative_url: "img-pinball",
      thumbnail_url: "thumbnails/img-pinball.jpeg",
    },
    {
      name: "ジャイロ将棋",
      relative_url: "geiro-shogi-board",
      thumbnail_url: "thumbnails/geiro-shogi-board.jpeg",
    },
    {
      name: "漢検2級読みクイズ",
      relative_url: "quizzes/kanji/read/2",
      thumbnail_url: "thumbnails/eledeci.jpeg",
    },
  ],
};

Route.get("/", async ({ view }) => {
  return view.render("index", {
    data: data,
  });
});
