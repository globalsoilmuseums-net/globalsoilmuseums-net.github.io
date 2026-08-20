
async function loadLocalJSON() {
    try {
        // Fetch the JSON file
        const response = await fetch('./js/institutes.json');

        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse JSON
        const data = await response.json();


data.forEach((museum) => {

    const [
    title,
    longitude,
    latitude,
    url
    ] = museum;

    // Create custom marker element
    const markerElement = document.createElement("div");
    markerElement.className = "museum-marker";

    // Create MapLibre marker
    new maplibregl.Marker({
    element: markerElement
    })
    .setLngLat([
        parseFloat(longitude),
        parseFloat(latitude)
    ])
    .addTo(map);


    markerElement.addEventListener("click", () => {

    // Set panel content
    document.getElementById("museum-title").textContent =
        title;

    const link =
        document.getElementById("museum-link");

    link.href = url;

    // Show panel
    document.getElementById("info-panel").style.display =
        "block";

    });

});

    } catch (error) {
        console.error("Error loading JSON:", error);
    }
}

// Call the function
loadLocalJSON();

const map = new maplibregl.Map({
    container: "map",
    // Free OpenFreeMap style
    style: "https://tiles.openfreemap.org/styles/liberty",
    // Initial world view
    center: [10, 30],
    zoom: 1.4
});

map.addControl(
    new maplibregl.NavigationControl(),
    "top-right"
);

document
    .getElementById("close-panel")
    .addEventListener("click", () => {
    document.getElementById("info-panel").style.display =
        "none";
    });

