/**
 * ============================================================================
 * CLASSDESK - CLIENT CONFIGURATION & INTERACTIVE LOGIC (VIOLET SAAS EDITION)
 * ============================================================================
 * You can customize the entire landing page for any coaching institute client
 * simply by updating this single CONFIG object below.
 */

const CONFIG = {
  // Brand & Product Details
  productName: "ClassDesk",
  tagline: "Simple Coaching Management for Teachers",
  coachingSampleName: "Apex Coaching Academy",
  
  // Client & Contact Information (Update these per client)
  clientName: "Sir",
  phoneNumber: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsappNumber: "919876543210", // Format: country code without + (e.g. 919876543210)
  whatsappMessage: "Hello, I run a coaching institute and I would like to see a demo of ClassDesk.",
  supportEmail: "contact@classdesk.in",
  creatorName: "VK Design & Web Studio",

  // Pricing & Currency sample
  currencySymbol: "₹",
  monthlyFeeSample: 1500
};

/* ============================================================================
   1. DYNAMIC CONFIG HYDRATION
   ============================================================================ */
function initConfigHydration() {
  // Replace text in elements with data-config attribute
  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.getAttribute("data-config");
    if (CONFIG[key] !== undefined) {
      el.textContent = CONFIG[key];
    }
  });

  // Hydrate product name occurrences
  document.querySelectorAll(".product-name-text").forEach((el) => {
    el.textContent = CONFIG.productName;
  });

  // Hydrate WhatsApp links
  const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
  document.querySelectorAll("[data-config-whatsapp]").forEach((el) => {
    el.href = whatsappUrl;
  });

  // Hydrate phone call links
  const telUrl = `tel:${CONFIG.phoneRaw}`;
  document.querySelectorAll("[data-config-call]").forEach((el) => {
    el.href = telUrl;
  });

  // Update footer year
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ============================================================================
   2. THEME TOGGLE (LIGHT & DARK MODE)
   ============================================================================ */
function initThemeToggle() {
  const toggleBtn = document.getElementById("themeToggleBtn");
  const root = document.documentElement;
  
  // Determine initial theme: saved preference -> system preference -> light default
  const savedTheme = localStorage.getItem("classdesk-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const currentTheme = savedTheme || (prefersDark ? "dark" : "light");

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      if (toggleBtn) {
        toggleBtn.innerHTML = `
          <svg class="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        `;
        toggleBtn.setAttribute("title", "Switch to Light Mode");
      }
    } else {
      root.removeAttribute("data-theme");
      if (toggleBtn) {
        toggleBtn.innerHTML = `
          <svg class="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        `;
        toggleBtn.setAttribute("title", "Switch to Dark Mode");
      }
    }
    localStorage.setItem("classdesk-theme", theme);
  }

  applyTheme(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const isDark = root.getAttribute("data-theme") === "dark";
      applyTheme(isDark ? "light" : "dark");
    });
  }
}

/* ============================================================================
   3. STICKY HEADER & MOBILE NAVIGATION
   ============================================================================ */
function initNavigation() {
  const header = document.getElementById("header");
  const toggleBtn = document.getElementById("mobileMenuToggle");
  const drawer = document.getElementById("mobileDrawer");

  if (!header || !toggleBtn || !drawer) return;

  // Header scroll shadow
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }, { passive: true });

  // Mobile menu toggle
  toggleBtn.addEventListener("click", () => {
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", String(!isExpanded));
    drawer.hidden = isExpanded;
  });

  // Close mobile drawer when clicking any link inside it
  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggleBtn.setAttribute("aria-expanded", "false");
      drawer.hidden = true;
    });
  });

  // Close mobile drawer on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !drawer.hidden) {
      toggleBtn.setAttribute("aria-expanded", "false");
      drawer.hidden = true;
      toggleBtn.focus();
    }
  });
}

/* ============================================================================
   4. INTERACTIVE DEMO PLAYGROUND (ATTENDANCE & FEE SIMULATOR)
   ============================================================================ */
const DEMO_STUDENTS = [
  { id: 101, name: "Aarav Sharma", batch: "Class 10 Maths (4:00 PM)", isPresent: true, isPaid: true, receiptNo: "CD-1041" },
  { id: 102, name: "Priya Verma", batch: "Class 10 Maths (4:00 PM)", isPresent: true, isPaid: true, receiptNo: "CD-1042" },
  { id: 103, name: "Rohit Yadav", batch: "Class 10 Maths (4:00 PM)", isPresent: false, isPaid: false, receiptNo: null },
  { id: 104, name: "Ananya Patel", batch: "Class 10 Maths (4:00 PM)", isPresent: true, isPaid: true, receiptNo: "CD-1043" },
  { id: 105, name: "Kabir Mehta", batch: "Class 10 Maths (4:00 PM)", isPresent: true, isPaid: false, receiptNo: null },
  { id: 106, name: "Sneha Kulkarni", batch: "Class 10 Maths (4:00 PM)", isPresent: true, isPaid: true, receiptNo: "CD-1044" }
];

// In-memory simulation state
let attendanceState = JSON.parse(JSON.stringify(DEMO_STUDENTS));
let feeState = JSON.parse(JSON.stringify(DEMO_STUDENTS));

function getInitials(name) {
  return name.split(" ").map(n => n[0]).join("");
}

function initInteractiveDemo() {
  const tabAttendanceBtn = document.getElementById("tabAttendanceBtn");
  const tabFeeBtn = document.getElementById("tabFeeBtn");
  const tabAttendanceContent = document.getElementById("tabAttendanceContent");
  const tabFeeContent = document.getElementById("tabFeeContent");

  if (!tabAttendanceBtn || !tabFeeBtn || !tabAttendanceContent || !tabFeeContent) return;

  // Tab switching
  tabAttendanceBtn.addEventListener("click", () => {
    tabAttendanceBtn.classList.add("active");
    tabAttendanceBtn.setAttribute("aria-selected", "true");
    tabFeeBtn.classList.remove("active");
    tabFeeBtn.setAttribute("aria-selected", "false");

    tabAttendanceContent.classList.add("active");
    tabAttendanceContent.hidden = false;
    tabFeeContent.classList.remove("active");
    tabFeeContent.hidden = true;
  });

  tabFeeBtn.addEventListener("click", () => {
    tabFeeBtn.classList.add("active");
    tabFeeBtn.setAttribute("aria-selected", "true");
    tabAttendanceBtn.classList.remove("active");
    tabAttendanceBtn.setAttribute("aria-selected", "false");

    tabFeeContent.classList.add("active");
    tabFeeContent.hidden = false;
    tabAttendanceContent.classList.remove("active");
    tabAttendanceContent.hidden = true;
  });

  // Render Attendance List
  renderAttendanceSimulator();

  // Reset Attendance Button
  const btnMarkAllPresent = document.getElementById("btnMarkAllPresent");
  if (btnMarkAllPresent) {
    btnMarkAllPresent.addEventListener("click", () => {
      attendanceState.forEach(s => s.isPresent = true);
      renderAttendanceSimulator();
      showToast("toastMessage", "All 6 students marked Present! Attendance rate is 100%.");
    });
  }

  // Render Fee List
  renderFeeSimulator();

  // Reset Fee Button
  const btnResetFees = document.getElementById("btnResetFees");
  if (btnResetFees) {
    btnResetFees.addEventListener("click", () => {
      feeState = JSON.parse(JSON.stringify(DEMO_STUDENTS));
      renderFeeSimulator();
      showToast("feeToastMessage", "Fee demo reset to default values.");
    });
  }
}

function renderAttendanceSimulator() {
  const container = document.getElementById("interactiveAttendanceList");
  const presentCountEl = document.getElementById("livePresentCount");
  const absentCountEl = document.getElementById("liveAbsentCount");
  const percentEl = document.getElementById("liveAttendancePercent");
  const progressRing = document.getElementById("attendanceProgressRing");

  if (!container || !presentCountEl || !absentCountEl || !percentEl) return;

  const total = attendanceState.length;
  const presentCount = attendanceState.filter(s => s.isPresent).length;
  const absentCount = total - presentCount;
  const percentage = Math.round((presentCount / total) * 1000) / 10;

  presentCountEl.textContent = `${presentCount} / ${total}`;
  absentCountEl.textContent = `${absentCount}`;
  percentEl.textContent = `${percentage}%`;

  // Update SVG Circular Ring if present
  if (progressRing) {
    progressRing.setAttribute("stroke-dasharray", `${percentage}, 100`);
    if (percentage < 75) {
      progressRing.style.stroke = "var(--color-warning)";
    } else {
      progressRing.style.stroke = "var(--primary-violet)";
    }
  }

  container.innerHTML = "";

  attendanceState.forEach((student) => {
    const row = document.createElement("div");
    row.className = `sim-student-row ${student.isPresent ? "is-present" : "is-absent"}`;

    const initials = getInitials(student.name);

    row.innerHTML = `
      <div class="sim-student-left">
        <span class="sim-avatar" aria-hidden="true">${initials}</span>
        <div>
          <span class="sim-name">${student.name}</span>
          <span class="sim-batch">Roll #${student.id} • ${student.batch}</span>
        </div>
      </div>
      <button 
        type="button"
        class="sim-toggle-btn ${student.isPresent ? "btn-present-mode" : "btn-absent-mode"}"
        data-student-id="${student.id}"
        aria-label="Toggle attendance for ${student.name}. Currently ${student.isPresent ? "Present" : "Absent"}."
      >
        ${student.isPresent ? `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>Present</span>
        ` : `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          <span>Absent</span>
        `}
      </button>
    `;

    const toggleBtn = row.querySelector(".sim-toggle-btn");
    toggleBtn.addEventListener("click", () => {
      student.isPresent = !student.isPresent;
      renderAttendanceSimulator();
      
      const toastText = student.isPresent 
        ? `${student.name} marked Present.` 
        : `${student.name} marked Absent. 1-tap WhatsApp alert ready to notify parents.`;
      showToast("toastMessage", toastText);
    });

    container.appendChild(row);
  });
}

function renderFeeSimulator() {
  const container = document.getElementById("interactiveFeeList");
  const targetEl = document.getElementById("liveFeeTarget");
  const collectedEl = document.getElementById("liveFeeCollected");
  const pendingEl = document.getElementById("liveFeePending");
  const progressFill = document.getElementById("feeProgressFill");

  if (!container || !targetEl || !collectedEl || !pendingEl) return;

  const feePerStudent = CONFIG.monthlyFeeSample;
  const totalStudents = feeState.length;
  const totalTarget = totalStudents * feePerStudent;
  const paidStudents = feeState.filter(s => s.isPaid);
  const totalCollected = paidStudents.length * feePerStudent;
  const totalPending = totalTarget - totalCollected;

  targetEl.textContent = `${CONFIG.currencySymbol}${totalTarget.toLocaleString("en-IN")}`;
  collectedEl.textContent = `${CONFIG.currencySymbol}${totalCollected.toLocaleString("en-IN")}`;
  pendingEl.textContent = `${CONFIG.currencySymbol}${totalPending.toLocaleString("en-IN")}`;

  // Update Fee Progress Bar
  if (progressFill && totalTarget > 0) {
    const percent = Math.round((totalCollected / totalTarget) * 100);
    progressFill.style.width = `${percent}%`;
  }

  container.innerHTML = "";

  feeState.forEach((student) => {
    const row = document.createElement("div");
    row.className = "sim-student-row";

    const initials = getInitials(student.name);

    row.innerHTML = `
      <div class="sim-student-left">
        <span class="sim-avatar" aria-hidden="true">${initials}</span>
        <div>
          <span class="sim-name">${student.name}</span>
          <span class="sim-batch">${CONFIG.currencySymbol}${feePerStudent.toLocaleString("en-IN")}/month • ${student.isPaid ? `Receipt #${student.receiptNo}` : '<span class="badge badge-warning">October Due</span>'}</span>
        </div>
      </div>
      <div>
        ${student.isPaid ? `
          <button type="button" class="sim-toggle-btn btn-fee-paid" disabled>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>Paid</span>
          </button>
        ` : `
          <button 
            type="button" 
            class="sim-toggle-btn btn-fee-pending" 
            data-fee-id="${student.id}"
            aria-label="Collect ${CONFIG.currencySymbol}${feePerStudent} fee for ${student.name}"
          >
            <span>Collect ${CONFIG.currencySymbol}${feePerStudent.toLocaleString("en-IN")}</span>
          </button>
        `}
      </div>
    `;

    if (!student.isPaid) {
      const collectBtn = row.querySelector(".btn-fee-pending");
      collectBtn.addEventListener("click", () => {
        student.isPaid = true;
        student.receiptNo = `CD-${1040 + Math.floor(Math.random() * 900)}`;
        renderFeeSimulator();
        showToast("feeToastMessage", `Receipt #${student.receiptNo} created for ${student.name}! Total pending balance reduced.`);
      });
    }

    container.appendChild(row);
  });
}

function showToast(targetId, message) {
  const el = document.getElementById(targetId);
  if (el) {
    el.textContent = message;
  }
}

/* ============================================================================
   5. FAQ ACCORDION (KEYBOARD ACCESSIBLE)
   ============================================================================ */
function initAccordion() {
  const triggers = document.querySelectorAll(".faq-trigger");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";
      const panelId = trigger.getAttribute("aria-controls");
      const panel = document.getElementById(panelId);

      if (!panel) return;

      // Toggle state
      trigger.setAttribute("aria-expanded", String(!isExpanded));
      panel.hidden = isExpanded;
    });
  });
}

/* ============================================================================
   6. DEMO MODAL & FORM HANDLERS
   ============================================================================ */
function initModalAndForms() {
  const modalBackdrop = document.getElementById("demoModalBackdrop");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalOpenTriggers = document.querySelectorAll(".open-demo-trigger, #headerDemoBtn, a[href='#demo-modal']");
  const modalForm = document.getElementById("modalDemoForm");
  const modalSuccessMsg = document.getElementById("modalSuccessMsg");
  const modalTeacherName = document.getElementById("modalTeacherName");

  if (modalBackdrop && modalCloseBtn) {
    const openModal = () => {
      modalBackdrop.hidden = false;
      modalBackdrop.removeAttribute("hidden");
      modalBackdrop.classList.remove("is-hidden");
      modalBackdrop.style.display = "flex";
      document.body.style.overflow = "hidden";
      if (modalTeacherName) {
        setTimeout(() => modalTeacherName.focus(), 60);
      }
    };

    const closeModal = () => {
      modalBackdrop.hidden = true;
      modalBackdrop.setAttribute("hidden", "");
      modalBackdrop.classList.add("is-hidden");
      modalBackdrop.style.display = "none";
      document.body.style.overflow = "";
      if (modalSuccessMsg) {
        modalSuccessMsg.hidden = true;
        modalSuccessMsg.setAttribute("hidden", "");
        modalSuccessMsg.style.display = "none";
      }
      if (modalForm) modalForm.reset();
    };

    modalOpenTriggers.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        openModal();
      });
    });

    modalCloseBtn.addEventListener("click", (e) => {
      e.preventDefault();
      closeModal();
    });

    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modalBackdrop.hidden) {
        closeModal();
      }
    });

    // Modal Form Submission
    if (modalForm) {
      modalForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("modalTeacherName")?.value || "";
        const coaching = document.getElementById("modalCoachingName")?.value || "";
        const phone = document.getElementById("modalTeacherPhone")?.value || "";

        if (!name.trim() || !phone.trim()) {
          alert("Please enter your name and phone number.");
          return;
        }

        // Show success state
        if (modalSuccessMsg) {
          modalSuccessMsg.hidden = false;
          modalSuccessMsg.removeAttribute("hidden");
          modalSuccessMsg.style.display = "block";
        }

        // Prepare friendly prefilled WhatsApp inquiry
        const customMessage = `Hello, I am ${name} from ${coaching || "my coaching institute"}. I would like to schedule a 15-minute demo of ${CONFIG.productName} for my batches. My phone is ${phone}.`;
        const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(customMessage)}`;

        // Open WhatsApp after a short delay
        setTimeout(() => {
          window.open(waUrl, "_blank", "noopener");
        }, 800);
      });
    }
  }

  // Inline Landing Demo Form (#contact)
  const landingForm = document.getElementById("landingDemoForm");
  const successState = document.getElementById("formSuccessState");

  if (landingForm && successState) {
    landingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("teacherName")?.value || "";
      const coaching = document.getElementById("coachingName")?.value || "";
      const phone = document.getElementById("teacherPhone")?.value || "";
      const time = document.getElementById("preferredTime")?.value || "evening";

      if (!name.trim() || !phone.trim()) {
        alert("Please enter your name and phone number.");
        return;
      }

      // Hide form, show success state
      landingForm.hidden = true;
      successState.hidden = false;

      // Open WhatsApp directly with details
      const customMessage = `Hello, I am ${name} from ${coaching || "my coaching classes"}. I would like to see a demo of ${CONFIG.productName}. Preferred time to call: ${time}. Mobile: ${phone}.`;
      const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(customMessage)}`;

      setTimeout(() => {
        window.open(waUrl, "_blank", "noopener");
      }, 700);
    });
  }
}

/* ============================================================================
   7. ANIMATED NUMBER COUNTERS (On Scroll)
   ============================================================================ */
function initCounters() {
  const counterElements = document.querySelectorAll("[data-counter]");
  if (!counterElements.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-counter"), 10);
        const suffix = el.getAttribute("data-suffix") || "";
        const duration = 1200; // ms
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentVal = Math.floor(easeProgress * target);

          el.textContent = `${currentVal}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = `${target}${suffix}`;
          }
        }

        requestAnimationFrame(updateCounter);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counterElements.forEach((el) => observer.observe(el));
}

/* ============================================================================
   8. SCROLL REVEAL (SUBTLE PURPOSEFUL MOTION)
   ============================================================================ */
function initScrollReveal() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const revealTargets = document.querySelectorAll(
    ".feature-card-detailed, .paper-register-card, .solution-preview-card, .step-card, .sub-feature-card, .roadmap-card, .stat-box-modern"
  );

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  revealTargets.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    el.style.transition = "opacity 0.45s ease, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)";
    observer.observe(el);
  });
}

/* ============================================================================
   INITIALIZATION ON DOM LOADED
   ============================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initConfigHydration();
  initThemeToggle();
  initNavigation();
  initInteractiveDemo();
  initAccordion();
  initModalAndForms();
  initCounters();
  initScrollReveal();
});
