import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { InfluencersModule } from './influencers/influencers.module';
import { ClaimsModule } from './claims/claims.module';
import { VerificationModule } from './verification/verification.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { TranscriptModule } from './transcripts/transcript.module';
import { ReportsModule } from './reports/reports.module';
import { UtilsModule } from './utils/utils.module';
import { IntegrationModule } from './integrations/integrations.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    InfluencersModule,
    ClaimsModule,
    VerificationModule,
    ConfigurationModule,
    AnalyticsModule,
    TranscriptModule,
    IntegrationModule,
    ReportsModule,
    UtilsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
