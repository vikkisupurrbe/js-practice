/* =========================================================================
   RBC STAFF PORTAL — DEMO APP
   All data below is fake/dummy, generated for demonstration purposes only.
   No real client data, no network calls — everything runs in the browser.
   ========================================================================= */

/* ---------------------------------------------------------------------
   1. REFERENCE DATA (merchants / transaction types)
   --------------------------------------------------------------------- */
const DEBIT_MERCHANTS = [
  { type: "POINT OF SALE PURCHASE", names: ["TIM HORTONS #4521", "COSTCO WHOLESALE", "LOBLAWS", "STARBUCKS", "SOBEYS", "CANADIAN TIRE", "LCBO", "THE HOME DEPOT", "BEST BUY CANADA", "METRO INC.", "INDIGO BOOKS", "WALMART CANADA"], min: 8, max: 260 },
  { type: "PREAUTHORIZED DEBIT", names: ["DWELL PROPERTY MGMT", "ENBRIDGE GAS", "BELL CANADA", "ROGERS COMMUNICATIONS", "INTACT INSURANCE", "TELUS MOBILITY", "FITNESS WORLD"], min: 45, max: 1450 },
  { type: "ONLINE BILL PAYMENT", names: ["HYDRO ONE", "CITY OF TORONTO - PROPERTY TAX", "RBC VISA PAYMENT", "STUDENT LOAN - NSLSC"], min: 60, max: 900 },
  { type: "PREAUTHORIZED DEBIT", names: ["NETFLIX.COM", "SPOTIFY AB", "APPLE.COM/BILL", "AMAZON PRIME"], min: 9, max: 25 },
  { type: "E-TRANSFER SENT", names: ["INTERAC E-TRANSFER - J. MARTIN", "INTERAC E-TRANSFER - LANDLORD", "INTERAC E-TRANSFER - A. CHEN"], min: 20, max: 800 },
  { type: "ATM WITHDRAWAL", names: ["RBC ATM #0231 TORONTO ON", "RBC ATM #0904 VANCOUVER BC"], min: 40, max: 300 },
  { type: "POINT OF SALE PURCHASE", names: ["UBER EATS", "UBER CANADA", "ESSO", "PETRO-CANADA", "AMAZON.CA"], min: 12, max: 220 },
];

const CREDIT_SOURCES = [
  { type: "DIRECT DEPOSIT", names: ["PAYROLL DEPOSIT - ACME CORP", "PAYROLL DEPOSIT - NORTHWIND INC.", "PAYROLL DEPOSIT - CITY OF TORONTO"], min: 950, max: 3200 },
  { type: "E-TRANSFER RECEIVED", names: ["INTERAC E-TRANSFER - M. SINGH", "INTERAC E-TRANSFER - FAMILY", "INTERAC E-TRANSFER - REFUND"], min: 25, max: 650 },
  { type: "PREAUTHORIZED CREDIT", names: ["CRA - GST/HST CREDIT", "CRA - CHILD BENEFIT", "MERCHANT REFUND - AMAZON.CA"], min: 60, max: 700 },
];

/* ---------------------------------------------------------------------
   2. CLIENT / PRODUCT DATA
   --------------------------------------------------------------------- */
const RAW_CLIENTS = [
  {
    cardNumber: "4519 0112 3456 7890",
    name: "Sarah Thompson",
    dob: "1985-03-12",
    address: "128 Maple Street, Toronto, ON  M4B 1B3",
    phone: "(416) 555-0142",
    email: "sarah.thompson@fakemail.com",
    kycStatus: "Verified",
    riskFlag: "Low",
    kycDocs: [
      { name: "Government-Issued Photo ID", status: "Verified", date: "2024-01-15" },
      { name: "Proof of Address", status: "Verified", date: "2024-01-15" },
      { name: "SIN Confirmation", status: "Pending Review", date: "2026-06-30" },
    ],
    products: [
      { type: "Chequing", name: "RBC Day to Day Banking", accountNumber: "03192-447 198-2", balance: 5643.46, hasTxns: true },
      { type: "Savings", name: "RBC High Interest eSavings", accountNumber: "03192-882 734-1", balance: 12500.11, hasTxns: true },
      { type: "Credit Card", name: "RBC Cash Back Mastercard", accountNumber: "5234 56XX XXXX 1123", balance: -1240.55, limit: 5000, hasTxns: true },
      { type: "Mortgage", name: "RBC Homeline Plan", accountNumber: "LN-771029", balance: -215430.00, hasTxns: false },
    ],
  },
  {
    cardNumber: "4519 0198 2233 4471",
    name: "Marcus Chen",
    dob: "1990-11-02",
    address: "45 Bayview Ave, Unit 1204, North York, ON  M2N 6K1",
    phone: "(647) 555-0198",
    email: "marcus.chen@fakemail.com",
    kycStatus: "Verified",
    riskFlag: "Medium",
    kycDocs: [
      { name: "Government-Issued Photo ID", status: "Verified", date: "2023-08-04" },
      { name: "Proof of Address", status: "Verified", date: "2023-08-04" },
      { name: "Enhanced Due Diligence Review", status: "Action Required", date: "2026-07-02" },
    ],
    products: [
      { type: "Chequing", name: "RBC Signature No Limit Banking", accountNumber: "04521-119 887-5", balance: 2314.09, hasTxns: true },
      { type: "Credit Card", name: "RBC Avion Visa Infinite", accountNumber: "4536 12XX XXXX 8890", balance: -3899.20, limit: 12000, hasTxns: true },
      { type: "Line of Credit", name: "RBC Homeline Plan LOC", accountNumber: "LOC-550213", balance: -8200.00, hasTxns: false },
    ],
  },
  {
    cardNumber: "4519 0155 7788 2210",
    name: "Priya Nair",
    dob: "1978-06-24",
    address: "9 Harbourfront Blvd, Ottawa, ON  K1P 5J6",
    phone: "(613) 555-0176",
    email: "priya.nair@fakemail.com",
    kycStatus: "Verified",
    riskFlag: "Low",
    kycDocs: [
      { name: "Government-Issued Photo ID", status: "Verified", date: "2022-02-19" },
      { name: "Proof of Address", status: "Verified", date: "2022-02-19" },
      { name: "SIN Confirmation", status: "Verified", date: "2022-02-19" },
    ],
    products: [
      { type: "Chequing", name: "RBC Day to Day Banking", accountNumber: "02214-778 231-9", balance: 890.22, hasTxns: true },
      { type: "Savings", name: "RBC High Interest eSavings", accountNumber: "02214-990 112-4", balance: 40210.75, hasTxns: true },
      { type: "TFSA", name: "RBC TFSA Savings", accountNumber: "TFSA-33012", balance: 18500.00, hasTxns: false },
    ],
  },
  {
    cardNumber: "4519 0177 9910 6634",
    name: "Devon Williams",
    dob: "2001-09-08",
    address: "77 King Street W, Kitchener, ON  N2G 1A5",
    phone: "(519) 555-0143",
    email: "devon.williams@fakemail.com",
    kycStatus: "Pending Review",
    riskFlag: "High",
    kycDocs: [
      { name: "Government-Issued Photo ID", status: "Verified", date: "2026-05-30" },
      { name: "Proof of Address", status: "Pending Review", date: "2026-07-01" },
      { name: "SIN Confirmation", status: "Pending Review", date: "2026-07-01" },
    ],
    products: [
      { type: "Chequing", name: "RBC Student Banking", accountNumber: "01187-224 559-3", balance: 214.63, hasTxns: true },
      { type: "Credit Card", name: "RBC Student Visa", accountNumber: "4123 78XX XXXX 4471", balance: -612.40, limit: 1500, hasTxns: true },
    ],
  },
  {
    cardNumber: "4519 0133 4456 7789",
    name: "Elaine Fortier",
    dob: "1965-01-30",
    address: "310 Rue Sainte-Catherine, Montreal, QC  H3B 1A7",
    phone: "(514) 555-0165",
    email: "elaine.fortier@fakemail.com",
    kycStatus: "Verified",
    riskFlag: "Low",
    kycDocs: [
      { name: "Government-Issued Photo ID", status: "Verified", date: "2021-11-11" },
      { name: "Proof of Address", status: "Verified", date: "2021-11-11" },
      { name: "SIN Confirmation", status: "Verified", date: "2021-11-11" },
    ],
    products: [
      { type: "Chequing", name: "RBC VIP Banking", accountNumber: "05590-114 887-6", balance: 78320.55, hasTxns: true },
      { type: "Savings", name: "RBC High Interest eSavings", accountNumber: "05590-990 213-2", balance: 156000.00, hasTxns: true },
      { type: "Credit Card", name: "RBC Avion Visa Infinite Privilege", accountNumber: "4536 90XX XXXX 2201", balance: -5410.88, limit: 25000, hasTxns: true },
      { type: "Mortgage", name: "RBC Homeline Plan", accountNumber: "LN-990112", balance: -402100.00, hasTxns: false },
    ],
  },
  {
    cardNumber: "4519 0166 8823 1145",
    name: "Jason Roy",
    dob: "1993-04-17",
    address: "22 Confederation St, Winnipeg, MB  R2C 0J9",
    phone: "(204) 555-0121",
    email: "jason.roy@fakemail.com",
    kycStatus: "Verified",
    riskFlag: "Medium",
    kycDocs: [
      { name: "Government-Issued Photo ID", status: "Verified", date: "2025-03-22" },
      { name: "Proof of Address", status: "Verified", date: "2025-03-22" },
      { name: "SIN Confirmation", status: "Verified", date: "2025-03-22" },
    ],
    products: [
      { type: "Chequing", name: "RBC Day to Day Banking", accountNumber: "07721-334 119-8", balance: 1102.40, hasTxns: true },
      { type: "Credit Card", name: "RBC Cash Back Mastercard", accountNumber: "5234 20XX XXXX 7743", balance: -2140.15, limit: 4000, hasTxns: true },
    ],
  },
];

/* ---------------------------------------------------------------------
   3. TRANSACTION GENERATION
   --------------------------------------------------------------------- */

// simple deterministic-ish PRNG so each reload looks the same during a session
let seedCounter = 1;
function rand() {
  seedCounter = (seedCounter * 9301 + 49297) % 233280;
  return seedCounter / 233280;
}
function randInt(min, max) { return Math.floor(rand() * (max - min + 1)) + min; }
function pick(arr) { return arr[randInt(0, arr.length - 1)]; }

function fmtDate(d) {
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
function fmtMoney(n) {
  const abs = Math.abs(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return (n < 0 ? "-$" : "$") + abs;
}

// Builds a chronological (oldest -> newest) transaction list for a product,
// ending "today", spanning 10-15 days back.
function generateTransactions(product, client) {
  const daySpan = randInt(10, 15);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const txns = [];
  for (let offset = daySpan; offset >= 0; offset--) {
    const day = new Date(today);
    day.setDate(day.getDate() - offset);
    const dow = day.getDay(); // 0 = Sun, 6 = Sat
    const isWeekend = dow === 0 || dow === 6;
    const count = isWeekend ? randInt(4, 6) : randInt(0, 3);

    for (let i = 0; i < count; i++) {
      const isCredit = rand() < 0.18; // most days lean toward debits
      const pool = isCredit ? CREDIT_SOURCES : DEBIT_MERCHANTS;
      const group = pick(pool);
      const merchant = pick(group.names);
      let amount = randInt(group.min * 100, group.max * 100) / 100;
      if (!isCredit) amount = -amount;

      // random time-of-day for ordering within the day
      const time = new Date(day);
      time.setHours(randInt(6, 22), randInt(0, 59), 0, 0);

      txns.push({
        id: `${product.accountNumber}-${offset}-${i}-${Math.floor(rand() * 100000)}`,
        date: time,
        type: group.type,
        merchant: merchant,
        delta: Math.round(amount * 100) / 100,
        reversed: false,
        balanceAfter: 0, // computed below
      });
    }
  }

  txns.sort((a, b) => a.date - b.date);

  // Walk backwards so the newest transaction's balanceAfter == product's current balance.
  let running = product.balance;
  for (let i = txns.length - 1; i >= 0; i--) {
    txns[i].balanceAfter = running;
    running = Math.round((running - txns[i].delta) * 100) / 100;
  }

  return txns;
}

// Recompute balanceAfter for every transaction in a product (used after a reversal is posted).
function recalcBalances(product) {
  let running = product.balance;
  for (let i = product.transactions.length - 1; i >= 0; i--) {
    product.transactions[i].balanceAfter = running;
    running = Math.round((running - product.transactions[i].delta) * 100) / 100;
  }
}

/* ---------------------------------------------------------------------
   4. BUILD IN-MEMORY "DATABASE"
   --------------------------------------------------------------------- */
const CLIENTS = RAW_CLIENTS.map((c, idx) => {
  const client = { ...c, id: "CL-" + (1000 + idx) };
  client.products = client.products.map((p, pidx) => {
    const product = { ...p, id: client.id + "-P" + pidx };
    if (product.hasTxns) {
      product.transactions = generateTransactions(product, client);
    } else {
      product.transactions = [];
    }
    return product;
  });
  return client;
});

function findClientByCard(cardRaw) {
  const norm = cardRaw.replace(/\s+/g, "");
  return CLIENTS.find(c => c.cardNumber.replace(/\s+/g, "") === norm);
}

/* ---------------------------------------------------------------------
   5. FRAUD ALERTS & PENDING APPROVALS (dashboard, dummy but linked to clients)
   --------------------------------------------------------------------- */
const FRAUD_ALERTS = [
  { client: CLIENTS[3], reason: "Card-not-present purchase flagged — unusual geographic location", amount: -899.00 },
  { client: CLIENTS[1], reason: "Multiple rapid ATM withdrawals within 20 minutes", amount: -600.00 },
  { client: CLIENTS[5], reason: "Transaction amount exceeds client's typical spending pattern", amount: -1250.75 },
  { client: CLIENTS[0], reason: "Client-reported unauthorized preauthorized debit", amount: -465.37 },
];

const PENDING_APPROVALS = [
  { type: "Wire Transfer Release", client: CLIENTS[4], details: "Outbound wire — $18,000.00 to external institution", requested: "2 hrs ago" },
  { type: "Credit Limit Increase", client: CLIENTS[1], details: "Requested increase from $12,000 to $18,000", requested: "5 hrs ago" },
  { type: "KYC Document Review", client: CLIENTS[3], details: "Proof of Address awaiting compliance sign-off", requested: "1 day ago" },
  { type: "Dispute Resolution", client: CLIENTS[0], details: "Chargeback request for DWELL PROPERTY MGMT debit", requested: "3 hrs ago" },
];

/* ---------------------------------------------------------------------
   6. CHAT DATA
   --------------------------------------------------------------------- */
const CHAT_THREADS = [
  {
    id: "chat-1",
    client: CLIENTS[0],
    subject: "Disputed preauthorized debit",
    unread: true,
    messages: [
      { from: "client", text: "Hi, I noticed a $465.37 charge from DWELL PROPERTY MGMT on my chequing account but I moved out of that unit two months ago. Can you look into this?", time: "9:02 AM" },
      { from: "staff", text: "Thanks for flagging this, Sarah. I'm pulling up your account now — one moment.", time: "9:04 AM" },
      { from: "client", text: "Thank you! I'd like it reversed if possible, this wasn't authorized.", time: "9:05 AM" },
    ],
  },
  {
    id: "chat-2",
    client: CLIENTS[1],
    subject: "Suspicious ATM activity",
    unread: true,
    messages: [
      { from: "client", text: "I just got a fraud alert text about ATM withdrawals I didn't make. My card is still in my wallet.", time: "Yesterday, 6:41 PM" },
      { from: "staff", text: "I'm very sorry to hear that, Marcus. I can see the flagged activity on our end. Let's get your card blocked right away and start a fraud investigation.", time: "Yesterday, 6:44 PM" },
    ],
  },
  {
    id: "chat-3",
    client: CLIENTS[3],
    subject: "KYC document question",
    unread: false,
    messages: [
      { from: "client", text: "I uploaded my proof of address last week but my account still shows as pending review. Is something wrong with it?", time: "Jul 7, 11:20 AM" },
      { from: "staff", text: "Let me check the status of your documents now.", time: "Jul 7, 11:25 AM" },
      { from: "staff", text: "It looks like the utility bill you submitted was more than 90 days old. Could you upload a more recent one?", time: "Jul 7, 11:31 AM" },
      { from: "client", text: "Ah that makes sense, I'll upload a new one today.", time: "Jul 7, 11:33 AM" },
    ],
  },
  {
    id: "chat-4",
    client: CLIENTS[2],
    subject: "Credit card limit increase",
    unread: false,
    messages: [
      { from: "client", text: "Hi, I'd like to request a credit limit increase on my savings-linked credit card if possible.", time: "Jul 6, 2:10 PM" },
      { from: "staff", text: "Happy to help, Priya. I can submit that request for review — it typically takes 1-2 business days.", time: "Jul 6, 2:15 PM" },
    ],
  },
  {
    id: "chat-5",
    client: CLIENTS[4],
    subject: "Wire transfer status",
    unread: true,
    messages: [
      { from: "client", text: "Can you confirm the status of my outbound wire transfer for $18,000? I submitted it this morning.", time: "11:12 AM" },
    ],
  },
  {
    id: "chat-6",
    client: CLIENTS[5],
    subject: "Large purchase confirmation",
    unread: false,
    messages: [
      { from: "client", text: "I got a text asking me to confirm a $1,250.75 purchase — that one was actually me, just wanted to confirm it's fine.", time: "Jul 5, 4:02 PM" },
      { from: "staff", text: "Thanks for confirming, Jason! I've cleared that flag on our end, no action needed.", time: "Jul 5, 4:10 PM" },
    ],
  },
];

const QUICK_REPLIES = [
  "I've reversed that transaction — you should see the credit reflected within 1 business day.",
  "I've escalated this to our Fraud Investigations team, they'll be in touch within 24 hours.",
  "Could you please upload an updated document so we can complete this review?",
  "This has been resolved on our end — let me know if there's anything else!",
];

/* ---------------------------------------------------------------------
   7. STATE
   --------------------------------------------------------------------- */
const state = {
  activeTab: "dashboard",
  selectedClient: null,
  selectedProductId: null,
  activeChatId: null,
};

/* ---------------------------------------------------------------------
   8. RENDER: TOP BAR / NAV
   --------------------------------------------------------------------- */
function renderTopDate() {
  const now = new Date();
  const str = now.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  document.getElementById("topbarDate").textContent = str;
  document.getElementById("dashDate").textContent = now.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
}

const SUBNAV_LABELS = {
  dashboard: "Dashboard Overview",
  crm: "Customer Management — Search & Profiles",
  ledger: "Transaction Ledger — Bank-Wide Search",
  chat: "Client Chat — Active Conversations",
};

function switchTab(tab) {
  state.activeTab = tab;
  document.querySelectorAll(".mainnav-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tab);
  });
  document.querySelectorAll(".tab-panel").forEach(panel => {
    panel.classList.toggle("active", panel.id === "tab-" + tab);
  });
  document.getElementById("subnavLabel").textContent = SUBNAV_LABELS[tab];
}

document.querySelectorAll(".mainnav-tab").forEach(btn => {
  btn.addEventListener("click", () => switchTab(btn.dataset.tab));
});
document.querySelectorAll("[data-goto]").forEach(el => {
  el.addEventListener("click", () => switchTab(el.dataset.goto));
});

/* ---------------------------------------------------------------------
   9. RENDER: DASHBOARD
   --------------------------------------------------------------------- */
function renderDashboard() {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  let totalVolume = 0;
  let txnCountToday = 0;
  CLIENTS.forEach(c => c.products.forEach(p => p.transactions.forEach(t => {
    const d = new Date(t.date); d.setHours(0, 0, 0, 0);
    if (d.getTime() === today.getTime()) {
      totalVolume += Math.abs(t.delta);
      txnCountToday++;
    }
  })));

  const stats = [
    { label: "Daily Transaction Volume", value: fmtMoney(totalVolume), sub: txnCountToday + " transactions today", cls: "" },
    { label: "Active Client Users", value: CLIENTS.length + " online", sub: "across all branches", cls: "good" },
    { label: "Pending Approvals", value: PENDING_APPROVALS.length, sub: "awaiting staff action", cls: "warn" },
    { label: "Fraud Alerts", value: FRAUD_ALERTS.length, sub: "requires investigation", cls: "danger" },
    { label: "System Health", value: "Operational", sub: "all systems nominal", cls: "good" },
  ];

  document.getElementById("statGrid").innerHTML = stats.map(s => `
    <div class="stat-card ${s.cls}">
      <div class="label">${s.label}</div>
      <div class="value">${s.value}</div>
      <div class="sub">${s.sub}</div>
    </div>
  `).join("");

  document.querySelector("#fraudTable tbody").innerHTML = FRAUD_ALERTS.map((f, i) => `
    <tr>
      <td><span class="tag flagged">Flagged</span></td>
      <td>${f.client.name}</td>
      <td>${f.client.cardNumber}</td>
      <td>${f.reason}</td>
      <td>${fmtMoney(f.amount)}</td>
      <td><button class="btn-small" data-investigate="${i}">Investigate</button></td>
    </tr>
  `).join("");

  document.querySelectorAll("[data-investigate]").forEach(btn => {
    btn.addEventListener("click", () => {
      const f = FRAUD_ALERTS[btn.dataset.investigate];
      switchTab("crm");
      document.getElementById("cardSearchInput").value = f.client.cardNumber;
      doClientSearch();
      showToast(`Opened ${f.client.name}'s profile for investigation.`);
    });
  });

  document.querySelector("#approvalTable tbody").innerHTML = PENDING_APPROVALS.map((a, i) => `
    <tr>
      <td>${a.type}</td>
      <td>${a.client.name}</td>
      <td>${a.details}</td>
      <td>${a.requested}</td>
      <td><button class="btn-small" data-approve="${i}">Review</button></td>
    </tr>
  `).join("");

  document.querySelectorAll("[data-approve]").forEach(btn => {
    btn.addEventListener("click", () => {
      const a = PENDING_APPROVALS[btn.dataset.approve];
      switchTab("crm");
      document.getElementById("cardSearchInput").value = a.client.cardNumber;
      doClientSearch();
      showToast(`Opened ${a.client.name}'s profile to review: ${a.type}.`);
    });
  });
}

/* ---------------------------------------------------------------------
   10. RENDER: CRM / CLIENT PROFILE
   --------------------------------------------------------------------- */
function doClientSearch() {
  const raw = document.getElementById("cardSearchInput").value.trim();
  const errBox = document.getElementById("crmError");
  const profileBox = document.getElementById("clientProfile");

  if (!raw) {
    errBox.style.display = "block";
    errBox.textContent = "Please enter a 16-digit client card number.";
    profileBox.style.display = "none";
    return;
  }
  const client = findClientByCard(raw);
  if (!client) {
    errBox.style.display = "block";
    errBox.textContent = `No client found for card number "${raw}". Double-check the number and try again.`;
    profileBox.style.display = "none";
    return;
  }
  errBox.style.display = "none";
  state.selectedClient = client;
  state.selectedProductId = client.products.find(p => p.hasTxns)?.id || null;
  renderClientProfile(client);
}

function kycTagClass(status) {
  if (status === "Verified") return "verified";
  if (status === "Pending Review") return "pending";
  return "flagged";
}
function riskTagClass(risk) {
  if (risk === "Low") return "verified";
  if (risk === "Medium") return "pending";
  return "flagged";
}

function renderClientProfile(client) {
  const box = document.getElementById("clientProfile");
  box.style.display = "block";

  box.innerHTML = `
    <div class="profile-header">
      <div>
        <h2>${client.name}</h2>
        <div class="profile-meta">
          Card Number: <strong>${client.cardNumber}</strong><br>
          DOB: ${client.dob} &nbsp;|&nbsp; Phone: ${client.phone} &nbsp;|&nbsp; ${client.email}<br>
          ${client.address}
        </div>
      </div>
      <div class="profile-flags">
        <span class="tag ${kycTagClass(client.kycStatus)}">KYC: ${client.kycStatus}</span>
        <span class="tag ${riskTagClass(client.riskFlag)}">Risk: ${client.riskFlag}</span>
      </div>
    </div>

    <h3 class="section-title">KYC Documents</h3>
    <table class="data-table kyc-table">
      <thead><tr><th>Document</th><th>Status</th><th>Last Updated</th></tr></thead>
      <tbody>
        ${client.kycDocs.map(d => `
          <tr><td>${d.name}</td><td><span class="tag ${kycTagClass(d.status)}">${d.status}</span></td><td>${d.date}</td></tr>
        `).join("")}
      </tbody>
    </table>

    <h3 class="section-title">Linked Products</h3>
    <div class="products-grid" id="productsGrid">
      ${client.products.map(p => `
        <div class="product-card ${p.id === state.selectedProductId ? "selected" : ""}" data-product="${p.id}">
          <div class="ptype">${p.type}${p.hasTxns ? "" : " &middot; no transaction history"}</div>
          <div class="pname">${p.name}</div>
          <div class="pnum">${p.accountNumber}</div>
          <div class="pbal ${p.balance < 0 ? "neg" : ""}">${fmtMoney(p.balance)}${p.limit ? ` <span style="font-size:11px;color:#888;">/ limit ${fmtMoney(p.limit)}</span>` : ""}</div>
        </div>
      `).join("")}
    </div>

    <h3 class="section-title">Transaction History</h3>
    <div id="txnHistory"></div>
  `;

  document.querySelectorAll("#productsGrid .product-card").forEach(card => {
    card.addEventListener("click", () => {
      const product = client.products.find(p => p.id === card.dataset.product);
      if (!product.hasTxns) {
        showToast(`${product.name} does not carry day-to-day transaction history.`);
        return;
      }
      state.selectedProductId = product.id;
      document.querySelectorAll("#productsGrid .product-card").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      renderTxnHistory(client, product);
    });
  });

  const initialProduct = client.products.find(p => p.id === state.selectedProductId);
  if (initialProduct) renderTxnHistory(client, initialProduct);
}

function renderTxnHistory(client, product) {
  const box = document.getElementById("txnHistory");
  if (!product.transactions.length) {
    box.innerHTML = `<p class="table-note">No transactions to display for this product.</p>`;
    return;
  }

  // newest first
  const sorted = [...product.transactions].sort((a, b) => b.date - a.date);

  // group by calendar day
  const groups = [];
  let currentKey = null;
  sorted.forEach(t => {
    const key = t.date.toDateString();
    if (key !== currentKey) {
      groups.push({ key, date: t.date, items: [] });
      currentKey = key;
    }
    groups[groups.length - 1].items.push(t);
  });

  box.innerHTML = groups.map(g => `
    <div class="txn-day-group">
      <div class="txn-day-header">${fmtDate(g.date)}</div>
      ${g.items.map(t => `
        <div class="txn-item">
          <div class="txn-left">
            <div class="ttype">${t.type}</div>
            <div class="tmerchant">${t.merchant}${t.reversed ? ' <span class="tag reversed">Reversed</span>' : ""}</div>
            <div class="txn-actions">
              ${!t.reversed && t.type !== "TRANSACTION REVERSAL" ? `<button class="btn-small danger" data-reverse="${t.id}" data-product="${product.id}">Reverse Transaction</button>` : ""}
              <button class="btn-small" data-trace="${t.id}" data-product="${product.id}">Trace Payment</button>
            </div>
          </div>
          <div class="txn-right">
            <div class="tamt ${t.delta < 0 ? "debit" : "credit"}">${fmtMoney(t.delta)}</div>
            <div class="tbal">Bal: ${fmtMoney(t.balanceAfter)}</div>
          </div>
        </div>
      `).join("")}
    </div>
  `).join("");

  box.querySelectorAll("[data-reverse]").forEach(btn => {
    btn.addEventListener("click", () => reverseTransaction(client, product, btn.dataset.reverse, () => renderTxnHistory(client, product)));
  });
  box.querySelectorAll("[data-trace]").forEach(btn => {
    btn.addEventListener("click", () => tracePayment(product, btn.dataset.trace));
  });
}

/* ---------------------------------------------------------------------
   11. TRANSACTION ACTIONS (reverse / trace) — shared by CRM + Ledger
   --------------------------------------------------------------------- */
function reverseTransaction(client, product, txnId, onDone) {
  const txn = product.transactions.find(t => t.id === txnId);
  if (!txn || txn.reversed) return;

  if (!confirm(`Reverse ${txn.type} of ${fmtMoney(txn.delta)} at ${txn.merchant} for ${client.name}?`)) return;

  txn.reversed = true;
  const reversal = {
    id: txn.id + "-REV",
    date: new Date(),
    type: "TRANSACTION REVERSAL",
    merchant: `Reversal of ${txn.merchant}`,
    delta: Math.round(-txn.delta * 100) / 100,
    reversed: false,
    balanceAfter: 0,
  };
  product.transactions.push(reversal);
  product.balance = Math.round((product.balance - txn.delta) * 100) / 100;
  recalcBalances(product);

  showToast(`Reversed ${fmtMoney(txn.delta)} at ${txn.merchant}. New balance: ${fmtMoney(product.balance)}.`);
  if (onDone) onDone();
  if (state.activeTab === "ledger") renderLedger();
}

function tracePayment(product, txnId) {
  const txn = product.transactions.find(t => t.id === txnId);
  if (!txn) return;
  alert(
    `Payment Trace\n\n` +
    `Reference: ${txn.id}\n` +
    `Type: ${txn.type}\n` +
    `Merchant: ${txn.merchant}\n` +
    `Amount: ${fmtMoney(txn.delta)}\n` +
    `Status: ${txn.reversed ? "Reversed" : "Settled"}\n\n` +
    `Step 1: Originated at point of sale / preauthorization network — OK\n` +
    `Step 2: Cleared through interbank settlement — OK\n` +
    `Step 3: Posted to account ledger — OK\n` +
    (txn.reversed ? `Step 4: Reversal posted to account — OK` : `Step 4: No reversal on file`)
  );
}

/* ---------------------------------------------------------------------
   12. RENDER: LEDGER
   --------------------------------------------------------------------- */
function getAllLedgerRows() {
  const rows = [];
  CLIENTS.forEach(client => {
    client.products.forEach(product => {
      product.transactions.forEach(t => {
        rows.push({ client, product, txn: t });
      });
    });
  });
  rows.sort((a, b) => b.txn.date - a.txn.date);
  return rows;
}

function renderLedger(filterText) {
  const rows = getAllLedgerRows();
  const q = (filterText || "").trim().toLowerCase();
  const filtered = q
    ? rows.filter(r =>
        r.client.name.toLowerCase().includes(q) ||
        r.client.cardNumber.replace(/\s+/g, "").includes(q.replace(/\s+/g, "")) ||
        r.txn.merchant.toLowerCase().includes(q) ||
        r.txn.type.toLowerCase().includes(q) ||
        r.product.name.toLowerCase().includes(q)
      )
    : rows;

  const display = filtered.slice(0, 250); // cap render for performance

  document.querySelector("#ledgerTable tbody").innerHTML = display.map(r => `
    <tr>
      <td>${fmtDate(r.txn.date)}</td>
      <td>${r.client.name}</td>
      <td>${r.product.name}<br><span class="table-note">${r.product.accountNumber}</span></td>
      <td>${r.txn.type}</td>
      <td>${r.txn.merchant}</td>
      <td class="${r.txn.delta < 0 ? "" : ""}">${fmtMoney(r.txn.delta)}</td>
      <td>${fmtMoney(r.txn.balanceAfter)}</td>
      <td>${r.txn.reversed ? '<span class="tag reversed">Reversed</span>' : '<span class="tag posted">Posted</span>'}</td>
      <td>
        ${!r.txn.reversed && r.txn.type !== "TRANSACTION REVERSAL" ? `<button class="btn-small danger" data-lreverse="${r.txn.id}">Reverse</button>` : `<button class="btn-small" disabled>Reverse</button>`}
        <button class="btn-small" data-ltrace="${r.txn.id}">Trace</button>
      </td>
    </tr>
  `).join("");

  document.getElementById("ledgerCount").textContent =
    `Showing ${display.length} of ${filtered.length} matching transactions (${rows.length} total across the bank).`;

  document.querySelectorAll("[data-lreverse]").forEach(btn => {
    btn.addEventListener("click", () => {
      const row = rows.find(r => r.txn.id === btn.dataset.lreverse);
      if (row) reverseTransaction(row.client, row.product, row.txn.id, null);
    });
  });
  document.querySelectorAll("[data-ltrace]").forEach(btn => {
    btn.addEventListener("click", () => {
      const row = rows.find(r => r.txn.id === btn.dataset.ltrace);
      if (row) tracePayment(row.product, row.txn.id);
    });
  });
}

document.getElementById("ledgerSearchBtn").addEventListener("click", () => {
  renderLedger(document.getElementById("ledgerSearchInput").value);
});
document.getElementById("ledgerSearchInput").addEventListener("keydown", e => {
  if (e.key === "Enter") renderLedger(document.getElementById("ledgerSearchInput").value);
});
document.getElementById("ledgerResetBtn").addEventListener("click", () => {
  document.getElementById("ledgerSearchInput").value = "";
  renderLedger();
});

/* ---------------------------------------------------------------------
   13. RENDER: CHAT
   --------------------------------------------------------------------- */
function renderChatThreads() {
  const box = document.getElementById("chatThreads");
  box.innerHTML = CHAT_THREADS.map(t => {
    const last = t.messages[t.messages.length - 1];
    return `
      <div class="chat-thread-item ${t.id === state.activeChatId ? "active" : ""}" data-chat="${t.id}">
        <div class="cname">${t.unread ? '<span class="unread-dot"></span>' : ""}${t.client.name}</div>
        <div class="cpreview">${t.subject}: ${last.text}</div>
        <div class="cmeta">${t.client.cardNumber}</div>
      </div>
    `;
  }).join("");

  box.querySelectorAll("[data-chat]").forEach(el => {
    el.addEventListener("click", () => {
      const thread = CHAT_THREADS.find(t => t.id === el.dataset.chat);
      thread.unread = false;
      state.activeChatId = thread.id;
      renderChatThreads();
      renderChatWindow(thread);
    });
  });
}

function renderChatWindow(thread) {
  const box = document.getElementById("chatWindow");
  box.innerHTML = `
    <div class="chat-header">
      <div>
        <div class="cname">${thread.client.name}</div>
        <div class="ccard">${thread.client.cardNumber} &middot; ${thread.subject}</div>
      </div>
      <button class="btn-small" id="openProfileFromChat">Open Client Profile</button>
    </div>
    <div class="chat-messages" id="chatMessages">
      ${thread.messages.map(m => `
        <div class="msg ${m.from}">
          ${m.text}
          <span class="mtime">${m.time}</span>
        </div>
      `).join("")}
    </div>
    <div class="chat-quick-actions">
      ${QUICK_REPLIES.map((qr, i) => `<button class="btn-small" data-quick="${i}">${qr.slice(0, 28)}&hellip;</button>`).join("")}
    </div>
    <div class="chat-input-row">
      <textarea id="chatInput" placeholder="Type a reply to ${thread.client.name}..."></textarea>
      <button id="chatSendBtn">Send</button>
    </div>
  `;

  const messagesBox = document.getElementById("chatMessages");
  messagesBox.scrollTop = messagesBox.scrollHeight;

  document.getElementById("openProfileFromChat").addEventListener("click", () => {
    switchTab("crm");
    document.getElementById("cardSearchInput").value = thread.client.cardNumber;
    doClientSearch();
  });

  document.querySelectorAll("[data-quick]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById("chatInput").value = QUICK_REPLIES[btn.dataset.quick];
      document.getElementById("chatInput").focus();
    });
  });

  document.getElementById("chatSendBtn").addEventListener("click", () => sendChatReply(thread));
  document.getElementById("chatInput").addEventListener("keydown", e => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendChatReply(thread);
    }
  });
}

function sendChatReply(thread) {
  const input = document.getElementById("chatInput");
  const text = input.value.trim();
  if (!text) return;
  thread.messages.push({
    from: "staff",
    text,
    time: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
  });
  input.value = "";
  renderChatWindow(thread);
  renderChatThreads();
}

/* ---------------------------------------------------------------------
   14. TOAST HELPER
   --------------------------------------------------------------------- */
let toastTimer = null;
function showToast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 3800);
}

/* ---------------------------------------------------------------------
   15. WIRE UP SEARCH INPUTS + INIT
   --------------------------------------------------------------------- */
document.getElementById("cardSearchBtn").addEventListener("click", doClientSearch);
document.getElementById("cardSearchInput").addEventListener("keydown", e => {
  if (e.key === "Enter") doClientSearch();
});
document.getElementById("cardSearchInput").addEventListener("input", e => {
  // auto-format as 4519 0112 3456 7890 while typing
  let digits = e.target.value.replace(/\D/g, "").slice(0, 16);
  let formatted = digits.replace(/(.{4})/g, "$1 ").trim();
  e.target.value = formatted;
});

function init() {
  renderTopDate();
  renderDashboard();
  renderLedger();
  renderChatThreads();
  // pre-select the first thread for convenience
  const first = CHAT_THREADS[0];
  first.unread = false;
  state.activeChatId = first.id;
  renderChatThreads();
  renderChatWindow(first);
}

init();
