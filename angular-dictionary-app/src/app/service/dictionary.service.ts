import { Injectable } from '@angular/core';
import { IWord } from '../model/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private words: IWord[] = [
    {key: 'hello', meaning: 'xin chào'},
    {key: 'provide', meaning: 'cung cấp'},
    {key: 'goodbye', meaning: 'tạm biệt'},
    {key: 'snow', meaning: 'tạm biệt'},
    {key: 'efficient', meaning: 'hiệu quả'}
  ];

  constructor() { }

  // @ts-ignore
  search(word: string): string {
    if (!word) {
      return '';
    }
    const w = this.words.find(item => item.key === word.toLocaleLowerCase());
    if (w) {
      return w.meaning;
    }
    return 'Not Found';
  }
}
