import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { TranscriptService } from '../services/transcript.service';
import { Transcript } from '../models/transcript.model';

@Controller('transcripts')
export class TranscriptController {
  constructor(private readonly transcriptService: TranscriptService) {}

  @Post()
  addTranscript(@Body() transcript: Transcript) {
    return this.transcriptService.addTranscript(transcript);
  }

  @Get()
  getAllTranscripts() {
    return this.transcriptService.getAllTranscripts();
  }

  @Get(':influencerId')
  getTranscriptsByInfluencer(@Param('influencerId') influencerId: string) {
    return this.transcriptService.getTranscriptsByInfluencer(influencerId);
  }
}
