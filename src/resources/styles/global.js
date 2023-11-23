import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
// -------- BODY --------

*,
*::after,
*::before {
  box-sizing: border-box;
}
body {
  margin-top: 5rem;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  padding: 0;
}
small {
  display: block;
}
button {
  display: block;
}
a {
  color: ${({ theme }) => theme.text};
}
.ml-auto, .mx-auto {
  margin-left: auto !important;
}
.text-white {
  color: #fff !important;
}
.section-title {
  padding-top: 3%;
  padding-bottom: 1%;
  font: 18px/24px 'opensans-bold', sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
}
.list-inline, .list-unstyled {
  padding-left: 0;
  list-style: none;
}
.list-inline-item {
  display: inline-block;
}
.card-header {
  padding: .5rem 1rem .2rem;
  background-color: ${({ theme }) => theme.about.cardHeaderBackground};
}

// -------- NAVBAR --------

.MuiAppBar-colorPrimary {
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};
}
.language-buttons {
  width: 152px;
  display: flex;
}
.language-item {
  display: grid;
  font-size: small;
  margin-left: 8px;
}
.PrivateTabIndicator-colorSecondary-3 {
  background-color: ${({ theme }) => theme.text};
}
.MuiFab-secondary {
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};
}
.MuiFab-secondary:hover {
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};
}
.MuiGrid-grid-xs-4 {
  display: contents;
}
.site-title {
  text-align: center;
}

// -------- SERVICES section --------

#services {
  .title-container {
    height: 50px;
  }
  background-color: ${({ theme }) => theme.about.backgroundColor};
  h1 span {
     color: ${({ theme }) => theme.about.h1Color};
  }
  h1 span {
    color: ${({ theme }) => theme.text};
  }
  .project-title-settings {
     color: ${({ theme }) => theme.portfolio.h1Color};
     max-width: 300px;
  }  
  .foto div:after {
    color: #333;
    font-size: 25px;
    content: attr(title);
    position: relative;
    top: 15px;
  }
  .foto div:hover {
    -webkit-transform: scale(1.01);
    -moz-transform: scale(1.01);
    transform: scale(1.01);
    z-index: 10;
    -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, .7);
    -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, .7);
    box-shadow: 0 10px 20px rgba(0, 0, 0, .7);
  }  
  .portfolio .portfolio-item .portfolio-item-caption {
    -webkit-transition: all ease 0.5s;
    -moz-transition: all ease 0.5s;
    transition: all ease 0.5s;
    opacity: 0;
    background-color: rgba(51, 51, 51, 0.9);
  }
  .portfolio .portfolio-item .portfolio-item-caption:hover {
    opacity: 1;
  }
  .portfolio .portfolio-item .portfolio-item-caption .portfolio-item-caption-content {
    font-size: 1.5rem;
  }
  .project-date {
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 8px 15px 2px 15px;
    position: relative;
    z-index: -500;
    border-top: 5px solid #696969;
    border-radius: 0 0 5px 5px;
    background-color: ${({ theme }) => theme.portfolio.dateBackground};
    color: white;
  }
}
#home {
  text-align: center;
  color: ${({ theme }) => theme.about.h1Color};
  .MuiButton-root {
    color: ${({ theme }) => theme.about.h1Color};
  }
  .MuiButton-outlined {
    border: 1px solid ${({ theme }) => theme.about.h1Color};
  }
}

// -------- PORTFOLIO section --------

#portfolio {
  h1 span {
    color: ${({ theme }) => theme.text};
  }
  .project-title-settings {
     color: ${({ theme }) => theme.portfolio.h1Color};
  }  
  .foto div:after {
    color: #333;
    font-size: 25px;
    content: attr(title);
    position: relative;
    top: 15px;
  }
  .foto div:hover {
    -webkit-transform: scale(1.01);
    -moz-transform: scale(1.01);
    transform: scale(1.01);
    z-index: 10;
    -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, .7);
    -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, .7);
    box-shadow: 0 10px 20px rgba(0, 0, 0, .7);
  }  
  .portfolio .portfolio-item .portfolio-item-caption {
    -webkit-transition: all ease 0.5s;
    -moz-transition: all ease 0.5s;
    transition: all ease 0.5s;
    opacity: 0;
    background-color: rgba(51, 51, 51, 0.9);
  }
  .portfolio .portfolio-item .portfolio-item-caption:hover {
    opacity: 1;
  }
  .portfolio .portfolio-item .portfolio-item-caption .portfolio-item-caption-content {
    font-size: 1.5rem;
  }
  .project-date {
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 8px 15px 2px 15px;
    position: relative;
    z-index: -500;
    border-top: 5px solid #696969;
    border-radius: 0 0 5px 5px;
    background-color: ${({ theme }) => theme.portfolio.dateBackground};
    color: white;
  }  
}
.project-spacing {
  padding-right: 15px;
  padding-left: 15px;
}
.portfolio-item {
  max-width: 100%;
  margin-bottom: 15px;
  text-align: center;
}
.foto div {
  background: ${({ theme }) => theme.about.cardBackground};
  display: inline-block;
  margin: 0 auto 5% auto;
  padding: 10px 10px 5px;
  text-align: center;
  text-decoration: none;
  -webkit-box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
  -moz-box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
  -webkit-transition: all .20s linear;
  -moz-transition: all .20s linear;
  transition: all .20s linear;
  z-index: 0;
  position: relative;  
}
.foto img {
  display: block;
  width: 100%;
}  

// -------- SKILLS section --------

#skills {
  background: #1F1F1F;
  background-color: #1F1F1F;
  min-height: 200px;
  width: 100%;
  overflow: hidden;
  padding-bottom: 10%;   
  .mx-3 {
    margin-left: 1rem !important;
    margin-right: 1rem !important;
  }
  .skills-tile {
    background-color: rgba(248,245,244,.05);
    padding: 10px 10px 5px;
    width: 100px;
    margin: 5px 0;
    border-radius: 8px;
  }
  .skill-icon {
    color: white;
    text-align: center;
    position: relative;
  } 
}


// -------- PORTFOLIO MODAL --------

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  background-color: ${({ theme }) => theme.portfolio.modalBackground};
  padding: 10px 15px;
}
.modal-close {
  text-align: right;
  cursor: pointer;
}
.slider-tab {
  background-color: #D7CAAA;
  height: 25px;
}
.MuiPaper-rounded {
  border-radius: 4px 4px 0px 0px;
  color: ${({ theme }) => theme.about.cardColor};
  background-color: ${({ theme }) => theme.portfolio.modalCardColor};
}
.awssld__bullets .awssld__bullets--active {
  background: ${({ theme }) => theme.portfolio.modalCardColor};
}
.awssld__bullets button {
  background: ${({ theme }) => theme.portfolio.modalCardColor};
}
.awssld__controls__arrow-left:before,
.awssld__controls__arrow-left:after,
.awssld__controls__arrow-right:before,
.awssld__controls__arrow-right:after {
  background-color: ${({ theme }) => theme.portfolio.modalCardColor};
}
.slider-image {
  border: 5px solid ${({ theme }) => theme.portfolio.modalCardColor};

}
.modal-icon {  
  text-align: center;
  position: relative;
}
.modal-icon-spacing {
  padding-left: 1rem;
  padding-right: 1rem;
}

// -------- EXPERIENCE section --------

#experience {
  filter: brightness(100%);
  .section-title {
     color: white !important;
  }
  h1 span {
    color: ${({ theme }) => theme.text};
  }
  .experience-badge {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.experience.experienceChipColor} !important;
    margin-bottom: 5px;
    margin-right: 5px;
  }
  .main-badge {
    color: #fff;
    background: ${({ theme }) => theme.experience.iconBackground} !important;
  }
  .vertical-timeline-element-date {
     color: ${({ theme }) => theme.text};
  }
  .vertical-timeline-element-icon {
     background: ${({ theme }) => theme.experience.iconBackground} !important;
  }
  .experience-icon {
    font-size: 200%;
    margin-top: 13px;
    text-align: center;
    margin-left: 15px;
  }
  .timeline {
    padding-bottom: 60px;
  }
  @media only screen and (max-width: 1169px) { 
    .vertical-timeline-element-date {
      color: black;
    }
    .vertical-timeline::before {
      left: 28px;
    }
    .vertical-timeline-element-icon {
      width: 60px;
      height: 60px;
    }
    .vertical-timeline-element-content {
      margin-left: 80px;
    }
    .vertical-timeline-element-content-arrow {
      top: 24px;
    }
  }  
  @media only screen and (min-width: 1170px) {
    .vertical-timeline.vertical-timeline--two-columns:before {
      left: 50%;
      margin-left: -2px;
    }
  }  
}

// -------- EDUCATION section --------

#education {
  .title-container {
    height: 50px;
  }
  background-color: ${({ theme }) => theme.about.backgroundColor};
  h1 span {
     color: ${({ theme }) => theme.about.h1Color};
  }
  .polaroid span {
    background: ${({ theme }) => theme.about.polaroidSpan};
    display: inline-block;
    margin: 20px 35px;
    padding: 15px 15px;
    text-align: center;
    text-decoration: none;
    box-shadow: 0 4px 6px rgba(0,0,0,.3);
    transition: all .2s linear;
    z-index: 0;
    position: relative;
  }  
  .MuiPaper-root {
    color: ${({ theme }) => theme.about.cardColor};
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: ${({ theme }) => theme.about.cardBackground};
    text-align: left;
    margin: 15px;
  }  
}
#home {
  text-align: center;
}

// -------- ABOUT section --------

#about {
  .title-container {
    height: 50px;
  }
  h1 span {
     color: ${({ theme }) => theme.about.h1Color};
  }
  .polaroid span {
    background: ${({ theme }) => theme.about.polaroidSpan};
    display: inline-block;
    margin: 20px 35px;
    padding: 15px 15px;
    text-align: center;
    text-decoration: none;
    box-shadow: 0 4px 6px rgba(0,0,0,.3);
    transition: all .2s linear;
    z-index: 0;
    position: relative;
  }  
  .MuiPaper-root {
    color: ${({ theme }) => theme.about.cardColor};
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: ${({ theme }) => theme.about.cardBackground};
    text-align: left;
    margin: 15px;
  }  
}
#home {
  text-align: center;
}

// -------- FOOTER section --------

footer {
  background: #1f1f1f;
  min-height: 180px;
  width: 100%;
  overflow: hidden;
  font-size: 14px;
  color: #fff;
  .social-links {
    text-align: center;
    margin-top: 50px;
    font-size: 22px;
    color: #fff;
  }
  .copyright {
    text-align: center;
    padding-bottom: 1.5rem !important;
    padding-top: 1.5rem !important;
  }
}
`;

export default GlobalStyles;
