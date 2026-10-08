---
title: Show interest to join the network
sidebar: true
---

Fill in this form to show your interest in joining the network. We will contact you to discuss further details.


<div class="row g-3">

<!-- Personal details -->
<div class="col-12">
<h3>Personal Details</h3>
</div>

<div class="col-md-6">
<label for="first-name" class="form-label">First name</label>
<input type="text" class="form-control" id="first-name">
</div>

<div class="col-md-6">
<label for="last-name" class="form-label">Last name</label>
<input type="text" class="form-control" id="last-name">
</div>

<div class="col-md-6">
<label for="title" class="form-label">Title / position</label>
<input type="text" class="form-control" id="title">
</div>

<div class="col-md-6">
<label for="museum" class="form-label">Museum or Exhibition Name</label>
<input type="text" class="form-control" id="museum">
</div>

<div class="col-md-6">
<label for="email" class="form-label">Email</label>
<input type="email" class="form-control" id="email">
</div>

<div class="col-md-6">
<label for="country" class="form-label">Country</label>
<input type="text" class="form-control" id="country">
</div>

<div class="col-md-6">
<label for="city" class="form-label">City</label>
<input type="text" class="form-control" id="city">
</div>

<div class="col-md-6">
<label for="mobile" class="form-label">Mobile number with country code</label>
<input type="tel" class="form-control" id="mobile">
</div>

<div class="col-md-6">
<label for="landline" class="form-label">Landline number</label>
<input type="tel" class="form-control" id="landline">
</div>


<!-- Institutional details -->
<div class="col-12 mt-5">
<h3>Institutional Details</h3>
</div>

<div class="col-12">
<label for="institution-name" class="form-label">
Name of museum or exhibition
</label>
<input type="text" class="form-control" id="institution-name">
</div>

<div class="col-12">
<label for="address" class="form-label">
Full address (Street, Building/House number, Zip code, City, Country)
</label>
<textarea class="form-control" id="address" rows="2"></textarea>
</div>

<div class="col-md-6">
<label for="institution-email" class="form-label">Email</label>
<input type="email" class="form-control" id="institution-email">
</div>

<div class="col-md-6">
<label for="institution-phone" class="form-label">Phone number</label>
<input type="tel" class="form-control" id="institution-phone">
</div>

<div class="col-12">
<label for="gps" class="form-label">
GPS coordinates / Pinned location on map
(specify coordinate system)
</label>
<input type="text" class="form-control" id="gps">
</div>

<div class="col-md-6">
<label for="museum-type" class="form-label">
Is the museum or exhibition temporary or permanent?
</label>
<select class="form-select" id="museum-type">
<option selected disabled value="">Please select...</option>
<option value="temporary">Temporary</option>
<option value="permanent">Permanent</option>
</select>
</div>

<div class="col-md-6">
<label for="opening-hours" class="form-label">Opening hours</label>
<input type="text" class="form-control" id="opening-hours">
</div>

<div class="col-12">
<label for="webpage" class="form-label">Webpage address</label>
<input type="url" class="form-control" id="webpage">
</div>


<!-- Registration -->
<div class="col-12 mt-5">
<h3>Registration</h3>
</div>

<div class="col-md-6">
<label for="date" class="form-label">Today's date</label>
<input type="date" class="form-control" id="date">
</div>

<div class="col-12 mt-3">
<label for="comments" class="form-label">
Questions or comments
</label>
<textarea class="form-control" id="comments" rows="5" placeholder="Please enter your questions or comments here..."></textarea>
</div>

<div class="col-12">
<br/>
<button type="button" onclick="mysubmit()" class="btn btn-primary">Submit registration</button>
</div>

</div>

<div id=formStatus></div>

<script>
mysubmit = async function () {
console.log('foo');
const status = document.getElementById("formStatus");

// Your Power Automate / Teams webhook URL
const webhookUrl = "https://default27d137e5761f4dc1af88d26430abb1.8f.environment.api.powerplatform.com:443/powerautomate/automations/direct/cu/26/workflows/7388095f231746488dd84733c48f6188/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=1oVfwFsGd-s4gk5_zzt3xGxqDi6moCzENWtWy3Afppo";

// Collect the form values
const data = {
firstName: document.getElementById("first-name").value,
lastName: document.getElementById("last-name").value,
title: document.getElementById("title").value,
museum: document.getElementById("museum").value,
email: document.getElementById("email").value,
country: document.getElementById("country").value,
city: document.getElementById("city").value,
mobile: document.getElementById("mobile").value,
landline: document.getElementById("landline").value,
institutionName: document.getElementById("institution-name").value,
address: document.getElementById("address").value,
institutionEmail: document.getElementById("institution-email").value,
institutionPhone: document.getElementById("institution-phone").value,
gps: document.getElementById("gps").value,
museumType: document.getElementById("museum-type").value,
openingHours: document.getElementById("opening-hours").value,
webpage: document.getElementById("webpage").value,
date: document.getElementById("date").value,
comments: document.getElementById("comments").value
};

const payload = {
  type: "message",
  attachments: [
    {
      contentType: "application/vnd.microsoft.card.adaptive",
      contentUrl: null,
      content: {
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        type: "AdaptiveCard",
        version: "1.4",

        body: [
          {
            type: "TextBlock",
            text: "New Museum Registration",
            weight: "Bolder",
            size: "Large",
            wrap: true
          },

          {
            type: "TextBlock",
            text: `${data.firstName} ${data.lastName}`,
            weight: "Bolder",
            size: "Medium",
            spacing: "Small",
            wrap: true
          },

          {
            type: "TextBlock",
            text: data.title || "",
            isSubtle: true,
            spacing: "None",
            wrap: true
          },

          {
            type: "FactSet",
            spacing: "Medium",
            facts: [
              {
                title: "Museum / Exhibition",
                value: data.museum || "-"
              },
              {
                title: "Email",
                value: data.email || "-"
              },
              {
                title: "Country",
                value: data.country || "-"
              },
              {
                title: "City",
                value: data.city || "-"
              },
              {
                title: "Mobile",
                value: data.mobile || "-"
              },
              {
                title: "Landline",
                value: data.landline || "-"
              }
            ]
          },

          {
            type: "TextBlock",
            text: "Institutional Details",
            weight: "Bolder",
            size: "Medium",
            spacing: "Large",
            separator: true,
            wrap: true
          },

          {
            type: "FactSet",
            spacing: "Medium",
            facts: [
              {
                title: "Institution",
                value: data.institutionName || "-"
              },
              {
                title: "Address",
                value: data.address || "-"
              },
              {
                title: "Email",
                value: data.institutionEmail || "-"
              },
              {
                title: "Phone",
                value: data.institutionPhone || "-"
              },
              {
                title: "GPS",
                value: data.gps || "-"
              },
              {
                title: "Type",
                value: data.museumType || "-"
              },
              {
                title: "Opening hours",
                value: data.openingHours || "-"
              },
              {
                title: "Webpage",
                value: data.webpage || "-"
              }
            ]
          },

          {
            type: "TextBlock",
            text: "Registration",
            weight: "Bolder",
            size: "Medium",
            spacing: "Large",
            separator: true,
            wrap: true
          },

          {
            type: "FactSet",
            facts: [
              {
                title: "Date",
                value: data.date || "-"
              }
            ]
          },

          {
            type: "TextBlock",
            text: "Questions / Comments",
            weight: "Bolder",
            spacing: "Medium",
            wrap: true
          },

          {
            type: "TextBlock",
            text: data.comments || "-",
            wrap: true
          }
        ]
      }
    }
  ]
};

status.innerHTML = "";

try {

const response = await fetch(webhookUrl, {
method: "POST",
headers: {"Content-Type": "application/json"},
body: JSON.stringify(payload)
});

if (!response.ok) {
throw new Error("Webhook returned HTTP " + response.status);
}

status.innerHTML = `
<div class="alert alert-success">
Thank you for registering. Your registration has been submitted successfully.
</div>
`;
} catch (error) {

console.error("Submission error:", error);

status.innerHTML = `
<div class="alert alert-danger">
Sorry, there was a problem submitting the registration.
Please try again later.
</div>
`;
} 

}
</script>
