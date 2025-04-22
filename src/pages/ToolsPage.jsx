import React from 'react';

const ToolsPage = () => {
  const tools = [
    { 
      name: "Figma", 
      img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", 
      description: "Figma is a collaborative interface design tool that allows teams to create, test, and ship designs in real time." 
    },
    { 
      name: "Notion", 
      img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png", 
      description: "Notion is an all-in-one workspace for note-taking, project management, and collaboration." 
    },
    { 
      name: "Slack", 
      img: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png", 
      description: "Slack is a messaging app for teams, with real-time chat, file sharing, and integration with other tools." 
    },
    { 
      name: "GitHub", 
      img: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", 
      description: "GitHub is a platform for version control and collaboration, allowing developers to work together on projects." 
    },
    { 
      name: "Trello", 
      img: "https://cdn.worldvectorlogo.com/logos/trello.svg", 
      description: "Trello is a visual collaboration tool for organizing tasks and projects using boards, lists, and cards." 
    },
    { 
      name: "Zoom", 
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Zoom_Communications_Logo.svg", 
      description: "Zoom is a video conferencing tool that helps teams and businesses communicate remotely through meetings, webinars, and more." 
    },
    { 
      name: "VS Code", 
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg", 
      description: "VS Code is a powerful, open-source code editor with features like debugging, version control, and an integrated terminal." 
    },
    { 
      name: "Google Drive", 
      img: "https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png", 
      description: "Google Drive is a cloud storage service that allows users to store and share files securely, with collaboration tools." 
    },
    { 
      name: "Jira", 
      img: "https://upload.wikimedia.org/wikipedia/en/8/8e/Jira_%28Software%29_logo.svg", 
      description: "Jira is a project management tool used for bug tracking, issue tracking, and agile project management." 
    },
    { 
      name: "Postman", 
      img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", 
      description: "Postman is an API development environment that simplifies API testing, documentation, and collaboration." 
    },
    { 
      name: "ChatGPT", 
      img: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", 
      description: "ChatGPT is an AI-powered conversational model that assists in generating human-like text and solving queries." 
    },
    { 
      name: "Canva", 
      img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg", 
      description: "Canva is a graphic design tool that allows users to create visual content like posters, presentations, and social media graphics." 
    },
  ];

  return (
    <div className="pt-28 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6 text-left">Tools We Use</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {tools.map((tool, index) => (
          <div key={index} className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-sm hover:shadow-lg transition">
            <img src={tool.img} alt={tool.name} className="w-12 h-12 object-contain" />
            <span className="text-lg font-medium">{tool.name}</span>
            <p className="text-sm text-gray-600 mt-2 text-center">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
