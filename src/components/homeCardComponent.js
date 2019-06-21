import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { setAutoFreeze } from 'immer';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                  id: 0,
                  name:'Projects',
                  image: 'assets/images/work2.jpg',
                  description:'See current projects that are underway.  Here are ideas in the process; as I learn new techniques, languages, and ways of implementing new methods.  Comments are always welcome! Click on the image above.'                        },
               {
                  id: 1,
                  name:'Biography',
                  image: 'assets/images/cactus2.jpg',
                  description:'Click here to view my biography.  New father, proud husband, and outdoor enthusiast.  From catching my first steelhead salmon, to reaching the peak of Mt. Adams, read it here! Click the image below.'                        },
               {
                  id: 2,
                  name:'Certificates',
                  image: 'assets/images/library1.jpg',
                  description:'My certificates pertaining to web development and coding. Click on the image above.'                        },
               {
                  id: 3,
                  name:'Cool Tech Stuff',
                  image: 'assets/images/tech.jpg',
                  category: 'dessert',
                  description:'Here you can find examples of technologies that I use in my code.  See what exactly a "regular expression" is!'                        }
               ],
        };
    }

    render() {
        const menu = this.state.cards.map((card) => {
            return (
              <div key={card.id} className="col-12 mt-5">
                <Media tag="li">
                  <Media left middle>
                      <Media object className="homePageImg" src={card.image} alt={card.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{card.name}</Media>
                    <p>{card.description}</p>
                  </Media>
                </Media>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              <Media list>
                  {menu}
              </Media>
            </div>
          </div>
        );
    }
}

export default Menu;