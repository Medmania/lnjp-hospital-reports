// ==========================================
// USER GUIDE & HELP SYSTEM CONFIGURATION
// ==========================================

const USER_GUIDE_CONFIG = {
  title: "LNJP LabHub • Quick Guide",
  steps: [
    {
      icon: "fa-magnifying-glass",
      heading: "1. Search & Filter Registers",
      text: "Use top chips (Window 1, Window 2) or register tags (CBC, PT/INR, BUSE/LFT/KFT) to narrow down lab logs instantly."
    },
    {
      icon: "fa-camera",
      heading: "2. Upload Register Batches",
      text: "Go to 'Intern Upload Desk'. Fill in Target Window, Register Category, Date, and mandatory Batch Title. Use camera or gallery picker to add images."
    },
    {
      icon: "fa-eye",
      heading: "3. View & Tag Patient Names",
      text: "Click 'View Report Records' on any card. Swipe through images and check 'Select this page'. Type patient details directly into the note bar."
    },
    {
      icon: "fa-brands fa-whatsapp",
      heading: "4. Direct WhatsApp Sharing",
      text: "Click 'Share Photos'. Images will automatically share with formatted captions like 'Manu - PT / INR' or 'Dilshad - CBC Emergency'."
    }
  ]
};

function initUserGuideSystem() {
  const guideModal = document.createElement('div');
  guideModal.className = 'modal';
  guideModal.id = 'guideModal';
  
  let stepsHTML = USER_GUIDE_CONFIG.steps.map(step => `
    <div style="display:flex;gap:12px;margin-bottom:14px;align-items:flex-start;">
      <div style="background:var(--primary-light);color:var(--primary);padding:10px;border-radius:10px;font-size:1.1rem;flex-shrink:0;">
        <i class="fa-solid ${step.icon}"></i>
      </div>
      <div>
        <h4 style="font-size:14px;font-weight:700;color:var(--text-main);margin-bottom:2px;">${step.heading}</h4>
        <p style="font-size:12px;color:var(--text-muted);line-height:1.4;">${step.text}</p>
      </div>
    </div>
  `).join('');

  guideModal.innerHTML = `
    <div class="card" style="width:90%;max-width:460px;position:relative;max-height:85vh;overflow-y:auto;">
      <button class="tool-btn" style="position:absolute;top:15px;right:15px;color:var(--text-main);" onclick="closeGuideModal()"><i class="fa-solid fa-xmark"></i></button>
      <h3 style="color:var(--primary);margin-bottom:18px;display:flex;align-items:center;gap:8px;">
        <i class="fa-solid fa-circle-info"></i> ${USER_GUIDE_CONFIG.title}
      </h3>
      ${stepsHTML}
      <button class="btn-submit" onclick="closeGuideModal()" style="margin-top:10px;"><i class="fa-solid fa-check"></i> Got It</button>
    </div>
  `;

  document.body.appendChild(guideModal);
}

function openGuideModal() {
  const el = document.getElementById('guideModal');
  if (el) {
    el.classList.add('active');
    if (window.history.state?.modal !== 'guideModal') {
      window.history.pushState({ modal: 'guideModal' }, '');
    }
  }
}

function closeGuideModal() {
  const el = document.getElementById('guideModal');
  if (el) el.classList.remove('active');
}

window.addEventListener('DOMContentLoaded', () => {
  initUserGuideSystem();
});
