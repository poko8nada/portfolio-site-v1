import Markdown from 'react-markdown';
import 'github-markdown-css';
import styles from './post_body.module.css';


export default ( { content }: { content: string }) => {
  return (
     <article className={`${styles.article_container} markdown-body`}>
        <Markdown>{content}</Markdown>
      </article>
  );
}