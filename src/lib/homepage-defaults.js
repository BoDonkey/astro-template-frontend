export const heroDefaults = {
  layout: 'split',
  splitSide: 'right',
  background: 'image',
  height: 'large',
  contentAlignment: 'left',
  mainContent: {
    title: 'Welcome to Our Site',
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

export const sectionDefaults = [
  {
    sectionType: 'flcards',
    floatingCardsSection: {
      topTitle: "Why Choose Us",
      mainTitle: "Features That Set Us Apart",
      topBackgroundColor: "primary",
      bottomBackgroundColor: "transparent",
      features: [
        {
          title: "Easy Integration",
          description: "Seamlessly connect with your existing tools and workflow.",
          addCardImage: true
        },
        {
          title: "24/7 Support",
          description: "Round-the-clock assistance whenever you need it.",
          addCardImage: true
        },
        {
          title: "Secure Platform",
          description: "Enterprise-grade security for your peace of mind.",
          addCardImage: true
        }
      ],
      columns: '4'
    }
  },
  {
    sectionType: 'testimonials',
    testimonialsSection: {
      title: "What Our Clients Say",
      backgroundColor: "primary",
      testimonials: [
        {
          quote: "This platform has transformed how we operate. Highly recommended!",
          author: "Jane Smith",
          role: "CEO, TechCorp",
          addAuthorImage: true
        },
        {
          quote: "The best solution we've found for our business needs.",
          author: "John Doe",
          role: "Director of Operations, InnovaCo",
          addAuthorImage: true
        }
      ]
    }
  },
  {
    sectionType: 'contentGrid',
    contentGridSection: {
      contentTitle: "How It Works",
      contentSubtitle: "Discover our simple process",
      backgroundColor: "transparent",
      contentBlockSpacing: "compact",
      sectionMargin: "normal",
      backgroundColor: 'primary',
      gridItems: [
        {
          imagePosition: "left",
          blockTitle: "Simple Setup",
          linkText: "Learn More",
          linkType: "custom",
          linkUrl: "#",
          linkStyle: "button",
          buttonStyle: "solid",
          addIcon: true,
          icon: "arrow-left",
          iconPosition: "left",
          buttonColor: "primary"
        },
        {
          imagePosition: "right",
          blockTitle: "Powerful Features",
          linkText: "See Features",
          linkType: "custom",
          linkUrl: "#",
          linkStyle: "button",
          buttonStyle: "solid",
          addIcon: true,
          icon: "arrow-right",
          iconPosition: "right",
          buttonColor: "primary"
        }
      ]
    }
  }
];