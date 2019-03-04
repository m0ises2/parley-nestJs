import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Post } from './interfaces/post.interface';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PostsService {
    constructor(
        @InjectModel('Post')
        private readonly postModel: Model<Post>,
    ) { }

    async create(createPostDto: CreatePostDto): Promise<Post> {
        const createdPost = new this.postModel(createPostDto);
        return await createdPost.save();
    }

    async findAll(): Promise<Post[]> {
        return await this.postModel.find().exec();
    }
}
