/*
  問題データ ― 問題を増やすときは、このファイルだけを編集します。

  【追加のしかた】
  1. 下のほうにある「▲ ここより上に追加」の行の、すぐ上に新しい問題セットを貼り付ける。
  2. Claude が出した JSON が [ ] で囲まれている場合は、いちばん外側の [ と ] は取り、
     { から } までのセットだけを貼り付ける。
  3. 各セットの最後の } のあとには、カンマ「,」をつける（最後のセットにも付けて大丈夫です）。
  4. GitHub にコミットして保存する。数分後、公開ページに反映されます。

  ・"full": true は「全文」の問題につけます。
  ・セットの並び順が、「すべて」で練習するときの出題順になります。
  ・貼り付けのミス（カンマ・引用符の抜け）があると、アプリに
    「problems.js を読み込めませんでした」と表示されます。
*/
window.PROBLEM_SETS = [
  {
    "id": "sample-1",
    "title": "サンプル：父は一生懸命働いた",
    "items": [
      {"q": "父は一生懸命働いた", "a": "My father worked hard"},
      {"q": "私が大学で勉強できるように", "a": "so that I could study at college"},
      {"q": "父は、私が大学で勉強できるよう一生懸命働いた", "a": "My father worked hard so that I could study at college"},
      {"q": "若いときにもっと教育を受けていれば", "a": "with more education in his youth"},
      {"q": "(父は)そんなに苦労することはないのに", "a": "he wouldn't have such troubles then"},
      {"q": "若いときにもっと教育を受けていれば、こんなに苦労することはないのにと言って", "a": "saying that with more education in his youth, he wouldn't have such troubles then"},
      {"q": "おまえには私と同じ人生を歩ませたくない", "a": "he didn't want me to live the same life as he did"},
      {"q": "若いときにもっと教育を受けていれば苦労しないのにと言い、また、おまえには私と同じ人生を歩ませたくないと言って", "a": "saying that with more education in his youth, he wouldn't have such troubles then and that he didn't want me to live the same life as he did"},
      {"q": "若いときにもっと教育を受けていれば、今こんなに苦労をすることはないのに。おまえには私と同じ人生を歩ませたくないと言って、父は私が大学で勉強できるよう一生懸命働いた。", "a": "My father worked hard so that I could study at college, saying that with more education in his youth, he wouldn't have such troubles then and that he didn't want me to live the same life as he did.", "full": true}
    ]
  },
  {
    "title": "母に孝行するつもりだった",
    "items": [
      {"q": "母に孝行するつもりだった", "a": "I intended to have become more dutiful to my mother"},
      {"q": "毎月もう少しお金を送り", "a": "sending some more money every month"},
      {"q": "毎月もう少しお金を送り、母に孝行するつもりだった", "a": "I intended to have become more dutiful to my mother, sending some more money every month"},
      {"q": "私の仕事がうまく行く", "a": "I became successful in my business"},
      {"q": "そうする余裕ができる", "a": "I could afford to do so"},
      {"q": "私の仕事がうまく行き、そうする余裕ができる前に", "a": "before I became successful in my business and I could afford to do so"},
      {"q": "母が亡くなったのは、とても嘆かわしい", "a": "it's a pity that she should have passed away"},
      {"q": "私の仕事がうまく行き、そうする余裕ができる前に母が亡くなったのは、とても嘆かわしい", "a": "it's a pity that she should have passed away before I became successful in my business and I could afford to do so"},
      {"q": "毎月もう少しお金を送り、母に孝行するつもりだったのだが、私の仕事がうまく行き、そうする余裕ができる前に母が亡くなったのは、とても嘆かわしい。", "a": "I intended to have become more dutiful to my mother, sending some more money every month, but it's a pity that she should have passed away before I became successful in my business and I could afford to do so.", "full": true}
    ]
  },
  {
    "title": "君は確かにうまく行っているが（貯金と計画）",
    "items": [
      {"q": "君は確かにうまく行っている", "a": "You're doing well, to be sure"},
      {"q": "それだけに頼るのは良くない", "a": "it's not a good idea to rely completely on it"},
      {"q": "君は確かにうまく行っているが、それだけに頼るのは良くない", "a": "You're doing well, to be sure, but it's not a good idea to rely completely on it"},
      {"q": "いつもそんな大儲けができる訳ではない", "a": "it isn't always the case that you can make such a big profit"},
      {"q": "いつもそんな大儲けができる訳ではないから", "a": "as it isn't always the case that you can make such a big profit"},
      {"q": "君は確かにうまく行っているが、いつもそんな大儲けができる訳ではないから、それだけに頼るのは良くない。", "a": "You're doing well, to be sure, but it's not a good idea to rely completely on it, as it isn't always the case that you can make such a big profit."},
      {"q": "手遅れになる前に", "a": "before it is too late"},
      {"q": "貯金をして、次の計画を立てておく", "a": "save and make your next plan"},
      {"q": "貯金をして、次の計画を立てておくのが望ましい", "a": "It's advisable that you should save and make your next plan"},
      {"q": "手遅れになる前に貯金をして、次の計画を立てておくのが望ましい。", "a": "It's advisable that you should save and make your next plan before it is too late."},
      {"q": "君は確かにうまく行っているが、いつもそんな大儲けができる訳ではないから、それだけに頼るのは良くない。手遅れになる前に貯金をして、次の計画を立てておくのが望ましい。", "a": "You're doing well, to be sure, but it's not a good idea to rely completely on it, as it isn't always the case that you can make such a big profit. It's advisable that you should save and make your next plan before it is too late.", "full": true}
    ]
  },
  {
    "title": "十分にお金を持っていれば（仮定法過去）",
    "items": [
      {"q": "十分にお金を持っていれば", "a": "If I had enough money"},
      {"q": "そのお土産を買うことが出来る", "a": "I could buy that souvenir"},
      {"q": "十分にお金を持っていればそのお土産を買うことが出来るのだが", "a": "If I had enough money, I could buy that souvenir"},
      {"q": "そうではないので", "a": "As it is"},
      {"q": "何も買えない", "a": "I can buy nothing"},
      {"q": "そうではないので、何も買えない", "a": "As it is, I can buy nothing"},
      {"q": "十分にお金を持っていればそのお土産を買うことが出来るのだが。そうではないので、何も買えない。", "a": "If I had enough money, I could buy that souvenir. As it is, I can buy nothing.", "full": true}
    ]
  },
  {
    "title": "十分にお金を持っていたならば（仮定法過去完了）",
    "items": [
      {"q": "十分にお金を持っていたならば", "a": "If I had had enough money"},
      {"q": "そのお土産を買うことが出来た", "a": "I could have bought that souvenir"},
      {"q": "十分にお金を持っていたならばそのお土産を買うことが出来たのだが", "a": "If I had had enough money, I could have bought that souvenir"},
      {"q": "そうではなかったので", "a": "As it was"},
      {"q": "何も買えなかった", "a": "I could buy nothing"},
      {"q": "そうではなかったので、何も買えなかった", "a": "As it was, I could buy nothing"},
      {"q": "十分にお金を持っていたならばそのお土産を買うことが出来たのだが。そうではなかったので、何も買えなかった。", "a": "If I had had enough money, I could have bought that souvenir. As it was, I could buy nothing.", "full": true}
    ]
  },
  {
    "title": "孤児の親切な誘い",
    "items": [
      {"q": "その孤児が受け入れるのを妨げているものを考えてみれば", "a": "Considering what is preventing the orphan boy from accepting"},
      {"q": "君の家に泊まってもいいという親切な誘い", "a": "your kind offer that he may stay with you"},
      {"q": "君の家に泊まってもいいという親切な誘いを、なぜその孤児が受け入れないのか理由を考えてみれば", "a": "Considering what is preventing the orphan boy from accepting your kind offer that he may stay with you"},
      {"q": "君が努力しなかった", "a": "you hadn't done a lot"},
      {"q": "その子が心を開き、安心する", "a": "opening his mind and freeing him from anxiety"},
      {"q": "その子が心を開き、安心するよう、君が努力しなかった", "a": "you hadn't done a lot in opening his mind and freeing him from anxiety"},
      {"q": "誘いをかける前に", "a": "before you gave him the offer"},
      {"q": "誘いをかける前にその子が心を開き、安心するよう、君が努力しなかった", "a": "you hadn't done a lot in opening his mind and freeing him from anxiety before you gave him the offer"},
      {"q": "誘いをかける前にその子が心を開き、安心するよう、君が努力しなかったことが分かるでしょう", "a": "you'll come to know that you hadn't done a lot in opening his mind and freeing him from anxiety before you gave him the offer"},
      {"q": "君の家に泊まってもいいという親切な誘いを、なぜその孤児が受け入れないのか理由を考えてみれば、誘いをかける前にその子が心を開き、安心するよう、君が努力しなかったことが分かるでしょう。", "a": "Considering what is preventing the orphan boy from accepting your kind offer that he may stay with you, you'll come to know that you hadn't done a lot in opening his mind and freeing him from anxiety before you gave him the offer.", "full": true}
    ]
  },
  {
    "title": "匿名で寄付していたようだ",
    "items": [
      {"q": "稼ぎの殆ど", "a": "most of what he earned"},
      {"q": "社会的弱者", "a": "socially handicapped people"},
      {"q": "その人は寄付していたようだ", "a": "The man seems to have been donating"},
      {"q": "稼ぎの殆どを匿名で寄付していた", "a": "donating most of what he earned anonymously"},
      {"q": "その人は稼ぎの殆どを匿名で寄付していたようだ", "a": "The man seems to have been donating most of what he earned anonymously"},
      {"q": "その人は稼ぎの殆どを匿名で社会的弱者に寄付していたようだ。", "a": "The man seems to have been donating most of what he earned anonymously to socially handicapped people.", "full": true}
    ]
  },
  /* ▲ ここより上に追加 */
];
