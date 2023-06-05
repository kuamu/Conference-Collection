var conferenceData = [
    {
        name: '가 학술대회 A',
        societyName: '학회  A',
        date: '2023.06.08',
        location: '홀 A',
        link: 'https://example.com' 
      },
      {
        name: '학술대회 B',
        societyName: '학회 B',
        date: '2023.06.10',
        location: '회의실 1',
        link: 'https://example.com' 
      },
      {
        name: '학술대회 C',
        societyName: '학회 C',
        date: '2023.07.15',
        location: '회의실 2',
        link: 'https://example.com' 
      },
      {
        name: '학술대회 D',
        societyName: '학회 D',
        date: '2023.08.02',
        location: '홀 B',
        link: 'https://example.com' 
      },
      {
        name: '학술대회 E',
        societyName: '학회 E',
        date: '2023.09.21',
        location: '홀 C',
        link: 'https://example.com' 
      },
      {
        name: '나 학술대회 F',
        societyName: '학회 F',
        date: '2023.10.12',
        location: '홀 D',
        link: 'https://example.com' 
      },
      {
        name: '학술대회 G',
        societyName: '학회 G',
        date: '2023.11.18',
        location: '회의실 3',
        link: 'https://example.com' 
      },
      {
        name: '학술대회 H',
        societyName: '학회 H',
        date: '2023.12.07',
        location: '회의실 4',
        link: 'https://example.com' 
      },
      {
        name: '학술대회 I',
        societyName: '학회 I',
        date: '2023.12.13',
        location: '홀 E',
        link: 'https://example.com' 
      },
      {
        name: '학술대회 J',
        societyName: '학회 J',
        date: '2023.12.31',
        location: '홀 F',
        link: 'https://example.com' 
      },
    // Add more conference data here
  ];
  
  var conferenceList = document.getElementById('conferenceList');
  
  function generateConferenceHTML(conference) {
    return `
      <a href="${conference.link}" target="_blank" class="conference">
        <h2>${conference.name}</h2>
        <p>학회명: ${conference.societyName}</p>
        <p>일자: ${conference.date}</p>
        <p>장소: ${conference.location}</p>
      </a>
    `;
  }
  
  
  function renderConferenceList(conferences) {
    conferenceList.innerHTML = '';
  
    conferences.forEach(function (conference) {
      var conferenceHTML = generateConferenceHTML(conference);
      conferenceList.innerHTML += conferenceHTML;
    });
  }
  
  function sortConferences(sortBy) {
    var sortedConferences = conferenceData.slice(); // Create a copy of the original data
  
    switch (sortBy) {
      case 'nameAsc':
        sortedConferences.sort(function (a, b) {
          return a.name.localeCompare(b.name);
        });
        break;
      case 'nameDesc':
        sortedConferences.sort(function (a, b) {
          return b.name.localeCompare(a.name);
        });
        break;
      case 'societyAsc':
        sortedConferences.sort(function (a, b) {
          return a.societyName.localeCompare(b.societyName);
        });
        break;
      case 'societyDesc':
        sortedConferences.sort(function (a, b) {
          return b.societyName.localeCompare(a.societyName);
        });
        break;
      case 'dateAsc':
        sortedConferences.sort(function (a, b) {
          return new Date(a.date) - new Date(b.date);
        });
        break;
      case 'dateDesc':
        sortedConferences.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        });
        break;
    }
  
    renderConferenceList(sortedConferences);
  }
  
  function searchConferences(searchText) {
    var filteredConferences = conferenceData.filter(function (conference) {
      var nameMatch = conference.name.toLowerCase().includes(searchText.toLowerCase());
      var societyNameMatch = conference.societyName.toLowerCase().includes(searchText.toLowerCase());
      return nameMatch || societyNameMatch;
    });
  
    renderConferenceList(filteredConferences);
  }
  
  var searchInput = document.getElementById('searchInput');
  var sortSelect = document.getElementById('sortSelect');
  
  searchInput.addEventListener('input', function () {
    var searchText = searchInput.value;
    searchConferences(searchText);
  });
  
  sortSelect.addEventListener('change', function () {
    var sortBy = sortSelect.value;
    sortConferences(sortBy);
  });
  
  renderConferenceList(conferenceData);
  