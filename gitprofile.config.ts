// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'giovannitammaroaws', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'GitHub Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['giovannitammaroaws/portfolio'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'giovannitammaroaws/atlas-ai-rag-financial-showcase',
          'giovannitammaroaws/AWS-Side-Projects',
          'giovannitammaroaws/options-greeks-showcase',
          'giovannitammaroaws/aws-secure-baseline-terraform',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Featured Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Portfolio of Giovanni Tammaro',
    description: 'AWS Cloud and Network Engineer portfolio.',
    imageURL: '',
  },
  social: {
    linkedin: 'pubtammarogiovanni',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'giovannitammaro76',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl: '/portfolio/resume/Giovanni_Tammaro_Resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'AWS',
    'Cloud Architecture',
    'Network Engineering',
    'Terraform',
    'Kubernetes',
    'Docker',
    'Python',
    'FastAPI',
    'TypeScript',
    'React',
    'PostgreSQL',
    'RAG',
    'CI/CD',
    'Git',
  ],
  experiences: [],
  certifications: [],
  educations: [],
  publications: [
    {
      title: 'Host a resume on AWS Static Website',
      conferenceName: '',
      journalName: 'Medium',
      authors: 'Giovanni Tammaro',
      link: 'https://medium.com/@giovannitammaro76/host-a-resume-on-aws-static-website-6c26542bd551',
      description:
        'End-to-end guide to host a static resume on AWS using S3, CloudFront, Route 53, and ACM with practical setup and cleanup steps.',
    },
    {
      title: 'Atlas AI RAG Financial Showcase',
      conferenceName: '',
      journalName: 'GitHub',
      authors: 'Giovanni Tammaro',
      link: 'https://github.com/giovannitammaroaws/atlas-ai-rag-financial-showcase',
      description:
        'Production-oriented financial RAG platform with FastAPI, React, PostgreSQL + pgvector, multi-provider LLM routing, and cost-aware operations.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'giovannitammaro76', // to hide blog section, keep it empty
    limit: 5, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Built by Giovanni Tammaro with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
