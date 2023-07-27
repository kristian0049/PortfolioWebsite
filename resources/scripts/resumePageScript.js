var dropDownArrows = document.getElementsByClassName("dropDownArrow");
var getExperience = document.getElementById("experience");

var resumeStyleSheet = document.styleSheets[0].cssRules;
var getQualifications ;


for(var i = 0;i < resumeStyleSheet.length;i++){
    if(resumeStyleSheet[i].selectorText === "#qualifications")
    {
        getQualifications = resumeStyleSheet[i];
        break;
    }
}


function dropDown(event){
    
  
    if(getQualifications.style.display!=="none"){
        getQualifications.style.display="none";
        dropDownArrows[0].style.transform="rotate(270deg)";
    }else if(getQualifications.style.display ==="none"){
        getQualifications.style.display="flex";
        dropDownArrows[0].style.transform="rotate(0deg)";
    }
    
   
}


function showExperience(event){
   
    if(getExperience.style.display !== "none"){
        getExperience.style.display="none"; 
        dropDownArrows[1].style.transform="rotate(270deg)";
    }else if(getExperience.style.display === "none")
    {   
        getExperience.removeAttribute("style");
        dropDownArrows[1].style.transform="rotate(0deg)";
    }
    
    
}

dropDownArrows[0].addEventListener("click",dropDown,false);
dropDownArrows[1].addEventListener("click",showExperience,false)