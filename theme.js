// GOAT AP — Dark/Light Theme Toggle
// Shared across all pages. Saves preference to localStorage.

(function() {
    // Check saved preference, then system preference, default to dark
    var saved = localStorage.getItem('goatap-theme');
    var theme;
    if (saved === 'light' || saved === 'dark') {
        theme = saved;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        theme = 'light';
    } else {
        theme = 'dark';
    }
    document.documentElement.setAttribute('data-theme', theme);

    // Listen for system preference changes (only if no saved preference)
    if (!saved && window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function(e) {
            if (!localStorage.getItem('goatap-theme')) {
                var t = e.matches ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', t);
                updateToggleButtons(t);
            }
        });
    }

    // Toggle function — called by buttons on each page
    window.toggleTheme = function() {
        var current = document.documentElement.getAttribute('data-theme') || 'dark';
        var next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('goatap-theme', next);
        updateToggleButtons(next);
    };

    function updateToggleButtons(t) {
        document.querySelectorAll('.theme-toggle').forEach(function(btn) {
            btn.textContent = t === 'dark' ? '☀️' : '🌙';
            btn.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
        });
    }

    // Initialize toggle buttons once DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() { updateToggleButtons(theme); });
    } else {
        updateToggleButtons(theme);
    }
})();
