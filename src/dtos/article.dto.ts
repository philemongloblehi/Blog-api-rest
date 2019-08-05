export class ArticleDto {

  private title: string;
  private body: string;

  public getTitle() {
    return this.title;
  }

  public setTitle(title: string) {
    this.title = title;
  }

  public getBody() {
    return this.body;
  }

  public setBody(body: string) {
    this.body = body;
  }
}
