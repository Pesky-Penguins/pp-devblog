import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:flex justify-between items-center my-2">
        <a href={author.link || ''} target="_blank" rel="noreferrer">
          <Avatar name={author.name} picture={author.picture} />
        </a>
        <div className="text-lg font-bold">
          <DateFormatter dateString={date} />
        </div>
      </div>
      {coverImage && (
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} src={coverImage} height={620} width={1240} />
        </div>
      )}
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <a href={author.link || ''} target="_blank" rel="noreferrer">
            <Avatar name={author.name} picture={author.picture} />
          </a>
        </div>
        <div className="mb-6 md:hidden text-lg font-mono">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
