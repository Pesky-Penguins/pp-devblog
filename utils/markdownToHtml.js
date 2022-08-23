import { remark } from 'remark';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';

export default async function markdownToHtml(markdown, videos) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);

  const complete = Object.entries(videos).reduce((acc, [path, placeholder]) => {
    if (!path || path === 'undefined') {
      return acc;
    }
    return acc.replace(
      placeholder,
      `
<video autoplay loop muted playsinline>
  <source src="${path}" type="video/mp4">
</video>`
    );
  }, result.toString());
  return complete;
}
