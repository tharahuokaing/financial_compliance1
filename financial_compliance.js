(() => {
    "use strict";

    /* =========================================================
       COMPLIANCE VERIFICATION PROTOCOLS REGISTRY
    ========================================================= */
    const AUDIT_REGISTRY = [
        { id: "CMP-ISO-01", law: "ISO 20022 Schema Check", target: "Core Clearing Interbank Link", severity: "low", volume: 0, time: "10:14:22", status: "Resolved" },
        { id: "CMP-AML-04", law: "Velocity Threshold Breach (> $50k)", target: "Acc...9912 (Sengchhat)", severity: "high", volume: 75000.00, time: "11:05:19", status: "Flagged" },
        { id: "CMP-KYC-09", law: "Missing Corporate Verification Map", target: "Acc...4412 (Mengly)", severity: "medium", volume: 5000.00, time: "12:44:01", status: "In Review" },
        { id: "CMP-AML-02", law: "Structured Layering Evaluation Sweep", target: "Acc...0029 (Leyu)", severity: "high", volume: 12450.00, time: "14:20:55", status: "Flagged" },
        { id: "CMP-SAN-11", law: "OFAC SDN Cross-Reference Scan", target: "Acc...1092 (Vanneat)", severity: "low", volume: 320.50, time: "15:02:11", status: "Resolved" },
        { id: "CMP-PEP-07", law: "Politically Exposed Person Monitor", target: "Acc...8841 (Thorn)", severity: "medium", volume: 1250.00, time: "15:45:30", status: "Resolved" }
    ];

    let currentTabFilter = "all";
    let searchCriteria = "";

    /* =========================================================
       ANALYTICS ENGINE PIPELINES
    ========================================================= */
    function evaluateComplianceRiskIndex() {
        const flaggedAlerts = AUDIT_REGISTRY.filter(item => item.status === "Flagged");
        const highRiskCount = flaggedAlerts.filter(item => item.severity === "high").length;

        const indexTextEl = document.getElementById("riskIndexText");
        const countTextEl = document.getElementById("flaggedCountText");
        const subtextEl = indexTextEl?.nextElementSibling;

        if (countTextEl) countTextEl.textContent = flaggedAlerts.length.toString();

        if (indexTextEl && subtextEl) {
            if (highRiskCount >= 2) {
                indexTextEl.textContent = "CRITICAL";
                indexTextEl.style.color = "#f43f5e";
                subtextEl.className = "card-subtext state-danger";
                subtextEl.textContent = "▲ High risk triggers require action override";
            } else if (flaggedAlerts.length > 0) {
                indexTextEl.textContent = "ELEVATED";
                indexTextEl.style.color = "#f59e0b";
                subtextEl.className = "card-subtext state-warning";
                subtextEl.textContent = "⚠️ Minor structural variations discovered";
            } else {
                indexTextEl.textContent = "NOMINAL";
                indexTextEl.style.color = "#10b981";
                subtextEl.className = "card-subtext state-success";
                subtextEl.textContent = "● Under AML threshold parameters";
            }
        }
    }

    /* =========================================================
       AUDIT GRID STRUCTURAL DATA RENDERING
    ========================================================= */
    function renderComplianceGridMatrix() {
        const tbody = document.getElementById("complianceTableBody");
        if (!tbody) return;

        // Process data array with standard conditional parameters
        const evaluatedData = AUDIT_REGISTRY.filter(item => {
            const matchesTab = (currentTabFilter === "all") || 
                               (currentTabFilter === "high" && item.severity === "high") ||
                               (currentTabFilter === "medium" && item.severity === "medium") ||
                               (currentTabFilter === "resolved" && item.status === "Resolved");

            const matchesSearch = item.id.toLowerCase().includes(searchCriteria) || 
                                  item.law.toLowerCase().includes(searchCriteria) || 
                                  item.target.toLowerCase().includes(searchCriteria);

            return matchesTab && matchesSearch;
        });

        if (evaluatedData.length === 0) {
            tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:#64748b; padding:30px;">No protocol variations found matching audit scope boundaries.</td></tr>`;
            return;
        }

        tbody.innerHTML = evaluatedData.map(item => {
            const volDisplay = item.volume === 0 ? "N/A" : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.volume);
            const statusClass = item.status.toLowerCase().replace(" ", "");
            
            return `
                <tr>
                    <td style="font-weight:600; color:#38bdf8;">${item.id}</td>
                    <td style="font-weight:500;">${item.law}</td>
                    <td style="color:#cbd5e1;">${item.target}</td>
                    <td><span class="severity-badge ${item.severity}">${item.severity.toUpperCase()}</span></td>
                    <td style="font-family: monospace; color:#e2e8f0;">${volDisplay}</td>
                    <td style="color:#64748b;">${item.time}</td>
                    <td><span class="status-tag ${statusClass}">${item.status}</span></td>
                </tr>
            `;
        }).join("");
    }

    /* =========================================================
       EVENT ACTIONS INTERACTIVE BINDINGS
    ========================================================= */
    document.addEventListener("DOMContentLoaded", () => {
        evaluateComplianceRiskIndex();
        renderComplianceGridMatrix();

        // Bind input text parser to search field inputs
        const searchInput = document.getElementById("complianceSearchInput");
        if (searchInput) {
            searchInput.addEventListener("input", (e) => {
                searchCriteria = e.target.value.toLowerCase().trim();
                renderComplianceGridMatrix();
            });
        }

        // Segment mapping routing interface selection trigger loops
        const tabContainer = document.getElementById("complianceTabsGroup");
        if (tabContainer) {
            tabContainer.addEventListener("click", (e) => {
                const activeBtn = e.target.closest(".tab-btn");
                if (!activeBtn) return;

                tabContainer.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
                activeBtn.classList.add("active");

                currentTabFilter = activeBtn.getAttribute("data-filter");
                renderComplianceGridMatrix();
            });
        }

        // Trigger real-time checking diagnostics updates process simulation
        document.getElementById("runDiagnosticBtn")?.addEventListener("click", () => {
            console.log("[COMPLIANCE CORE] Dispatching cryptographic baseline cross-checking execution...");
            alert("AML Ledger scan processing finished. Framework structural configurations valid.");
        });

        // Generate report export handler trigger process simulation
        document.getElementById("flagReviewBtn")?.addEventListener("click", () => {
            alert("Internal compliance document package created successfully. Dispatching to designated security operations node.");
        });
    });

})();
