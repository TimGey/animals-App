import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  animals = [
    {
      'title': 'Vache',
      'image': 'imgs/animals/cow-icon.png',
      'desc': 'Meugle',
      'file': '/sounds/cow.mp3',
      'playing': false
    },
    {
      'title': 'Dauphin',
      'image': 'imgs/animals/dolphin-icon.png',
      'desc': 'Siffle',
      'file': '/sounds/dolphin.mp3',
      'playing': false
    },
    {
      'title': 'Grenouille',
      'image': 'imgs/animals/frog-icon.png',
      'desc': 'Coasse',
      'file': '/sounds/frog.mp3',
      'playing': false
    },
    {
      'title': 'Oiseau',
      'image': 'imgs/animals/bird-icon.png',
      'desc': 'Chante',
      'file': '/sounds/bird.mp3',
      'playing': false
    },
    {
      'title': 'Cochon',
      'image': 'imgs/animals/pig-icon.png',
      'desc': 'Grogne',
      'file': '/sounds/pig.mp3',
      'playing': false
    },
    {
      'title': 'Chien',
      'image': 'imgs/animals/puppy-icon.png',
      'desc': 'Aboie',
      'file': '/sounds/dog.mp3',
      'playing': false
    },
    {
      'title': 'Chat',
      'image': 'imgs/animals/black-cat-icon.png',
      'desc': 'Miaule',
      'file': '/sounds/cat.mp3',
      'playing': false
    },
    {
      'title': 'Cheval',
      'image': 'imgs/animals/horse-icon.png',
      'desc': 'Hennit',
      'file': '/sounds/horse.wav',
      'playing': false
    },
    {
      'title': 'Ane',
      'image': 'imgs/animals/donkey-icon.png',
      'desc': 'Brait',
      'file': '/sounds/donkey.wav',
      'playing': false
    }
  ];

  public showReorder:boolean = false;
  private currentPosition: number;
  public result: string;

  constructor(public navCtrl: NavController) {

  }
  /**
   * choix aléatoir d'un animal
   */
  pickAnimalPosition() {
    let pos;
    if (!this.currentPosition) {
      pos = Math.floor(Math.random() * this.animals.length);
    } else {
      pos = this.currentPosition;
    }

    return pos;
  }

  /**
   * Lecture d'un son
   */
  playSound() {
    //choix d'un annimal
    this.result = null;

    this.currentPosition = this.pickAnimalPosition();
    let choosenAnimal = this.animals[this.currentPosition];

    //Chargement du son

    let audio = new Audio();
    audio.src = 'assets' + choosenAnimal.file;
    audio.load();

    // lecture du son
    audio.play();
  }

  //deviner l'animall en fonction du crie
  clickAnimal(pos) {
    if (this.currentPosition) {
      if (pos != this.currentPosition) {
        this.result = " Essaie encore";
        let buzzer = new Audio();
        buzzer.src = 'assets/sounds/buzzer.mp3';
        buzzer.load();
        buzzer.play();
      } else {
        this.result = " Bravo tu as trouvé";
        let bravo = new Audio();
        bravo.src = 'assets/sounds/applause.mp3';
        bravo.load();
        bravo.play();
        this.currentPosition = null;
      }
    }
  }

}
