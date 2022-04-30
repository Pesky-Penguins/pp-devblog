# Pesky Penguins Devblog

The [Pesky Penguins devblog](https://blog.pesky-penguins.com) is where the Pesky Penguins team and
NootDAO Leadership can share updates about the project and upcoming developments.

## Creating a Blog Post
All blog posts live in the `_posts` directory, and are written in [markdown](https://www.markdownguide.org/basic-syntax/),
an easy-to-use markup language that will feel very familiar to anybody who has used Discord.

Your first step when creating a blog post will be to create a new markdown file in the `_posts`
directory. The title of this file will become the slug of the blog post (its URL). We encourage
naming posts according to the following format:

```
[year][month]-some-descriptive-title.md
```

### Fill out the post header
All posts have a header that contains metadata about it: who wrote it, when it was written, etc.
This information will be used to render the list of blog posts on the homepage:

```
---
title: "Your Title Here"
excerpt: "This text will appear as the post preview in the list of blog posts."
coverImage: '/assets/blog/2022/april.png'
date: '2022-04-17T20:00:00.000Z'
author:
  name: NFP
  picture: '/nfp.png'
  link: 'https://twitter.com/nonfungible_dev'
---
```

### Write your post!
Refer to the [markdown guide](https://www.markdownguide.org/basic-syntax/) for all the ways you can
format text. If you'd like to inline an image (separate from the cover image listed in the metadata
above) to the blog post, you can do so with the following syntax:

```md
![Image Alt Text](https://link-to-your/image.png)
```

## Running the blog locally
To run a local copy of the blog, either for previewing your post or for helping to maintain the code,
you must first set up a fork of the repo:

1. Click the "Fork" button in Github
2. Clone your fork to your local computer (green "Code" button)
3. Ensure you have [NodeJS](https://nodejs.org/en/) installed on your computer
4. Navigate to your cloned fork from the command line or your favorite IDE
5. From the command line, associate the "upstream" repository (so you can pull down other people's updates):

```
git remote add upstream git@github.com:Pesky-Penguins/pp-devblog.git
```

Having followed these steps, you have a local repository set up. Congratulations!
Take the following steps (inside the `pp-devblog/` directory) to set up the repo:

1. Fetch the latest code
```
git fetch upstream
```
2. Check out the latest branch
```
git checkout upstream main
```
3. Make sure you have the latest dependencies installed
```
npm install
```
4. Run the site!
```
npm start
```

Having taken these steps, you can now navigate to [http://localhost:3000](http://localhost:3000) to 
see the blog and preview your new posts!
