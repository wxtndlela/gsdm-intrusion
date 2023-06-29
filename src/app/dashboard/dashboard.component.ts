import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs/operators';
import * as map_style from '../../providers/map.styles';
import { AuthService } from '../../services/auth.service';
import { Billboards } from '../../services/db';
import { BillboardModal } from '../../providers';
import { BookingComponent } from '../shared/booking/booking.component';
import { PopoverController, ModalController, ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {

  map: google.maps.Map;
  Billboard: any;
  Markers: any[] = [];
  date: Date = new Date();


  visitSaleChartData = [{
    label: 'CHN',
    data: [20, 40, 15, 35, 25, 50, 30, 20],
    borderWidth: 1,
    fill: false,
  },
  {
    label: 'USA',
    data: [40, 30, 20, 10, 50, 15, 35, 40],
    borderWidth: 1,
    fill: false,
  },
  {
    label: 'UK',
    data: [70, 10, 30, 40, 25, 50, 15, 30],
    borderWidth: 1,
    fill: false,
  }];

  visitSaleChartLabels = ["2013", "2014", "2014", "2015", "2016", "2017"];

  visitSaleChartOptions = {
    responsive: true,
    legend: false,
    scales: {
      yAxes: [{
        ticks: {
          display: false,
          min: 0,
          stepSize: 20,
          max: 80
        },
        gridLines: {
          drawBorder: false,
          color: 'rgba(235,237,242,1)',
          zeroLineColor: 'rgba(235,237,242,1)'
        }
      }],
      xAxes: [{
        gridLines: {
          display: false,
          drawBorder: false,
          color: 'rgba(0,0,0,1)',
          zeroLineColor: 'rgba(235,237,242,1)'
        },
        ticks: {
          padding: 20,
          fontColor: "#9c9fa6",
          autoSkip: true,
        },
        categoryPercentage: 0.4,
        barPercentage: 0.4
      }]
    }
  };

  visitSaleChartColors = [
    {
      backgroundColor: [
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
      ],
      borderColor: [
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
      ]
    },
    {
      backgroundColor: [
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
      ],
      borderColor: [
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
      ]
    },
    {
      backgroundColor: [
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
      ],
      borderColor: [
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
      ]
    },
  ];

  trafficChartData = [
    {
      data: [30, 30, 40],
    }
  ];

  trafficChartLabels = ["Search Engines", "Direct Click", "Bookmarks Click"];

  trafficChartOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    legend: false,
  };

  trafficChartColors = [
    {
      backgroundColor: [
        'rgba(177, 148, 250, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(132, 217, 210, 1)'
      ],
      borderColor: [
        'rgba(177, 148, 250, .2)',
        'rgba(254, 112, 150, .2)',
        'rgba(132, 217, 210, .2)'
      ]
    }
  ];
  map_bounds: google.maps.LatLngBounds;
  infowindow: any;

  constructor(
    private authService: AuthService,
    private db: Billboards,
    private modalController: ModalController,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
    this.load_map();
    this.db.Billboards.subscribe(val => {
      this.Billboard = val;
      // console.log('Billboards', this.Billboard);
      this.plot_markers();
    })
  }

  toggleProBanner(event) {
    //console.log("123");
    event.preventDefault();
    document.querySelector('body').classList.toggle('removeProbanner');
  }

  /**
   * load_map
   */
  public async load_map() {

    this.map = new google.maps.Map(document.getElementById('map_canvas_dashboard'), {
      center: { lat: -28.61081, lng: 26.0594 },
      zoom: 6,
      zoomControl: true,
      mapTypeControl: false,
      fullscreenControl: true,
      streetViewControl: true,
      scrollwheel: false,

      streetViewControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM
      },

      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_BOTTOM
      },

      fullscreenControlOptions: {
        position: google.maps.ControlPosition.BOTTOM_RIGHT
      }
    });

    this.set_map_styles();


    //DarkMap by default
    this.map.setMapTypeId('DarkMap');



  }

  /**
 * set_styles
 */
  public set_map_styles() {
    //Associate the styled map with the MapTypeId and set it to display.
    this.map.mapTypes.set("RetroMap", map_style.RetroMapStyle);
    this.map.mapTypes.set("DarkMap", map_style.DarkMapStyle);
    this.map.mapTypes.set("2DMap", map_style.StandardMapStyle);
  }

  plot_markers() {

    this.clear_map()

    for (let index = 0; index < this.Billboard.length; index++) {
      const b: BillboardModal = this.Billboard[index];
      let location = {
        lat: Number(b.latitude),
        lng: Number(b.longitude)
      }

      this.add_marker(b);
    }
  }

  clear_map() {
    if (this.Markers && this.Markers.length > 0) {
      for (let index = 0; index < this.Markers.length; index++) {
        let marker: google.maps.Marker = this.Markers[index];
        marker.setMap(null);
      }
    }
  }

  add_marker(data: BillboardModal) {

    let location = {
      lat: Number(data.latitude), lng: Number(data.longitude)
    }

    var icon;
    icon = {
      url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      strokeColor: "white"
    }

    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      icon: icon
    });


    marker.addListener("click", () => {
      this.open_info_windows(marker, data);
    });

    this.Markers.push(marker);
  }

  /**
  * open_info_windows
  */
  public open_info_windows(marker, data: BillboardModal) {
    if (this.infowindow) {
      this.infowindow.close();
    }

    const contentString =
      `
      <div>
  <div >
    <div>
      <img
        src='${data.photo_url}'
        class="mb-2 mw-100 w-100 rounded" alt="image">
    </div>
    <div class="table-responsive">
      <table class="table">

        <tbody>
          <tr>
            <td>Location</td>
            <td>${data.name}</td>
          </tr>
          <tr>
            <td>Dimensions</td>
            <td>${data.screen_width} x ${data.screen_height}</td>
          </tr>
          <tr>
            <td>Impressions</td>
            <td>0 </td>
          </tr>
          <tr>
            <td>Rate</td>
            <td>R${data.peak_rate} pm</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
     `;

    this.infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    this.infowindow.open(this.map, marker);

  }

  async book_billboard(data) {
    const modal = await this.modalController.create({
      component: BookingComponent,
      cssClass: 'modal-full',
      componentProps: {
        title: 'Booking',
        data: data
      }
    })

    await modal.present();
  }



}
