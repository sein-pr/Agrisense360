document.addEventListener("DOMContentLoaded", function () {
  // SIDEBAR TOGGLE
  var sidebarOpen = false;
  var sidebar = document.getElementById("sidebar");
  var menuButton = document.getElementById("menuButton");

  // Function to open the sidebar
  function openSidebar() {
      if (!sidebarOpen) {
          sidebar.classList.add("sidebar-responsive");
          sidebarOpen = true;
      }
  }

  // Function to close the sidebar
  function closeSidebar() {
      if (sidebarOpen) {
          sidebar.classList.remove("sidebar-responsive");
          sidebarOpen = false;
      }
  }

  // Toggle the sidebar when the menu button is clicked
  menuButton.addEventListener("click", function () {
      if (sidebarOpen) {
          closeSidebar();
      } else {
          openSidebar();
      }
  });

 
  // Dummy data for the progress bar
  const fieldData = {
    field1: {
      fieldStatus: {
        status: 'Good',
        progress: 80
      },
      soilHealth: {
        pH: 6.5,
        organicMatter: 'High',
        nutrients: {
          nitrogen: 'Low',
          phosphorus: 'High',
          potassium: 'Medium'
        }
      },
      pestAndDiseaseAlerts: {
        pests: ['Aphids', 'Caterpillars', 'Spider Mites'],
        diseases: ['Powdery Mildew', 'Fusarium Wilt']
      },
      recommendations: 'Apply more fertiliser to increase nitrogen.'
    },
    field2: {
      fieldStatus: {
        status: 'Fair',
        progress: 60
      },
      soilHealth: {
        pH: 7.0,
        organicMatter: 'Medium',
        nutrients: {
          nitrogen: 'Medium',
          phosphorus: 'Low',
          potassium: 'High'
        }
      },
      pestAndDiseaseAlerts: {
        pests: ['Aphids', 'Thrips', 'Spider Mites'],
        diseases: ['Fusarium Wilt', 'Verticillium Wilt']
      },
      recommendations: 'Increase nitrogen levels and apply fungicide to prevent further damage.'
    },
    field3: {
      fieldStatus: {
        status: 'Poor',
        progress: 40
      },
      soilHealth: {
        pH: 5.5,
        organicMatter: 'Low',
        nutrients: {
          nitrogen: 'Low',
          phosphorus: 'Low',
          potassium: 'Low'
        }
      },
      pestAndDiseaseAlerts: {
        pests: ['Cutworms', 'Wireworms', 'Slugs'],
        diseases: ['Pythium Root Rot', 'Rhizoctonia Root Rot']
      },
      recommendations: 'Apply lime to increase soil pH and add organic matter to improve soil health.'
    },
    field4: {
      fieldStatus: {
        status: 'Excellent',
        progress: 99
      },
      soilHealth: {
        pH: 7.5,
        organicMatter: 'Very High',
        nutrients: {
          nitrogen: 'High',
          phosphorus: 'High',
          potassium: 'High'
        }
      },
      pestAndDiseaseAlerts: {
        pests: ['None'],
        diseases: ['None']
      },
      recommendations: 'Maintain current practices for optimal field condition.'
    },
    field5: {
      fieldStatus: {
        status: 'Average',
        progress: 50
      },
      soilHealth: {
        pH: 6.0,
        organicMatter: 'Medium',
        nutrients: {
          nitrogen: 'Medium',
          phosphorus: 'Medium',
          potassium: 'Medium'
        }
      },
      pestAndDiseaseAlerts: {
        pests: ['Aphids', 'Spider Mites'],
        diseases: ['Gray Mold', 'Botrytis Blight']
      },
      recommendations: 'Increase organic matter and address pest and disease issues for better results.'
    }
  };
  


  
  // Get the HTML elements
  const fieldStatus = document.querySelector('.field-overall-status');
  const fieldSoil = document.querySelector('.field-soil-status');
  const fieldPest = document.querySelector('.field-disease-status');
  const fieldRecommendations = document.querySelector('.field-content:last-child label');
  const dropdown = document.getElementById('field-dropdown');
  
  
  // Populate the HTML elements with data from the object
  function populateFields(field) {
    const data = fieldData[field];
    
    fieldStatus.querySelector('label').textContent = `Field status is ${data.fieldStatus.status}`;
    fieldStatus.querySelector('.progress').style.width = `${data.fieldStatus.progress}%`;
    
    if (data.fieldStatus.progress >= 60) {
      fieldStatus.querySelector('.progress').style.backgroundColor = 'green';
    } else if (data.fieldStatus.progress >= 40) {
      fieldStatus.querySelector('.progress').style.backgroundColor = 'orange';
    } else {
      fieldStatus.querySelector('.progress').style.backgroundColor = 'red';
    }
  
    fieldSoil.querySelector('label').textContent = `Soil pH is ${data.soilHealth.pH}, organic matter is ${data.soilHealth.organicMatter}, Nitrogen: ${data.soilHealth.nutrients.nitrogen}, Phosphorus: ${data.soilHealth.nutrients.phosphorus}, Potassium: ${data.soilHealth.nutrients.potassium}`;
  
    fieldPest.querySelector('label').textContent = `Pests: ${data.pestAndDiseaseAlerts.pests.join(', ')}, Diseases: ${data.pestAndDiseaseAlerts.diseases.join(', ')}`;
  
    fieldRecommendations.textContent = data.recommendations;
  }
  
  populateFields(dropdown.value);
  
  dropdown.addEventListener('change', (event) => {
    populateFields(event.target.value);
  });

  
    
});
