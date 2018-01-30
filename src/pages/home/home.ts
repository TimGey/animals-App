import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

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

  public showReorder: boolean = false;
  private currentAnimal;
  public result: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }
  /**
   * choix aléatoir d'un animal
   */
  pickAnimal() {
    let pos;
    let animal;
    if (!this.currentAnimal) {
      pos = Math.floor(Math.random() * this.animals.length);
      animal = this.animals[pos];
    } else {
      animal = this.currentAnimal;
    }

    return animal;
  }

  /**
   * Lecture d'un son
   */
  playSound() {
    //choix d'un annimal
    this.result = null;

    this.currentAnimal = this.pickAnimal();


    //Chargement du son

    let audio = new Audio();
    audio.src = 'assets' + this.currentAnimal.file;
    audio.load();

    // lecture du son
    audio.play();
  }

  //deviner l'animall en fonction du crie
  clickAnimal(animalName) {

    if (this.currentAnimal) {

      if (animalName != this.currentAnimal.title) {
        this.result = " Essaie encore";
        this.toastCtrl.create({
          message: " Essaie encore",
          duration: 2000,
          position: 'middle'
        }).present();

        let buzzer = new Audio();
        buzzer.src = 'assets/sounds/buzzer.mp3';
        buzzer.load();
        buzzer.play();

      } else {
        this.result = " Bravo tu as trouvé";

        this.toastCtrl.create({
          message: " Bravo tu as trouvé",
          duration: 2000,
          position: 'middle'
        }).present();

        let bravo = new Audio();
        bravo.src = 'assets/sounds/applause.mp3';
        bravo.load();
        bravo.play();
        this.currentAnimal = null;
      }
    }
  }
}

