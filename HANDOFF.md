# 本輪狀態 — 2026-10-08 英文幹部姓名與首頁社團新聞

- 目標：依115-1 CSV改幹部英文名，兩則政大新聞含照片放在首頁FinTech週報之前。使用者明確確認統計碩二既有幹部就是Ricky。
- 工作區course-schedule，分支codex/officers-campus-news，來源bd4cd6f；site工作區既有未提交內容未動。內容提交d96cbe9已合併main，並保留遠端新增FTRC合作對象快照f80c05e。首次部署aae5a0c／run37742397689成功。
- 姓名13位：Frank、Wenz、Hunter、Andy、Yuki、Ricky、Mia、Zuemen、Dean、Eddy、Dylan、Kay、Lobi。職務與系級不變；區塊鏈系列講師名稱也同步Zuemen。
- CampusNews靜態元件接在週報之前；兩張社團提供給政大新聞的照片、來源日期、中英文短摘要、原文新分頁連結。來源與界線詳docs/content/2026-10-08-officers-news.md。無新增後台資料表／權限／依賴／費用；新聞後續仍需透過程式更新。
- QA角度：社員核對名字系級、編輯核對來源日期與照片、手機讀者檢查閱讀與語言切換。實際瀏覽器驗證Ricky統計碩二及13位名單；新聞位於週報之前；英文切換正常、圖片naturalWidth400、外連noopener noreferrer、console errors空。
- 兩輪桌機1280×800／手機375×812邏輯尺寸，proof/news-round{1,2}-{desktop,mobile}.png（父目錄）。瀏覽器原縮放1.2使viewport設定需校準：設定1536×960及450×975後用DOM innerWidth/Height確認目標尺寸；截圖工具內容有額外縮放白邊，不當成網站溢出。375px DOM scrollWidth=375。八項自檢：標題／圖／摘要层次明確；留白沿用section/card；Huninn/Outfit沿用；藍白配色沿用；桌機雙欄對齐；手機單欄不溢出；鍵盤focus與語言／外連屬性正常；沒有新增動效。impeccable detect結果[]。
- 個資界線：原CSV不複製進repo/public。以原CSV作正對照、排除已公開社團email後掃描out HTML/JS，私人email命中為空；不記錄私人email值。不新增對外输入或敏感操作，沒有正式站安全攻擊測試。
- 環境問題：初跑ESLint cli.execute不存在；確認套件檔readFileSync讀出長度0，依package-lock npm ci後恢復，未改鎖檔版本。npm報9項依賴警示（8 high/1 critical），尚未做可利用性評估，非本輪新增且未執行audit fix。建置卡在public/media/books/proof-of-stake.jpg：lsof定位、ls flags證實compressed,dataless且blocks0；該生成副本移至父目錄proof/media-before-officers-20261008，既有sync腳本從assets重建後build成功。
- 已通過：npm test（型別、lint、連結、35 unit；6既有lint warnings）、npm run build、2項匯出檢查、全前台98 passed/22 skipped。紀錄/tmp/officers-{test,build,export,visual}.log。靜態內容依政策不新增瑣碎unit。
- **已知測試限制**：完整後台npm run test:admin實跑13 failed/5 skipped，清理hook在缺SUPABASE_TEST_URL時仍呼叫createClient，Error supabaseUrl is required。8項contract因缺測試環境全skip。證據/tmp/officers-admin.log、/tmp/officers-contract.log。不能宣稱後台全測通過；使用者本輪回覆「上線」，明確授權此次內容更新的發布例外；保留失敗證據，未更改後台權限或權杖。
- 教學已交付：英文名與新聞的使用者結果、靜態資料隨既有Pages發布、來源與個資風險、沿用既有卡片無新增費用；備援為日後新聞常更新再擴充後台。實際套用product-owner-teaching、impeccable、emil-design-eng、systematic-debugging、verification-before-completion、computer-use、built-in-browser。
- 上線檢查：正式/about/#members已核對13位英文名、Ricky統計碩二；正式/#news在週報之前，兩張圖片naturalWidth400、來源連結正確、console errors空。首次驗收發現既有/assets/v6.css瀏覽器快取仍為舊版（figure margin 17px 40px），補查詢版本?v=20261008-news強制取得新版，未改視覺設計。main重新npm test/build/2export/98前台測試通過（22條件skip）；log /tmp/officers-cache-{test,build,export,visual}.log。
- main初次匯出測試因遠端新合作對象圖片本機缺少而失敗，從已上線公開網址同步至生成目錄後重建通過；正常CI由Supabase取圖。
- 最終上線：4f4f3ef樣式修正／Pages run37742873940成功。既有瀏覽器重新整理後CSS網址含版本、figure margin由17px 40px變0px、兩張圖complete且naturalWidth400、console errors空。正式截圖父目錄proof/news-live.png；原網址/#news及/about/#members已驗收。沒有改後台權限／權杖或把測試缺口當通過。

# 本輪狀態 — 2026-10-08 其他講者公開資料補齊

- 使用者要求查公開資料補其餘講者介紹，並依標題填課程內容；範圍W3陳顯立、W6林庠序、W10郭茂仁、W13陳昌裕，中英文bio／abstract。職稱、日期、講題、獎勵、Jade Ho與其他活動不變。
- 來源與採用界線：docs/content/2026-10-08-speaker-sources.md。W3依政大同場活動報導寫已發生的分享；其餘標「課程導讀（依講題規劃）」及當日分享為準。經歷來源TeSA、經濟部新創圓夢網、高雄金融科技創新園區、TABEI、IBM活動頁及微軟論壇報導。不猜學歷／英文姓名／未確認現職，不把碳數據等同認證碳權，不新增投資成效。
- 使用course-schedule乾淨工作區，分支codex/speaker-public-profiles，來源7c1edc7；site原未提交修復未動。既有Pages流程從Supabase拉內容；更新正式資料及repo快照避免下次發布覆蓋。
- 正式資料已備份並以id＋updated_at＋完整舊data條件更新四筆，單一transaction遇差異全部中止。讀回逐欄（僅排除伺服器updated_at）全相同。證據父目錄proof/speakers-{before,after}-20261008.json、update-speakers-20261008.sql、speakers-production-readback.json。SQL編輯器舊內容被自動審核保護，已另建查詢保留；SQL警告UPDATE無WHERE為parser誤判，執行前確認四筆都有id/version/data條件。
- 簡短QA：社員核對講題與講者、內容編輯核對來源與時點、手機讀者驗證長文及中英文。兩輪1280×800／375×812 proof/speakers-round{1,2}-{desktop,mobile}.png。層次標題清楚；留白分隔導讀與簡介；字體沿用Huninn/Outfit；藍色系／對齊沿用GlassV6；375px scrollWidth=375；詳情開關／鍵盤／語言切換正常；英文長文scrollTop217.5且內容965高/視窗747高可到底；原有動效不改。無新視覺缺陷、console errors空。沒有新增敏感流程或正式安全攻擊測試。
- 靜態文案依testing-policy不另寫瑣碎文字unit。全前台初跑90通過、8失敗、22略過：兩個既有測試硬編碼「生成式AI/generative AI」舊內容，各四裝置；實際詳情與翻譯已是本轮核對的內容，更新預期且保留流程檢查。兩個過時預期各獨立修正、各四裝置重測4/4通過；最終npm test通過（35 unit、型別、lint、連結，6既有warnings）、2項匯出檢查通過、全前台98 passed／22 skipped。紀錄/tmp/speakers-final-{test,visual}.log、/tmp/speakers-export.log；測試後未改產品內容。
- build初次沙箱禁止通訊埠失敗，保留.next到/tmp/ftl-speakers-next-sandbox-failed後於允許環境重建通過。沿用已核可課表發布對暫停後台測試專案的例外，未變更權杖/權限，不能宣稱後台發布按鈕403已修。

### 其他講者上線結果

- 內容提交2fc70c8，main重跑npm test（35 unit）、build、2項匯出檢查與前台回歸（98 passed、22 skipped）均通過；紀錄/tmp/speakers-main-{test,build,export,visual}.log。6項既有lint warnings未改。無額外後台測試成功聲明。
- push後確認origin/main包含2fc70c8c6cf7f59b0e411d4010a8fd2046f37cb7；Pages run37720932657成功。部署正常從Supabase拉內容，自動提交28d1df1僅改generatedAt，所有內容與本輪預期一致。
- 正式 https://nccufintechlab.tw/events/ 實際逐一打開W3/W6/W10/W13，均見新介紹；另切英文驗證W10新導讀，console errors空。證據/Users/frank/Documents/ChatGPT/ftl-website/proof/speakers-live.png。預覽服務已停止、臨時tab關閉、瀏覽器尺寸已還原。
- 教學已交付：內容用途／使用者詳情體驗／資料库到發布流程／來源與導讀界線／只改副本的風險／無新增費用權限／驗證證據／後台測試暫停與403限制。套用product-owner-teaching、systematic-debugging、verification-before-completion、impeccable、emil-design-eng、computer-use、built-in-browser；既有失敗測試依TDD紀律逐項修正並確認綠燈，沒有新增產品邏輯。

# 本輪狀態 — 2026-10-08 Jade Ho 簡介與分享預覽

- 使用者提供 Jade Ho 個人檔案，要求更新講者介紹，並問 Discord 網址預覽為何缺圖。以專業資料整理中英文摘要及現任／學歷／經歷／專長；未刊登宗教與婚禮連結，未將學校名稱擅自綁定到特定學位。講題、日期、獎勵資格不變。
- 根因已確認：正式首頁 og:image 與 twitter:image 仍指向 https://hunter20041004.github.io/ftl-web-demo/assets/og.png（HTTP404）；新網域 /assets/og.png 為HTTP200 image/png，原圖1200×630。修 metadataBase 為 nccufintechlab.tw，sitemap 同步正式網域；沿用既有品牌分享圖，不改爬蟲索引政策。
- 新增實際匯出檔測試：首頁與活動頁的 og:image/twitter:image 必須指向可落地的新網域圖檔，sitemap 網域一致。先驗舊匯出失敗，再修改、build、重跑2項匯出測試通過。
- 正式 Supabase W12 已以舊資料／updated_at 條件更新，重新讀回中英文摘要與bio均相同。備份／預期／SQL／讀回在父目錄 proof/jade-before-20261008.json、jade-after-20261008.json、update-jade-20261008.sql、jade-production-readback.json。沒有密鑰、權限或結構變更。
- 簡短QA：社員打開講者詳情並切換英文；內容編輯角度核對使用者提供的學經歷；分享接收者角度檢查圖片地址與實際HTTP。兩輪1280×800／375×812證據 proof/jade-round{1,2}-{desktop,mobile}.png。層次、留白、字體、藍色配色、對齊沿用既有；375px無橫向溢出；中英文詳情／關閉／鍵盤focus正常；長英文可垂直捲動；原有進場保留，無新增動效。impeccable detector無發現。本輪未改敏感流程，沒有正式安全攻擊測試。
- 範圍延續已核准的課表發布及自訂網域修復；沿用使用者對暫停後台測試環境的既有例外，不重複索取權杖或批准。不能宣稱後台發布按鈕已修好，也不能宣稱Discord舊訊息已刷新；只能驗證網站端圖片可取用。
- 分支 codex/jade-bio-share-preview，沿用乾淨的 course-schedule 工作區，來源 be1e360；site工作區原有修復差異未動。本輪測試與部署結果如下。

### Jade Ho 與分享預覽上線結果

- 提交 fe8ab13 合併 main；分支與 main 的 npm test（型別、lint、內部連結及35 unit）、build、2項匯出檢查、全前台回歸98 passed／22 skipped均通過；6項既有lint warnings保留。測試紀錄在 /tmp/jade-{test,build,export,visual}.log 與 /tmp/jade-main-{test,build,export,visual}.log。
- Pages run 37719408815 成功，head fe8ab1356743b886b0d273e22a8c31c1d0c9ba41；已從正式Supabase拉資料。自動快照提交3d87343僅更新generatedAt，課程內容與本輪預期相同。已同步本地main。
- 正式 https://nccufintechlab.tw/events/ 重新載入、開啟W12詳情，實際顯示新中文摘要／學經歷／專長，console errors為空。證據 /Users/frank/Documents/ChatGPT/ftl-website/proof/jade-live.png；已重設瀏覽器測試尺寸並停止本地預覽服務。
- 正式首頁HTML的og:image與twitter:image均為 https://nccufintechlab.tw/assets/og.png，curl確認HTTP200 image/png。未向Discord發訊息，未宣稱其舊訊息快取已刷新。
- 獨立Next architecture CI 37719408826最後查詢仍in_progress；後台測試環境仍暫停、後台發布權杖403仍為既知限制。使用者已核可範圍例外，本輪無新增權限或密鑰變更。

# 本輪狀態 — 2026-10-08 社課課表更新

- 使用者提供 115-1 新課表，更新正式 Supabase 11 筆有差異的活動及學期設定的課程組成／FAQ 中英文；16 週記錄均保留。W9／W16 為原有停課／考試週，未刪除。週次、日期、獎勵資格依使用者表格；W14 校友與雞尾酒會合併為同一活動，沿用 social 類型。
- 前台現在 5 場講座、3 場工作坊、2 場讀書會；加上 W14 共 11 堂計入獎勵。W7 改 Proof of Stake、W10 郭茂仁、W11 競賽工作坊、W12 Jade Ho、W13 陳昌裕。新講者未提供的簡介留空、詳細內容待公告，沒有沿用舊講者簡介。既有社費、獎勵金金額與結算規則未改。
- 首頁與關於頁同步 5 位講者／2 本書，活動頁摘要改依內容自動計數。手機完整長標題讓既有「收合後少於十屏」測試失敗（8849 > 8120），局部收緊課表與詳情卡留白／標題後，原測試通過。桌機視覺沿用 Glass V6，不改動效。
- 資料流：Supabase events/settings → 既有 Pages workflow 讀取已發布資料 → 靜態官網。正式 SQL 以 transaction + 預期舊 data/updated_at 檢查避免覆蓋同時修改。讀回逐欄比對 id/semester/week/date/kind/data/status/position/deleted_at 全相同，settings 全 data 相同。正常後台活動清單已顯示更新。
- 備份與 SQL 位於父目錄 proof：courses-before-20261008.json、settings-before-20261008.json、update-courses-and-settings-20261008.sql、courses-production-readback.json。皆不含密鑰。修改已存正式資料庫；網站已發布並完成正式驗收。
- 工作區：course-schedule，分支 codex/update-course-schedule，來源 main 38ad546。managed worktree tool 誤指外層空 repo 且 main 無效，改用內層 site 的 git worktree 建立隔離工作區；原 site 的後台修復未提交內容保留。未將其 AdminOverview／Edge Function 程式混入本輪提交。
- QA 角度：社員查日期、講者、計入資格；幹部核對後台與前台來源一致；手機訪客檢查長課名與分類／詳情。實測講座篩選、新講座展開、英文切換正常，console errors 空。此輪內容及排版修改未改登入／權限／付費流程，未做正式攻擊測試。
- 畫面兩輪桌機1280×800、手機375×812檢查，最終 proof/courses-final-desktop.png、proof/courses-final-mobile.png（絕對根目錄 /Users/frank/Documents/ChatGPT/ftl-website）。層次：主標與課名清楚；留白：手機已修過長問題；字體：沿用 Huninn／Outfit；配色：沿用藍色系；對齊：卡片／文字左右一致；響應式：375px scrollWidth=375；狀態：分類、詳情展開、語言切換通過，既有空狀態由回歸測試涵蓋；動效：沿用既有進場／hover，沒有新增。impeccable detector 對修改 TSX/CSS 無發現。
- 檢查：npm test（型別、lint、內部連結、35 unit）通過，6 既有 lint warnings；build 與自訂網域匯出檢查通過。手機原失敗測試重跑4/4通過；全前台回歸 98 passed、22 skipped（依裝置條件）。測試 Supabase 仍暫停，本輪未修改也未宣稱驗過後台權限／重建函式。
- 尚未解決的獨立事項：後台發布按鈕的 GITHUB_TOKEN 對新組織仍403，需使用者／組織 owner 完成權杖授權；本次使用既有 GitHub 發布流程，不變更密鑰或管理員權限。


### 本次上線結果

- 使用者明確回覆「允許發布本次課表更新」：在前台及正式資料讀取驗證通過後發布，僅豁免已暫停後台測試專案造成的缺口，不修改權限／密鑰。
- 提交 745d169 合併 main，main 重跑 npm test（35 unit）、build、匯出檢查及全前台回歸（98 passed、22 skipped）通過。push 後已確認遠端 SHA；Pages run 37718104579 成功，正常從 Supabase 拉內容並部署；產生內容快照提交 e52bc53。未使用救援快照模式，未重複觸發部署。
- 正式 https://nccufintechlab.tw/events/ 重新載入後顯示5／3／2場次與新課表；實際開啟 Jade Ho 講座、《Proof of Stake》讀書會成功，沒有 console errors。/about/ 重新載入後確認五位講者、兩本書與11堂獎勵組成；部署產生的 calendar/lectures/workshops/books/membership 逐欄與預期相同。首次瀏覽仍取得舊快取，重新載入即更新。
- 正式畫面證據：/Users/frank/Documents/ChatGPT/ftl-website/proof/courses-live.png。前台部署成功不等於後台發布按鈕已修好；該權杖403仍待處理。獨立 Next architecture CI 37718104522 最後查詢仍 in_progress，未宣稱後台全測通過。
- 本轮程序檢查曾因外部 node_modules 符號連結被 Turbopack 拒絕；改複製既有鎖定依賴後成功，未改建置設定或加套件。一次臨時快照比對指令漏 opts 參數，補上既有函式必填參數後比對通過，未改產品程式。

# HANDOFF — Glass V6 改版

## 前後台完整修復 — 2026-10-08（進行中，等待 GitHub 登入）

### 最新接續點

- 使用者已登入 GitHub，但目前帳號為 Frankfangcode。Fine-grained token 清單僅有個人 nccu-bus（expired，未動）；開啟 new 表單並展開 Resource owner，載入完只顯示 Frankfangcode（1 result），沒有 nccufintechlab。尚未建立／輸入／更換任何權杖或變更權限。需使用建立社團組織的帳號檢查組織授權；備援為組織擁有者處理成員／PAT policy，不自行擴權。
- `gh api user/memberships/orgs/nccufintechlab` 回 404 並提示現有 CLI token 缺 admin:org；此結果**不能**證明不是成員，未執行 auth refresh 擴權。只有 UI owner 選單不可選社團組織是已驗證事實。
- 證據：`/Users/frank/Documents/ChatGPT/ftl-website/proof/github-resource-owner-unavailable.png`。in-app tab 10 保留 Resource owner 選單；tab 7 Supabase、tab 9 官網後台保留。下一個使用者操作：改登入建立 nccufintechlab 組織的 GitHub 帳號，再回覆；不要要求密碼、OTP 或 token 貼聊天。

- 工作區 `/Users/frank/Documents/ChatGPT/ftl-website/site`，分支 `codex/restore-admin-publishing`，來源 `38ad546`。本輪程式修改尚未 commit／合併／push，勿覆蓋。
- 使用者已授權暫停 `ftl-web-test`；已確認 PAUSED，正式專案 `xesxfcqtbzmlanyvdeys` 已恢復連線，ftl-casepool 未動。沒有付費、刪資料或改管理員名單。
- 正式 Supabase Auth Site URL 與新增精確 redirect allowlist 均為 `https://nccufintechlab.tw/admin/`。原 Google 登入先回跳舊 GitHub 404，修正後實際 Google 登入成功，以社團 Gmail 進後台，讀到週報／活動／資源／合作對象。旧 redirect allowlist 尚保留，未擴 wildcard。
- 正常流程驗收：TABEI 合作對象原樣儲存成功，重新載入內容相同；按發布重建回 HTTP 502。沒有建立假資料或改公開文案。
- 已核對 Supabase 線上 trigger-rebuild 完整程式與本機一致。將 REPO 從 Hunter20041004 改 nccufintechlab，原 bearer／admins 驗證保持不變。使用者明確核可「允許這次修正並實際驗證」，豁免暫停測試專案造成的完整後台測試缺口。
- 已透過 Supabase Code editor 部署新 REPO，並加入不含 token 的錯誤診斷（repo/status/message）。編輯器全文複製比對後才部署，避免 Monaco 局部替換。線上與本機 source 同步；此為已部署但未提交的變更。
- **真正剩餘阻塞有證據**：2026-10-08 09:02:07 Supabase Logs 顯示 `GitHub rebuild dispatch failed { repo: "nccufintechlab/ftl-web-demo", status: 403, message: "Resource not accessible by personal access token" }`。重建尚未成功觸發，不能宣稱後台全好。需要處理 Supabase 現有 GITHUB_TOKEN 的新組織授權，不能拿本機 gh token 偷換或輸出任何密鑰。
- 已開 GitHub `https://github.com/settings/personal-access-tokens`，in-app tab 10 停在登入頁；下一步由使用者登入有權管理 nccufintechlab 的個人 GitHub 帳號，再檢查可用細粒度權杖。創建／擴權前需明確範圍確認；新密鑰輸入由使用者操作，不貼聊天。官方 repo dispatch 需 Contents write，查執行狀態需 Actions read；僅選 ftl-web-demo，不授權整個帳號。
- 尚待驗證／發布的局部修改：AdminOverview 正式站 href 與標籤改新網域；已按全域規則建立 PRODUCT.md（依本輪使用者指示與既有 README／STATUS／HANDOFF 記錄，不改視覺）。impeccable context 已跑，detect 對該 TSX 回 `[]`；沒有新動效。此 UI 修改尚未做兩輪桌機／手機截圖，尚未上線。
- 本輪驗證：npm test 通過（35 unit、typecheck／lint／內部連結，6 既有 lint warnings）；Edge Function TypeScript strip + vm syntax check 通過。build 最初受沙箱埠限制失敗，許可環境重跑仍沿用失敗快取；將 .next 保留到 `/tmp/ftl-next-failed-20261008` 後重跑成功（24 頁），custom-domain 匯出測試通過。未更改套件與建置設定。
- 尚未重跑完整後台自動測試：測試專案已暫停。正式環境僅做正常使用者流程驗收，未做未授權攻擊模擬。登入與資料存取控制 source 未改；不能把先前測試通過當成本輪完整測試通過。
- 待收尾：修 GITHUB_TOKEN 授權 → 真實後台發布成功且 GitHub run 成功從正式 Supabase 拉資料 → 驗收官網與後台 → 完成 UI 截圖與必要檢查 → commit／main 檢查／push／跟蹤既有部署（不要重複觸發）→ 更新此紀錄。tsconfig.tsbuildinfo 為本輪測試產生差異，提交前還原該生成檔。

- 使用者新授權：前台與後台都要修好；涵蓋正式 Supabase 連線、登入回跳、新組織的內容發布鏈與驗收。保留既有資料與權限，不另建專案、不購買方案。
- 開工來源 main `38ad546`，工作區乾淨；本輪目前僅更新本交接記錄，尚未變更產品程式。
- 正式 `/admin/` 登入畫面可正常載入；實際按 Google 登入後，目標為 `xesxfcqtbzmlanyvdeys.supabase.co/auth/v1/authorize`，redirect_to 已正確指向 `https://nccufintechlab.tw/admin/`，但出現 ERR_NAME_NOT_RESOLVED。這證明阻塞位於 Supabase 網域連線，不是後台頁面路徑。
- 確認 source：`supabase/functions/trigger-rebuild/index.ts` 仍指定 `Hunter20041004/ftl-web-demo`；後台概覽仍連舊正式站。需核對 Supabase 已部署函式與 GitHub token 授權後修復；尚未直接更動線上設定。
- 已讀 product-security-qa 詳規，本輪登入／權限邊界需完整 QA，安全模擬限隔離測試環境。正式站僅正常登入與發布流程驗收，不擴大攻擊測試。
- 使用者已登入 Supabase Dashboard。正式專案顯示 Paused，頁面確認資料、備份及 storage objects 安全。按 Resume 後出現免費啟用專案額度限制：社團帳號已達 2 個免費 active projects。
- 已確認組織 `政大金融創新實驗室`（mdnsrajztojoufrnuqfg）有三個專案：ftl-casepool（bipdsaqusibgtahvvuxj，Active）、ftl-web-test（bpadohdiuvbimvkwpecv，Active）、正式專案 nccufintechlab@gmail.com's Project（xesxfcqtbzmlanyvdeys，Paused）。
- 已向使用者提出具體選項：暫停 ftl-web-test（保留資料但影響自動測試），恢復正式專案；或保留兩個 active 專案並查看付費方案。使用者已回覆「好」明確授權暫停 ftl-web-test 以恢復正式官網。已從測試專案 Settings → Pause project 確認執行，Dashboard 狀態 PAUSING；尚未付費或刪除資料。
- 下一步：使用者回覆已登入 → 讀取專案狀態及組織歸屬 → 修復既有專案連線 → 核對 Google redirect、新 repo 發布權限及函式 → 測試環境驗證權限與發布 → 正常拉最新內容部署 → 正式登入與前台验收。

## 本輪狀態 — 2026-10-08 自訂網域資源路徑修復

- 目標：`https://nccufintechlab.tw/` 恢復既有首頁、圖片、樣式、導覽；repo 已移至 `nccufintechlab/ftl-web-demo`。
- 工作區：`/Users/frank/Documents/ChatGPT/ftl-website/site`，分支 `codex/custom-domain-path`，來源 `727ffd6`。外層工作区原為空 repo，未覆蓋任何既有修改。
- 根因：Pages workflow 仍以 `NEXT_PUBLIC_BASE_PATH=/ftl-web-demo` 建置，新網域卻從 `/` 提供匯出檔案。
- 修正：正式 workflow 改空 basePath，CI 同步建置根路徑；新增 `tests/export/custom-domain.test.mjs`，驗證實際匯出首頁／關於頁的本機資源與導覽目標都存在，兩個 workflow 建置後執行此檢查。未改版型、內容、資料庫或登入權限。
- 紅綠證據：旧 basePath build 後執行新測試，因 `/ftl-web-demo/assets/ftl-logo.png` 不存在而 exit 1；根路徑重新 build 後同測試 exit 0。
- 環境：Node 24.5.0、npm 11.5.1，`npm ci` 依鎖檔安裝；Chromium 1243 已安裝。本機靜態預覽 `127.0.0.1:4178`。
- `npm test`：型別／lint／連結檢查與 35 個單元測試通過；lint 有 6 個既有 warnings。`npm run build` 成功，匯出路徑測試通過。
- 全套 `npx playwright test --workers=2`：98 passed、27 skipped、13 failed，原始紀錄 `/tmp/ftl-playwright.log`。13 個失敗皆為未提供 `SUPABASE_TEST_*` 時，後台測試跳過後仍在 afterEach 建立 Supabase client，報 `supabaseUrl is required`。未放寬斷言或修改後台測試；`npm run test:contract` 8 項因缺金鑰跳過。
- 使用者明確授權「允許先部署這次路徑修復」：僅豁免本機缺少後台測試金鑰的環境缺口，未豁免前台／匯出／部署後驗收。獨立前台回歸 `npx playwright test tests/visual --workers=2`：98 passed、22 skipped（/tmp/ftl-visual-final.log）。已提交 `782b2c5`、fast-forward 合併 main；main 重跑 npm test、build、匯出測試通過，前台 98 passed、22 skipped。已 push 並確認遠端 SHA 相同，Pages run `37663008546`，CI run `37663008335`；Pages 部署失敗於 Pull published content：3 次 `TypeError: fetch failed`，最後 `Supabase did not wake up after 3 attempts`；正式站尚未更新。這是新的正式環境阻塞，不在本機測試金鑰例外之內；已向使用者詢問恢復 Supabase 或另外授權使用既存快照，未繞過失敗步驟。
- 截圖檢查：已校準瀏覽器縮放後 CSS 視口 1280×800 與 375×812，scrollWidth 等於視口寬；首頁桌機與手機樣式、Logo 恢復，手機選單→關於頁成功、console error 為空。截圖 `/Users/frank/Documents/ChatGPT/ftl-website/proof/local-desktop.png`、`/Users/frank/Documents/ChatGPT/ftl-website/proof/local-mobile.png`。兩輪本機畫面檢查；層次、留白、字體、配色、對齊、響應式均沿用既有設計且可正常顯示；狀態驗證選單展開／關閉與導覽，其他狀態沿用既有測試範圍；既有進場動效可見，未修改動效程式。正式站另做部署後驗收。
- 簡短 QA：首次訪客看首頁、Logo 與手機導覽，社員從首頁進關於頁；可靠性角度檢查部署產物的資源位置。本機與正式站樣式、Logo 已恢復，正式站手機選單→關於頁驗收通過。
- 連線診斷：`dig @1.1.1.1 xesxfcqtbzmlanyvdeys.supabase.co A` 回 NXDOMAIN，對照 `supabase.com` 回 NOERROR 與 A 記錄；curl 前者 exit 6。無法單憑 DNS 確定是暫停、刪除或專案網址變更，需登入 Supabase dashboard 確認。
- 另有既有遷移待辦，未在本輪擴改：Supabase Google 登入 redirect 白名單、分享 metadata／sitemap／文件仍有旧网址，trigger-rebuild 與備份設定仍使用原 GitHub owner。這些不能宣稱已驗證遷移完成。

## 救援發布授權 — 2026-10-08

- 使用者確認「沒錯」：允許先用 GitHub 保存內容上線，接受內容可能較舊、後台仍待資料庫恢復。
- 採手動 workflow_dispatch 的 `use_saved_content` boolean（預設 false），只在明確選用時略過 Supabase 拉取與快照回寫；一般 push 與後台發布仍沿用原流程，無自動吞錯。
- 本次選用快照 generatedAt 為 `2026-09-17T06:30:56.105Z`；圖片沿用現有 prebuild 的 bundled assets fallback。未改內容、登入或資料库。
- 主方案使用明確救援開關，優點是此次可恢復靜態前台且未來正常發布不受影響；限制為內容新鮮度及後台不可用。備援為恢復 Supabase 後再正常重建，需管理帳號處理。無新增服務或費用。
- 遠端 CI 首輪 149 passed、30 skipped、1 failed：WebKit mobile 行事曆快速換週期望 9/28 但收到 9/21，已重跑原工作，不能當成通過。原工作重跑取得成功證據後，沿用相同前台來源、相依與測試設定的結果，未忽略測試失敗。
- 遠端 CI 原工作重跑（attempt 2）成功：前台 150 passed、30 skipped；後台測試專案 17 passed、1 skipped。原 WebKit 換週失敗未重現，未改測試或放寬斷言。這不代表正式 Supabase 已恢復。
- 救援 main 為 `3c62d2c`；本機 main 的 npm test／build／匯出檢查通過、前台 98 passed／22 skipped。所有公開匯出 HTML 的本機資源目標與快照圖片路徑均存在。已手動啟動 Pages run `37667715427`（use_saved_content=true），已取消於重複安裝瀏覽器階段；後續 run `37668957246` 已成功。
- 分支 `codex/snapshot-rescue`／`codex/rescue-frontend-gate`；workflow 設定改動沿用已通過的路徑回歸測試，完成後在 main 重跑既有基本、建置、前台檢查。以 `[skip ci]` 推送救援開關後只手動觸發一次，避免普通 push 的資料庫失敗流程重複執行。

- 為了等待原 CI 曾臨時加入救援流程的瀏覽器重測；原 CI 已全部成功，而該重複步驟長時間停留安裝階段，因此取消 run 並移除重複測試，保留 build／型別／單元／連結／匯出路徑檢查。前台來源、鎖檔、測試設定未改，沿用有效成功證據；部署後仍驗收真實網址。

- **發布完成**：救援 run https://github.com/nccufintechlab/ftl-web-demo/actions/runs/37668957246 成功，head SHA `56418cc4f5d2db49483824170d09c8855d8a3f5c`，使用 `use_saved_content=true`。前台來源與通過遠端 CI 的 `782b2c5` 相同，僅增加 workflow 救援選項及交接文件。
- **正式站驗收**：https://nccufintechlab.tw/ 首頁 stylesheet 為 `/_next/...` 與 `/assets/v6.css`、Logo loaded=true；桌機 1280×800 與手機 375×812 無橫向溢出；實際點選桌機導覽／手機選單→`/about/` 成功；新開正式站驗收 tab 的 console error 記錄為空。HTTPS 正常，www 301 至主網址。
- 正式截圖：`/Users/frank/Documents/ChatGPT/ftl-website/proof/production-desktop.png`、`/Users/frank/Documents/ChatGPT/ftl-website/proof/production-mobile.png`。部署後沿用原有配色／字體／層次／對齊／留白，手機無破版，Logo 與進場動效可見，選單與頁面導覽可操作。
- **剩餘限制**：本次是 2026-09-17 保存內容救援；正式 Supabase 仍未恢復，不能宣稱正式後台登入、內容更新與遷移已完成。普通 push 發布仍會讀正式資料庫，恢復前需明確手動選用 saved content。下一步在 Supabase dashboard 查明正式專案狀態，再正常拉內容重建；不自行購買方案或改動資料。

## 這一輪在做什麼
使用者看過 Next.js 重建版後認為線條太生硬、與柔和漸層背景不搭，決定大改版。
設計決策全部在 `docs/specs/2026-09-12-glass-v6-redesign-design.md`，本檔只寫交接與驗收。

## 分支
- 只有 `main`。2026-09-13 使用者拍板後把 `redesign/glass-v6` 合併進來，其餘分支全部刪除。
- 正式站：push `main` → `.github/workflows/pages.yml` → https://hunter20041004.github.io/ftl-web-demo/
- 之後的修改開功能分支，測試通過後合併回 `main`（全域規則）。

## 視覺規則（取代舊的「V1 為準」）
- **零硬線**：不准用 1px 實線分層。卡片＝玻璃（`--glass`）＋內側高光（`--glass-hi`）＋柔陰影（`--shadow-soft`）。
- 色調沿用 V1 的變數，不新增主色。
- 字體：英文 Outfit、中文 Huninn（LINE Seed TC 不在 Google Fonts；若使用者提供字體檔，放 `assets/fonts/` 後把 `--f` 第一順位換回 LINE Seed TC）。
- 一頁只有一個主角動畫：首頁是 logo 線條畫入（`LogoDraw`）。其他只做進場淡入、hover 微浮 4px、社團宗旨的捲動填色。
- 莫比烏斯與交易網絡兩套裝飾都已退役，不要從舊分支撿回來。

## 檔案地圖
- `assets/v6.css` — 唯一的樣式表（`ftl.css` 只給根目錄舊的靜態 HTML 用，Next 版不再載入）
- `src/components/visual/LogoDraw.tsx` — 首屏 logo 動畫；骨架路徑座標系＝`ftl-logo.png` 的 733×692
- `src/components/runtime/MotionEnhancements.tsx` — 捲動填色
- `tests/visual/glass-v6.spec.ts` — 視覺契約；`routes.spec.ts` — 七頁四視口無橫向捲軸

## 驗收關卡
1. `npm test`（typecheck ＋ lint）
2. `npm run test:visual`（48 個案例：7 頁 × 4 視口 ＋ glass-v6 契約 × 4 視口）
3. `npm run build` 靜態匯出成功
4. 1280×800 與 375×812 截圖自檢通過（見 spec 檢查清單）
5. 預覽網址開得起來、console 無錯

## 內容
- 2026-09-12 起站上內容全部來自社團文件，集中在 `src/lib/content.ts`；來源與待確認項目見 `docs/內容待確認清單.md`。
- 版面歸屬（使用者 2026-09-12 指定）：入社資訊放「關於我們」、課程內容放「活動」；「專案」與「洞察」兩頁維持原本內容不動。
- 文案原則：直接講事實，不做標語式的一句話；區塊標題只留名稱；藍色強調字用 `--g-brand` 漸層。
- 標語只有一個：「金融 × 科技 × 產學 × 實作」。品牌英文名依使用者決定維持現狀（logo「FinTech Lab NCCU」、站上「NCCU FinTech Innovation Lab」）。
- 專案頁＝`SlideDeck`（每專案一疊投影片，資料在 `content.ts` 的 `projectDecks`）；洞察頁＝週報（`weekly`），新一期照 nccu-fintechlab-social 的 `docs/週報-Prompt.md` 產出後加到陣列最前面。
- 分享縮圖 `assets/og.png`（1200×630）；favicon `src/app/icon.png`；書封 `assets/books/`（Open Library）。
- 英文：長文都有 `*En` 欄位，元件用 `data-en` 帶出；`SiteInteractions` 的 MutationObserver 會把切換身份／翻週／翻投影片時新產生的節點也翻成英文。
- 首頁順序：首屏 → 我們是誰（五種形式）→ 重要時程 → FinTech 週報 → 專案 → 合作對象 → 聯絡我們。每段都是摘要，細節在內頁。


## CMS 第 1 期（內容管線）— 2026-09-14

計畫：`docs/plans/2026-09-14-cms-plan-1-content-pipeline.md`。Task 1–9 程式全部完成、`npm test` 與 80 個視覺測試全綠。

全部接上（2026-09-14）：
- Supabase 組織「政大金融創新實驗室」（社團 Gmail）：正式專案 `xesxfcqtbzmlanyvdeys`（首爾）、測試專案 `ftl-web-test` `bpadohdiuvbimvkwpecv`（孟買）。兩邊都跑過 migration、管理員＝社團 Gmail、seed 完成。
- 鑰匙：GitHub secrets `SUPABASE_URL`／`SUPABASE_SERVICE_KEY`／`SUPABASE_TEST_*`；本機 `.env.local`（gitignore）。用的是新格式 `sb_publishable_…`／`sb_secret_…`。
- 驗證：契約測試 3/3；pull-content 實跑；Playwright 80；正式站 pipeline 從 Supabase 拉到 3 期／16 活動／…；端到端「改合作對象名稱 → 重建 → 正式站出現 → 改回」通過。
- Google 登入已設好（2026-09-14）：Google Cloud 專案 `ftl-web`（社團 Gmail 名下）、OAuth 用戶端「Supabase (ftl-web)」、redirect 指向 Supabase callback；Supabase 正式專案 Google provider Enabled，Site URL 與 redirect 白名單＝`…/ftl-web-demo/admin/**` 與 `http://localhost:3000/admin/**`。Client ID/Secret 在 `.env.local`。
- Google OAuth 已發布（實際運作中）：任何在 admins 名單上的 Google 帳號都能登入，不需要測試使用者名單；品牌頁的首頁與隱私權連結指向正式站與 /privacy/。


## CMS 第 2 期（後台核心＋合作對象）— 2026-09-14

計畫：`docs/plans/2026-09-14-cms-plan-2-admin-core.md`。Task 1–5 完成。
- 後台 `/admin/`：`src/app/(admin)`（自己的 root layout＋admin.css，視覺沿用前台）、`src/components/admin`、`src/lib/admin`。
- 發布鏈：`supabase/functions/trigger-rebuild`（部署在測試與正式專案；測試專案設 `REBUILD_DRY_RUN=true`）；GitHub fine-grained token 只在 Supabase secrets 與 `.env.local`（`GITHUB_DISPATCH_TOKEN`）。
- 測試：後台 E2E 6 條（`tests/admin`，測試專案 email 帳號 `scripts/setup-test-users.ts`）、契約 6 條、單元 20、前台視覺 80。CI 的 next-ci 跑全部（含 admin E2E，用 TEST secrets）。
- 本機開發：`.env.local` 的 `NEXT_PUBLIC_SUPABASE_*` 指向測試專案；正式 build 由 pages.yml 用 secrets 注入正式專案。
- 第 3 期要做：週報／活動／資源／專案／研究文章編輯器、學期設定、已刪除擴到全類別、Google OAuth 從測試模式發布（品牌頁填首頁與 /privacy/）。


## CMS 第 3 期（其餘編輯器）— 2026-09-14

計畫：`docs/plans/2026-09-14-cms-plan-3-all-editors.md`。全部完成。
- 通用層：`src/lib/admin/collection.ts`（makeCollection）、`validate.ts`（zod → 欄位錯誤）、`media.ts`、`components/admin/fields`、`EntityPage.tsx`。新類別＝一個 form ＋ 一個 list 元件 ＋ 一個 route。
- 週報：`lib/admin/weekly.ts`（一期＝issue＋3 stories）、`weekly-parse.ts`（貼上拆解，單元測試）；格式 `docs/週報貼上格式.md`。
- 活動：`data` 也存 semester/week/date/kind（pull-content 以欄位為準並去掉重複鍵）。
- 測試：後台 E2E 12、單元 24、契約 7、視覺 80。（洞察文章後：E2E 16、單元 30、視覺 84）

## 極端測試與正式站驗證 — 2026-09-14（第 3 期上線後）

真的在正式站走過：合作對象改名→上線→改回；研究文章新增→上線→刪除→消失。六類都用「後台畫面→測試專案→pull→build→HTML」的整合腳本（`scripts/integration-admin-to-front.sh`）驗過會出現在前台。

這一輪抓到並修掉的（都是上線後才會炸的那種）：
1. 語言切換用 innerHTML 塞 data-en → 後台輸入 `<img onerror>` 會在訪客瀏覽器執行（stored XSS）→ 改純文字。
2. 正式站建置時跑的單元測試寫死了「6 篇研究文章」→ 幹部一新增就發布失敗 → 只驗格式。
3. 視覺測試同樣寫死筆數 → CI 隨內容變紅 → 從快照算。
4. pull-content 單一查詢碰到 Supabase Gateway Timeout 就整個失敗 → 每個查詢重試 3 次。
5. 六類全部刪光 → 洞察頁 build 崩 → 加空狀態（全空 build 已驗證）。
6. 非圖片檔上傳沒訊息、數字欄空白算 0、年份沒範圍、週報「下一期」在清單載入前算錯。

已知限制（沒修，要知道）：
- 發布觸發的重建若失敗，幹部只看到「重建失敗」，要再按一次發布；沒有自動重試整個 workflow。
- 圖片刪除項目後不會清 Storage 裡的檔（會慢慢累積，免費 1GB 很久才滿）。
- 沒有版本歷史；改壞了靠 git 裡的快照 commit 由工程師撈。
- GitHub Pages 本身偶爾短暫 503（實測遇到一次），與我們無關。

## 資安檢查 — 2026-09-14

實際探測（測試專案）：匿名讀 admins/settings → 0 列；匿名刪 Storage、非管理員改 settings → API 回 ok 但 RLS 靜默過濾、資料未變（已驗證）；非管理員自我加入 admins、上傳、觸發重建 → 全被擋；被移除的管理員舊 token 立即失效（RLS 每次查 admins）；偽造 JWT → 401。git 歷史無鑰匙；前台 bundle 只有 publishable key；npm audit 0；前台無第三方腳本。
本次補強：正式專案關 email/password 登入（只留 Google）；後台加 frame-busting。
接受的風險：Storage bucket 公開可列（都是前台要公開的圖）；GitHub Pages 無法設 CSP/X-Frame-Options；後台 session 存 localStorage（前台已無 innerHTML 注入點）；管理員彼此可加減（設計如此）；工程師這台 Mac 的 `.env.local` 存有全部鑰匙。

## 洞察文章改為社團自撰長文 — 2026-09-14

使用者決定：洞察文章是社團做研究後自己寫的詳細長文，不是外部論文連結。
- DB：`articles` 表（migration 0003，正式／測試皆套用）；舊 `papers` 表保留但程式已不用（可日後 drop）。
- 前台：`/insights/<slug>/` 每篇一頁（`src/app/(site)/insights/[slug]/page.tsx`），內文用 `src/lib/markdown.ts` 的安全子集（標題／段落／清單／引言／粗體／連結，無 innerHTML）；洞察頁卡片列表；英文內文選填。
- 後台：`/admin/articles/`（`ArticleForm`、`ArticlesList`）；已刪除／總覽同步。
- 上線時抓到：零篇文章時 `output: export` 拒絕產空的動態路由 → 正式站發布失敗一次（舊站未受影響）→ `src/lib/article-params.ts` 沒文章時產 `/insights/_none/` 佔位頁（單元測試＋全空 build 驗證）。
- 正式站實測：後台新增 `prod-test-article` → 上線 → 刪除 → 消失（見本節下方紀錄）。
- 文件：`docs/社員交接手冊.md`（給幹部的完整教學）、`docs/後台使用說明.md`、spec 變更紀錄。

## 聯絡頁去重＋部署保險調整 — 2026-09-16

- 聯絡頁下半段（Email 按鈕＋Instagram／Threads）與上方卡片內容完全重複，整段移除（`e1a801d`）。
- 使用者 2026-09-16 早上在後台把三個舊專案全部下架，準備換新專案；`tests/unit/pull.test.ts` 原本寫死「圖片至少 7 張」，CI 拉到 0 個專案就擋下部署。改成「快照列到的圖都要落地、至少有合作對象 logo」（`b170c49`），已模擬 0 專案通過。
- 正式站已驗證：聯絡頁無重複區塊、專案頁 0 筆時正常顯示（只有標題，無錯誤）、無 console 錯誤。
- 下一步：使用者在後台新增新專案並發布即可，不需再改程式。

## 使用者回饋三修 — 2026-09-17

使用者用手機實測後回報三個問題（`2fa9d53`）：
1. 幹部少一人：專案開發部加入王○問（交大管科三）。名單仍在 `src/lib/content.static.ts`（不在後台），沿用遮罩姓名、無英文名欄位（使用者拍板）。
2. 週報「短標」上限 14 字寫不下外商公司名：`src/lib/admin/weekly.ts` 先改 24 字、使用者隨後拍板改 100 字，後台提示與 `docs/週報貼上格式.md`、`docs/週報編輯規範.md` 同步為「建議 12 字內、最多 100 字」；單元測試 `tests/unit/weekly-headline.test.ts`。
3. 手機選單打開後被首屏標題與 logo 蓋住、點不到：`.sheet` 在 `#site-header` 裡，而 `#site-header` 與 `.page` 同為 `z-index:1`，後出現的 `.page` 壓過去 → `#site-header{ z-index:2 }`（`assets/v6.css`）。`tests/visual/mobile-menu.spec.ts` 用 `elementFromPoint` 驗每個選單項目都在最上層（桌機視口跳過）。

順手修的既有失敗：`glass-v6.spec.ts` 的「專案牆」寫死了已下架的 `course-scheduler`／`smart-album`，0 個專案時 CI 四個視口全紅 → 改從快照取第一／最後一個專案，0 個時跳過；有專案時用 `4d03559` 的舊快照驗過 4 視口通過。

環境備註：本機 `next dev` 若是在新增路由之前啟動的，會對新頁面回 404（這次 `/admin/articles/` 就是），後台 E2E 會卡在「找不到新增文章」；重開伺服器即可。視覺測試 4 工作程序同時打老舊的開發伺服器會出現動畫時序類的偶發失敗，`--workers=2` 穩定。

驗證：`npm test` 35/35、視覺 81 通過 7 跳過、後台 E2E 16 通過 1 跳過（需 TEST 鑰匙的那條）。
- 部署流程補強（同日）：回寫快照的 push 撞到兩個問題——建置期間有人推新 commit 會被拒（`14e95ce`）、建置會弄髒 `next-env.d.ts` 讓 rebase 拒跑（`1f7a871`）→ `git pull --rebase --autostash origin main` 再 push。正式站 https://hunter20041004.github.io/ftl-web-demo/ 已驗：關於頁有王○問、CSS 含 `#site-header{ z-index:2 }`、後台週報提示「最多 100 字」（後改 100）、手機視口選單 7 個項目都在最上層、console 無錯。

## 前台健檢（使用者要求）— 2026-09-17

**觸發**：使用者手機實測發現選單被蓋住後，要求照 `product-security-qa.md` 與 `frontend-claude.md` 做一次完整前台 QA。
**範圍／環境**：正式站 https://hunter20041004.github.io/ftl-web-demo/ 七頁 × 375×812／1280×800，Playwright Chromium 真實互動（只讀）；修正後在本機重驗、上線後在正式站重驗。
**角度**：第一次來的訪客（手機為主）、社員（找活動／報名）、幹部（後台內容如何呈現）；UX／無障礙檢視（點擊目標、可點元素是否在最上層）。資安第二階段未觸發（本輪未碰登入／權限／輸入），9/14 的證據仍有效。
**方法**：健檢腳本（scratchpad `audit.mjs`）對每頁記 console／失敗請求／破圖／橫向捲軸／超寬元素／被截斷文字／**每個可點元素是否在最上層**（`elementFromPoint`，即選單問題的通用版）／手機點擊目標；並走：選單開關、切英文跨頁、週曆翻頁、社員分頁＋FAQ、活動篩選＋詳情彈窗、洞察展開＋文章頁、資源篩選、聯絡外連。再逐屏真實捲動截圖人工審視。

**已證實缺陷（已修，`5a5a2aa`）**
1. 手機頁標題在詞中斷行（「政大金融科／技創新實驗室」「職缺、獎學／金…」）→ `.pagehead .h1` keep-all + 1.9rem。
2. 手機資訊列（成立資訊／指導單位）值欄被 7.5em 標籤擠成一小條，地址折 5 行 → 標籤在上值在下。
3. 手機活動列標題欄只剩約 90px、5 字一行 → 日期＋計入／箭頭在第一列，標題獨占第二列。
4. 0 個專案時首頁「專案」區塊與專案頁只有標題一片空 → `ProjectsEmpty`（使用者拍板文案）。
5. 聯絡頁 LINE／IG／Threads 同分頁開啟 → 新分頁（使用者拍板）。
6. 手機語言鈕 32px → 40px（使用者拍板）。
回歸測試：`tests/visual/mobile-layout.spec.ts`、`tests/visual/qa-0917.spec.ts`。

**腳本誤判（查證後排除）**：洞察頁來源連結「被蓋住」＝在收合的 `<details>` 內，展開後實際點擊正常開新分頁；全頁截圖大片空白＝進場動畫要捲到才觸發，真實捲動全部可見；活動頁區塊鏈課程卡片透明＝收合區內，展開＋捲動後五張都出現。

**內容問題（不在程式，請幹部在後台改）**：週報 Vol.03 的「本期一句話」開頭殘留「測試更改功能 」字樣，正式站看得到。

**未測項目**：後台畫面的手機版面（幹部用桌機）；真機 iOS Safari（只用 Chromium 模擬手機）；資安第二階段（未觸發）。

### 健檢第二輪（補齊「未測項目」與低優先修正）— 2026-09-17

使用者要求：沒測的要測、對使用者有益的都要改。結果（`a57b647`、`b350062`）：
- **手機點擊目標 ≥ 40px 變成契約**（`mobile-layout.spec` 第 4 條，掃七頁所有可點元素）：修了「所有…→」連結、資訊列網站／電話／Email、週報「來源」列、chip、`link-arrow`。
- **後台手機版面**（`tests/admin/mobile.spec.ts`：十頁不橫向捲、可點 ≥ 40px、新增對話框放得下且發布鈕按得到）：修了導覽列、回官網、登出、▲▼排序、對話框 ✕（原本只有 16px）、`Button size=sm` 手機 40px、學期設定「刪」→「刪除」、重建紀錄連結。對話框本身在 375px 放得下、欄位能輸入。
- **Safari 引擎（WebKit）**：本機 macOS 14 上 Playwright 1.63 的 WebKit 開頁就報 `Unknown setting: PushAPIEnabled`（版本不支援），改在 CI 跑：`playwright.config.ts` 在 `CI` 或 `WEBKIT=1` 時加 `webkit-desktop`／`webkit-mobile`（iPhone 13、1x，3x 會超過整頁截圖 32767px 上限）。CI 結果：視覺 144 通過（含 WebKit）。**真機 iOS Safari 仍未測**——需要實體 iPhone 或開 Safari「允許遠端自動化」（系統設定，由使用者決定）。
- **資安第二階段重新探測**（測試專案 `bpadohdiuvbimvkwpecv`，合成資料，腳本 `security-probe.mjs` 在本輪 scratchpad）：先校準（管理員讀 admins 成功）再測 21 案例——匿名讀六表 0 列、匿名／非管理員寫 partners／admins／settings／Storage／觸發重建全被擋（401/403 或 RLS 0 列，settings 資料未變）、偽造 JWT 401、特殊字元原樣儲存。全過；探測資料已清除。靜態：本機正式建置輸出無私密鑰匙（唯一命中是 supabase-js 檢查前綴的程式碼）、git 歷史無鑰匙、`npm audit --omit=dev` 0 漏洞。
- **正式內容修正**（使用者授權）：週報 Vol.03 `lede` 去掉開頭「測試更改功能 」；原文：「測試更改功能 這週兩家美國公司都在買…」，改後從「這週兩家…」開始；`b350062` 部署後正式站已無殘字。
- 改善提案（未做，屬設計決策）：活動頁在手機約 12,000px 長（16 屏），可考慮講座／工作坊／讀書會的詳情卡預設收合。
- 活動頁詳情卡預設收合（使用者拍板，`cfaa703`）：講座／工作坊／讀書會改 `details.card--collapsible`，標題列（週次、標籤、標題、講者／作者）永遠可見，「展開內容」才展開；手機活動頁 12,500 → 約 8,100px（375 寬）。CI 含 WebKit 全綠，正式站驗證 9 張卡預設全收合。
