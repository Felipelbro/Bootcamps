import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootcampsController } from './controllers/bootcamps.controller';
import { ReviewsController } from './controllers/reviews.controller';

@Module({
  imports: [],
  controllers: [AppController, BootcampsController, ReviewsController],
  providers: [AppService],
})
export class AppModule {}
