import { withBasePath } from "@/lib/site-data";

const news = [
  {
    id: "24003",
    title: "從披薩餐桌到 AI 對話，串起跨國友誼",
    titleEn: "From pizza to AI: friendships across borders",
    summary: "《Nexus》全英文讀書會，讓本地生與國際生透過小組討論，交流資訊網絡、信任與 AI 決策。",
    summaryEn: "The English-language Nexus reading club brought local and international students together to discuss information networks, trust and AI decision-making.",
    image: "/assets/news/nexus-reading.jpg",
    alt: "Nexus 讀書會參與者分享披薩、交流想法",
  },
  {
    id: "23984",
    title: "打破演算法黑盒，獲校友資金與獎學金力挺",
    titleEn: "Beyond the algorithm: alumni support for FinTech learning",
    summary: "陳顯立學長返校分享 AI 時代的商業模式與信任，並以社團贊助及人才培育獎學金支持跨域學習。",
    summaryEn: "An NCCU alumnus explored business models and trust in the AI era, supporting interdisciplinary learning through club sponsorship and a talent-development scholarship.",
    image: "/assets/news/alumni-ai.jpg",
    alt: "陳顯立學長在金融科技創新實驗室講座中分享",
  },
];

export function CampusNews() {
  return (
    <section className="section" id="news" aria-labelledby="news-title">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="h1" id="news-title" data-en="Lab in the news" suppressHydrationWarning>社團新聞</h2>
        </div>
        <div className="grid grid-2">
          {news.map((item) => (
            <article className="card campus-news" key={item.id}>
              <figure className="campus-news__figure">
                {/* eslint-disable-next-line @next/next/no-img-element -- 靜態匯出使用社團提供給政大新聞的照片 */}
                <img src={withBasePath(item.image)} alt={item.alt} width="400" height={item.id === "24003" ? "225" : "256"} loading="lazy" />
                <figcaption data-en="Photo: NCCU FinTech Innovation Lab" suppressHydrationWarning>照片：政大金融科技創新實驗室</figcaption>
              </figure>
              <p className="campus-news__meta"><span data-en="NCCU News" suppressHydrationWarning>政大校園新聞</span><time dateTime="2026-10-01">2026.10.01</time></p>
              <h3 className="h3" data-en={item.titleEn} suppressHydrationWarning>{item.title}</h3>
              <p className="card__body" data-en={item.summaryEn} suppressHydrationWarning>{item.summary}</p>
              <a className="link-arrow" href={`https://www.nccu.edu.tw/p/406-1000-${item.id},r132.php?Lang=zh-tw`} target="_blank" rel="noopener noreferrer">
                <span data-en="Read on NCCU (Chinese)" suppressHydrationWarning>閱讀政大原文</span>
                <svg className="icon" aria-hidden="true"><use href="#i-arrow-up-right" /></svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
