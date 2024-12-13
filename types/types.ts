export type Article = {
  id: string;
  body: string;
  date: string;
};

export type QuillEditorProps = {
  value: string;
  setArticleBody: (val: string) => void;
};

//resolvers
export type ArticleInput = {
  input: {
    body: string;
  };
};
