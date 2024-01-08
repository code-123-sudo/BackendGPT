<a name="readme-top"></a>
<br />
<div align="center">
  <a href="https://github.com/code-123-sudo/BackendGPT">
  </a>

<h3 align="center">Open AI Chat application Backend</h3>

  <p align="center">
    A open ai based chat application backend in NodeJs and Express which allows to perform CRUD operations in a chat collection in a mongodb database
    <br />
    <a href="https://github.com/code-123-sudo/BackendGPT"><strong>Explore the repository »</strong></a>
    <br />
    <br />
    <a href="https://github.com/code-123-sudo/BackendGPT">View Demo</a>
    ·
    <a href="https://github.com/code-123-sudo/BackendGPT/issues">Report Bug</a>
    ·
    <a href="https://github.com/code-123-sudo/BackendGPT/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* NodeJs,Mongodb,Express

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may perform CRUD operations on chat APIs in your project after locally setting up a mongo database.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Install brew in macos by following instruction at https://brew.sh/ 
    Basically Its  below command 
   ```sh
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

   ```
   If face this error -

   "Failed to connect to raw.githubusercontent.com port 443: Connection refused"

   Follow below url (in below fix , get and replace  the actual ip address of raw.githubusercontent.com) - 

   https://www.debugpoint.com/failed-connect-raw-githubusercontent-com-port-443/
2. Install mongodb in macos

   https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
 
   For fixing below error - 
 
   "Upon executing  brew services start mongodb-community@5.0  , my terminal displays  Successfully started `mongodb-community` (label: homebrew.mxcl.mongodb-community)  . However, when I utilize  brew services list  to inspect my services list, my terminal presents a different output.It presents  error  12288"

   This is the solution -

   https://copyprogramming.com/howto/how-to-i-fix-mongodb-community-status-error-12288#google_vignette

   https://stackoverflow.com/questions/70761645/how-to-i-fix-mongodb-community-status-error-12288
3. As we are using below code directly in backend 
    ```js
    let myDB = client.db("chatGPT");
    let myColl = myDB.collection("allChattings")
    ```
    Before starting backend server, make database 'chatGPT' using mongo shell.
    In database 'chatGPT' make a collection 'allChattings'. 
4. Install Node and NPM from official websites
   ```sh
   git clone https://github.com/code-123-sudo/BackendGPT.git
   ```
5. Install the npm packages:
   ```sh
   npm install
   ```
6. start the server by running below command in the proper backend directory:
   ```sh
   node index.js
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
after installation , simply check your apis in postman, or try to see changes in database after using frontend 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Backend contains CRUD operations(some advance operations also) on chat apis

See the [open issues](https://github.com/code-123-sudo/BackendGPT/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Shishir Jain

Project Link: [https://github.com/code-123-sudo/GPTBackend](https://github.com/code-123-sudo/BackendGPT)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
