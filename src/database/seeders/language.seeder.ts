
import { Injectable } from '@nestjs/common';
import { Seeder } from 'nestjs-seeder';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Language } from '../../modules/common/entities/language.entity';

@Injectable()
export class LanguageSeeder implements Seeder {
  constructor(
    @InjectRepository(Language)
    private readonly languageRepository: Repository<Language>,
  ) {}

  async seed(): Promise<any> {
    const languages = [
      { title: 'English'},
      { title: 'Spanish'},
      { title: 'French'},
      { title: 'German'},
      { title: 'Urdu'},
      { title: 'Hindi'},
      { title: 'chinese'},
      { title: 'Russian'},
      { title: 'Tamil'},
    ];

    const newLanguages = [];
    for (const language of languages) {
      const exists = await this.languageRepository.findOneBy({ title: language.title });
      if (!exists) newLanguages.push(language);
    }

    return newLanguages.length ? this.languageRepository.save(newLanguages) : [];
  }

  async drop(): Promise<any> {
    return this.languageRepository.clear();
  }
}
