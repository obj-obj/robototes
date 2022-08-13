---
title: Writing
layout: /src/layouts/Page.astro
---

Info on how to write new content or edit existing content on the site (for non-programmers).

# File Structure

The `src` folder will have most of the site content. However, images go into the `public/assets` directory. You can add or edit existing site pages in the `src/pages` folder. You will spend most of your time here.

# Front Matter

Every page needs to have a front matter block at the top of the file -- a block surrounded by three dashes (`---`). The bare minimum needed is a `title` and `layout` key. For example, here's the front matter of this page:

```md
---
title: Writing
layout: /src/layouts/Page.astro
---
```

There are also some other keys that can be in front matter:

`description:` -- A description for this page that will show up in embeds (for example, when you send a link to this page on Teams or Discord).

`sidebar: false` -- Disable the sidebar on this page.

# Markdown

All pages on this site are written using Markdown.

A good guide/reference is at https://www.markdownguide.org. The [Basic Syntax](https://www.markdownguide.org/basic-syntax) and [Extended Syntax](https://www.markdownguide.org/extended-syntax) pages are the most useful.

**Note**: The reference pages say to not use some things because of compatibility, but the version of Markdown used by this site supports all the formats listed on the reference pages, so don't worry about compatibility.

Everything on the Extended Syntax page is also supported except:

- Definition Lists
- Emoji (you'll have to insert them through using `Windows + .` instead)
- Heading IDs
- Highlights

For underlines and super/sub-scripts, you'll have to use the HTML syntax for them:

`<u>Underline</u>`: <u>Underline</u>  
`<sup>Superscript</sup>`: <sup>Superscript</sup>  
`<sub>Subscript</sub>`: <sub>Subscript</sub>

# Tailwind

This website uses [Tailwind CSS](https://tailwindcss.com). You can read [their documentation](https://tailwindcss.com/docs) if you want, but it's programmer-oriented.
