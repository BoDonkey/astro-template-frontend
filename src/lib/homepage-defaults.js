export const heroDefaults = {
  layout: 'split',
  splitSide: 'right',
  background: 'image',
  height: 'large',
  contentAlignment: 'left',
  mainContent: {
    title: 'Welcome to Your Site',
    subtitle: 'Start customizing your homepage',
    titleColor: 'primary',
    subtitleColor: 'primary',
  }
};

export const slideshowDefaults = {
  slideDuration: 5000,
  transitionSpeed: 300,
  autoplay: true,
  showControls: true,
  slides: [
    {
      slideTitle: 'Welcome to Our Site',
      titleColor: 'white',
      cardContent: 'Edit this slideshow to add your own content and images.',
      contentColor: 'white',
      _image: [
        {
          attachment: {
            _urls: {
              full: 'https://picsum.photos/seed/slide1/1600/900'
            },
            alt: 'Welcome slide'
          }
        }
      ]
    },
    {
      slideTitle: 'Customizable Design',
      titleColor: 'white',
      cardContent: 'Add your own slides with content.',
      contentColor: 'white',
      _image: [
        {
          attachment: {
            _urls: {
              full: 'https://picsum.photos/seed/slide2/1600/900'
            },
            alt: 'Design slide'
          }
        }
      ]
    },
    {
      slideTitle: 'Getting Started',
      titleColor: 'white',
      cardContent: 'Click edit to begin customizing your slideshow.',
      contentColor: 'white',
      _image: [
        {
          attachment: {
            _urls: {
              full: 'https://picsum.photos/seed/slide3/1600/900'
            },
            alt: 'Getting started slide'
          }
        }
      ]
    }
  ]
};
