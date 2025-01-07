import { Injectable } from '@nestjs/common';
import { Transcript } from '../models/transcript.model';

@Injectable()
export class TranscriptService {
  private transcripts: Transcript[] = [];

  addTranscript(transcript: Transcript): Transcript {
    this.transcripts.push(transcript);
    return transcript;
  }

  getAllTranscripts(): Transcript[] {
    return this.transcripts;
  }

  getTranscriptsByInfluencer(influencerId: string): Transcript[] {
    return this.transcripts.filter(t => t.influencerId === influencerId);
  }
}
