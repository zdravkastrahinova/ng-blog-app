import { Component, OnInit } from '@angular/core';
import {Post} from '../post.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  posts: Post[];

  constructor() { }

  ngOnInit(): void {
    this.posts = [
      {
        id: 1,
        title: 'Great Wall of China',
        content: 'Great might be an understatement. One of the world’s largest building-construction projects, the Great Wall of China is widely thought to be about 5,500 miles (8,850 km) long; a disputed Chinese study, however, claims the length is 13,170 miles (21,200 km). Work began in the 7th century BCE and continued for two millennia. ',
        author: 'Amy Tikkanen',
        publishDate: 'Nov 01, 2017'
      },
      {
        id: 2,
        title: 'Chichén Itzá',
        content: 'Chichén Itzá is a Mayan city on the Yucatán Peninsula in Mexico, which flourished in the 9th and 10th centuries CE. Under the Mayan tribe Itzá—who were strongly influenced by the Toltecs—a number of important monuments and temples were built. Among the most notable is the stepped pyramid El Castillo (“The Castle”), which rises 79 feet (24 meters) above the Main Plaza.',
        author: 'Amy Tikkanen',
        publishDate: 'Nov 01, 2017'
      },
      {
        id: 3,
        title: 'Petra',
        content: 'The ancient city of Petra, Jordan, is located in a remote valley, nestled among sandstone mountains and cliffs. It was purported to be one of the places where Moses struck a rock and water gushed forth. Later the Nabataeans, an Arab tribe, made it their capital, and during this time it flourished, becoming an important trade center, especially for spices.',
        author: 'Amy Tikkanen',
        publishDate: 'Nov 01, 2017'
      },
      {
        id: 4,
        title: 'Machu Picchu',
        content: 'This Incan site near Cuzco, Peru, was “discovered” in 1911 by Hiram Bingham, who believed it was Vilcabamba, a secret Incan stronghold used during the 16th-century rebellion against Spanish rule. Although that claim was later disproved, the purpose of Machu Picchu has confounded scholars. ',
        author: 'Amy Tikkanen',
        publishDate: 'Nov 01, 2017'
      },
      {
        id: 5,
        title: 'Christ the Redeemer',
        content: 'Christ the Redeemer, a colossal statue of Jesus, stands atop Mount Corcovado in Rio de Janeiro. Its origins date to just after World War I, when some Brazilians feared a “tide of godlessness.” They proposed a statue, which was ultimately designed by Heitor da Silva Costa, Carlos Oswald, and Paul Landowski.',
        author: 'Amy Tikkanen',
        publishDate: 'Nov 01, 2017'
      },
      {
        id: 6,
        title: 'Colosseum',
        content: 'The Colosseum in Rome was built in the first century by order of the Emperor Vespasian. A feat of engineering, the amphitheater measures 620 by 513 feet (189 by 156 meters) and features a complex system of vaults. It was capable of holding 50,000 spectators, who watched a variety of events.',
        author: 'Amy Tikkanen',
        publishDate: 'Nov 01, 2017'
      },
      {
        id: 7,
        title: 'Taj Mahal',
        content: 'This mausoleum complex in Agra, India, is regarded as one of the world’s most iconic monuments and is perhaps the finest example of Mughal architecture. It was built by Emperor Shah Jahān (reigned 1628–58) to honor his wife Mumtāz Maḥal (“Chosen One of the Palace”), who died in 1631 giving birth to their 14th child.',
        author: 'Amy Tikkanen',
        publishDate: 'Nov 01, 2017'
      }
    ];
  }

  onPostSubmit(post: Post): void {
    const newPost = {
      ...post,
      id: this.posts.length + 1
    };

    this.posts.push(newPost);
  }
}
