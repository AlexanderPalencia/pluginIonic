import { Component } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private network: Network) {
    alert('App Lista Home');
    this.network.onDisconnect().subscribe(() => {
      alert('network was disconnected');
    });
    this.network.onConnect().subscribe(() => {
      alert('network Connected');
    });
    const networkState = this.network.type;
    alert('Conection type ' + networkState);
    alert('tipo de datos' + typeof(networkState));
    if (networkState === 'none') {
      alert('No hay internet');
    }
  }
}
