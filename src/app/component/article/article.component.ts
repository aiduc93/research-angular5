import { Component, OnInit } from '@angular/core';
import { ArticleModelResponse, PostArticle, ArticleModel } from '../../models/articles.class';
import { UltiService } from '../../services/ulti.service';
import { ArticleService } from '../../services/article.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: ArticleModelResponse[] = [];
  title: string;
  body: string;
  description: string;
  tagList: string;

  constructor(
    public articleService: ArticleService,
    public service: UltiService
  ) { }

  ngOnInit() {
    this.getAllArticle();
   
  }
  getAllArticle() {
        //Solution 1
    // this.articleService.getAllArticles1().subscribe(data => {
    //   this.articles = data.articles;
    // }, error => {
    //   this.service.handlError(error);
    // })

    //Solution 2
    this.articleService.getAllArticles().subscribe(data => {
      this.articles = data;
    }, error => {
      this.service.handlError(error);
    })
  }

  handlePostArticle() {
    let article = new ArticleModel({
      body: this.body,
      description: this.description,
      tagList: this.tagList.split(','),
      title: this.title
    });
    console.log(article);
    this.articleService.postArticle(article).subscribe(data => {
      this.getAllArticle();
    })
  }
} 
