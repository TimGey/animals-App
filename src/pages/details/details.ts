import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  public animal;
  public note;

  constructor(public events: Events, public navCtrl: NavController, public navParams: NavParams) {
    this.animal = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  lisenThisAnimal() {
    let sound = new Audio;
    sound.src = 'assets' + this.animal.file;
    sound.load();
    sound.play();
  }
/**
 * publication evenement
 */
  ionViewDidLeave() {
    this.events.publish('event.data.add', this.note);
  }

}
