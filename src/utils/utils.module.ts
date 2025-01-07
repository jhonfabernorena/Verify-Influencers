import { Module } from '@nestjs/common';
import { FormatterHelper } from './helpers/formatter.helper';
import { DateHelper } from './helpers/data.helper';

@Module({
  providers: [FormatterHelper, DateHelper],
  exports: [FormatterHelper, DateHelper],
})
export class UtilsModule {}
