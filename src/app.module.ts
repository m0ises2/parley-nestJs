import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { DB_NAME, DB_PORT } from './constants';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(`mongodb://localhost:${DB_PORT}/${DB_NAME}`, { useNewUrlParser: true }), PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
