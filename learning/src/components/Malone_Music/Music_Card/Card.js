import React, { Component } from 'react'
import './Card.css'

class Card extends Component { 
  render() {
    const CardMusic = [
        {
            id:"001",
            year:"2022",
            text: "Twelve Carat Toothache",
            img: require('./Images/Album3.png'),
            album: "Reputation",
            song1: "Cooped Up (feat. Roddy Ricch)",
            song2: "Lemon Tree",
            song3: "Wrapped Around Your Finger",
            song4: "I Like You (A Happier Song) [feat. Doja Cat]",
            song5: "I Cannot Be (A Sadder Song) [feat. Gunna]",
            song6: "Wasting Angels (feat. The Kid LAROI) One Right Now",
        },
        {
            id:"002",
            year:"2019",
            text: "Hollywood's Bleeding",
            img: require('./Images/Album2.png'),
            album: "Hollywood's Bleeding",
            song1: "Circles",
            song2: "Allergic",
            song3: "Enemies (feat. Da Baby)",
            song4: "Sunflower (feat. Swae Lee)",
            song5: "Goodbyes (feat. Young Thug)",
            song6: "Myself",
        },
        {
            id:"003",
            year:"2018",
            text: "Beerbongs & Bentleys",
            img: require('./Images/Album3.png'),
            album: "Paranoid",
            song1: "Rich & Sad",
            song2: "Zack and Codeine",
            song3: "Rockstar (feat. 21 Savage)",
            song4: "Psycho (feat. Ty Dolla $ign)",
            song5: "Better Now",
            song6: "Candy Paint",
        }
 ]
    return (
      <div>
        <div className="music-card">
            { CardMusic.map((val, key) => {
                return (
            <div className="card">
               <div className="car-text">
                    <div className="card-id-txt">{val.id}</div>
                    <div className="card-year-txt">{val.year}</div>
                    <div className="card-txt">{val.text}</div>
                </div>
                
                <div className="card-content">
                    <div className="image-div">
                        <img src={val.img} alt="" className="post-malone-img"/>
                    </div>
                    <div className="card-content-description">
                        <div className="album-name-txt">
                        {val.album}
                        </div>
                        <div>
                        {val.song1}
                        </div>
                        <div>
                        {val.song2}
                        </div>
                        <div>
                        {val.song3}
                        </div>
                        <div>
                        {val.song4}
                        </div>
                        <div>
                        {val.song5}
                        </div>
                        <div>
                        {val.song6}
                        </div>
                    </div>
                </div> 
            </div>

  )}) }
        </div>
        {/* <div>
            <div></div>
            <div></div>
        </div> */}
      </div>
    )
  }
}

export default Card;