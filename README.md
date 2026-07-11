# reloading-book

Notes and documentation for F-class reloading.

The site is built with [Zensical](https://zensical.org/), the successor to
MkDocs / Material for MkDocs.

## Local development

Install dependencies and serve the site with live reload:

```sh
uv sync --group docs
uv run zensical serve
```

Build the static site into `site/`:

```sh
uv run zensical build
```
