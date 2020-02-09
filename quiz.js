var static=document.getElementById("static");
console.log(static);
 var i;
 for(i=30;i>0;i--) {
     var span="<span class='number'>"+i+"</span>";
     static.insertAdjacentHTML("afterbegin",span);
 }

 //quiz application//
var Qcontent=document.getElementById("Qcontent");
 var opt1=document.getElementById("opt1");
 var opt2=document.getElementById("opt2");
 var opt3=document.getElementById("opt3");
 var opt4=document.getElementById("opt4");

 var app= {
    questions:[
       { q:'सिन्धु घाटी की सभ्यता गैर - आर्य थी क्योंकि -',
         options:[' वह नगरीय सभ्यता थी','उसकी अपनी लिपि थी','उसकी खेतिहर अर्थ व्यवस्था थी','उसका विस्तार नर्मदा घाटी तक था'],
         asnwer:1 },
         { q:'सिन्धु घाटी संस्कृति वैदिक सभ्यता से भिन्न थी क्योंकि -',
         options:[' इसके पास विकसित शहरी जीवन की वस्तुएं थी','इसके पास चित्रलेखिय लिपि थी','इसके पास लोहे और रक्षा शास्त्रों के ज्ञान का अनुभव था','उपर्युक्त सभी'],
         asnwer:4 },
         { q:'एक जुते हुए खेत को खोज की गयी थी',
         options:[' मोहनजोदड़ों में','कालीबंगा में','हड़प्पा में','लोथल में'],
         asnwer:2 },
         { q:'विशाल स्नानागार किस पुरातत्व स्थल में पाया गया था',
         options:[' रोपड़','हड़प्पा','मोहनजोदड़ो','कालीबंगा'],
         asnwer:3 }
    ],
    index:0,
    load:function() {
     Qcontent.innerHTML=this.questions[this.index].q;
     opt1.innerText=this.questions[this.index].options[0];
     opt2.innerText=this.questions[this.index].options[1];
     opt3.innerText=this.questions[this.index].options[2];
     opt4.innerText=this.questions[this.index].options[3];
    } ,
    check:function(element) {
        var ElementId=element.id.split("");
        var x=ElementId[3];
        console.log(x);
        //console.log(ElementId[ElementId.length-1]);
         if(ElementId[ElementId.length-1]==this.questions[this.index].asnwer) {
             this.rightAnswer++;
             console.log(this.rightAnswer);
         }
         else {
             this.wrongAnswer++;
         }
      
      
    },
    rightAnswer:0,
    wrongAnswer:0
}

window.onload=app.load();
//Qcontent.innerHTML=app.questions[app.index].q;

function answered(element) {
   app.check(element);
}