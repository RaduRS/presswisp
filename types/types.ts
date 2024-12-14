export type QuillEditorProps = {
  value: string;
  setArticleBody: (val: string) => void;
};

//resolvers
export type ArticleInput = {
  input: {
    title: string;
    description: string;
    path: string;
    body: string;
  };
};

export type ArticleBase = {
  id: string;
  title: string;
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
