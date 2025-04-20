// Assuming you have a loader element and message element in your HTML
// Example HTML: <div id="loader" style="display:none;">Uploading...</div><div id="uploadMessage"></div>

document.getElementById("uploadForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const loader = document.getElementById("loader");
    const uploadMessage = document.getElementById("uploadMessage");

    // Show loader
    loader.style.display = "block";
    uploadMessage.textContent = ""; // Clear previous message

    try {
        const response = await fetch(`https://resourcesapi-g8dtgtdrb7eqcxfw.centralindia-01.azurewebsites.net/api/notes/upload`, {
            method: "post",
            body: formData,
            // Remove "Content-Type" header for FormData, as it’s set automatically
            headers: {
                "Access-Control-Allow-Origin": "*" // Note: This is typically a server response header, not a request header
            }
        });
        
        const result = await response.json();

        if (response.ok) {
            uploadMessage.textContent = "✅ File uploaded successfully!";
            form.reset();
        } else {
            uploadMessage.textContent = "❌ Upload failed: " + result.message;
        }
    } catch (error) {
        console.error("Upload error:", error);
        uploadMessage.textContent = "❌ Upload failed. Try again.";
    } finally {
        // Hide loader regardless of success or failure
        loader.style.display = "none";
    }
});