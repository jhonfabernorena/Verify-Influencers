import { Module } from '@nestjs/common';
import { TranscriptService } from './services/transcript.service';
import { TranscriptController } from './controllers/transcript.controller';

@Module({
  controllers: [TranscriptController],
  providers: [TranscriptService],
  exports: [TranscriptService],
})
export class TranscriptModule {}
