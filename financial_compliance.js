(() => {
    "use strict";

    /* =========================================================
       COMPLIANCE VERIFICATION PROTOCOLS REGISTRY
    ========================================================= */
    const AUDIT_REGISTRY = [
        { id: "CMP-ISO-01", law: "ISO 20022 Schema Check", target: "Core Clearing Interbank Link", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-AML-01", law: "Suspicious Activity Pattern", target: "Acc...90218 (SvayMetrey)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-KYC-01", law: "Identity Verification Sweep", target: "Acc...90219 (ChornRothanak)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-RTGS-01", law: "Large Value Transfer Monitor", target: "Acc...90220 (ChumchanRothanak)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-AML-02", law: "Account Activity Audit", target: "Acc...90221 (LongLain)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-KYC-02", law: "Customer Profile Review", target: "Acc...90222 (PhaychanRothana)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-MICRO-01", law: "Micro-Transaction Trace", target: "Acc...90223 (HuokaingThara)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-AML-03", law: "Dormant Account Sweep", target: "Acc...90224 (SanSopheata)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-KYC-03", law: "Standard Verification Check", target: "Acc...90225 (SamsoDavin)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-AML-05", law: "High Value Outflow Alert", target: "Acc...90226 (Leda)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-PEP-07", law: "Politically Exposed Person Monitor", target: "Acc...90227 (Thorn)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-SAN-11", law: "OFAC SDN Cross-Reference Scan", target: "Acc...90228 (Vanneat)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-KYC-09", law: "Missing Corporate Verification Map", target: "Acc...90229 (Mengly)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-AML-02", law: "Structured Layering Evaluation Sweep", target: "Acc...90230 (Leyu)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-AML-04", law: "Velocity Threshold Breach (> $50k)", target: "Acc...90231 (Sengchhat)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-MICRO-02", law: "Micro-Transaction Trace", target: "Acc...90232 (Do)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-MICRO-03", law: "Micro-Transaction Trace", target: "Acc...90233 (Jav)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-AML-06", law: "Threshold Monitoring Breach", target: "Acc...90234 (Loy Kimmuy)", severity: "high", volume: 10000000.00, time: "11:11:11", status: "In Review" },
        { id: "CMP-MICRO-04", law: "Micro-Transaction Trace", target: "Acc...90235 (Dom)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-RTGS-02", law: "Interbank Settlement Verification", target: "Acc...90327 (Chansamnang)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-RTGS-03", law: "Interbank Settlement Verification", target: "Acc...90238 (Nouvichaka)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-ISO-02", law: "ISO Gateway Audit", target: "Acc...90239 (Men)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-ISO-03", law: "Outflow Velocity Monitor", target: "Acc...90240 (Sok Rachana)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-ISO-04", law: "ISO Gateway Routine Check", target: "Acc...90241 (Sok Khemera)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-KYC-04", law: "Standard Account Scan", target: "Acc...90242 (Huo)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-AML-07", law: "High Volume Threshold Monitor", target: "Acc...90423 (Khen Lyda)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-KYC-05", law: "Standard Verification Check", target: "Acc...90244 (B)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-KYC-06", law: "Standard Verification Check", target: "Acc...90245 (Huokaing Tharoth)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-AML-08", law: "Bulk Sweep Outflow Monitor", target: "Acc...90246 (Tek Hy)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-RMG-01", law: "Retail Mobile Transfer Scan", target: "Acc...90247 (Phann)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-RMG-02", law: "Retail Mobile Transfer Scan", target: "Acc...90248 (Vichaka)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-KYC-07", law: "Standard Account Scan", target: "Acc...90249 (Nita)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" },
        { id: "CMP-RMG-03", law: "Retail Gateway Monitor", target: "Acc...90250 (Raem)", severity: "low", volume: 0.00, time: "00:00:00", status: "Resolved" }
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
