//your JS code here. If required.
document.getElementById("enterBtn").addEventListener("click", function() {
            let pTag = document.getElementById("status");
            let h1Tag = document.createElement("h1");
            h1Tag.textContent = "Entered Metaverse"; 
            pTag.replaceWith(h1Tag); 
        });