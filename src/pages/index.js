import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic01.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>A LITTLE ABOUT ME</h2>
                </header>
                <p>Hello! I love programming, web development, graphic designer, learning new things, photography, cinematography,  
                I live in Hua Hin, but I'm from Bangkok. I'm always looking for projects to work on or new opportunities to add to my resume.</p>
                
              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>

                <header className="major">
              <h2>INTERESTS</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-html5"></span>
                <h3>WEB DEVELOPMENT</h3>
                <p>I love making web sites! I can do both front end and back end web development, but if I had to choose, I'd choose back-end – or possibly full stack if that's an option!</p>
              </li>
              <li>
                <span className="icon major style3 fa-code"></span>
                <h3>PROGRAMMING</h3>
                <p>I love web development, but I also love programming in general. I'm still interested in other fields: software, mobile, etc.!</p>
              </li>
              <li>
                <span className="icon major style2 fa-archive"></span>
                <h3>CONSTANTLY LEARNING</h3>
                <p>I'm lucky to be in a field where this is a real possibility! What's better than the rush of joy from learning and understanding something new?</p>
              </li>
              <li>
                <span className="icon major style5 fa-camera-retro"></span>
                <h3>MUSIC AND MOTION</h3>
                <p>I love music and Motion Graphic</p>
              </li>
            </ul>

                <header className="major">
              <h2>RANDOM FACTS</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-home"></span>
                <p>I'VE SPENT 20 YEARS IN BANGKOK AND MORE THAN 10 YEARS IN HUA HIN</p>
              </li>
              <li>
                <span className="icon major style3 fa-language"></span>
                <p>I CAME FROM HALF CHINESS FAMILY SO MY LAST NAME IS VERY LONG AND HARD TO PRONOUNCED</p>
              </li>
              <li>
                <span className="icon major style2 fa-coffee"></span>
                <p>I LOVED DRINK COFFEE – VERY MUCH</p>
              </li>
            </ul>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>resume</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Ipsum consequat</h3>
                <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Amed sed feugiat</h3>
                <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Dolor nullam</h3>
                <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>portfolio</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>contact</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button special">Get Started</Link></li>
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

        </div>

      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
