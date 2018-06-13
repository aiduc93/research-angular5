import { Injectable } from '@angular/core';
import { ArticleModelResponse, AllArticle, ArticleModel, PostArticle } from '../models/articles.class';
import { HttpClient } from '@angular/common/http';
import { UltiService } from './ulti.service';
import { Observable } from 'rxjs';
import { map }  from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  APIGET: string = 'https://conduit.productionready.io/api/articles?limit=10&offset=0';
  APIPOST: string = 'https://conduit.productionready.io/api/articles';
  constructor(
    public http: HttpClient,
    public service: UltiService
  ) { }

  getAllArticles(): Observable<ArticleModelResponse[]> {
    return this.service.get(this.APIGET).pipe( map( data=> {
      return data['articles'];
    } ));
  }

  getAllArticlesUsingInterface(): Observable<AllArticle> {
    return this.service.get(this.APIGET);
  }

  postArticle(params): Observable<PostArticle> {
    return this.service.post(this.APIPOST, params);
  }
}
