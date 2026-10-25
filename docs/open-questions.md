# Open Questions

## Glass V6 改版
- **中文字體**：spec 選的是 LINE Seed TC，但它不在 Google Fonts，官網下載頁擋自動抓取。目前先用 Google Fonts 上同樣圓潤的 **Huninn**。若要換回 LINE Seed TC，請使用者自行到 https://seed.line.me 下載後把 woff2 放進 `assets/fonts/`。

## 2026-10-25：完整 CI 的後台測試環境

- **待決**：如何恢復獨立的 `ftl-web-test` 測試環境。既有紀錄顯示使用者曾授權暫停此專案，為正式站釋出兩個免費啟用名額之一；本次 CI 登入請求 DNS 無法解析，完整證據見 `HANDOFF.md` 本輪狀態。
- **推薦**：保留正式站，確認另一專案是否可暫停，或由使用者選擇付費容量，再恢復測試專案並重跑完整 CI。名額分配與成本屬使用者決策，尚未執行。
- **備援**：另行規劃隔離的本機 Supabase CI 環境；需要建置與真實邊界等價驗證，不能直接視為現有完整測試已通過。
- **影響**：前台 150 passed／30 skipped；後台 16 failed／1 passed／1 skipped。PR 保持未合併、未部署。不修改 secrets、不略過測試、不將寫入測試轉向正式資料庫。
