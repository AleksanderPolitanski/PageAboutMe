const mobileMenuPic = document.querySelector('.mobile-menu-pic');
const mobileMenuToolbar = document.querySelector('.mobile-menu-toolbar');

const tileDesc = document.getElementById('tile-desc');

const tileBulk = document.getElementById('tile-bulk');
const tileReport = document.getElementById('tile-report');
const tileConv = document.getElementById('tile-conv');
const tileMass = document.getElementById('tile-mass');
const tileAbuse = document.getElementById('tile-abuse');
const tileTrack = document.getElementById('tile-track');
const tileBugs = document.getElementById('tile-bugs');
const tileTest = document.getElementById('tile-test');
const tileElse = document.getElementById('tile-else');

const tileBulkText = 'User interface to enable quick loading of specific input files to create Leads in Salesforce. Technologies: APEX (80%), Visualforce (20%). ';
const tileReportText = 'Functionality, that lets users browse given phrase in Report metadata (either all or selected). Helpful when analyzing which Reports use given field as filter. Technologies: APEX (90%), LWC (10%). ';
const tileConvText = 'Quick Action, that checks and listis all required fields that are missing before Lead conversion. Technologies: Apex (80%), Screen Flow (20%). ';
const tileMassText = 'R script that lets user query huge numbers of records, based on a given list of ids. Technologies: R (100%). ';
const tileAbuseText = 'Apex script, that lets users analyze descriptions of a given scope of Cases, assesing level of abusiveness in each of them and reporting the worst ones. Technologies: APEX (80%), Visualforce (20%).  ';
const tileTrackText = 'Custom LWC Dashboard to track Custom Tasks per team, status, severity etc. Using external JS library (chartjs) to show data on customized charts. Technologies: LWC (80%), Apex (20%). ';
const tileBugsText = 'A lot of bug fixing in existing Apex, Visualforce, LWC, Aura, Flows. A good way to learn reading code written by other developers. Technologies: Apex (70%), Visualforce (10%), LWC (10%), Aura (10%) ';
const tileTestText = 'Standard Apex Code Coverage tests, with Assertions, Test Data creation, avoiding SeeAllData annotation. (I also have some experience in manual testing). Technologies: Apex (100%) ';
const tileElseText = 'More projects to come... I plan on improving my Frontend skills, GIT, REST/SOAP, Object Oriented Programing knowledge, algorithms and project patterns. A lot to do, but I\'ll get there.';

const allProjectTiles = document.getElementsByClassName('project-tile');


tileBulk.addEventListener('click', () => {
  removeWhiteBackgrounds(allProjectTiles);
  tileBulk.style.backgroundColor = '#EFEBE2';
  tileBulk.style.color = '#5F72A6';
  tileBulk.style.border = '1px solid #5F72A6';
  tileDesc.textContent = tileBulkText;
})

tileReport.addEventListener('click', () => {
  removeWhiteBackgrounds(allProjectTiles);
  tileReport.style.backgroundColor = '#EFEBE2';
  tileReport.style.color = '#5F72A6';
  tileReport.style.border = '1px solid #5F72A6';
  tileDesc.textContent = tileReportText;
})

tileConv.addEventListener('click', () => {
  removeWhiteBackgrounds(allProjectTiles);
  tileConv.style.backgroundColor = '#EFEBE2';
  tileConv.style.color = '#5F72A6';
  tileConv.style.border = '1px solid #5F72A6';
  tileDesc.textContent = tileConvText;
})

tileMass.addEventListener('click', () => {
  removeWhiteBackgrounds(allProjectTiles);
  tileMass.style.backgroundColor = '#EFEBE2';
  tileMass.style.color = '#5F72A6';
  tileMass.style.border = '1px solid #5F72A6';
  tileDesc.textContent = tileMassText;
})

tileAbuse.addEventListener('click', () => {
  removeWhiteBackgrounds(allProjectTiles);
  tileAbuse.style.backgroundColor = '#EFEBE2';
  tileAbuse.style.color = '#5F72A6';
  tileAbuse.style.border = '1px solid #5F72A6';
  tileDesc.textContent = tileAbuseText;
})


tileTrack.addEventListener('click', () => {
  removeWhiteBackgrounds(allProjectTiles);
  tileTrack.style.backgroundColor = '#EFEBE2';
  tileTrack.style.color = '#5F72A6';
  tileTrack.style.border = '1px solid #5F72A6';
  tileDesc.textContent = tileTrackText;
})


tileBugs.addEventListener('click', () => {
  removeWhiteBackgrounds(allProjectTiles);
  tileBugs.style.backgroundColor = '#EFEBE2';
  tileBugs.style.color = '#5F72A6';
  tileBugs.style.border = '1px solid #5F72A6';
  tileDesc.textContent = tileBugsText;
})

tileTest.addEventListener('click', () => {
  removeWhiteBackgrounds(allProjectTiles);
  tileTest.style.backgroundColor = '#EFEBE2';
  tileTest.style.color = '#5F72A6';
  tileTest.style.border = '1px solid #5F72A6';
  tileDesc.textContent = tileTestText;
})


tileElse.addEventListener('click', () => {
  removeWhiteBackgrounds(allProjectTiles);
  tileElse.style.backgroundColor = '#EFEBE2';
  tileElse.style.color = '#5F72A6';
  tileElse.style.border = '1px solid #5F72A6';
  tileDesc.textContent = tileElseText;
})


const removeWhiteBackgrounds = function(listOfTiles){
  for (const element of listOfTiles) {
    element.style.backgroundColor = '#8294C4';
    element.style.color = '#EFEBE2';
    element.style.border = 'none';
  }
}


const mailMe = function(){
    window.location.href = "mailto:a.politanski@gmail.com";
}

const openLinkedin = function(){
  window.open("https://www.linkedin.com/in/aleksander-polita%C5%84ski-316238145/");
}




// mobileMenuPic.addEventListener('click', () => {
//   toggleMenu();
// });


// const toggleMenu = function(){
//   if(mobileMenuToolbar.classList.contains('hidden')){
//     mobileMenuToolbar.classList.remove('hidden');
//   } else {
//     mobileMenuToolbar.classList.add('hidden');
//   }
// }