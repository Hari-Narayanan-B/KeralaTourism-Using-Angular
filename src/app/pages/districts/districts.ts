import { Component } from '@angular/core';
import { Cards } from "./cards/cards";

@Component({
  selector: 'app-districts',
  imports: [Cards],
  templateUrl: './districts.html',
  styleUrl: './districts.css'
})
export class Districts {
districts = [
  {
    id: 1,
    title: "Thiruvananthapuram",
    description: "Famous for Padmanabhaswamy Temple and Kovalam Beach.",
    imgLink: "https://4.bp.blogspot.com/-inD0Htg40sM/WEfdIX9tmBI/AAAAAAAAAgg/MmGYfnKiPL0x16YkcBOYSLUhC4v1dkZkgCLcB/s1600/padmanabha-temple.jpg"
  },
  {
    id: 2,
    title: "Kollam",
    description: "Known for Ashtamudi Lake and Jatayu Earth's Center.",
    imgLink: "https://en-media.thebetterindia.com/uploads/2017/11/Jatayu-3-1152x603.jpg"
  },
  {
    id: 3,
    title: "Pathanamthitta",
    description: "Home to Sabarimala Temple and Aranmula Boat Race.",
    imgLink: "https://www.traveltourguru.in/wp-content/uploads/2016/12/Kerala-Snake-Boat-Race.jpg"
  },
  {
    id: 4,
    title: "Alappuzha",
    description: "Famous for backwaters and houseboats.",
    imgLink: "https://cdn.getyourguide.com/img/tour/56c711d2f41a9.jpeg/148.jpg"
  },
  {
    id: 5,
    title: "Idukki",
    description: "Idukki the landlocked hill district in Western Ghat is a place blessed with beauty and tranquility",
    imgLink: "https://keralatourism.travel/images/destinations/places-to-visit/idukki/munnar-idukki-kerala-tourism-entry-fee-timings-holidays-reviews-small.jpg"
  },
  {
    id: 6,
    title: "Kottayam",
    description: "Known for Vembanad Lake and Kumarakom Bird Sanctuary.",
    imgLink: "https://www.mistywindvalley.in/wp-content/uploads/2018/03/Illikka-kallu-Hills-1024x768.jpg"
  },
  {
    id: 7,
    title: "Ernakulam",
    description: "Known for Kochi city and Fort Kochi.",
    imgLink: "https://yometro.com/images/places/fort-kochi.jpg"
  },
  {
    id: 8,
    title: "Thrissur",
    description: "Famous for Thrissur Pooram and Vadakkunnathan Temple.",
    imgLink: "https://www.ekeralatourism.net/wp-content/uploads/2018/01/Vadakkunnathan-Temple-at-Thrissur.jpg"
  },
  {
    id: 9,
    title: "Palakkad",
    description: "Known for Palakkad Fort and Silent Valley National Park.",
    imgLink: "https://www.lifeberrys.com/img/article/palakkad-fort-1710386133-lb.jpg"
  },
  {
    id: 10,
    title: "Malappuram",
    description: "Famous for Kottakkunnu and Nilambur Teak Museum",
    imgLink: "https://img.onmanorama.com/content/dam/mm/en/travel/getting-around-kerala/destinations/digital-asset/malappuram/images/teakmuseum/kfri-park.jpg"
  },
  {
    id: 11,
    title: "Wayanad",
    description: "Famous for Edakkal Caves and Banasura Sagar Dam.",
    imgLink: "https://tse3.mm.bing.net/th/id/OIP.HHISOb27KBPdXLQfK7y93AHaE8?pid=Api&P=0&h=180"
  },
  {
    id: 12,
    title: "Kannur",
    description: "Known for St. Angelo Fort and Muzhappilangad Drive-in Beach.",
    imgLink: "http://northkeralatourpackages.com/wp-content/uploads/2017/08/slider-01.jpg"
  },
  {
    id: 13,
    title: "Kasaragod",
    description: "Famous for Bekal Fort and Ranipuram hills.",
    imgLink: "https://wayfarerscorner.com/wp-content/uploads/2020/10/Webp.net-resizeimage-9-scaled.jpg"
  },
  {
    id: 14,
    title: "Kozhikode",
    description: "Known for Kappad Beach and Mananchira Square.",
    imgLink: "https://www.dtpckozhikode.com/uploads/picture_gallery/gallery_images/kappad-beach-park-kozhikodu-20230602163015499265.webp"
  }
];


}
