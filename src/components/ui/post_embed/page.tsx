import Image from 'next/image';
import Link from 'next/link';
import type { ClassAttributes, HTMLAttributes } from 'react';
import type { ExtraProps } from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styles from './post_embed.module.css';

const embedType = ['Link', 'Amazon', 'Youtube', 'Twitter', 'Callout'];
const getType = (matchStr: string | undefined) => {
  return embedType.find((type) => type === matchStr);
};
export default ({
  children,
  className,
  node,
  ...props
}: ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps) => {
  const match = /language-(\w+)/.exec(className || '');
  const embedType = getType(match?.[1]);

  const getData = (
    children: string,
  ): {
    title: string;
    host: string;
    url: string;
    image: string;
  } => {
    if (embedType === 'Callout') {
      return {
        title: '',
        host: '',
        url: '',
        image: '',
      };
    }

    const [title, host, url, image] = children.split('\n');
    return {
      title,
      host,
      url,
      image,
    };
  };

  if (embedType) {
    const { title, host, url, image } = getData(children as string);
    switch (embedType) {
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
            {image && <Image src={image} alt={title} width={140} height={96} />}
          </Link>
        );
      case 'Amazon':
        return (
          <div className={styles.link_amazon}>
            <Link href={url} target="_blank" rel="noopener noreferrer">
              {image && (
                <Image src={image} alt={title} width={200} height={200} />
              )}
            </Link>
            <Link href={url} target="_blank" rel="noopener noreferrer">
              <h3>{title}</h3>
              <p>{host}</p>
            </Link>
          </div>
        );
      case 'Callout':
        return (
          <div className={`${styles.link_callout}`}>
            <Image
              src="/images/posts/bulb.svg"
              alt={title}
              width={42}
              height={42}
            />
            <p>{children}</p>
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
      wrapLines={true}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className}>{children}</code>
  );
};
