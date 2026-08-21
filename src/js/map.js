
async function loadLocalJSON() {

    fetch("./institutes.yml")
    .then(response => response.text())
    .then(text => {
      const data = jsyaml.load(text);

    data.forEach((museum) => {

        // Create custom marker element
        const markerElement = document.createElement("div");
        markerElement.className = "museum-marker";

        // Create MapLibre marker
        new maplibregl.Marker({
        element: markerElement
        })
        .setLngLat([
            parseFloat(museum.lon),
            parseFloat(museum.lat)
        ])
        .addTo(map);


        markerElement.addEventListener("click", () => {

        // Set panel content
        document.getElementById("museum-title").textContent =
            museum.title;

        const link =
            document.getElementById("museum-link");

        link.href = museum.path;

        // Show panel
        document.getElementById("info-panel").style.display =
            "block";

        });

        });
    });
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

const resizeMap = () => map.resize();

window.addEventListener('resize', resizeMap);
window.addEventListener('orientationchange', resizeMap);