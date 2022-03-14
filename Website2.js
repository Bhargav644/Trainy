//responsiveness scripting
var items=document.getElementById("ul");
items.style.height="0px";
function onLoad(){
    document.getElementById("none").onclick=function(){
     if(items.style.height=="0px"){
         items.style.height="150px";
     }
     else{
         items.style.height="0px";
     }
     return false;
     }
}
//ends here
// contact drop down menu

$(document).ready(function(){
    $("#fourth").mouseover(function(){
        $("#drop").css({'transform': 'rotateZ(-180deg)','transition': 'transform 0.5s'});
        $("#contact").css({'height':"170px",'transition': 'height 0.8s'})
    });
    $("#contact").mouseover(function(){
        $("#drop").css({'transform': 'rotateZ(-180deg)','transition': 'transform 0.5s'});
        $("#contact").css({'height':"170px",'transition': 'height 0.8s'})
    });
    $("#fourth").mouseleave(function(){
        $("#drop").css({'transform': 'rotateY(-180deg)','transition': 'transform 0.5s'});
        $("#contact").css({'height':"0px",'transition': 'height 0.8s'})
    });
    $("#contact").mouseleave(function(){
        $("#drop").css({'transform': 'rotateY(-180deg)','transition': 'transform 0.5s'});
        $("#contact").css({'height':"0px",'transition': 'height 0.8s'})
    });
    $("#icon1").mouseover(function(){
        $("#social").css({'background-color':"rgb(87, 66, 209)",'transition': 'background-color 0.8s'})
        $("#div").css({'background-color':"rgba(87, 66, 209,0.4)",'transition': 'background-color 0.8s'})
    });
    $("#icon1").mouseleave(function(){
        $("#social").css({'background-color':"white",'transition': 'background-color 0.8s'})
        $("#div").css({'background-color':"white",'transition': 'background-color 0.8s'})
    });
    $("#ico").mouseover(function(){
        $("#social").css({'background-color':"rgb(233, 196, 75)",'transition': 'background-color 0.8s'})
        $("#div").css({'background-color':"rgba(233, 196, 75,0.4)",'transition': 'background-color 0.8s'})
    });
    $("#ico").mouseleave(function(){
        $("#social").css({'background-color':"white",'transition': 'background-color 0.8s'})
        $("#div").css({'background-color':"white",'transition': 'background-color 0.8s'})
    });
    $("#icon3").mouseover(function(){
        $("#social").css({'background-color':"rgb(233, 75, 75)",'transition': 'background-color 0.8s'})
        $("#div").css({'background-color':"rgba(233, 75, 75,0.4)",'transition': 'background-color 0.8s'})
    });
    $("#icon3").mouseleave(function(){
        $("#social").css({'background-color':"white",'transition': 'background-color 0.8s'})
        $("#div").css({'background-color':"white",'transition': 'background-color 0.8s'})
    });

});
//ends here
//here full date scripting goes here
var shortMonth=['Jan','Fer','Mar','Apr','May','Jun','Jul','Agu','Sep','Oct','Nov','Dec'];
var shortDay=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var today=new Date();
var d=today.getDate();
var td=d+1;
var dat=d+2;
var D=today.getDay();
var m=today.getMonth();
var y=today.getFullYear();
document.getElementById("show-date").value=d+"/"+(m+1)+"/"+y;
document.getElementById("day1").innerHTML=shortDay[D%7];
document.getElementById("day2").innerHTML=shortDay[(D+1)%7];
document.getElementById("day3").innerHTML=shortDay[(D+2)%7];
if(m%2==0){
    document.getElementById("dating1").innerHTML=(d)+","+shortMonth[m%12];
    if(td==31){
        document.getElementById("dating2").innerHTML=(td)+","+shortMonth[m%12];
    }
    else{
        if(d==31){ //when previous date is 31st than we have to change the month
            document.getElementById("dating2").innerHTML=(td)%31+","+shortMonth[(m+1)%12];
        }
        else{
            document.getElementById("dating2").innerHTML=(td)%31+","+shortMonth[m%12];
        }
    }
    if(dat==31){
        document.getElementById("dating3").innerHTML=(dat)+","+shortMonth[m%12];
    }
    else{
        if(d==31 ||d==30){ //when first date is 30th or 31st than we have to change the month
            document.getElementById("dating3").innerHTML=(dat)%31+","+shortMonth[(m+1)%12];
        }
        else{
            document.getElementById("dating3").innerHTML=(dat)%31+","+shortMonth[m%12];
        }
    }
}
else if(m==1){
    document.getElementById("dating1").innerHTML=(d)+","+shortMonth[m%12];654
    if(d==28){
    }
}
else{
    document.getElementById("dating1").innerHTML=(d)+","+shortMonth[m%12];
    if(td==30){
        document.getElementById("dating2").innerHTML=(d+1)+","+shortMonth[m%12];
    }
    else{
        if(d==30){ //when previous date is 30th than we have to change the month
            document.getElementById("dating2").innerHTML=(td)%30+","+shortMonth[(m+1)%12];
        }
        else{
            document.getElementById("dating2").innerHTML=(td)%30+","+shortMonth[m%12];
        }
    }
    if(dat==30){
        document.getElementById("dating3").innerHTML=(dat)+","+shortMonth[m%12];
    }
    else{
        if(d==30 ||d==29){ //when first date is 30th or 29th than we have to change the month
            document.getElementById("dating3").innerHTML=(dat)%30+","+shortMonth[(m+1)%12];
        }
        else{
            document.getElementById("dating3").innerHTML=(dat)%30+","+shortMonth[m%12];
        }
    }
}
function changedate(){
    var a=document.getElementById("select-date").value;
    document.getElementById("show-date").value=a.substring(8,10)+"/"+a.substring(5,7)+"/"+a.substring(0,4);
}
function current(){
    document.getElementById("show-date").value=d+"/"+(m+1)+"/"+y;
}
function future(){
    if(d==31 && m%2==0){
        document.getElementById("show-date").value=(d+1)%31+"/"+(m+2)+"/"+y;
    }
    else if(d==30 && m%2!=0){
        document.getElementById("show-date").value=(d+1)%30+"/"+(m+2)+"/"+y;
    }
    else{
        document.getElementById("show-date").value=(d+1)%30+"/"+(m+1)+"/"+y;
    }
}
function further(){
    if(d==31 && m%2==0){
        document.getElementById("show-date").value=(d+2)%31+"/"+(m+3)+"/"+y;
    }
    else if(d==30 && m%2!=0){
        document.getElementById("show-date").value=(d+2)%30+"/"+(m+3)+"/"+y;
    }
    else{
        document.getElementById("show-date").value=(d+2)%30+"/"+(m+1)+"/"+y;
    }
}
//here full date scripting ends here
// train no to state name format scripting
///////////////////////////////////////////////////////////////////////////////////////
function change_to_Trainno(id,id2){
   var v=document.getElementById(id).value;
   document.getElementById(id).value=v.match(/[\w\d]+/g);
   var patt=new RegExp(/^[0-9]/g);
   if(patt.test(v)){
      if(window.confirm("If You Select 'OK' You Will Be Redirected To Train No. Format")){
        document.getElementById(id).value=null;
        document.getElementById(id2).value=null;
        document.getElementById(id).style.display="none";
        document.getElementById(id2).style.display="none";
        document.getElementById("trainno").style.display="inline-block";
      }
      else{
          alert("Enter Valid State Name");
          document.getElementById(id).value=null;
      }
   }
}
function Trainno_to_city(){
    var v=document.getElementById("trainno").value;
    document.getElementById("trainno").value=v.match(/[\d]+/g);
    var patt=new RegExp(/^[A-Za-z]/g);
    if(patt.test(v)){
        if(window.confirm("If You Select 'OK' You Will Be Redirected To State's Name Format")){
            document.getElementById("trainno").value=null;
            document.getElementById('select-city1').style.display="inline-block";
            document.getElementById('select-city2').style.display="inline-block";
            document.getElementById("trainno").style.display="none";
        }
        else{
            alert("Enter Valid Train Number");
            document.getElementById("trainno").value=null;
        }
    }

 }
 /////////////////////////////////////////////////////
var extern = document.getElementsByTagName("link")[0].import;
function showTickets(){
    alert("Hello");
    var a=extern.getElementsByTagName("div")[0];
    document.getElementById("tickets").innerHTML=a;
}
/**Scroll scripting starts here */
window.onscroll=function(){scroll()};
function scroll(){
    if(document.documentElement.scrollTop >20 || document.body.scrollTop >20){
       document.getElementById("up").style.display="block";
    }
    else{
        document.getElementById("up").style.display="none";
    }
}
document.getElementById("up").onclick=function(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}
/**Scroll scripting ends here */
function login(){
const mediaQuery=window.matchMedia('(max-width: 1100px)');
if(mediaQuery.matches){
        let underline=document.getElementById("under");
        let logform=document.getElementById("log");
        let regform=document.getElementById("reg");
        underline.style.transform="translateX(-120%)";
        underline.style.transition="transform 0.6s";
        regform.style.transform="translateX(450px)";
        logform.style.transform="translateX(450px)";
        regform.style.transition="transform 0.7s";
        logform.style.transition="transform 0.7s";
    }

else{
    let underline=document.getElementById("under");
    let logform=document.getElementById("log");
    let regform=document.getElementById("reg");
    underline.style.transform="translateX(-120%)";
    underline.style.transition="transform 0.6s";
    regform.style.transform="translateX(450px)";
    logform.style.transform="translateX(450px)";
    regform.style.transition="transform 0.7s";
    logform.style.transition="transform 0.7s";
    document.getElementById("before-right").style.width="600px";
    document.getElementById("after-right").style.width="0px";

}
}
function register(){
const mediaQuery=window.matchMedia('(max-width: 1100px)');    
    if(mediaQuery.matches){   
        let underline=document.getElementById("under");
        let logform=document.getElementById("log");
        let regform=document.getElementById("reg");
        underline.style.transform="translateX(0.2px)";
        underline.style.transition="transform 0.6s";
        regform.style.transform="translateX(0px)";
        logform.style.transform="translateX(0px)";
        logform.style.transition="transform 0.7s";
        regform.style.transition="transform 0.7s";
    }
    else{
        let underline=document.getElementById("under");
        let logform=document.getElementById("log");
        let regform=document.getElementById("reg");
        underline.style.transform="translateX(0.2px)";
        underline.style.transition="transform 0.6s";
        regform.style.transform="translateX(0px)";
        logform.style.transform="translateX(0px)";
        logform.style.transition="transform 0.7s";
        regform.style.transition="transform 0.7s";
        document.getElementById("after-right").style.width="600px";
        document.getElementById("before-right").style.width="0px";
    }
}
/**Validations starts from here for account page */
//
//
//
/**validation for login segment */
function fillinput(id,id2,spanid){
        if(document.getElementById(id).value==""){
            document.getElementById(spanid).innerHTML="*";
            document.getElementById("lbutton").disabled=true;
        }
        else if(document.getElementById(id).value==""||document.getElementById(id2).value==""){
          document.getElementById("lbutton").disabled=true;
        }
        else{
          document.getElementById("lbutton").disabled=false;
          document.getElementById(spanid).innerHTML="";
        }
}
function filledinput(id,id2,spanid){
        if(document.getElementById(id).value!=""&&document.getElementById(id2).value!=""){
            document.getElementById("lbutton").disabled=false;
          }
        document.getElementById(spanid).innerHTML="";
        
}
//validation for login segment ends here */
//
//
//
// validtaing registration form
function Rfillinput(id,id2,id3,spanid){
        if(document.getElementById(id).value==""){
            document.getElementById(spanid).innerHTML="*";
            document.getElementById("rbutton").disabled=true;
        }
        else if(document.getElementById(id).value==""||document.getElementById(id2).value=="" ||document.getElementById(id3).value=="" ){
          document.getElementById("rbutton").disabled=true;
        }
        else{
          document.getElementById("rbutton").disabled=false;
          document.getElementById(spanid).innerHTML="";
        }
}
function Rfilledinput(id,id2,id3,spanid){
      if(document.getElementById(id).value!=""&&document.getElementById(id2).value!="" &&document.getElementById(id3).value!=""){
          document.getElementById("rbutton").disabled=false;
        }
      document.getElementById(spanid).innerHTML="";
      if(id=='rinput2'){
          $(document).ready(function(){
            $("#pro").show("slow");
          });
      }
}
//ending velidation for registration form/
/**and validation ends here */
//
//
//
//progress bar scripting goes here


function show(eye1,eye2,id){
  document.getElementById(eye1).style.display="none";
  document.getElementById(eye2).style.display="inline-block";
  if(eye2=="n-reye1" || eye2=="n-reye2"){
    document.getElementById(id).setAttribute("type","text");
  }
  else{
    document.getElementById(id).setAttribute("type","password");
  }

}
 /**Scripting for account page ends here**/
 /************************************************/
/***************************************************************************************/
// Ticket scripting goes here
function Search(){
  var input1=document.getElementById("select-city1").value.toUpperCase();
  var input2=document.getElementById("select-city2").value.toUpperCase();
  var input3=document.getElementById("trainno").value;
  if(input3!=""){
    if(input3=="02302"){
        document.getElementById("Delhi1").style.display="block";
        document.getElementById("Delhi2").style.display="none";
        document.getElementById("Mumbai1").style.display="none";
        document.getElementById("Mumbai2").style.display="none";
        document.getElementById("error-div").style.display="none";
      }
      else if(input3=="05671"){
        document.getElementById("Delhi1").style.display="none";
        document.getElementById("Delhi2").style.display="none";
        document.getElementById("Mumbai1").style.display="none";
        document.getElementById("Mumbai2").style.display="block";
        document.getElementById("error-div").style.display="none";
      }
      else if(input3=="2221"){
        document.getElementById("Delhi1").style.display="none";
        document.getElementById("Delhi2").style.display="none";
        document.getElementById("Mumbai1").style.display="block";
        document.getElementById("Mumbai2").style.display="none";
        document.getElementById("error-div").style.display="none";
      }
      else if(input3=="02317"){
        document.getElementById("Delhi1").style.display="none";
        document.getElementById("Delhi2").style.display="block";
        document.getElementById("Mumbai1").style.display="none";
        document.getElementById("Mumbai2").style.display="none";
        document.getElementById("error-div").style.display="none";
      }
      else{
        document.getElementById("Delhi1").style.display="none";
        document.getElementById("Delhi2").style.display="none";
        document.getElementById("error-div").style.display="block";
        document.getElementById("Mumbai1").style.display="none";
        document.getElementById("Mumbai2").style.display="none";
      }

  }
  else{
    if(input1=="DELHI" && input2=="KOLKATA"){
        document.getElementById("Delhi1").style.display="block";
        document.getElementById("Delhi2").style.display="block";
        document.getElementById("Mumbai1").style.display="none";
        document.getElementById("Mumbai2").style.display="none";
    }
    else if(input1=="MUMBAI" && input2=="KOLKATA"){
          document.getElementById("Mumbai1").style.display="block";
          document.getElementById("Mumbai2").style.display="block";
          document.getElementById("Delhi1").style.display="none";
          document.getElementById("Delhi2").style.display="none";
    }
    else if(input1==input2){
        alert("Same Cities Are Not Allowed");
    }
    else if(input1=="" ||input2==""){
        alert("Enter Valid Input");
    }
    else{
        document.getElementById("Delhi1").style.display="none";
        document.getElementById("Delhi2").style.display="none";
        document.getElementById("error-div").style.display="block";
        document.getElementById("Mumbai1").style.display="none";
        document.getElementById("Mumbai2").style.display="none";
      }

  }

}

//Ticket Scripting Ends here