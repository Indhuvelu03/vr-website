
    function showPopup() {
        const popup = document.getElementById("popup");
        popup.style.display = "block";
        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.zIndex = "1050"; // Ensures it appears above other elements
        popup.style.width = "30%"; // Increase the width of the popup
        popup.style.height = "20%"; // Increase the height of the popup
        popup.style.backgroundColor = "#f8f9fa"; // Add a light background color to differentiate it
        popup.style.borderRadius = "10px"; // Add rounded corners for better appearance
        popup.style.boxShadow = "0 4px 8px rgba(14, 9, 9, 0.2)"; // Add a shadow for depth
        popup.style.display = "flex";
        popup.style.flexDirection = "column";
        popup.style.justifyContent = "center";
        popup.style.alignItems = "center";
        popup.style.padding = "20px"; // Add padding for better spacing
        popup.style.marginLeft = "20px"; // Add margin-left to create space from the left margin // Add padding for better spacing
    }

    function closePopup() {
        document.getElementById("popup").style.display = "none";
    }

    function confirmAction() {
        alert("Action confirmed!");
        closePopup();
    }
