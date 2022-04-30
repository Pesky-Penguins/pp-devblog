import { remark } from 'remark';
import html from 'remark-html';

export default async function markdownToHtml(markdown, videos) {
  const result = await remark().use(html, true).process(markdown);
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
