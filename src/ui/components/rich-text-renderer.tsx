import rehypeParse from "rehype-parse";
import rehypeRaw from "rehype-raw";
import { unified } from "unified";
import rehypeStringify from "rehype-stringify";
import rehypePrism from "rehype-prism";

import "prismjs/themes/prism-okaidia.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import "prismjs/components/prism-go";
import "prismjs/components/prism-java";
import "prismjs/components/prism-json";
import "prismjs/components/prism-sql";

type Props = {
  content: string;
};

const RichTextRenderer: React.FC<Props> = async ({ content }) => {
  const result = await unified()
    .use(rehypeParse)
    .use(rehypeRaw)
    .use(rehypePrism, { plugins: ["line-numbers"] })
    .use(rehypeStringify)
    .process(content);

  return (
    <article
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: result.toString() }}
      />
  );
};

export default RichTextRenderer;
