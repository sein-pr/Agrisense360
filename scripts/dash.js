document.addEventListener("DOMContentLoaded", function () {
    // SIDEBAR TOGGLE
    var sidebarOpen = false;
    var sidebar = document.getElementById("sidebar");
  
    function openSidebar() {
      if (!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
      }
    }
  
    function closeSidebar() {
      if (sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
      }
    }
  
    // Dummy data
    const fields = [
      {
        name: "Field 1",
        area: 10, // in acres
        crop: "Wheat",
        soilType: "Loam",
      },
      {
        name: "Field 2",
        area: 15, // in acres
        crop: "Corn",
        soilType: "Clay",
      },
      {
        name: "Field 3",
        area: 8, // in acres
        crop: "Rice",
        soilType: "Silt",
      },
    ];
  
    const recommendations = [
      {
        field: "Field 1",
        recommendation: "Apply more fertilizer for better growth.",
      },
      {
        field: "Field 2",
        recommendation: "Irrigate the field to maintain soil moisture.",
      },
      {
        field: "Field 3",
        recommendation: "Monitor for pests and take preventive measures.",
      },
    ];
  
    const growthData = [
      {
        field: "Field 1",
        date: "2023-01-15",
        growth: 15, // in cm
      },
      {
        field: "Field 2",
        date: "2023-01-15",
        growth: 18, // in cm
      },
      {
        field: "Field 3",
        date: "2023-01-15",
        growth: 12, // in cm
      },
    ];
  
    // Function to populate the dashboard with dummy data
    function populateDashboard() {
      // Populate the field selection dropdown
      const fieldDropdown = document.getElementById("field-dropdown");
      fields.forEach((field) => {
        const option = document.createElement("option");
        option.value = field.name;
        option.text = field.name;
        fieldDropdown.appendChild(option);
      });
  
      // Populate the field data section
      fieldDropdown.addEventListener("change", function () {
        const selectedField = this.value;
        const fieldData = fields.find((field) => field.name === selectedField);
        const fieldDataContainer = document.querySelector(".field-data");
        fieldDataContainer.innerHTML = `
          <h3>${fieldData.name}</h3>
          <p>Area: ${fieldData.area} acres</p>
          <p>Crop: ${fieldData.crop}</p>
          <p>Soil Type: ${fieldData.soilType}</p>
        `;
      });
  
      // Populate the recommendations section
      const recommendationsContainer = document.querySelector(".recommendations");
      recommendationsContainer.innerHTML = "";
      recommendations.forEach((recommendation) => {
        const recommendationElement = document.createElement("div");
        recommendationElement.innerHTML = `
          <h3>${recommendation.field}</h3>
          <p>Recommendation: ${recommendation.recommendation}</p>
        `;
        recommendationsContainer.appendChild(recommendationElement);
      });
  
      // Populate the growth and development graph (assuming you have a charting library integrated)
      // This requires specific charting code which is not included in this snippet.
    }
  
    // Call the function to populate the dashboard with dummy data
    populateDashboard();
  
    // LINE CHART for Growth and Development
    // LINE CHART for Growth and Development
var growthDataOptions = {
    chart: {
      type: 'line',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    series: [
      {
        name: 'Growth',
        data: [10, 15, 20, 25, 30, 35, 40], // Dummy growth data, you can replace with your actual data
      },
    ],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // X-axis labels
    },
    yaxis: {
      title: {
        text: 'Growth (cm)',
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
  };
  
  var growthChart = new ApexCharts(document.querySelector(".growth-development-graph"), growthDataOptions);
  growthChart.render();
  
    var growthChart = new ApexCharts(document.querySelector(".growth-development-graph"), growthDataOptions);
    growthChart.render();
  });
  