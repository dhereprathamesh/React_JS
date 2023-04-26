import React, { Component } from 'react'

class Description extends Component {
  render() {
    return (
      <div>
        {/* <img src="https://www.concertaddicts.com/wp-content/uploads/2022/11/52485413180_17c5d387c6_o.jpg" alt=""/> */}
        <div className="Description-div" style={{ color: 'white' }}>
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Post_Malone_at_the_2019_American_Music_Awards.png/330px-Post_Malone_at_the_2019_American_Music_Awards.png" alt=""/>
           <div className="description-column-div">
            <h3 className="description-title">Description</h3>
            <p className="dscription-para">Austin Richard Post (born July 4, 1995), known professionally as Post Malone, is an American rapper, singer, and songwriter. Known for his variegated vocals, Malone has gained acclaim for blending genres and subgenres of hip hop, pop, R&B, and trap.</p>
           </div>
        </div>
      </div>
    )
  }
}

export default Description;
