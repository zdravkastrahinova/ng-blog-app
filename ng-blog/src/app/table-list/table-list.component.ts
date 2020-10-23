import { Component, OnInit } from '@angular/core';
import {Post} from '../post.interface';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {

  posts: Post[];

  constructor() { }

  ngOnInit(): void {
    this.posts = [
      {
        id: 1,
        title: 'Great Pyramid of Giza, Egypt',
        content: 'The Great Pyramid, located at Giza on the west bank of the Nile River north of Cairo in Egypt, is the only wonder of the ancient world that has survived to the present day. It is part of a group of three pyramids–Khufu (Cheops), Khafra (Chephren) and Menkaura (Mycerimus)–that were built between 2700 B.C. and 2500 B.C. as royal tombs.',
        author: 'Nick Brundle',
        publishDate: 'AUG 16, 2019'
      },
      {
        id: 2,
        title: 'Hanging Gardens of Babylon',
        content: 'According to ancient Greek poets, the Hanging Gardens of Babylon were built near the Euphrates River in modern-day Iraq by the Babylonian king Nebuchadnezzar II around 600 B.C. The gardens were said to have been planted as high as 75 feet in the air on a huge square brick terrace that was laid out in steps like a theater.',
        author: 'Nick Brundle',
        publishDate: 'AUG 16, 2019'
      },
      {
        id: 3,
        title: 'Statue of Zeus at Olympia',
        content: 'The famed statue of Zeus, the king of the gods in Greek Mythology, was crafted by the Athenian sculptor Phidias and completed and placed in the temple of Zeus at Olympia, site of the ancient Olympics, around the mid-fifth century B.C. The statue depicted the god of thunder seated bare-chested at a wooden throne.',
        author: 'Hulton Getty',
        publishDate: 'AUG 16, 2019'
      },
      {
        id: 4,
        title: 'Temple of Artemis at Ephesus',
        content: 'There was actually more than one Temple of Artemis: A series of several altars and temples was destroyed and then restored on the same site in Ephesus, a Greek port city on the west coast of modern-day Turkey. The most fabulous of these structures were two marble temples built around 550 B.C. and 350 B.C., respectively.',
        author: 'Hulton Getty',
        publishDate: 'AUG 16, 2019'
      },
      {
        id: 5,
        title: 'Mausoleum at Halicarnassus',
        content: 'Located in what is now southeastern Turkey, the Mausoleum at Halicarnassus was a tomb built by Artemisia for her husband, Mausolus, the king of Carnia in Asia Minor, after his death in 353 B.C. Mausolus was also Artemisia’s brother, and, according to legend, she was so grief-stricken at his passing that she mixed his ashes with water and drank them in addition to ordering the mausoleum’s construction.',
        author: 'Hulton Getty',
        publishDate: 'AUG 16, 2019'
      },
      {
        id: 6,
        title: 'Colossus of Rhodes',
        content: 'The Colossus of Rhodes was an enormous bronze sculpture of the sun god Helios built by the Rhodians over 12 years in the third century B.C. The city was the target of a Macedonian siege early in the fourth century B.C. and, according to legend, the Rhodians sold the tools and equipment left behind by the Macedonians to pay for the Colossus.',
        author: 'Nick Brundle',
        publishDate: 'AUG 16, 2019'
      },
      {
        id: 7,
        title: 'Lighthouse of Alexandria',
        content: 'The Lighthouse of Alexandria was located on a small island called Pharos near the city of Alexandria. Designed by the Greek architect Sostratos and completed around 270 B.C. during the reign of Ptolemy II, the lighthouse helped to guide Nile River ships in and out of the city’s busy harbor.',
        author: 'Nick Brundle',
        publishDate: 'AUG 16, 2019'
      }
    ];
  }

  onPostSubmit(post: Post): void {
    const newPost = {
      ...post,
      id: this.posts.length + 1,
      author: 'Z. Strahinova',
      publishDate: 'Oct 23, 2020'
    };

    this.posts.push(newPost);
  }
}
