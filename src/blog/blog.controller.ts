import { Body, Controller, Delete, Get, HttpException, HttpStatus, Logger, Param, Post, Put } from '@nestjs/common';
import { BlogService } from './blog.service';
import { ArticleDto } from '../dtos/article.dto';

@Controller('blog')
export class BlogController {

  constructor(
    private readonly blogService: BlogService,
  ) {}

  @Get()
  getAll() {
    Logger.log('Get all articles', 'BlogController');
    return this.blogService.findAllArticles();
  }

  @Get(':articleId')
  async getOne(@Param('articleId') articleId) {
    Logger.log('Get one article', 'BlogController');
    const article = await this.blogService.findOneArticles(articleId);
    if (article) {
      return article;
    }
    throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
  }

  @Post()
  async create(@Body() articleDto: ArticleDto) {
    Logger.log('Create an article', 'BlogController');
    const article = await this.blogService.saveArticles(articleDto);
    if (article) {
      return article;
    }
    throw new HttpException('Not created', HttpStatus.NOT_MODIFIED);
  }

  @Put(':articleId')
  async update(@Param('articleId') articleId, @Body() articleDto) {
    Logger.log('Updated article', 'BlogController');
    const article = await this.blogService.updateArticles(articleId, articleDto);
    if (article) {
      return article;
    }
    throw new HttpException('Article not updated', HttpStatus.NOT_MODIFIED);
  }

  @Delete(':articleId')
  async remove(@Param('articleId') articleId) {
    Logger.log('Deleted article', 'BlogController');
    const article = await this.blogService.removeArticles(articleId);
    if (article) {
      return article;
    }
    throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
  }
}
