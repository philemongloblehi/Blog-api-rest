import { Body, Controller, Delete, Get, Logger, Param, Post, Put } from '@nestjs/common';

@Controller('blog')
export class BlogController {

  @Get()
  getAll() {
    Logger.log('Get all articles', 'BlogController');
    return 'Get all articles';
  }

  @Get(':articleId')
  getOne(@Param('articleId') articleId) {
    Logger.log('Get one article', 'BlogController');
    return 'Get one article id ' + articleId;
  }

  @Post()
  create(@Body() articleDto) {
    Logger.log('Create an article', 'BlogController');
    return 'Created article';
  }

  @Put(':articleId')
  update(@Param('articleId') articleId, @Body() articleDto) {
    Logger.log('Updated article', 'BlogController');
    return 'Updated article';
  }

  @Delete(':articleId')
  remove(@Param('articleId') articleId) {
    Logger.log('Deleted article', 'BlogController');
    return 'Deleted article id ' + articleId;
  }
}
