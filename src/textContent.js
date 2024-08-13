import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

export const aboutText =
  "Hey! My name is Victor Chen and I recently graduated from UC Berkeley with a B.A. in Computer Science. Last summer I was a Software Engineer Intern at Emotewell, where I worked on backend features related to user image uploads, improving website security and efficiency. Currently, I am learning full-stack development with a Javascript React frontend and Python Django backend. \n\nOutside of academics, I really enjoy hiking, photography, and playing a variety of mobile/PC games during my free time. That being said, feel free to reach out if you have any questions. I'm open to chat!🤗";

export const socialMediaRedirects = [
  {
    iconComponent: LinkedInIcon,
    url: "https://www.linkedin.com/in/chen-vc-victor/",
    backgroundColor: "white",
    color: "#0a66c2",
  },
  {
    iconComponent: GitHubIcon,
    url: "https://github.com/chenvcvictor",
    backgroundColor: "black",
    color: "#FFF",
  },
  {
    iconComponent: InstagramIcon,
    url: "https://www.instagram.com/victorc_lbftw/",
    backgroundColor: "white",
    color: "#cd486b",
  },
];

export const projectsText = [
  {
    projectName: "The Budget Challenge",
    projectTools: "Javascript, React, Material-UI",
    imageUrl: "./projectImages/budgetChallengeScreenshot.png",
    imageTitle: "The Budget Challenge",
    content:
      "Edulearn Hackathon Submission. Designed and developed a React.js simulation to teach current & prospective college students on financial management. ",
    githubLink: "https://github.com/chenVcVictor/Hack-Edulearn-Budgeting",
    permissionRequired: false,
  },
  {
    projectName: "Personal Website",
    projectTools: "Javascript, React, Material-UI",
    imageUrl: "./projectImages/Personal_Website_Screenshot.png",
    imageTitle: "Personal Website Screenshot",
    content:
      "Developed a responsive desktop & mobile user-friendly interface to represent myself and my work :).",
    githubLink: "https://github.com/chenVcVictor/New-Personal-Website",
    permissionRequired: false,
  },
  {
    projectName: "Loldoku",
    projectTools: "Javascript, React, Python, Django",
    imageUrl: "./projectImages/loldokuScreenshot.png",
    imageTitle: "loldoku game screenshot",
    content:
      "Developed a full-stack League of Legends inspired puzzle game with an interactive user interface, giving users real-time feedback for user inputs.",
    githubLink: "https://github.com/chenVcVictor/loldoku",
    permissionRequired: false,
  },
  {
    projectName: "Spam or Ham Classification",
    projectTools: "Python, scikit-learn, pandas",
    imageUrl: "./projectImages/spamOrHam.png",
    imageTitle: "Spam or Ham screenshot",
    content:
      "Developed a machine learning model for classifying emails as spam or not spam, achieving an accuracy of 92.4%. Focused on optimizing the true positive rate while minimizing the false positive rate to ensure high precision and recall.",
    githubLink: "https://github.com/chenVcVictor/spamOrHam",
    permissionRequired: true,
  },
  {
    projectName: "Pintos Operating System",
    projectTools: "C, GDB",
    imageUrl: "./projectImages/cs162bean.png",
    imageTitle: "Evan Bot and Friend",
    content:
      "Integrated support for user’s process and file system calls, a multithreaded system with a strict priority scheduler, and subdirectory support for a resizeable file system with a buffer cache. ",
    githubLink: "https://github.com/chenVcVictor/pintos",
    permissionRequired: true,
  },
  {
    projectName: "End-to-End Encrypted File Sharing System",
    projectTools: "Golang, Ginkgo",
    imageUrl: "./projectImages/cs161evanbotandFriend.jpg",
    imageTitle: "Evan Bot and Friend",
    content:
      "Designed and developed a secure user base system for trusted users to update, store, and share files with other users through a client and an insecure data server. Used encryption, hashing, MACs, and RSA-encrypted digital signatures to ensure confidentiality, integrity, and authenticity.",
    githubLink:
      "https://github.com/chenVcVictor/End-to-End-Encrypted-User-File-Sharing-System",
    permissionRequired: true,
  },
  {
    projectName: "Gitlet",
    projectTools: "Java, JUnit",
    imageUrl: "./projectImages/gitImage.png",
    imageTitle: "Git Image",
    content:
      "Developed a Git-inspired version control system that allows users to track version history of files through serialization and persistance of file data. Supports common git commands such as add, commit, branch, merge, status, and log, and as well as remote commands such as push, fetch, and pull.",
    githubLink: "https://github.com/chenVcVictor/gitlet",
    permissionRequired: true,
  },
];
