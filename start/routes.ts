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
  links: [
    {
      title: "将棋の駒ジェネレータ",
      relative_url: "shogi-piece-generator",
      thumbnail_url: "assets/images/link_thumbnails/thumb-t1.png",
      description: "駒の名前は自分で決めろ、目指せ3D駒モデラー！！",
      division: "tool",
      tags: ["Generator"],
    },

    {
      title: "〇〇好き異常行動者否定ジェネレータ",
      relative_url: "gene-1",
      thumbnail_url: "assets/images/link_thumbnails/thumb-t2.png",
      description:
        "「ジェネレータが好きな人と付き合いたいです～！」というのは、ジェネレータで身内ノリしてワイワイできる人を探してるのであって、スクリプトをガンガン書いて笑みを浮かべたり、深夜二時にエラーが出て発狂したりするような異常行動者を探しているわけではない。",
      division: "tool",
      tags: ["Generator"],
    },
    {
      title: "BoxDancer",
      relative_url: "box-dancer",
      thumbnail_url: "assets/images/link_thumbnails/empty.jpg",
      description:
        "自分だけのローカルブックマークツール！データはブラウザに保存されるので安心して使えます。",
      division: "tool",
      tags: ["Tool"],
    },
    {
      title: "画像ピンボール",
      relative_url: "img-pinball",
      thumbnail_url: "assets/images/link_thumbnails/thumb-g2.png",
      division: "game",
      description:
        "手始めに画像を入れるところからスタートだ。¥n¥n画像が丸く表示されたらスタート！¥n¥n画像を回せ！動かせ！驚かせろ！加速しろ！加速すると止まらない！共有したら社交ダンスに誘え！Twitterなら使った画像も一緒に共有できるぞ！¥n¥n画面の向こうの仲間と困惑を共有しろ！",
      tags: ["Game"],
    },
    {
      title: "ジャイロ将棋",
      relative_url: "geiro-shogi-board",
      thumbnail_url: "assets/images/link_thumbnails/thumb-g3.png",
      division: "game",
      description:
        "うまく将棋盤を傾けて、歩兵で玉将に突撃しよう！王は逃げるのが得意でちょこまかと動き回る！うまく動きを読んで突撃しろ！！¥n¥n歩兵の位置が玉に重なればクリア！逆に将棋盤の外に出てしまうとNGだ。王のライフを先にゼロにしよう！",
      tags: ["Game"],
    },

    {
      title: "漢検2級読みクイズ",
      relative_url: "quizzes/kanji/read/2",
      thumbnail_url: "assets/images/link_thumbnails/thumb-g1.png",
      division: "game",
      description:
        "※音が出ます。ご注意ください。¥n¥n一般人の常識？漢検二級の読みが効果音付きで学習できる！¥n¥n総合正解率付きで結果が分かりやすい！全140問から出題。問題文はちょっと意味が分からない文が多い！気を付けるように。¥n¥n作者のおすすめは勝ち抜きモードだ！失敗は許されないぞ？",
      tags: ["Game"],
    },
  ],
};

Route.get("/", async ({ view }) => {
  return await view.render("index", {
    data: data,
  });
});
