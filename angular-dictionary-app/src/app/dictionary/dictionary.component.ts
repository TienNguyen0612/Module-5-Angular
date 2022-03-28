import { Component, OnInit } from '@angular/core';
import {IWord} from "../model/iword";
import { DictionaryService } from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  word!: IWord;

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
  }

  search(word: string): void {
    const meaning = this.dictionaryService.search(word);
    this.word = {
      key: word,
      meaning: meaning
    };
  }
}
