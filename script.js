
//Pseudocode:
// display the current day at the top of the calender
// create time blocks
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
    // console.log(moment().format("MMM Do YY"));
    // function createTimeBlocks(){
    //     for (let i = 9; i <= 17; i++) {
    //         console.log(i+':00'); 
    //     }
    // };
    // createTimeBlocks();
    ///////////////////////
    currentDay.append(moment().format('MMMM Do YYYY'));
    console.log(moment().format('dddd'));
    function createTimeBlocks(){
        
        // 9:00 - 17:00
        for (let i = 9; i <= 17; i++) {
            container.append(i + ':00');
            console.log(i + ':00');
        };
    };
    

        createTimeBlocks();
        function saveToSomeSlot(){
            // super important please watch the !!!!lecture office hours!!!!
            // if first time user init the database
            // if not get the existing data base
            if(!localStorage.getItem('scheduele')){
                localStorage.setItem('scheduele', 'New user - welcome!');
            }
            alert(`Here is the scheduele for today: ${localStorage.getItem('scheduele')}`)
            const choice = prompt('Which entry would you like to update?')
            localStorage.setItem('scheduele',choice);
            // update the entry
        }
        saveToSomeSlot();
        
     