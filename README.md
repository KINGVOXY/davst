# Davst
卒業研究の実験結果が見れるアプリ

- deno 1.16.1
- typescript 4.4.2

## 構成(tree)
```sh
.
├── config
│   ├── auth.env
│   └── auth.example.env
├── deps.ts
├── funcs
│   └── textReader.ts
├── log
│   └── request.log
├── README.md
├── server.ts
└── views
    ├── assets
    │   ├── images
    │   │   └── favicon.ico
    │   ├── scripts
    │   └── styles
    │       ├── basic.css
    │       ├── github-markdown-dark.css
    │       └── header.css
    ├── home
    │   └── index.html
    ├── result
    │   └── [articles].html
    └── templates
        ├── footer.html
        └── header.html
```