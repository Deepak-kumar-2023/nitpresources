// alert("Welcome to the Resources Page!");

document.addEventListener("DOMContentLoaded", () => {
    loadResources();
});

 


// async function loadResources() {
//     // alert("Loading resources...");
    
//     const branch = document.getElementById("branch").value;
//     // console.log(branch);
//     if (!branch) {
//         clearSections();
//         return;
//     }

   

//     try {
//         // Replace with your API endpoint
//         const response = await fetch(`https://resourcesapi-g8dtgtdrb7eqcxfw.centralindia-01.azurewebsites.net/api/notes?year=1&&branch=${branch}`,{
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Access-Control-Allow-Origin": "*"
//             }
//         });
//         const data = await response.json();
//         // Filter resources by selected branch
//         console.log(`data ${JSON.stringify(data)}`);

//         const branchResources = data.filter(resource => resource.branch.toLowerCase() === branch);
//        console.log(`branchResources ${JSON.stringify(branchResources)}`);
//         if (branchResources.length === 0) {
//             clearSections();
//             alert("No resources found for the selected branch.");
//             return;
//         }
        

//         // Organize resources by year
        
//         const resourcesByYear = {
//             first: { papers: [], notes: [], coding: [], videos: [] },
//             second: { papers: [], notes: [], coding: [], videos: [] },
//             third: { papers: [], notes: [], coding: [], videos: [] },
//             fourth: { papers: [], notes: [], coding: [], videos: [] }
//         };

//         branchResources.forEach(resource => {
//             // Map calendar year to academic year (adjust as needed)
//             const academicYear = resource.year;
//             console.log(`Academic Year: ${academicYear}`);

//             const yearKey = ["first", "second", "third", "fourth"][academicYear - 1] || "first";
//             console.log(`Year Key: ${yearKey}`);

//             console.log(`Resource: ${JSON.stringify(resource)}`);
//             console.log(`Resource Title: ${resource.title}`);
//             console.log(`Resource Subject: ${resource.subject}`);
//             const title = resource.title.toLowerCase();
//             const resourceInfo = {
//                 subject: resource.subject,
//                 url: resource.fileUrl
//             };
           
//             // console.log(`resourceInfo ${JSON.stringify(resourceInfo)}`);

//             // Categorize based on title
//             if (title.includes("exam paper")) {
//                 resourcesByYear[yearKey].papers.push(resourceInfo);
//             } else if (title.includes("notes") && !title.includes("coding")) {
//                 resourcesByYear[yearKey].notes.push(resourceInfo);
//             } else if (title.includes("coding")) {
//                 resourcesByYear[yearKey].coding.push(resourceInfo);
//             } else if (title.includes("video")) {
//                 resourcesByYear[yearKey].videos.push(resourceInfo);
//             }
//         });
        

//         // Update DOM
       
//         updateSections(resourcesByYear);
//         // console.log(`resourcesByYear ${JSON.stringify(resourcesByYear)}`);
       
       
       
//     } catch (error) {
//         console.error("Error fetching resources:", error);
//         clearSections();
//         alert("Failed to load resources. Please try again.");
//     } finally {
//         // setLoadingState(false);
        
//     }
// }
async function loadResources() {
    const branch = document.getElementById("branch").value;
    if (!branch) {
        clearSections();
        return;
    }

    try {
        // Fetch resources for each year (1 through 4)
        const allResources = [];
        for (let year = 1; year <= 4; year++) {
            const response = await fetch(`https://resourcesapi-g8dtgtdrb7eqcxfw.centralindia-01.azurewebsites.net/api/notes?year=${year}&branch=${branch}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                    // Removed "Access-Control-Allow-Origin" as it’s a server response header
                }
            });
            const data = await response.json();
            console.log(`API Response for year ${year}: ${JSON.stringify(data)}`);
            allResources.push(...data); // Combine results from all years
        }

        const branchResources = allResources.filter(resource => resource.branch.toLowerCase() === branch.toLowerCase());
        console.log(`Filtered Resources: ${JSON.stringify(branchResources)}`);

        if (branchResources.length === 0) {
            clearSections();
            alert("No resources found for the selected branch.");
            return;
        }

        // Organize resources by year
        const resourcesByYear = {
            first: { papers: [], notes: [], coding: [], videos: [] },
            second: { papers: [], notes: [], coding: [], videos: [] },
            third: { papers: [], notes: [], coding: [], videos: [] },
            fourth: { papers: [], notes: [], coding: [], videos: [] }
        };

        branchResources.forEach(resource => {
            const academicYear = parseInt(resource.year); // Ensure year is an integer
            console.log(`Resource Year: ${academicYear}, Resource: ${JSON.stringify(resource)}`);

            // Map to year key, default to "first" if invalid
            const yearKey = ["first", "second", "third", "fourth"][academicYear - 1] || "first";
            console.log(`Mapped Year Key: ${yearKey}`);

            const resourceInfo = {
                subject: resource.subject,
                url: resource.fileUrl
            };

            // Categorize based on title
            const title = resource.title.toLowerCase();
            if (title.includes("exam paper")) {
                resourcesByYear[yearKey].papers.push(resourceInfo);
            } else if (title.includes("notes") && !title.includes("coding")) {
                resourcesByYear[yearKey].notes.push(resourceInfo);
            } else if (title.includes("coding")) {
                resourcesByYear[yearKey].coding.push(resourceInfo);
            } else if (title.includes("video")) {
                resourcesByYear[yearKey].videos.push(resourceInfo);
            }
        });

        // Update DOM
        updateSections(resourcesByYear);
        console.log(`Resources by Year: ${JSON.stringify(resourcesByYear)}`);

    } catch (error) {
        console.error("Error fetching resources:", error);
        clearSections();
        alert("Failed to load resources. Please try again.");
    }
}

function clearSections() {
    const yearIds = ["first-year", "second-year", "third-year", "fourth-year"];
    yearIds.forEach(id => {
        document.getElementById(id).innerHTML = "";
    });
}

function setLoadingState(isLoading) {
    const yearIds = ["first-year", "second-year", "third-year", "fourth-year"];
    yearIds.forEach(id => {
        document.getElementById(id).innerHTML = isLoading ? "<p class='loader'>Loading...</p>" : "";
    });
}




function floatHeart(x, y) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    document.getElementById('heart-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
}

function updateSections(resourcesByYear) {
    showLoader();

    setTimeout(() => { // mimic loading
        ['first', 'second', 'third', 'fourth'].forEach((yearKey) => {
            const container = document.getElementById(`${yearKey}-year`);
            container.innerHTML = '';
            
            const yearResources = resourcesByYear[yearKey] || {};
            // console.log(`yearResources ${JSON.stringify(yearResources)}`);

            for (const section in yearResources) {
                const items = yearResources[section];

                items.forEach((resource) => {
                    const subject = resource.subject || 'Resource';
                    const url = resource.url || '#';

                    // Parse Cloudinary URL to extract base and public_id
                    const urlParts = url.split('/upload/');
                    if (urlParts.length < 2) {
                        console.error('Invalid Cloudinary URL:', url);
                        return;
                    }
                    const baseUrl = urlParts[0]; // e.g., https://res.cloudinary.com/your_cloud_name
                    const pathParts = urlParts[1].split('/');
                    const publicId = pathParts.slice(1).join('/'); // e.g., v1745045203/pdf_uploads/ibvndntwkakckhzjibzp.pdf

                    // Construct download URL with fl_attachment transformation
                    const downloadUrl = `${baseUrl}/upload/fl_attachment/${publicId}`;
                    // console.log(`Original URL: ${url}`);
                    // console.log(`Download URL: ${downloadUrl}`);

                    const card = document.createElement('div');
                    card.classList.add('fancy-card');

                    card.innerHTML = `
                        <h3>${subject}</h3>
                        <p>Section: ${section}</p>
                        <div class="button-group">
                            <a href="${url}" target="_blank" class="view-btn">View</a>
                            <a href="${downloadUrl}" class="download-btn" download>Download</a>
                        </div>
                    `;

                    card.querySelector('.download-btn').addEventListener('click', (e) => {
                        floatHeart(e.clientX, e.clientY);
                    });

                    container.appendChild(card);
                });
            }
        });

        hideLoader();
    }, 4000); // pretend to load for 4s
}






// ################################################################


let index = 0;
let loaderInterval;
const loaderMessages = [
    "Loading your resources with love 💖...",
    "Making it special just for you ✨...",
    "Hang tight! Good vibes incoming ☕...",
    "Almost there... stay cute! 🧸"
];
const loader = document.getElementById('loader');

function showLoader() {
    loader.classList.remove('hidden');
    const loaderText = document.getElementById('loader-text');
    index = 0; // Reset index when showing loader again
    clearInterval(loaderInterval); // Clear any existing interval
    loaderInterval = setInterval(() => {
        loaderText.innerText = loaderMessages[index];
        index = (index + 1) % loaderMessages.length;
        // console.log(loaderText.innerText);
    }, 1000);
}

function hideLoader() {
    loader.classList.add('hidden');
    clearInterval(loaderInterval);
      // 🌧️ start raining hearts
    // startHeartRain(6000);
    const heartSound = document.getElementById('heart-sound');
    heartSound.currentTime = 0;
    heartSound.play();
    setTimeout(() => {
        heart.remove();
      }, 1000);
}

function startHeartRain(duration = 5000) {
    const container = document.getElementById('heart-rain-container');
    
  
    const interval = setInterval(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart-drop');
      heart.innerText = '💖';
  
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
  
      container.appendChild(heart);
  
     
    }, 400);
     // 🎶 Play soft sound
    
 
    
  
    setTimeout(() => {
      clearInterval(interval);
    }, duration);
  }
  
  function floatHeart(x, y) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '💖';
    heart.style.position = 'fixed';
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.fontSize = '20px';
    heart.style.opacity = '1';
    heart.style.transition = 'all 1s ease';
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.style.top = (y - 100) + 'px';
      heart.style.opacity = '0';
    }, 50);
  
    setTimeout(() => {
      heart.remove();
    }, 1000);
  }
  