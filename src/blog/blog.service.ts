import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ArticleEntity } from './entities/article.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleDto } from '../dtos/article.dto';

@Injectable()
export class BlogService {

  constructor(
    @InjectRepository(ArticleEntity)
    private  readonly articleRepository: Repository<ArticleEntity>,
  ) {}

  findAllArticles() {
    return this.articleRepository.find();
  }

  async findOneArticles(articleId: number) {
    const article = await this.articleRepository.findOne(articleId);
    if (article) {
      return article;
    }
    return null;
  }

  async saveArticles(articleDto: ArticleDto) {
    return await this.articleRepository.save(articleDto);
  }

  async updateArticles(articleId: number, articleDto: ArticleDto) {
    const article = await this.articleRepository.findOne(articleId);
    if (!article) {
      return null;
    }
    await this.articleRepository.update(articleId, articleDto);
    return await this.articleRepository.findOne(articleId);
  }

  async removeArticles(articleId: number) {
    const article = await this.articleRepository.findOne(articleId);
    if (!article) {
      return null;
    }
    await this.articleRepository.remove(article);
    return article;
  }
}
