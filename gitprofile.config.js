// gitprofile.config.js

const config = {
  github: {
    username: 'freddyfernandes', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'freddyfernandes07',
    twitter: 'fredaayy',
    facebook: '',
    instagram: 'fredyayy',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'freddyfernandes.github.io/',
    phone: '',
    email: 'Freddyfernandesuni@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1aynFxoQOeAFaR-AqjHbnpVzQaL9YzA3_/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'SQL',
    'R',
    'MATLAB',
    'C++',
    'C',
    'ROS2',
    'Tableau',
    'Git',
    'Docker',
    'MS Office',
  ],
  
  /*experiences: [
    {
      company: 'University of Stuttgart',
      position: 'Research Assistant, Institute of Railway and Transportation Engineering',
      from: 'May 2023',
      to: 'November 2023',
      companyLink: 'https://www.iev.uni-stuttgart.de/',
    },
    {
      company: 'Alps Alpine Europe Gmbh',
      position: 'Werkstudent, Business Mobility Department',
      from: 'December 2022',
      to: 'August 2023',
      companyLink: 'https://www.alpsalpine.com/eu/',
    },
    */
  ],
  education: [
    {
      institution: 'University of Stuttgart',
      degree: 'MSc. Computer Science (Spec. Autonomous Systems)',
      from: 'October 2022',
      to: 'Present',
    },
    {
      institution: 'St. Xaviers College, Mumbai',
      degree: 'BSc. Information Technology (with Hons.)',
      from: 'July 2019',
      to: 'March 2022'
    },
  ],
  certifications: [
    {
      name: 'Python for Data Science',
      body: 'Issued by the Xavier Institute Of Engineering',
      year: 'July 2020',
      link: 'https://www.linkedin.com/in/freddyfernandes07/details/certifications/'
    },
    {
      name: 'Data Science Math Skills',
      body: 'Issued by Duke University in collaboration with Coursera ',
      year: 'December 2020',
      link: 'https://www.coursera.org/account/accomplishments/certificate/MUDQ6CFUPSRX'
    },
    
  ],

  // To hide the `My Projects` section, keep it empty.
 /* externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ], */
  // Display blog posts from your medium or dev account. (Optional)
 /* blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },*/
  googleAnalytics: {
    id: 'G-YYRSZNWT3V', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

};

export default config;
