import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // input listedHero value from Hero.ts
  @Input() listedHero : Hero;

  constructor() {}
  ngOnInit() {}
}
