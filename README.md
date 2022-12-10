<h1 align="center">Skyline Compatibility list</h1>

<div align="center">
   Front-End for the official compatibility list hosted on <a href="https://github.com/skyline-emu/skyline-games-list/issues" target="_blank">GitHub</a>
</div>


<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![image](https://user-images.githubusercontent.com/76035004/198697391-ed29d616-1ef3-4ae5-b2f4-6910aa12d984.png)

- You can visit the live website at [Skyline Compatibility](https://skylinecompatibility.netlify.app)
- I have had a great time creating this project. when first released it was not as polished, but I wanted to get something out to the community pretty quickly since I had seen an HTML list requested multiple times in the official discord and on the subreddit EmulationOnAndroid. I added pagination and a search feature at community request. I also added the number of games in each category at the request of the skyline community.
<br>
The most dificult part of this project was the pagination, I had to parse the total number of pages from the last page link sent in the headers from the GitHub API. This was also my first project created without create-react-app so setting up webpack was a great learning experience.

- In doing this project I have learned a lot more about creating a react app without using the create-react-app package. I have learned how to set up webpack to do exactly what is needed without extra bloat. I have also learned a lot more about taking and applying feedback from your user base. 


### Built With
- [React](https://reactjs.org/)
## Features

This application was build as a front-end for the official github issues list that makes up the compatibility list for the skyline emulator. 
You can search games by title, filter games by playability status and select a game to view the issue on GitHub. The navbar consists of links to the official skyline-emu website. This compatibility lists is meant to look like the official skyline-emu websites dark mode.  


## Acknowledgements


- [Skyline Emulator](https://skyline-emu.one)
- [Node.js](https://nodejs.org/)
- [GitHub REST API](https://docs.github.com/en/rest)

## Contact

- Website [michaelholt.dev](https://michaelholt.dev)
- GitHub [@MHolt193](https://github.com/MHolt193)
