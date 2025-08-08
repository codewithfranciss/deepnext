 const hostingProviders = [
    {
      id: 1,
      name: "Vercel",
      description:
        "The platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.",
      category: "JAMstack",
      pricing: "Free tier available",
      deployment: "Git-based",
      features: ["Edge Functions", "Analytics", "Preview Deployments", "Custom Domains"],
      performance: "Excellent",
      support: "24/7",
      url: "https://vercel.com",
      logo: "https://avatars.githubusercontent.com/u/14985020?s=48&v=4",
    },
    {
      id: 2,
      name: "Netlify",
      description:
        "All-in-one platform for automating modern web projects with continuous deployment from Git across all of our services.",
      category: "JAMstack",
      pricing: "Free tier available",
      deployment: "Git-based",
      features: ["Serverless Functions", "Form Handling", "Split Testing", "Identity"],
      performance: "Excellent",
      support: "Community + Paid",
      url: "https://netlify.com",
      logo: "https://avatars.githubusercontent.com/u/7892489?s=200&v=4",
    },
    {
      id: 3,
      name: "DigitalOcean",
      description:
        "Cloud infrastructure provider with simple pricing and developer-friendly tools for deploying applications.",
      category: "Cloud VPS",
      pricing: "$5/month",
      deployment: "Manual/Docker",
      features: ["Droplets", "Kubernetes", "Databases", "Load Balancers"],
      performance: "Very Good",
      support: "24/7",
      url: "https://digitalocean.com",
      logo: "https://avatars.githubusercontent.com/u/4650108?s=200&v=4",
    },
    {
      id: 4,
      name: "Railway",
      description: "Deploy from GitHub with zero configuration. Built for developers who want to focus on building.",
      category: "PaaS",
      pricing: "$5/month",
      deployment: "Git-based",
      features: ["Auto Deploy", "Databases", "Environment Variables", "Custom Domains"],
      performance: "Good",
      support: "Community",
      url: "https://railway.app",
      logo: "https://avatars.githubusercontent.com/u/66716858?s=200&v=4",
    },
    {
      id: 5,
      name: "Render",
      description: "Modern cloud platform that offers free SSL, global CDN, and automatic deployments from Git.",
      category: "PaaS",
      pricing: "Free tier available",
      deployment: "Git-based",
      features: ["Auto Deploy", "SSL Certificates", "CDN", "Background Jobs"],
      performance: "Good",
      support: "Email + Community",
      url: "https://render.com",
      logo: "https://avatars.githubusercontent.com/u/36424661?s=200&v=4",
    },
    {
      id: 6,
      name: "AWS Amplify",
      description: "Full-stack development platform for building scalable web and mobile applications.",
      category: "Cloud",
      pricing: "Pay-as-you-go",
      deployment: "Git-based",
      features: ["Hosting", "Authentication", "APIs", "Storage"],
      performance: "Excellent",
      support: "24/7 Premium",
      url: "https://aws.amazon.com/amplify",
      logo: "https://avatars.githubusercontent.com/u/41077760?s=200&v=4",
    },
    {
      id: 7,
      name: "Pxxl app",
      description:
        "Pxxl App is a powerful cloud deployment platform that enables developers to deploy websites, APIs, and databases instantly with zero configuration, providing seamless scaling, high performance, and real-time team collaboration.",
      category: "PaaS",
      url: "https://pxxl.app/",
      logo: "https://pxxl.app/images/col-logo.svg",
    },
    {
      id: 8,
      name: "Sevalla",
      description:
        "Sevalla is the home to your upcoming projects. Host and manage your applications, databases, and static sites in a single, intuitive platform.",
      category: "JAMstack",
      url: "http://sevalla.com/",
      logo: "https://avatars.githubusercontent.com/u/177742723?s=200&v=4",
    },
    {
      id: 9,
      name: "Koyeb",
      description:
        "Koyeb is a Platform-as-a-Service (PaaS) that enables developers to deploy their apps quickly and without complex infrastructure to manage. ",
      category: "PaaS",
      url: "https://koyeb.com/",
      logo: "https://getdeploying.com/static/img/logos/koyeb.bcad056012d6.png",
    },
    {
      id: 10,
      name: "Cloudfare",
      description:
        "Cloudflare is a cloud provider focused on edge networks, caching, security and performance. Founded in 2009, it started with the mission to help secure and speed up the internet.",
      category: "Cloud",
      url: "https://cloudflare.com/",
      logo: "https://getdeploying.com/static/img/logos/cloudflare.c80460c2ba85.png",
    },
    {
      id: 11,
      name: "Flexstack",
      description:
        "FlexStack enables you to deploy to AWS with a Vercel-like experience. You can set up a complete environment in just a few clicks - everything from secrets to monitoring to load balancing and autoscaling is managed for you.",
      category: "Cloud",
      url: "https://flexstack.com/",
      logo: "https://getdeploying.com/static/img/logos/flexstack.154a86a24602.png",
    },
    {
      id: 12,
      name: "Cyclic",
      description:
        "Build and run modern cloud-native serverless applications without piling on to the full stack.",
      category: "JAMstack",
      url: "https://www.cyclic.sh/",
      logo: "https://avatars.githubusercontent.com/u/77067997?s=200&v=4",
    },
    {
      id: 13,
      name: "Github pages",
      description:
        "GitHub Pages is a feature of GitHub that enables users to host static websites directly from their repositories.",
      category: "Cloud",
      url: "https://pages.github.com/",
      logo: "https://pages.github.com/favicon.ico",
    },
    {
      id: 14,
      name: "Flight control",
      description:
        "Flightcontrol is a Platform-as-a-Service (PaaS) that runs directly on top of your AWS account.",
      category: "Paas",
      url: "https://www.flightcontrol.dev/",
      logo: "https://getdeploying.com/static/img/logos/flightcontrol.77e1f5619f0c.png",
    },
    {
      id: 15,
      name: "Fly.io",
      description:
        " Fly.io is a cloud computing platform designed for developers seeking to deploy web apps globally without having to manage complex infrastructure.",
      category: "Paas",
      url: "https://www.fly.io/",
      logo: "https://getdeploying.com/static/img/logos/flyio.2a99476365ab.png",
    },
    {
      id: 16,
      name: "Google cloud",
      description:
        "Google Cloud Platform (GCP) is a suite of cloud computing services offered by Google. It includes a range of hosted services for compute, storage, and application development that runs on Google's own data centers",
      category: "Cloud",
      url: "https://cloud.google.com/",
      logo: "https://getdeploying.com/static/img/logos/google-cloud.d36b4fb4ae57.png",
    },
    {
      id: 17,
      name: "Heroku",
      description:
        "Heroku has been a popular PaaS to deploy web apps in the cloud",
      category: "PaaS",
      url: "https://heroku.com/",
      logo: "https://getdeploying.com/static/img/logos/heroku.0d352580b562.png",
    },
    {
      id: 18,
      name: "Firebase",
      description:
        "Firebase is a backend-as-a-service platform from Google with tons of features for front-end and mobile apps like their Firestore database, authentication, serverless functions, and many more.",
      category: "PaaS",
      url: "http://firebase.google.com/docs/hosting",
      logo: "https://avatars.githubusercontent.com/u/1335026?s=200&v=4",
    },
    {
      id: 19,
      name: "Surge",
      description:
        "Static web publishing for Front-End Developers",
      category: "PaaS",
      url: "http://surge.sh",
      logo: "https://avatars.githubusercontent.com/u/11480641?s=200&v=4",
    },
    {
      id: 20,
      name: "GitLab Pages",
      description:
        "GitLab is another version control service and git hosting service much like GitHub.",
      category: "PaaS",
      url: "https://docs.gitlab.com/user/project/pages/",
      logo: "https://avatars.githubusercontent.com/u/1086321?s=200&v=4",
    },
    {
      id: 21,
      name: "Coolify",
      description:
        "Coolify.io is an open-source, self-hostable platform-as-a-service (PaaS) that allows users to deploy applications, databases, and..",
      category: "PaaS",
      url: "https://coolify.io",
      logo: "https://coolify.io/docs/coolify-logo-transparent.png",
    },
    {
      id: 22,
      name: "SST",
      description:
        "Deploy everything your app needs with a single config.",
      category: "PaaS",
      url: "https://sst.dev",
      logo: "https://sst.dev/_astro/logo-dark.DpZ7_bWK.svg",
    },
    {
      id: 23,
      name: "Deno Depoly",
      description:
        "Develop locally in JavaScript or TypeScript, deploy in seconds globally and scale to billions of requests.",
      category: "PaaS",
      url: "https://deno.com/deploy",
      logo: "https://dash.deno.com/assets/logo.svg",
    },
    {
      id: 24,
      name: "Stormkit",
      description:
        "A fully-featured, powerful, and self-hostable platform for deploying frontend applications. Take control over your",
      category: "PaaS",
      url: "https://stormkit.io",
      logo: "https://www.stormkit.io/assets/stormkit-logo-text-h--white-Z13S4Yjv.svg",
    },
    {
      id: 25,
      name: "Mau",
      description:
        "Deploy, mau! Provision and manage your infrastructure on AWS without the hassle and extra DevOps work.",
      category: "Cloud",
      url: "https://www.mau.nestjs.com/",
      logo: "https://www.mau.nestjs.com/img/logo-small-gradient.svg",
    },

    
   
  ]
 


  export default hostingProviders