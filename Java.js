

// Funktionen är att man kan söka på sidan, och då kommer det upp et pop-up fönster som sammanfattar vad du har sökt på.

function sokPaSidan () {
 let sokord = document.getElementById("sokfalt").value;

    if (sokord === "") { 
        alert ("Skriv något att söka efter!");
    } else {
        alert("Du söker efter: " + sokord);
    }
}
 