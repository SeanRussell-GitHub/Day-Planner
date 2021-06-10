
//Pseudocode:

// color code the time blocks
    // figure out what is the time now.
    // compare the time with each block.
    // color the blocks accordingly
// handle save
    // set up a js representation of the scheduele
    // set up event listener
    // handle the update
    // sync with storage
    let container = document.getElementById('container');
    let currentDay = document.getElementById('currentDay');
    let currentHour = (moment().hour());
    let textArea = document.getElementById('lineItem');
    let blox = document.getElementsByClassName('input-group');


    currentDay.append(moment().format('MMMM Do YYYY'));
    console.log(moment().format('dddd'));
    console.log(textArea.className);
    console.log(currentHour);

    // local storage producing
    document.getElementById('text9am').innerHTML = localStorage.getItem('text9am');
    document.getElementById('text10am').innerHTML = localStorage.getItem('text10am');
    document.getElementById('text11am').innerHTML = localStorage.getItem('text11am');
    document.getElementById('text12am').innerHTML = localStorage.getItem('text12am');
    document.getElementById('text1pm').innerHTML = localStorage.getItem('text1pm');
    document.getElementById('text2pm').innerHTML = localStorage.getItem('text2pm');
    document.getElementById('text3pm').innerHTML = localStorage.getItem('text3pm');
    document.getElementById('text4pm').innerHTML = localStorage.getItem('text4pm');


// event listeners and local storage for each line
    document.getElementById("bttn9").addEventListener("click", function() {
        console.log(text9am.value);
        let entry9am = text9am.value;
        console.log(entry9am);
        localStorage.setItem('text9am',entry9am);
      });    
    document.getElementById("bttn10").addEventListener("click", function() {
        console.log(text10am.value);
        let entry10am = text10am.value;
        console.log(entry10am);
        localStorage.setItem('text10am',entry10am);
      });
      document.getElementById("bttn11").addEventListener("click", function() {
        console.log(text11am.value);
        let entry11am = text11am.value;
        console.log(entry11am);
        localStorage.setItem('text11am',entry11am);
      });
      document.getElementById("bttn12").addEventListener("click", function() {
        console.log(text12am.value);
        let entry12am = text12am.value;
        console.log(entry12am);
        localStorage.setItem('text12am',entry12am);
      });
      document.getElementById("bttn13").addEventListener("click", function() {
        console.log(text1pm.value);
        let entry1pm = text1pm.value;
        console.log(entry1pm);
        localStorage.setItem('text1pm',entry1pm);
      });
      document.getElementById("bttn14").addEventListener("click", function() {
        console.log(text2pm.value);
        let entry2pm = text2pm.value;
        console.log(entry2pm);
        localStorage.setItem('text2pm',entry2pm);
      });
      document.getElementById("bttn15").addEventListener("click", function() {
        console.log(text3pm.value);
        let entry3pm = text3pm.value;
        console.log(entry3pm);
        localStorage.setItem('text3pm',entry3pm);
      });
      document.getElementById("bttn16").addEventListener("click", function() {
        console.log(text4pm.value);
        let entry4pm = text4pm.value;
        console.log(entry4pm);
        localStorage.setItem('text4pm',entry4pm);
      });
      document.getElementById("bttn17").addEventListener("click", function() {
        console.log(text5pm.value);
        let entry5pm = text5pm.value;
        console.log(entry5pm);
        localStorage.setItem('text5pm',entry5pm);
      });
    
    