// app.js

document.addEventListener("DOMContentLoaded", function () {
    const controls = document.querySelectorAll(".control");
    const sections = document.querySelectorAll("section");
    const homeButton = document.querySelector(".control[data-id='home']");
    const aboutButton = document.querySelector(".control[data-id='about']");
    const portfolioButton = document.querySelector(".control[data-id='portfolio']");
    const contactButton = document.querySelector(".control[data-id='contact']");

    function setActiveSection(sectionId) {
        sections.forEach((section) => {
            section.classList.remove("active");
        });
        document.getElementById(sectionId).classList.add("active");
    }

    controls.forEach((control) => {
        control.addEventListener("click", (e) => {
            const sectionId = control.getAttribute("data-id");
            if (sectionId) {
                setActiveSection(sectionId);
                control.classList.add("active-btn");
            }
        });
    });

    // Example of concurrent animations (simulated concurrency)
    function showLoadingForSection(sectionId) {
        return new Promise((resolve) => {
            console.log("Loading section:", sectionId);
            setTimeout(() => {
                resolve();
                console.log(sectionId + " loaded");
            }, 1000); // Simulate loading time
        });
    }

    async function handleConcurrentSections() {
        const sectionsToLoad = [portfolioButton, contactButton];
        const loadPromises = sectionsToLoad.map((button) => {
            const sectionId = button.getAttribute("data-id");
            return showLoadingForSection(sectionId);
        });

        await Promise.all(loadPromises);
        console.log("All sections loaded.");
    }

    handleConcurrentSections(); // Simulates loading the portfolio and contact sections concurrently
});
