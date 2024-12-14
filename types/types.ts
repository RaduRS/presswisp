export type QuillEditorProps = {
  value: string;
  setArticleBody: (val: string) => void;
};

//resolvers
export type ArticleInput = {
  input: {
    id: string;
    title: string;
    metaTitle: string;
    description: string;
    path: string;
    body: string;
  };
};

export type ArticleBase = {
  id: string;
  title: string;
  metaTitle: string;
  description: string;
  path: string;
  body: string;
  date: string;
};

export type CardsProps = {
  articles: ArticleBase[];
};

export type CardProps = ArticleBase & {
  imageSrc: string;
};
