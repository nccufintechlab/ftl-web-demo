# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

官網提供社員及訪客查閱社團介紹、活動、週報、專案與資源；幹部以列入管理員名單的 Google 帳號更新後台內容。

## Product Purpose

政大金融科技創新實驗室的既有官網與內容管理後台。修復與維護以訪客能正常瀏覽、幹部能登入並發布內容為驗收。

## Operating Context

正式網址 https://nccufintechlab.tw/，後台 /admin/。GitHub 組織 nccufintechlab 管理 ftl-web-demo；Supabase 保存六類內容與學期設定。發布會通知 GitHub Actions 拉取已發布內容並更新 GitHub Pages。

## Capabilities and Constraints

- 既有 Next.js 靜態匯出、React、TypeScript；沿用現有部署流程，不另建正式站。
- 六類後台內容為週報、活動、資源、專案、洞察文章、合作對象；另有學期設定。
- 官網支援中英文、桌機與手機；幹部名單及部分基本資料仍由工程師維護。
- 沿用現有內容管理流程；可依社團提供的課表更新內容，不改資料結構或管理員權限，不增加付費服務。

## Brand Commitments

沿用已核可 Glass V6 與既有社團 Logo、名稱、配色及動效。詳細約束見 HANDOFF.md 與 docs/specs/2026-09-12-glass-v6-redesign-design.md。

## Evidence on Hand

產品事實來自使用者本次遷移指示，以及既有 README.md、STATUS.md、HANDOFF.md 與管理後台設計。網站不放學號與電話，幹部以社團提供且確認的英文名顯示；不得另造內容或成效聲明。

## Product Principles

- 保留社團既有內容與管理權限。
- 官網與後台都以實際網址、實際操作驗收。
- 原有視覺方向保持一致，修復不擴成改版。
