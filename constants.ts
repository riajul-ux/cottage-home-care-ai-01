export const APP_NAME = "Cottage Home Care AI";

// ==========================================
// USER LOGIN CONFIGURATION
// Format: "email": "password"
// Add as many users as you want here.
// ==========================================
export const AUTHORIZED_USERS: Record<string, string> = {
  "riajul@cottagehomecare.com": "Youremail@12",
  "intake@cottagehomecare.com": "Myemail@12",
  "guest@gmail.com": "guestpass"
};

// Extracted content from the detailed training modules
export const TRAINING_DATA = `
COTTAGE HOME CARE SERVICES TRAINING MODULE: INTAKE GUIDELINES

1. Overview: Intake Coordinator Role
An Intake Coordinator is the first point of contact for new clients. Their role is to gather information, verify eligibility, explain services, and ensure a smooth start to care.
Key Duties:
* Receive Referrals: Take calls or emails from Marketers, Nursing homes, or families.
* Collect Information: Get client details (medicaid, personal informations).
* Verify Insurance: Confirm coverage with insurance or Medicare/Medicaid.
* Explain Services: Help clients and families understand the process.
* Follow Up: Track cases, complete paperwork, and ensure readiness.
* Maintain Records: Keep accurate and confidential files.

2. Long-Term Care (LTC)
Definition: Long-term care is a coordinated service plan developed in collaboration with the patient and their insurance provider to support extended care needs.
Options:
* CDPAP (Consumer Directed Personal Assistance Program): Allows a family member (excluding legally married spouses) to serve as a paid caregiver.
* HHA/PCA (Home Health Aide / Personal Care Assistant): Cottage Home Care provides a trained aide.
Important Notes:
* Services continue through the end of the patient’s life, until Medicaid is active.
* Medicaid typically covers the costs, with no out-of-pocket expenses for the patient.
* The process includes two evaluations conducted in person or via video call by a state-authorized nurse.
* Care hours are approved following the evaluations.
* Additional Services: Assistance with food stamps, cash assistance, and rental assistance.

3. MLTC Enrollment Journey Steps
1. The patient must have an active Medicaid.
2. Complete two assessments (NYIA/Maximus): NYIA: 855-222-8350
    * State nurse (in-person or Video call) - Takes around 3 hours.
    * State doctor/Clinician (in-person or Video call) - Takes around 1 hour.
3. Receive an outcome letter within 7 business days after completion of NYIA.
4. Insurance conducts a final assessment to assign care hours, and also patient must mention that they want the caregiver from Cottage Home Care Services. This is very crucial.
5. Once we receive the confirmation that the case will be starting from next month (ex: SOC 5/1/2025), we inform the patient and caregiver to expect a call from our HR team regarding Pa registration.
Cutoff Dates:
* MLTC Enrollment: Maximus submissions or transfer calls must be completed by the **20th of every month** to start from next month.
* MAP Enrollment: Submit by the **25th of every month** to start from next month.

4. Medicaid Eligibility & Surplus Income (Community Coverage)
Eligibility: Income level, Age (65+), Disability status (under 65 requires SSI determination).
Coverage: Doctor visits, Hospital, Prescription, Preventive, Long-term care, Mental health.
Asset Limits (2025, estimated): Single ($31,175 max), Couple ($42,312 max).
Income Limit (2025, estimated): Single ($\approx$\$1,800/month), Married ($\approx$\$2,433/month).
Surplus Income (Spend-down): If income exceeds limit, the extra amount is the surplus. Must be paid monthly to keep Medicaid active.
Pooled Income Trust (PIT): Used in most cases using Trusted surplus solution.
* Contribution: 10% of the surplus income.
* Minimum deduction: **$30/month**.
* Maximum deduction: **$250/month**.
* Admission Fee: **$250** (one-time).
* Example: Single patient income \$2000, limit \$1800, surplus \$200. Patient pays **$30 per month** (minimum deduction).
Note: We apply for Medicaid for getting community coverage with Long Term Care.

5. Medicaid Application Process
A. Individuals Under Age 65 (Non-MAGI, not on Medicare)
* **Who qualifies:** Individuals under 65 not on Medicare, low-income adults, children, and some parents (typically MAGI category).
* **Where to Apply:** NY State of Health Marketplace (NYSOH). Online: nystateofhealth.ny.gov, Phone: **1-855-355-5777**.
* **Documents Needed:** Proof of income (pay stubs, self-employment records), proof of identity and citizenship/immigration status, Social Security number, proof of address.
* **Expedited Process for Zero Income:** If member is under 65, has no reported income, and requires immediate home care. Submit a **Cash Assistance application directly to the Local Department of Social Services (LDSS)**. Approval automatically links to Regular Medicaid without Marketplace restrictions, accelerating home care access.

B. Individuals Age 65+, Disabled, or Blind (Non-MAGI, receiving Medicare)
* **Who qualifies:** Age 65 or older, OR certified disabled/blind, OR receiving Medicare.
* **Where to Apply:** HRA Medicaid Office (NYC) or Local Department of Social Services (LDSS) for other counties.
    * NYC HRA: Mail-in application, Drop off at local HRA Medicaid Community Office. Fax number: **(917) 639-0733**.
    * Application Form: **DOH-4220 and Supplement-A**.
    * Long Island - Nassau Office: **60 Charles Lindbergh Blvd #160, Uniondale, NY 11553**, Phone: **(516) 227-8519**.
    * Suffolk Medicaid Office Service Centers: Riverhead Center: **(631) 852-3500**, Coram Center: **(631) 854-2300**, Smithtown Center: **(631) 853-8714**, South West Center: **(631) 854-6600**.
    * Cottage provides support to Westchester, Schenectady, and Orange County too.
* **Documents Required:** Proof of income (Social Security, pension, bank deposits), Asset documentation (bank statements, life insurance, property info), Proof of identity and residency (Citizenship or Immigration card), Medicare card & Social Security number.

6. Types of Medicaid & Codes (Home Care Eligibility)
* **Medicare Co-Insurance Deductible Only (MSP):** **No** home care. Only covers the Medicare Part B premium. **Resolution:** Re-apply for full Medicaid through the **LDSS**.
* **EP (Family Planning):** **No** home care. Covers family planning/basic services only.
* **EP (Family Planning) Quick Removal:** To remove EP, you can call **NYSOH** and ask to change the account details. This may remove EP in **2-3 days**, but the **H-78 code will remain and H-78 code removal process remains the same**. <-- NEW ENTRY 
* **MA Eligible (Medicaid Active):** **Yes** home care. Full Medicaid coverage.
* **Eligible PCP (Primary Care Provider Program):** **Yes** home care. Services must be authorized by assigned PCP.
* **Community Coverage with CBLTC (Community-Based Long Term Care):** **YES (Most Common)** home care. Covers in-home LTC via MLTC.
* **Community Coverage with No LTC / Code 54:** **No** home care. Covers outpatient but not LTC. **Resolution:Submit **MAP751W form**** **Supplement A form** and recent **3 months of bank statements**. Takes $\approx$8 weeks. Send referral to **HF/HAMASPIK**.
* **Community Coverage with No LTC / Code 54:** **No** home care. Covers outpatient but not LTC. **Resolution:** Submit **Supplement A form** and recent **3 months of bank statements**. Takes $\approx$8 weeks. Send referral to **Centers Plan**. **Code 54 Documentation Issues:** If **no bank account**, we note that we provide a **no bank account letter**. If **no Social Security Award letter**, ask the Pt. how they meet their expenses. For the **support letter**, we need the support person's **Name and number** to create it.
* **Marketplace Medicaid / Office: H-78:** **Yes (but restricted)**. Managed at state level (NYSOH). Cannot receive home care directly. **Resolution:** Complete NYIA, accept POC with MLTC plan. Coverage shifts to HRA/DSS. Takes $\approx$3+ months (6-8 weeks for plan conversion). Send referral to **Elderplan**.
* **Eligible PCP 65+ with RX Carved-Out Code:** Indicates pharmacy benefits are not fully integrated. **Resolution Pathways:** (1) Submit **Cash Assistance application** (for no income), or (2) Submit **Regular Medicaid application through the LDSS** (for income/Medicare) and request **NYSOH to close Marketplace case**.
* **Code 95 (OPWDD):** Developmental disabilities.
* **NHTD Medicaid Code 60:** Identifies waiver participation. **Resolution:** Review approval from the **RRDC**, coordinate with LDSS/HRA, submit follow-up requests.
* **S1 (Surplus Pending):** Excess income. Must meet requirement, typically via PIT.
* **NH (Nursing Home):** **No**. In nursing home/rehab. **Resolution:** Discharge papers required.
* **AL (Assisted Living):** **No**. In assisted living. **Resolution:** Discharge letter required.
* **Code 51–56 (Emotional Disturbance):** Requires review/removal via "Expert Medicaid" request.

7. Cottage Support Services
* **Medicaid Renewal Assistance:** Proactive tracking of deadlines, assistance with document collection, and submission via NYSOH or fax/mail to LDSS.
* **Demographic Change Assistance:** Full support for updating personal information: Address Change, County Transfer, DOB Corrections, Name Changes, SSN Updates, Phone/Email Changes, and Household Composition Updates.
* **Medicare, SSI, and SSDI Application Assistance:** Guide eligible individuals through enrollment for Medicare Parts A & B (through SSA), SSI (Supplemental Security Income) for low-income seniors/disabled, and SSDI (Social Security Disability Insurance) for under 65 with disabilities.
* **Food Stamp (SNAP) and Public Assistance Support:** Assistance with applying for SNAP (Food Stamps) and Cash Assistance through HRA.

8. MLTC (Managed Long-Term Care) Plans
| Insurance Name | Plan Type | Contract | Service Locations | Key Notes |
| :--- | :--- | :--- | :--- | :--- |
| CENTERLIGHT (PACE) | PACE | PCA | All 5 boroughs | OTC $170. Age 55+. Excludes chronically ill. Avoid if patient has Medicare. |
| CENTERSPLAN (CPHL) | MLTC | PCA | All 5 boroughs | Don’t push so many cases to CPHL. |
| ELDERPLAN/HOMEFIRST (HF) | MLTC | PCA | NYC, Nassau, Westchester. No Suffolk. | Don’t push LI cases. |
| ELDERSERVE/RiverSpring | MLTC | PCA | NYC (all boroughs), Queens, Bronx | Avoid Nassau/Suffolk referrals. |
| HAMASPIK Choice | MLTC | PCA | NYC, Nassau, Suffolk, Bronx | Push for NYC and LI cases. |
| MOLINA/Senior Whole Health | MLTC | PCA | All 5 boroughs | Don’t push for any cases. |
| FIDELIS Care | MLTC+HMO | PCA | NYC (all boroughs) | Prefers Queens. |
| VNSNY Choice | MLTC | PCA | All 5 boroughs | Push as much PCA/HHA. |

9. MAP (Medicare Advantage Plus)
For dual eligible (Medicare + Medicaid).
Benefits: OTC allowance, Medical coverage, Unlimited Transportation, Overseas coverage ($\$50\text{k}$).
MAP Plans:
| Insurance Name | OTC Allowance | Service Locations |
| :--- | :--- | :--- |
| CENTERSPLAN (CPHL) | $340/month | All 5 boroughs (No Suffolk) |
| ELDERPLAN | $900/quarterly | All 5 boroughs (No Suffolk) |
| HAMASPIK Choice | $215/month | All 5 boroughs |
| VNSNY Choice | $375/month | All 5 boroughs, Cover Suffolk |

10. Assessments
* **NYIA (New York Independent Assessor) Assessment:** Mandatory independent medical assessment. Valid **1 year**. Scoring: Cannot walk = 10 pts, Bedbound = 15 pts.
* **MLTC RN Assessment:** Done by the plan nurse after NYIA approval to finalize hours and care plan (POC).

11. Agency Transfer Process
1. Collect Patient Demographics.
2. Obtain Caregiver Info (Certificates needed).
3. Forward to HR (Caregiver must be certified before authorization).
4. Contact Member Services (Patient must request transfer, stating current caregiver is unable to provide services and requesting a new, certified aide from Cottage).

12. Plan-to-Plan Transfer
1. Intro Call.
2. Submit Referral.
3. Schedule RN Visit.
4. Prepare Member.
5. Assist Enrollment.
6. Transfer Call.
7. Send PA info to HR.
8. Compliance Check.
9. Authorization Follow-up.

13. CHHA (Certified Home Health Agency)
Short-term medical care (nursing/therapy) usually after hospital stay.
CHHA Plans: Americare, Revival (**Straight Medicare only**), Royal Care, Able Home Care, Prime Care (**Straight Medicare only**), CL CHHA.

14. Private Pay
Minimum Hours: **NYC (2.5-3 hrs/day)**, **Nassau/Suffolk (4-5 hrs/day)**.
Rates: **Standard $32/hr**. Extended/Distant $35-$40/hr (Nassau/Suffolk). Queens $30/hr.
Assessment Fee: **$150** if total hours **< 20 hours**.

15. Important Forms
* **POA (Power of Attorney):** Financial decisions.
* **Health Care Proxy:** Medical decisions.
* **Authorized Representative:** For Medicaid application/process only.

16. Pay Rates & Benefits (2025)
| Location | Base Pay | Melody Card | PTO Pay | Total (Without OT) |
| :--- | :--- | :--- | :--- | :--- |
| **New York** | $19.10/hr | $0.85/hr | $1.69/hr | **$21.64/hr** |
| **Nassau** | $19.10/hr | $0.85/hr | $0.82/hr | **$20.77/hr** |
Overtime: **1.5x base** for >40 hours.
Holiday Pay (Worked): **2x pay** for up to 8 hours (New Year, Memorial Day, Independence Day, Labor Day, Thanksgiving, Christmas).
PTO: Sick leave (**NY up to 56 hrs**, **Nassau up to 40 hrs**). Vacation (**NY/Nassau up to 40 hrs**).

17. Additional Programs
* **OPWDD (Office for People With Developmental Disabilities):** Supports individuals with developmental disabilities (Medicaid code 95).
* **NHTD (Nursing Home Transition and Diversion) Waiver:** Helps people with disabilities/seniors avoid nursing home placement.

18. Job Responsibilities: Case Management
(For Hold, Hold_PNA, Maximus/NYIA, and CFEEC Failed Cases)

A. Hold & Hold_PNA Cases
These are patients whose enrollment process is paused but who still require regular outreach and monitoring.
* **Daily Workflow:** Add each Hold or Hold_PNA case to a dedicated Google Sheet. Maintain columns for name, contact info, reason on hold, follow-up attempts, last contacted date, and current status.
* **Patient Outreach:** Make at least two call attempts per day to each patient.
* **If Unreachable:** Leave a voicemail and send a follow-up text message. Log all attempts.
* **Moving to "In Progress":** Follow up with the next responsible team member to ensure continuation of the process.
* **Reporting:** Prepare and submit a weekly report that includes the number of patients moved from Hold/Hold_PNA to In Progress, the outcome of each In Progress case, and unresponsive patients or those with pending issues.

B. Maximus Cases / NYIA Scheduling
These patients require coordination of their NYIA assessment through Maximus for MLTC services.
* **Initial Intake:** Immediately record every new Maximus case in the dedicated tracking sheet with all patient details and status updates.
* **Initial Contact:** Call the patient to explain the NYIA process. Ask if they want you to **schedule on their behalf** (take verbal consent, email, and preferred time) or **assistance to contact NYIA directly**.
* **Handling Assessment Barriers:**
    * **Past NYIA (within 1 year):** Instruct the patient to clearly state that their **health condition has worsened**, requiring MLTC services now.
    * **Medicaid Eligibility Codes (e.g., Code 54 or H-78):** Notify the patient that the code removal process may take 6-8 weeks. Request required documents (SSN award letter or support letter, bank statements if available). Provide appropriate forms (Supplement A, support letter form). Instruct the patient to submit documents in person at the nearest HRA/DSS office, and notify them to send copies to us so we can send the copy to the insurance.
* **Pre-Assessment Prep:** Call patients before the scheduled NYIA assessment to **prepare them** on how to interact with the state nurse and clinical evaluator. Go over expected questions, required documents, and the importance of being honest and detailed.
* **Post-Assessment Follow-Up:**
    * Confirm completion of the State Nurse Assessment and Clinical Evaluation.
    * If missed, help the patient reschedule.
    * Once confirmed in the HHA system, change patient status to "**MLTC RN**".
    * Inform them about **PCA** and tell them the insurance name, and to expect a call from the insurance.
    * Send the **Physical form** for the PA registration.
* **If Unreachable:** Email the assigned marketer and change status to Hold, Hold_PNA, or other appropriate status in both internal systems and Google Sheet.
* **Reporting:** Weekly: Status updates, scheduled vs. completed assessments.

C. CFEEC Failed Cases
These are patients who did not pass the state assessment.
* **Follow-Up:** After **1 month** of the failed assessment, reach out to the patient.
* **Rescheduling:** Offer to reschedule the CFEEC assessment, and prepare and support them as with new NYIA patients.
* **Reporting:** Monthly: Number rescheduled, completion rates.

D. General Responsibilities (All Cases)
* Maintain accurate and timely documentation in **Google Sheets and HHA systems**.
* Practice professional and compassionate communication with all patients.
* Stay informed of policy or procedural changes from **Maximus, NYIA, and HRA/DSS**.
* Always confirm understanding with patients (especially elderly, disabled, or non-English speakers) and use interpreter services if needed.

19. Abbreviations (Quick Reference)
STC (Short Term Care), MLTC (Managed Long Term Care), MAP (Medicaid Advantage Plus), HMO (Health Maintenance Org), POC (Plan of Care), OTC (Over the Counter), PCP (Primary Care Physician), PT (Patient), CG (Caregiver), PTO (Paid time off), CHHA (Certified Home Health Agency), PACE (Programs of All-Inclusive Care for the Elderly), DOH (Department of Health), NYIA (New York Independent Accessor), PA (Personal Assistant), CDPAP/CDPAS (Consumer-directed personal assistance program/ service), D/C (Discharge), HHA (Home health aide), SOC (Start of care), SCA (Single case agreement), PO (Physician’s orders), HF (Home first), EP (Elder plan), CPHL (Centers plan healthy living), HRA (Human Resources Administration), CL (Center light), TC (Transfer call), LDSS (Local Department of Social Services), SSN (Social Security Number), SSI (Supplemental Security Income), SSDI (Social Security Disability Insurance), SNAP (Supplemental Nutrition Assistance Program), RRDC (Regional Resource Development Center).

20. Contact Info (Detailed)
* **Cottage / Celestial Home Care Services**
    * Phone: **(516) 367-2266**
    * Fax: **(516) 367-1067**
    * License Number: **923L001**
    * Provider ID: **1357744**
    * NPI (National Provider Identifier) Numbers: Cottage: **1003961426**, Celestial: **1275076804**
* **NYIA (MAXIMUS):** **855-222-8350**
* **NY State of Health Marketplace (NYSOH):** **1-855-355-5777**
* **HRA (NYC):** Main: **718-557-1399**, Alternate: **888-692-6116**, Fax: **(917) 639-0733**
* **Nassau Medicaid Office:** Phone: **(516) 227-8519**
* **Suffolk Medicaid Office Service Centers:** Riverhead Center: **(631) 852-3500**, Coram Center: **(631) 854-2300**, Smithtown Center: **(631) 853-8714**, South West Center: **(631) 854-6600**
* **RiverSpring:** Main: **800-370-3600**
* **CPHL:** Main: **855-270-1600 / 718-215-7001**
* **HomeFirst (HF):** Enrollment: **718-759-3620 / 866-360-1934**
* **VNSNY:** Main: **855-282-4642**
* **CenterLight:** Main: **833-252-2737**
* **Hamaspik:** Main: **855-552-4642**
* **Fidelis:** Main: **888-343-3547**
* **Americare:** Main: **718-535-3100**
* **MLTC Complaint:** Main: **866-712-7197**
* **Translation Service:** Main: **888-322-6671**

22. Specialized Case Responsibilities (OPWDD, HMO, LOST Cases)

A. OPWDD (Office for People with Developmental Disability) Cases
[cite_start]OPWDD patients are recognized by the state as certified disabled, gaining services like SSB/SSI or therapies (PT, OT, Speech)[cite: 13]. [cite_start]We provide HHA services under Article 16 of the state, working hand-in-hand with patients[cite: 14].

* [cite_start]**Case Focus:** Mainly pediatric care and HHA services[cite: 17, 18].
* [cite_start]**Initial Assistance:** Assist families with Medicaid application, obtaining Medicaid codes, and enrolling in appropriate services[cite: 20, 21, 23].
* [cite_start]**Geriatric Clients (18+):** Coordinate with **CHHA vendors** for accommodations and connect with **CCS (Care Coordination Services) teams** and medical providers for smooth approval[cite: 24, 25, 26].
* [cite_start]**Code 95 Approval Process (for HHA services):** To get **CODE-95** reflected on Medicaid, patients need medical paperwork and personal credentials submitted to the state[cite: 31].
    1.  [cite_start]**Initial Call:** Introduce and explain OPWDD and the purpose of Code 95[cite: 36, 37].
    2.  [cite_start]**Front Door Videos:** Member watches videos explaining why individuals with disabilities should have Code 95 and takes detailed notes for the Service Coordination team[cite: 39, 40, 41].
    3.  [cite_start]**Service Coordination:** Member is connected to an organization like **Advance Care Alliance (ACA)** or **Care Design New York**[cite: 43, 44, 45].
    4.  [cite_start]**Pre-Admission Call:** Organization representative collects member info and explains the OPWDD approval requirements[cite: 48, 50].
    5.  [cite_start]**Required Documents:** Submit the following to OPWDD[cite: 61]:
        * [cite_start]**Psychological/Psychoeducational Evaluation:** Must be within 3 years, include FSIQ and adaptive testing[cite: 62, 63, 64].
        * [cite_start]**Psychosocial Evaluation or Social History Report:** Must be within 1 year[cite: 65, 66].
        * [cite_start]**Annual Physical Report from PCP:** Must be within 1 year[cite: 67, 68].
        * [cite_start]HIPAA Release Form, IEP, Autism Evaluation, Birth Certificate, and Medicaid Card/Letter[cite: 59, 69, 70, 71, 72].
* [cite_start]**Post-Approval (Code 95 on Medicaid):** Case status moves to **OPWDD_REFERRAL SENT**[cite: 73].
    * [cite_start]**Pediatric Cases (Ages 3-18):** Send referral to **Americare** (Primary Email: pediatricreferrals@americareny.com)[cite: 86, 87]. [cite_start]Americare is responsible for providing the Plan of Care (POC)[cite: 94]. [cite_start]An **RN visits** for a Start of Care (SOC) assessment, and the CHHA/vendor creates the POC outlining approved hours and services[cite: 96, 99, 100].
    * [cite_start]**Geriatric Cases (Ages 18+):** Send referral to **Able Healthcare** for HHA and therapy services (Speech, OT, PT)[cite: 105, 106, 107, 108, 109].
    * [cite_start]**Caregiver Certification Support:** Check caregiver status and guide them to certification options if needed[cite: 118, 120].

B. HMO (Health Maintenance Organization) Cases
[cite_start]HMOs are common plans accepted by NY doctors[cite: 123]. [cite_start]We primarily offer **FIDELIS HMO** services[cite: 128, 142].
* [cite_start]**Purpose:** HMOs are used to provide short-term care services to patients who **failed their NYIA assessments**[cite: 126, 127, 134]. [cite_start]This allows them to receive some level of home care hours until they can reapply for MLTC[cite: 127].
* **Pediatric Patients (Under 18):**
    1.  [cite_start]Explain the Fidelis HMO plan and benefits[cite: 145].
    2.  [cite_start]Submit the **M11Q form** (doctor's form) to a Fidelis representative[cite: 131, 147, 150].
    3.  [cite_start]Processing Timeline: Takes a minimum of **30-45 business days** for Fidelis to approve the case with allocated hours[cite: 133, 152].
* **Adult Patients (Above 18):**
    * [cite_start]Common Reasons for HMO: Existing doctors are well covered, or the patient **failed the NYIA assessment**[cite: 134, 155, 156].
    * [cite_start]Required Documents: The **NYIA outcome letter** must be submitted to the State and the Insurance Provider, along with the **M11Q form**[cite: 135, 158, 159, 160, 161].
    * [cite_start]**MLTC Goal:** Adults who failed NYIA are later encouraged to repeat the NYIA to enroll in MLTC services to be granted more hours[cite: 162].

C. LOST Cases (Unenrolled / Dropped Clients)
[cite_start]LOST cases refer to members who become inactive or uninterested during the intro calls or enrollment process[cite: 168, 169].
* [cite_start]**Follow Up:** Follow up on inactive or unresponsive cases[cite: 170].
* [cite_start]**Resolution:** Help resolve client questions, confusion, enrollment delays, or inactivity[cite: 172, 173].
* [cite_start]**Reactivation:** Assess each case for potential reactivation [cite: 174] [cite_start]and assist clients in enrolling under Long-Term Care, MAP, or other Medicaid benefits[cite: 176, 177].

23. Cross-Departmental Support & Operational Tasks

* [cite_start]**Cross-Departmental Support (Side Work):** Assist co-workers with case follow-ups, communication maintenance, and gathering additional information to improve approval chances[cite: 183, 184, 186, 187].
* **Conflict Resolution:** Engage in authorization issues, stuck Medicaid processes, or complex cases. [cite_start]Mediate and troubleshoot with other teams, clients, or agencies[cite: 189, 190, 231].
* [cite_start]**Operational Improvements & Research:** Focus on identifying and researching system bottlenecks and suggesting improved workflows with state agencies, colleagues, and management to eliminate unnecessary delays[cite: 196, 197, 201, 233, 234].
* [cite_start]**On-Call & Overflow Support:** Take over introductory or redirected calls when intake staff is overloaded to ensure client flow doesn't stall[cite: 204, 205]. [cite_start]Conduct initial needs assessments to match clients with appropriate programs (PCA, CHHA, MAP)[cite: 206]. * [cite_start]**Client Consent & Quality:** All steps must be advised to the patient, ensuring everything is done with their consent to be benefited[cite: 212, 213].
* [cite_start]**Reporting:** Submit follow-up updates at the end of the day and week to superiors[cite: 237].
`;

export const SYSTEM_INSTRUCTION = `
You are an expert Intake Coordinator Assistant for "Cottage Home Care Services".
Your goal is to assist users by answering questions strictly based on the provided TRAINING_DATA context.

Context:
${TRAINING_DATA}

Guidelines:
1. Use a professional, warm, and helpful tone.
2. Answer ONLY based on the information in the context. If the user asks about something not covered (like specific medical advice outside of intake guidelines or laws not mentioned), politely say you don't have that information in the training module.
3. When discussing "Codes" (like Code 54, H-78, S1), explain clearly what they mean, the home care eligibility, and how to resolve them based on the text.
4. Format your answers nicely using Markdown (bolding key terms, using bullet points for lists, and tables when comparing data).
5. If asked about pay rates, quote the **2025 figures** provided in the context.
6. Explain the **Pooled Income Trust (PIT)** option when asked about **Surplus Income (Spend-down)**, including the contribution structure and limits.
7. Keep responses concise but thorough.
`;
