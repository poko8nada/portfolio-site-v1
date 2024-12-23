import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import type { ClassAttributes, HTMLAttributes } from 'react';
import type { ExtraProps } from 'react-markdown';
import Link from 'next/link';
import styles from './post_embed.module.css';

const embedType = ['Link', 'Amazon', 'Youtube', 'Twitter'];
const getType = (matchStr: string | undefined) => {
  return embedType.find((type) => type === matchStr);
};
const getData = (children: string) => {
  const [title, host, url, image] = children.split('\n');
  return {
    title,
    host,
    url,
    image,
  };
};
export default ({
  children,
  className,
  node,
  ...props
}: ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps) => {
  const match = /language-(\w+)/.exec(className || '');

  if (getType(match?.[1])) {
    const { title, host, url, image } = getData(children as string);
    switch (getType(match?.[1])) {
      case 'Link':
        return (
          <Link
            className={styles.link_card}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h3>{title}</h3>
              <p>{host}</p>
            </div>
            {image && <img src={image} alt={title} />}
          </Link>
        );
      case 'Amazon':
        return (
          <div className={styles.link_amazon}>
            <Link href={url} target="_blank" rel="noopener noreferrer">
              {image && <img src={image} alt={title} />}
            </Link>
            <Link href={url} target="_blank" rel="noopener noreferrer">
              <h3>{title}</h3>
              <p>{host}</p>
            </Link>
          </div>
        );
    }
  }
  return match ? (
    <SyntaxHighlighter
      style={a11yDark}
      language={match[1]}
      PreTag="div"
      showLineNumbers={true}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className}>{children}</code>
  );
};
