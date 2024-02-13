function showMessage(response) {
    if (response === "No") {
        // Font styling for 'No' response
        const noMessage = document.getElementById("question");
        noMessage.style.fontFamily = "Georgia";
        noMessage.style.fontSize = "50px";
        noMessage.style.fontWeight = "normal";

        // Other actions for 'No' response
        const noButton = document.getElementById("no-button");
        const container = document.querySelector(".container");
        const maxWidth = window.innerWidth - noButton.offsetWidth;
        const maxHeight = window.innerHeight - noButton.offsetHeight;

        // Set button position to absolute
        noButton.style.position = "absolute";

        // Change image source to "gun.gif"
        document.getElementsByClassName("image")[0].src = "gun.gif";

        // Generate random coordinates within the visible container
        const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
        const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

        // Apply new coordinates to the button
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";

        // Update text content and hide name message
        noMessage.textContent = "'No' is not a valid answer:p";
        document.getElementById("name").style.display = "none";

        // Optional: You can also add a timeout to reset the position after a few seconds
    }

    if (response === "Yes") {
        // Remove name message and no button
        document.getElementById("name").remove();
        document.getElementById("no-button").remove();
        document.getElementById("additional-message").textContent = "can't take you out on date tho, cuz im shy";
        document.getElementById("additional-message").style.display = "block";
        document.getElementById("additional-message2").textContent = "but i'm currently recording your song:))";
        document.getElementById("additional-message2").style.display = "block";

        // Font styling for 'Yes' response
        const yesMessage = document.getElementById("question");
        yesMessage.style.fontFamily = "Times New Roman";
        yesMessage.style.fontSize = "50px";
        yesMessage.style.fontWeight = "normal";

        // Other actions for 'Yes' response
        yesMessage.textContent = "YESSSSSS!";
        yesMessage.style.display = "block";
        yesMessage.style.fontStyle = "normal";
        document.getElementsByClassName("image")[0].src = "chipi.gif";

        // Remove yes button
        document.getElementById("yesButton").remove();
    }
}
