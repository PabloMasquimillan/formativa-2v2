import { Component } from '@angular/core';
import {MapInfoWindow, MapMarker} from '@angular/google-maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_producto-template';


  center = {lat: 24, lng: 12};
  zoom = 15;
  display?: google.maps.LatLngLiteral;

}
