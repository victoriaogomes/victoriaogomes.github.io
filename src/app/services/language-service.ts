import { DOCUMENT, inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly storageKey = 'language';
  private readonly document = inject(DOCUMENT);

  readonly supportedLanguages = [
    {
      name: "🇺🇸 English",
      value: "en"
    },
    {
      name: "🇧🇷 Português",
      value: "pt-BR"
    }
  ];

  constructor(private translate: TranslateService) {
    const currentLang = this.translate.getCurrentLang();

    if (currentLang) {
      this.document.documentElement.lang = currentLang;
    }

    this.translate.onLangChange.subscribe(({ lang }) => {
      this.document.documentElement.lang = lang;
    });
  }

  init() {
    const savedLanguage: string | null = localStorage.getItem(this.storageKey);

    const browserLanguage: string = navigator.language;

    const language: string =
      savedLanguage ??
      (this.supportedLanguages.map(language => language.value).includes(browserLanguage)
        ? browserLanguage
        : 'en');

    this.translate.use(language);
  }

  setLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem(this.storageKey, language);
  }

  get currentLanguage(): string {
    return this.translate.getCurrentLang();
  }
}
