let rows = 5;   
let repeat = 6; 
let allStars = []; 

for (let r = 0; r < repeat; r++) {
    let stars = []; 


    for (let i = 1; i <= rows; i++) {
        let line = "";

        for (let s = 0; s < rows - i; s++) {
            line += " ";
        }

        for (let st = 0; st < 2 * i - 1; st++) {
            line += "*";
        }

        stars.push(line);
    }

    for (let i = rows - 1; i >= 1; i--) {
        let line = "";

        for (let s = 0; s < rows - i; s++) {
            line += " ";
        }

        for (let st = 0; st < 2 * i - 1; st++) {
            line += "*";
        }

        stars.push(line);
    }

    allStars.push(stars); 
}


for (let p = 0; p < allStars.length; p++) {
    console.log(allStars[p].join("\n"));
    console.log(""); 
}
