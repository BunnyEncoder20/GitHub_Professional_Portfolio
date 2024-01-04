# Professional Personal Portfolio website Project 
---
This is a Portfolio website which I have made to display all of Projects I've made. This project is Made using React (main) and React-Bootstrap (for rapid UI dev).

**Installations :** 
```
npx i create-react-app professional-portfolio
npm react-bootstrap bootstrap
npm i react-bootstrap-icons --save
npm install react-multi-carousel --save
```

---
## Design of Website
1. Home Section
![Home Page of Portfolio](/proffesional-portfolio/src/Assets/Website%20Design/HomePage%20of%20PPW.png)

2. Skills Section 
![Skills Section ](/proffesional-portfolio/src/Assets/Website%20Design/skills%20section.png)

3. Project Section 
![Project Section](/proffesional-portfolio/src/Assets/Website%20Design/projects%20section.png)

4. News Letter Section
![Email Section](/proffesional-portfolio//src/Assets/Website%20Design/email%20section.png)

5. Let's Connection
![Email Section](/proffesional-portfolio//src/Assets/Website%20Design/get%20in%20touch.png)

---
## Learnings 
1. It is better to import individual components of Bootstrap like : 
```import Nav from 'react-bootstrap/Nav';  // ideally```
Because it reduces the amount of code for the client (The entire library won't get import for one component). Which happens here : 
```import {Nav} from 'react-bootstrap';  // less ideally```

2. React-Bootstrap-Icons
    - is a library of svg icons which are compatible with react compoenents and can be import just like any other react component
    - ```npm i react-bootstrap-icons```
3. React Multi Carousel
    - it is a react npm package with which we can import highly cutomizable carousel displays (used in the skills section of this project)
    - ```npm install react-multi-carousel --save```
    - to import the component : 
```
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
```
4.