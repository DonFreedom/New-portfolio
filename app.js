const app = Vue.createApp({
  template: "",
  data() {
    return {
      visible: false,
      viewedProject: {},
      projects: [
        {
          _id: "6574c69d0bb06bd0535047ce",
          projectName: "Audiophile",
          projectDescription:
            "An e-commerce application that serves as the ultimate destination for high-end headphones, earphones and speakers. The platform, meticulously built with Next.js",
          projectImage:
            "https://firebasestorage.googleapis.com/v0/b/portfolical.appspot.com/o/Screenshot%202023-12-09%20at%208.59.16%20PM.png?alt=media&token=abb46a4d-e183-422b-9911-0ad7194731a6",
          sourceCode: "https://github.com/Techboy07/audiophile",
          live: "http://audiophile-techboy07.vercel.app",
          __v: 0,
        },
        {
          _id: "64fb65f2dd55f8e532e4aba1",
          projectName: "Ableton Website Clone",
          projectDescription:
            "This is a clone of the ableton entire website built with basic technologies such as html,css and javascript",
          projectImage:
            "https://temp-potab-907.netlify.app/img/Screenshot%20from%202022-12-05%2016-06-48.png",
          sourceCode: "",
          live: "http://ableclone.netlify.app/",
          __v: 0,
        },
        {
          _id: "64fb6746dd55f8e532e4aba7",
          projectName: "Notaculus",
          projectDescription:
            "this is a note taking app that is easily customizable with features like darkmode and user preferences . It also implements authentication. built with react,typescript,material ui and firebase.",
          projectImage:
            "https://firebasestorage.googleapis.com/v0/b/portfolical.appspot.com/o/notaculus.png?alt=media&token=f774be9c-306b-4cfa-80ed-62488fdd748b",
          sourceCode: "https://github.com/Techboy07/Note-taking-app-v2",
          live: "https://note-taking-app-5a43a.web.app/",
          __v: 0,
        },

        {
          _id: "6570767cbe87be305d7acfc4",
          projectName: "scrunchiefy",
          projectDescription: "An E - commerce website built with next js ",
          projectImage:
            "https://firebasestorage.googleapis.com/v0/b/portfolical.appspot.com/o/project-images%2FScreenshot%202023-12-06%20at%202.12.44%20PM.png?alt=media&token=bf9bbe12-5a6a-45a4-8d59-01eec5b06878",
          sourceCode: "",
          live: "https://scrunchiefy-app-techboy07.vercel.app/",
          __v: 0,
        },
        {
          _id: "64fb62d7dd55f8e532e4ab99",
          projectName: "Portfolio Template",
          projectDescription:
            "this is a minimalist portfolio page built with bootstrap both simple and responsive",
          projectImage:
            "https://temp-potab-907.netlify.app/img/Screenshot%20from%202022-12-05%2016-02-56.png",
          sourceCode: "",
          live: "http://techloft0.netlify.app/",
          __v: 0,
        },

        {
          _id: "64fb6412dd55f8e532e4ab9c",
          projectName: "Youtube Clone",
          projectDescription:
            "this is an identical clone of youtube it's fully functional,meticulously built with basic technologies like html css and js",
          projectImage: "./images/YTclone.jpg",
          sourceCode: "http://github.com/DonFreedom/YouTube-clone",
          live: "",
          __v: 0,
        },
      ],
    };
  },
  methods: {
    async getProjects() {
      const projects = await fetch(
        "http://portfolical-v1-api.onrender.com/projects"
      );
      return projects;
    },

    showDetails(project) {
      this.visible = !this.visible;
      this.viewedProject = project;
      return this.visible;
    },
  },
});

app.mount("#projects");
