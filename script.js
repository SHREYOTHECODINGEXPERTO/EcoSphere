// Data for dynamic content
const featuresData = [
    {
        icon: 'fas fa-satellite',
        title: 'Source Identification',
        description: 'Leverage satellite data from NASA MODIS and ISRO along with IoT sensors to pinpoint pollution sources with high accuracy.',
        color: '#00f5d4'
    },
    {
        icon: 'fas fa-chart-line',
        title: 'AI Forecasting',
        description: 'Advanced machine learning models provide 24-72 hour pollution forecasts and seasonal trend predictions.',
        color: '#9b5de5'
    },
    {
        icon: 'fas fa-mobile-alt',
        title: 'Citizen App',
        description: 'Hyperlocal AQI alerts, safe route suggestions, and personalized health recommendations for residents.',
        color: '#f15bb5'
    },
    {
        icon: 'fas fa-chart-bar',
        title: 'Policy Dashboard',
        description: 'Data visualization tools for policymakers to assess intervention effectiveness and make informed decisions.',
        color: '#fee440'
    }
];

const systemArchitectureSteps = [
    {
        title: 'Data Collection',
        description: 'Satellite data (NASA MODIS, ISRO), IoT sensors, CPCB monitors, and meteorological data'
    },
    {
        title: 'Data Processing',
        description: 'Clean, normalize, and integrate multi-source data for analysis'
    },
    {
        title: 'AI Analysis',
        description: 'Machine learning models for source attribution and pollution forecasting'
    },
    {
        title: 'Insight Delivery',
        description: 'Real-time dashboards, mobile alerts, and policy recommendations'
    }
];

const sourceIdentificationSteps = [
    {
        title: 'Pollution Detection',
        description: 'Identify pollution hotspots using satellite imagery and sensor networks'
    },
    {
        title: 'Source Attribution',
        description: 'Analyze chemical composition, meteorological data, and emission patterns'
    },
    {
        title: 'Contribution Analysis',
        description: 'Quantify percentage contribution from different pollution sources'
    },
    {
        title: 'Visualization',
        description: 'Display source breakdown in interactive dashboards and reports'
    }
];

const forecastingSteps = [
    {
        title: 'Historical Data',
        description: 'Collect historical pollution levels, weather patterns, and emission sources'
    },
    {
        title: 'Model Training',
        description: 'Train ML algorithms (LSTM, Random Forest) on historical patterns'
    },
    {
        title: 'Real-time Input',
        description: 'Feed current pollution data, weather forecasts, and source activities'
    },
    {
        title: 'Prediction Generation',
        description: 'Generate 24-72 hour AQI forecasts with confidence intervals'
    }
];

const appFeaturesData = [
    {
        icon: 'fas fa-map-marker-alt',
        title: 'Hyperlocal AQI',
        description: 'Real-time air quality index for your exact location with street-level accuracy.'
    },
    {
        icon: 'fas fa-bell',
        title: 'Personalized Alerts',
        description: 'Custom notifications based on your health profile and activity preferences.'
    },
    {
        icon: 'fas fa-route',
        title: 'Safe Route Suggestions',
        description: 'Find less polluted paths for your daily commute, jogging, or cycling routes.'
    },
    {
        icon: 'fas fa-heartbeat',
        title: 'Health Recommendations',
        description: 'Personalized advice for sensitive groups (asthma, elderly, children).'
    },
    {
        icon: 'fas fa-mask',
        title: 'Protection Guidance',
        description: 'When to wear masks, use air purifiers, or limit outdoor activities.'
    },
    {
        icon: 'fas fa-share-alt',
        title: 'Community Reporting',
        description: 'Report pollution incidents and contribute to crowd-sourced data.'
    }
];

const pollutionSources = [
    { name: 'Stubble Burning', color: '#f15bb5', percentage: 42 },
    { name: 'Vehicular Emissions', color: '#00f5d4', percentage: 28 },
    { name: 'Industrial Activity', color: '#9b5de5', percentage: 18 },
    { name: 'Other Sources', color: '#fee440', percentage: 12 }
];

// DOM Elements
const featuresGrid = document.getElementById('featuresGrid');
const sourceBreakdown = document.getElementById('sourceBreakdown');
const systemArchitecture = document.getElementById('systemArchitecture');
const sourceIdentification = document.getElementById('sourceIdentification');
const forecastingModule = document.getElementById('forecastingModule');
const appFeaturesList = document.getElementById('appFeaturesList');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const closeButtons = document.querySelectorAll('.close');
const viewButtons = document.querySelectorAll('.view-btn');
const timeFilter = document.getElementById('timeFilter');
const loadingScreen = document.getElementById('loadingScreen');
const header = document.getElementById('header');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Simulate loading
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        header.style.display = 'block';
        document.body.style.overflow = 'auto';
    }, 1000);

    // Populate dynamic sections
    populateFeatures();
    populateSourceBreakdown();
    populateSystemArchitecture();
    populateSourceIdentification();
    populateForecastingModule();
    populateAppFeatures();

    attachUIHandlers();
    initObservers();
    initChart();
}

/* ----------------------------- */
/* Population / Rendering utils */
/* ----------------------------- */

function populateFeatures() {
    if (!featuresGrid) return;
    featuresGrid.innerHTML = '';
    featuresData.forEach((f, idx) => {
        const card = document.createElement('div');
        card.className = 'feature-card';

        const icon = document.createElement('div');
        icon.className = 'feature-icon';
        icon.style.background = `linear-gradient(135deg, ${f.color}, rgba(0,0,0,0.05))`;
        icon.innerHTML = `<i class="${f.icon}"></i>`;

        const h3 = document.createElement('h3');
        h3.textContent = f.title;

        const p = document.createElement('p');
        p.textContent = f.description;

        const link = document.createElement('a');
        link.href = '#';
        link.className = 'feature-link';
        link.innerHTML = 'Learn more <i class="fas fa-arrow-right"></i>';

        card.appendChild(icon);
        card.appendChild(h3);
        card.appendChild(p);
        card.appendChild(link);

        // small stagger for animation
        card.style.transitionDelay = `${idx * 80}ms`;

        featuresGrid.appendChild(card);
    });
}

function populateSourceBreakdown() {
    if (!sourceBreakdown) return;
    sourceBreakdown.innerHTML = '';
    pollutionSources.forEach(src => {
        const item = document.createElement('div');
        item.className = 'breakdown-item';

        const label = document.createElement('div');
        label.className = 'breakdown-label';
        const color = document.createElement('span');
        color.className = 'breakdown-color';
        color.style.background = src.color;
        const name = document.createElement('span');
        name.textContent = src.name;

        label.appendChild(color);
        label.appendChild(name);

        const percent = document.createElement('div');
        percent.className = 'breakdown-percentage';
        percent.textContent = `${src.percentage}%`;

        item.appendChild(label);
        item.appendChild(percent);
        sourceBreakdown.appendChild(item);
    });
}

function createFlowSteps(container, steps) {
    if (!container) return;
    container.innerHTML = '';
    steps.forEach((s, i) => {
        const step = document.createElement('div');
        step.className = 'flow-step';
        step.style.transitionDelay = `${i * 80}ms`;

        const h4 = document.createElement('h4');
        h4.textContent = s.title;
        const p = document.createElement('p');
        p.textContent = s.description;

        step.appendChild(h4);
        step.appendChild(p);
        container.appendChild(step);
    });
}

function populateSystemArchitecture() {
    createFlowSteps(systemArchitecture, systemArchitectureSteps);
}

function populateSourceIdentification() {
    createFlowSteps(sourceIdentification, sourceIdentificationSteps);
}

function populateForecastingModule() {
    createFlowSteps(forecastingModule, forecastingSteps);
}

function populateAppFeatures() {
    if (!appFeaturesList) return;
    appFeaturesList.innerHTML = '';
    appFeaturesData.forEach((f, i) => {
        const item = document.createElement('div');
        item.className = 'app-feature';
        item.style.transitionDelay = `${i * 60}ms`;

        const icon = document.createElement('div');
        icon.className = 'app-feature-icon';
        icon.innerHTML = `<i class="${f.icon}"></i>`;

        const content = document.createElement('div');
        content.className = 'app-feature-content';
        const h3 = document.createElement('h3');
        h3.textContent = f.title;
        const p = document.createElement('p');
        p.textContent = f.description;

        content.appendChild(h3);
        content.appendChild(p);

        item.appendChild(icon);
        item.appendChild(content);
        appFeaturesList.appendChild(item);
    });
}

/* ----------------------------- */
/* UI handlers and interactions */
/* ----------------------------- */

function attachUIHandlers() {
    // Modals
    if (loginBtn) loginBtn.addEventListener('click', openLoginModal);
    if (signupBtn) signupBtn.addEventListener('click', openSignupModal);

    closeButtons.forEach(btn => btn.addEventListener('click', closeModals));

    window.addEventListener('click', (e) => {
        if (e.target === loginModal) closeModals();
        if (e.target === signupModal) closeModals();
    });

    const loginForm = document.getElementById('loginForm');
    if (loginForm) loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // placeholder: real authentication would happen here
        closeModals();
        alert('Logged in (demo)');
    });

    const signupForm = document.getElementById('signupForm');
    if (signupForm) signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        closeModals();
        alert('Account created (demo)');
    });

    // View toggle buttons
    viewButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const view = btn.dataset.view;
            viewButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const map = document.getElementById('pollutionMap');
            const analytics = document.getElementById('analyticsView');
            if (view === 'map') {
                if (map) map.classList.add('active-view');
                if (map) map.classList.remove('hidden-view');
                if (analytics) analytics.classList.remove('active-view');
                if (analytics) analytics.classList.add('hidden-view');
            } else {
                if (analytics) analytics.classList.add('active-view');
                if (analytics) analytics.classList.remove('hidden-view');
                if (map) map.classList.remove('active-view');
                if (map) map.classList.add('hidden-view');
            }
        });
    });

    // Time filter demo
    if (timeFilter) timeFilter.addEventListener('change', (e) => {
        // In a real app we'd refetch/update the chart and map
        console.log('Time filter changed to', e.target.value);
    });

    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navList = document.querySelector('nav ul');
    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }
}

function openLoginModal(e) {
    if (e) e.preventDefault();
    if (loginModal) loginModal.style.display = 'block';
}

function openSignupModal(e) {
    if (e) e.preventDefault();
    if (signupModal) signupModal.style.display = 'block';
}

function closeModals() {
    if (loginModal) loginModal.style.display = 'none';
    if (signupModal) signupModal.style.display = 'none';
}

/* ----------------------------- */
/* Intersection observers for animations */
/* ----------------------------- */

function initObservers() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.feature-card, .flowchart-container, .flow-step, .app-feature, .dashboard-preview').forEach(el => {
        observer.observe(el);
    });
}

/* ----------------------------- */
/* Chart initialization (Chart.js) */
/* ----------------------------- */

function initChart() {
    const ctx = document.getElementById('pollutionChart');
    if (!ctx) return;
    // sample data for demonstration
    const labels = ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'];
    const data = {
        labels,
        datasets: [{
            label: 'PM2.5 (µg/m³)',
            data: [120, 140, 180, 240, 260, 220, 200],
            borderColor: getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#00f5d4',
            backgroundColor: 'rgba(0,245,212,0.08)',
            fill: true,
            tension: 0.3,
            pointRadius: 3
        }]
    };

    // eslint-disable-next-line no-undef
    new Chart(ctx, {
        type: 'line',
        data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
