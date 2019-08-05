import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('articles')
export class ArticleEntity {
  @PrimaryGeneratedColumn({name: 'article_id'})
  private id: number;

  @Column()
  private title: string;

  @Column({type: 'text', name: 'corps'})
  private body: string;

  @CreateDateColumn()
  private createdAt: Date;

  @Column({type: 'boolean', default: true})
  private published: boolean;

  @Column({type: 'int', default: 0})
  private likes: number;

  public getId() {
    return this.id;
  }

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

  public getPublished() {
    return this.published;
  }

  public setPublished(published: boolean) {
    this.published = published;
  }
}
