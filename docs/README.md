```markdown
# タスク管理アプリ 設計資料

本ディレクトリには、タスク管理アプリ（MVP）の設計に関する資料をまとめています。  
将来的な機能追加やリファクタリングを見据えて、設計意図・構造・データ仕様を文書化しています。

---

## 📁 ディレクトリ構成

```
docs/
├── architecture.md      # 構成概要（技術スタック・ディレクトリ構成など）
├── screen-flow.puml     # 画面遷移図（PlantUML形式）
├── er-diagram.puml      # ER図（PlantUML形式）
└── README.md            # 設計資料の目次・概要（このファイル）
```

---

## 📌 ドキュメント一覧

### 1. アーキテクチャ構成
- **ファイル**：`architecture.md`
- **概要**：MVPにおける技術選定、機能一覧、MVC構成、ディレクトリ構造、将来的な拡張方針を記述

### 2. 画面遷移図
- **ファイル**：`screen-flow.puml`
- **記述形式**：PlantUML
- **概要**：ユーザーの画面操作の流れ（タスク一覧 → タスク追加/戻る）を図示

### 3. ER図（エンティティ構造）
- **ファイル**：`er-diagram.puml`
- **記述形式**：PlantUML
- **概要**：タスクデータの構造（id、title、priority）を定義

---

## 🛠 使用ツール・前提

- **PlantUML**：画面遷移図・ER図の記述・レンダリングに使用  
  （VSCodeの「PlantUML」拡張や Webサービスで可視化可能）
- **Markdown**：設計文書の記述形式

---

## 🧩 今後の拡張アイデア（抜粋）

- タスクの期限設定・完了フラグ・メモ追加
- タグ機能による分類
- データ永続化方式の移行（IndexedDB, SQLite, バックエンド導入など）

---

## 📬 メンテナンスメモ

- 本ドキュメントはプロジェクトの構成が変わるたびに更新してください。
- 必要に応じて、設計変更履歴を残すことも推奨されます。
```
