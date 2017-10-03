// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const dataApi = { 
  projectItems: {
    xenochiku: {
      title: 'Xenochiku',
      date: '2017',
      stack: 'javascript, threejs, webaudio-api',
      descr: 'audiovisual shit',
      poster: '/assets/posters/xenochiku.jpg',
      url: 'https://xenochiku.com'
    },
    visuals: {
      title: 'Experimental visuals',
      date: '2015-2017',
      stack: 'Photoshop, Illustrator',
      descr: 'experimental visuals I created in the years',
      poster: '/assets/posters/visuals.jpg',
      url: 'http://xenochiku.com'
    },
    falcobenz: {
      title: 'Falco Benz live visuals',
      date: '2016',
      stack: '',
      descr: 'For Falco Benz, based from the Netherlands, I created an audioreactive visual show. ',
      poster: '/assets/posters/falcobenz.jpg',
      url: 'http://falcobenz.nl'
    }
  },
  socialItems: {
    github: {
      href: "https://github.com/flowen",
      svg: svgGithub
    },
    gmail: {
      href: "mailto:lowen@flowen.nl?subject=hi! I am .. and would like to have a chat&body=Tell me about your project in 3 sentences: %0D%0A%0D%0ATell me when you consider your project a success: %0D%0A%0D%0AIs there a budget you have in mind? %0D%0A%0D%0AHow did you find me: ",
      svg: svgGmail
    },
    instagram: {
      href: "https://www.instagram.com/flowen_nl",
      svg: svgInstagram
    },
    linkedIn: {
      href: "https://www.linkedin.com/in/flowen",
      svg: svgLinkedIn
    },
    medium: {
      href: "https://medium.com/@flowen",
      svg: svgMedium
    },
    twitter: {
      href: "https://twitter.com/flowen_nl",
      svg: svgTwitter
    },
  },
  all: function() { return this.players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

export default dataApi;
