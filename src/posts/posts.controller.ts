import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { Post as PostInterface } from './interfaces/post.interface';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Post()
    async create(@Body() createPostObject: CreatePostDto) {
        let createdObject = await this.postsService.create(createPostObject);

        return createdObject
    }

    @Get()
    async findAll() {
        let results = await this.postsService.findAll();

        return { results, total: results.length }
    }
}