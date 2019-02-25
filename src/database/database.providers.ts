import * as mongoose from 'mongoose';
import { DB_PROVIDER, DB_NAME, DB_PORT } from '../constants';

export const databaseProviders = [
    {
        provide: DB_PROVIDER,
        useFactory: async () => {
            (mongoose as any).Promise = global.Promise;
            return await mongoose.connect(`mongodb://localhost:${DB_PORT}/${DB_NAME}`, { useNewUrlParser: true });
        },
    },
];