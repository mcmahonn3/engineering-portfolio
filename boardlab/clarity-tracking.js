(function () {
  const config = window.BOARDLAB_CLARITY || {};
  const params = new URLSearchParams(window.location.search);
  const projectId = (params.get("clarity") || config.projectId || "").trim();
  const consentKey = "boardlab_clarity_consent";
  const enabled = Boolean(projectId && projectId !== "PASTE_PROJECT_ID_HERE");
  let initialized = false;
  const pendingCalls = [];

  function sendClarityCall(args) {
    if (initialized && typeof window.clarity === "function") {
      window.clarity(...args);
      return;
    }
    pendingCalls.push(args);
  }

  function flushPendingCalls() {
    if (!initialized || typeof window.clarity !== "function") {
      return;
    }
    while (pendingCalls.length) {
      window.clarity(...pendingCalls.shift());
    }
  }

  function hasConsent() {
    return !config.requireConsent || localStorage.getItem(consentKey) === "accepted";
  }

  function loadClarity() {
    if (!enabled || initialized || !hasConsent()) {
      return;
    }

    initialized = true;
    (function (c, l, a, r, i, t, y) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", projectId);

    window.clarity("consent");
    window.clarity("set", "prototype", "boardlab");
    window.clarity("set", "course_context", "tech_comms_ux_test");
    window.clarity("set", "test_group", config.testGroup || "prototype-a");
    window.clarity("event", "prototype_loaded");
    flushPendingCalls();
  }

  function showConsentBanner() {
    if (!enabled || hasConsent() || localStorage.getItem(consentKey) === "declined") {
      return;
    }

    const banner = document.createElement("section");
    banner.className = "consent-banner";
    banner.setAttribute("aria-label", "Analytics consent");
    banner.innerHTML = `
      <div>
        <strong>UX study analytics</strong>
        <p>This prototype can use Microsoft Clarity to collect heatmaps and session recordings for the class test. Typed content is masked.</p>
      </div>
      <div class="consent-actions">
        <button class="consent-secondary" type="button" data-consent="declined">Decline</button>
        <button class="consent-primary" type="button" data-consent="accepted">Allow</button>
      </div>
    `;

    banner.addEventListener("click", (event) => {
      const button = event.target.closest("[data-consent]");
      if (!button) {
        return;
      }

      localStorage.setItem(consentKey, button.dataset.consent);
      banner.remove();
      if (button.dataset.consent === "accepted") {
        loadClarity();
      }
    });

    document.body.append(banner);
  }

  window.BoardLabAnalytics = {
    event(name) {
      if (enabled) sendClarityCall(["event", name]);
    },
    tag(key, value) {
      if (enabled) sendClarityCall(["set", key, String(value)]);
    },
    isEnabled() {
      return enabled;
    },
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      loadClarity();
      showConsentBanner();
    });
  } else {
    loadClarity();
    showConsentBanner();
  }
})();
