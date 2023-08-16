import React from "react";

const articles = [
  {
    title:
      "What happens when you type 'https://www.google.com/' in your browser and press enter?",
    content:
      "'https://www.google.com/' is a URL, URL stands for Universal Resource Locator, and in our case here, the URL has 3 main parts.\r\n\r\n1. https:// is the protocol.\r\n2. www.google.com is the domain name.\r\n3. The '/' is the path, here in our case is the homepage.\r\n\r\nThe first one I’m going to be talking about is the domain name. The browser has to translate the domain name to the IP address to enable the browser to locate and communicate with the server.\r\n\r\nIP address stands for Internet Protocol, it is a series of numbers that identifies any device on a network. All devices have a unique IP address. The browser translates the domain name to the IP address by querying the DNS record for the IP address corresponding to the particular domain name in our case, 'www.google.com'...",
    link: "https://medium.com/@Dannyfsp/what-happens-when-you-type-https-www-google-com-in-your-browser-and-press-enter-1bf8be166031",
  },
  {
    title: "My First Postmortem",
    content:
      "Oh no, it wasn’t on a dead body LOL, It was actually on an API designed and deployed on a Linux server.\r\n\r\nBefore I go about the details, I’d like to give a detailed explanation on what a postmortem is all about. A postmortem is also referred to as an ‘Incident Report’. It is a process intended to help you learn from past incidents. It typically involves an analysis or discussion soon after an event has taken place.\r\n\r\nA postmortem is a tool widely used in the tech industry. Any software system deployed to a server will eventually fail at some point, and this may happen due to bugs, traffic spikes, security issues, hardware failures, human errors etc. As an engineer, when you notice your system failed as a result of a factor, you would want to make sure that such does not happen again. Hence you’d want to write a summary to provide your team with information detailing the cause of the failure. This information will include what is the root cause of the failure, how it will impact on the performance of the system or application, what measures are being put in place to make sure it will be fixed...",
    link: "https://medium.com/@Dannyfsp/my-first-postmortem-843462ef2136",
  },
  {
    title: "Creating CRUD API using NodeJS",
    content:
      "Note: For this article I will be using postgresQL, Express js and Prisma. You can call it a PEP stack of the backend LOL 😅.\r\n\r\nCRUD is an acronym that stands for create, read, update and delete. While API is an acronym that stands for Application Programming Interface. API is a way for two or more computer programs to communicate with each other. You can see it as a software interface offering a service to other pieces of software.\r\n\r\nModern web development involves user interaction with databases and a well implemented CRUD API makes this possible enabling users create or save data to the database, read or retrieve data saved from the database, update data saved in the database and delete data from the database. This is mostly implemented in the backend using a server-side language like NodeJS. NodeJS is an open-source, cross-platform JavaScript runtime environment. It makes it possible to use JavaScript outside of a web browser and on the server...",
    link: "https://medium.com/@Dannyfsp/creating-crud-api-using-nodejs-bc5e5604bbf3",
  },
];

export default function ArticleList() {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {articles.map((article, index) => (
        <div
          key={index}
          className="md:w-[600px] sm:w-[500px] w-[400px] md:mx-4 mx-2 rounded-xl sm:h-[600px] flex flex-col items-center justify-start my-8 bg-gray-800"
        >
          <div className="px-2">
            <div>
              <div className="my-4 flex justify-center items-center">
                <h1 className="font-bold text-2xl my-1 text-center">
                  {article.title}
                </h1>
              </div>
              <div>
                {article.content.split("\r\n").map((paragraph, idx) => (
                  <React.Fragment key={idx}>
                    {paragraph}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="my-4">
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                <button className="py-2 px-3 bg-white text-black rounded-lg hover:scale-105">
                  Read More
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
