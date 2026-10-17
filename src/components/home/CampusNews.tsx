import { withBasePath } from "@/lib/site-data";

const news = [
  {
    id: "24166",
    date: "2026-10-16",
    href: "https://www.nccu.edu.tw/p/406-1000-24166,r131.php?Lang=zh-tw",
    title: "善用金融驅動永續，從日常行動到商業提案",
    titleEn: "Connecting everyday sustainability with financial innovation",
    summary: "市民永續執行長林庠序分享減碳行為、數據與普惠金融的連結，社員並以「蓋亞造界」發想永續商業模式。",
    summaryEn: "GreenHope CEO Jerry explored links between everyday low-carbon actions, data and inclusive finance. Students then developed sustainable business ideas for the Gaia game.",
    image: "/assets/news/sustainable-finance.jpg",
    height: 225,
    alt: "林庠序在永續金融講座中分享",
    credit: "照片：政大金融科技研究中心",
    creditEn: "Photo: NCCU FinTech Research Center",
    poster: false,
  },
  {
    id: "24154",
    date: "2026-10-16",
    href: "https://www.nccu.edu.tw/p/405-1000-24154,c87.php?Lang=zh-tw",
    title: "AI 實作工作坊，三小時讓產品上線",
    titleEn: "From an idea to a live app in three hours",
    summary: "從生活痛點出發，社員在翁睿承與幹部引導下，透過 AI 協作完成可操作的 Web App，並現場展示與部署。",
    summaryEn: "Starting with everyday problems, students worked with Ray and the lab team to build, demonstrate and deploy interactive web apps with AI assistance.",
    image: "/assets/news/ai-workshop.jpg",
    height: 269,
    alt: "工作坊小組代表上台展示 Web App 成果",
    credit: "照片：政大金融科技創新實驗室",
    creditEn: "Photo: NCCU FinTech Innovation Lab",
    poster: false,
  },
  {
    id: "24143",
    date: "2026-10-15",
    href: "https://www.nccu.edu.tw/p/406-1000-24143,r206.php?Lang=zh-tw",
    title: "10/21 講座｜Canton：華爾街真正在用的 Web3 金融基礎設施",
    titleEn: "October 21 talk: Canton and Web3 infrastructure for institutional finance",
    summary: "邀請 Canton Foundation 的 Teagan Buckley，分享機構金融的隱私、合規與跨機構結算。10 月 21 日 18:45，於富邦法學講堂舉行。",
    summaryEn: "Teagan Buckley of the Canton Foundation will discuss privacy, compliance and cross-institutional settlement on October 21 at 18:45 in the Fubon Lecture Hall.",
    image: "/assets/news/canton-lecture.jpg",
    height: 565,
    alt: "10 月 21 日 Canton 金融基礎設施講座活動海報",
    credit: "海報來源：政大活動公告",
    creditEn: "Poster: NCCU event announcement",
    poster: true,
  },
  {
    id: "24003",
    date: "2026-10-01",
    href: "https://www.nccu.edu.tw/p/406-1000-24003,r132.php?Lang=zh-tw",
    height: 225,
    credit: "照片：政大金融科技創新實驗室",
    creditEn: "Photo: NCCU FinTech Innovation Lab",
    poster: false,
    title: "從披薩餐桌到 AI 對話，串起跨國友誼",
    titleEn: "From pizza to AI: friendships across borders",
    summary: "《Nexus》全英文讀書會，讓本地生與國際生透過小組討論，交流資訊網絡、信任與 AI 決策。",
    summaryEn: "The English-language Nexus reading club brought local and international students together to discuss information networks, trust and AI decision-making.",
    image: "/assets/news/nexus-reading.jpg",
    alt: "Nexus 讀書會參與者分享披薩、交流想法",
  },
  {
    id: "23984",
    date: "2026-10-01",
    href: "https://www.nccu.edu.tw/p/406-1000-23984,r132.php?Lang=zh-tw",
    height: 256,
    credit: "照片：政大金融科技創新實驗室",
    creditEn: "Photo: NCCU FinTech Innovation Lab",
    poster: false,
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
                <img src={withBasePath(item.image)} alt={item.alt} width="400" height={item.height} style={item.poster ? { objectFit: "contain" } : undefined} loading="lazy" />
                <figcaption data-en={item.creditEn} suppressHydrationWarning>{item.credit}</figcaption>
              </figure>
              <p className="campus-news__meta"><span data-en="NCCU News" suppressHydrationWarning>政大校園新聞</span><time dateTime={item.date}>{item.date.replaceAll("-", ".")}</time></p>
              <h3 className="h3" data-en={item.titleEn} suppressHydrationWarning>{item.title}</h3>
              <p className="card__body" data-en={item.summaryEn} suppressHydrationWarning>{item.summary}</p>
              <a className="link-arrow" href={item.href} target="_blank" rel="noopener noreferrer">
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
