import { AuthorModel } from './author.class';

export interface AllArticle {
    articles: ArticleModelResponse[];
    articlesCount: number;
}

export class PostArticle {
    article: ArticleModel;
}

export interface Article {
    author?: AuthorModel;
    body: string;
    createdAt?: string;
    description: string;
    favorited?: boolean;
    favoritesCount?: number;
    slug?: string;
    tagList: string[];
    title: string;
    updatedAt?: string;
}

export class ArticleModelResponse implements Article {
    author?: AuthorModel;
    body: string;
    createdAt?: string;
    description: string;
    favorited?: boolean;
    favoritesCount?: number;
    slug?: string;
    tagList: string[];
    title: string;
    updatedAt?: string;
    constructor(article: Article) {
        if (article) {
            this.author = article.author;
            this.body = article.body;
            this.createdAt = article.createdAt;
            this.description = article.description;
            this.favorited = article.favorited;
            this.favoritesCount = article.favoritesCount;
            this.slug = article.slug;
            this.tagList = article.tagList;
            this.title = article.title;
            this.updatedAt = article.updatedAt;
        }
    }
}

export class ArticleModel implements Article {
    article: Object;
    body: string;
    description: string;
    tagList: string[];
    title: string;
    constructor(article: Article) {
        if (article) {
            this.article = {
                body: article.body,
                description: article.description,
                tagList: article.tagList,
                title: article.title,
            }
            
        }
    }
}