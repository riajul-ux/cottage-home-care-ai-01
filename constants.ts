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
4. Insurance conducts a final assessment to assign care hours.
5. Once we receive the confirmation that the case will be starting from next month (ex: SOC 5/1/2025), we inform the patient and caregiver to expect a call from our HR team regarding Pa registration.
Cutoff Dates:
* MLTC Enrollment: Maximus submissions or transfer calls must be completed by the **20th of every month** to start from next month.
* MAP Enrollment: Submit by the **25th of every month** to start from next month.

4. Medicaid Eligibility & Surplus Income
Eligibility: Income level, Age (65+), Disability status (under 65 requires SSI determination).
Coverage: Doctor visits, Hospital, Prescription, Preventive, Long-term care, Mental health.
Asset Limits: Single ($30,000 max), Property ($1M max).
Income Limit (2025): Single ($1,800), Married ($2,433).
Surplus Income (Spend-down): If income exceeds limit, the extra amount is the surplus. Must be paid monthly to keep Medicaid active.
Pooled Income Trust (PIT): Reduces surplus payment. Contribute $\approx$10% plus fees. Minimum payment **$30/month**, Max **$250/month + $250 signup fee**.

5. Types of Medicaid & Codes (Home Care Eligibility)
* **Medicare Co-Insurance Deductible Only:** **No** home care. Medicaid only pays leftover costs. Needs Community Medicaid with LTC.
* **EP (Family Planning):** **No** home care. Covers family planning/basic services only.
* **MA Eligible (Medicaid Active):** **Yes** home care. Full Medicaid coverage.
* **Eligible PCP (Primary Care Provider Program):** **Yes** home care. Services must be authorized by assigned PCP.
* **Community Coverage with CBLTC (Community-Based Long Term Care):** **YES (Most Common)** home care. Covers in-home LTC via MLTC.
* **Community Coverage with No LTC / Code 54:** **No** home care. Covers outpatient but not LTC. **Resolution:** Submit **Supplement A form** and recent **3 months of bank statements**. Takes $\approx$8 weeks. Send referral to **Centers Plan**.
* **Marketplace Medicaid / Office: H-78:** **Yes (but restricted)**. Managed at state level (NYSOH). Cannot receive home care directly. **Resolution:** Complete NYIA, accept POC with MLTC plan. Coverage shifts to HRA/DSS. Takes $\approx$3+ months (6-8 weeks for plan conversion). Send referral to **Elderplan**.
* **Code 95 (OPWDD):** Developmental disabilities.
* **S1 (Surplus Pending):** Excess income. Must meet requirement, typically via PIT.
* **NH (Nursing Home):** **No**. In nursing home/rehab. **Resolution:** Discharge papers required.
* **AL (Assisted Living):** **No**. In assisted living. **Resolution:** Discharge letter required.

6. MLTC (Managed Long-Term Care) Plans
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

7. MAP (Medicare Advantage Plus)
For dual eligible (Medicare + Medicaid).
Benefits: OTC allowance, Medical coverage, Unlimited Transportation, Overseas coverage ($\$50\text{k}$).
MAP Plans:
| Insurance Name | OTC Allowance | Service Locations |
| :--- | :--- | :--- |
| CENTERSPLAN (CPHL) | $340/month | All 5 boroughs (No Suffolk) |
| ELDERPLAN | $900/quarterly | All 5 boroughs (No Suffolk) |
| HAMASPIK Choice | $215/month | All 5 boroughs |
| VNSNY Choice | $375/month | All 5 boroughs, Cover Suffolk |

8. Assessments
* **NYIA (New York Independent Assessor) Assessment:** Mandatory independent medical assessment. Valid **1 year**. Scoring: Cannot walk = 10 pts, Bedbound = 15 pts.
* **MLTC RN Assessment:** Done by the plan nurse after NYIA approval to finalize hours and care plan (POC).

9. Agency Transfer Process
1. Collect Patient Demographics.
2. Obtain Caregiver Info (Certificates needed).
3. Forward to HR (Caregiver must be certified before authorization).
4. Contact Member Services (Patient must request transfer, stating current caregiver is unable to provide services and requesting a new, certified aide from Cottage).

10. Plan-to-Plan Transfer
1. Intro Call.
2. Submit Referral.
3. Schedule RN Visit.
4. Prepare Member.
5. Assist Enrollment.
6. Transfer Call.
7. Send PA info to HR.
8. Compliance Check.
9. Authorization Follow-up.

11. CHHA (Certified Home Health Agency)
Short-term medical care (nursing/therapy) usually after hospital stay.
CHHA Plans: Americare, Revival (**Straight Medicare only**), Royal Care, Able Home Care, Prime Care (**Straight Medicare only**), CL CHHA.

12. Private Pay
Minimum Hours: **NYC (2.5-3 hrs/day)**, **Nassau/Suffolk (4-5 hrs/day)**.
Rates: **Standard $32/hr**. Extended/Distant $35-$40/hr (Nassau/Suffolk). Queens $30/hr.
Assessment Fee: **$150** if total hours **< 20 hours**.

13. Important Forms
* **POA (Power of Attorney):** Financial decisions.
* **Health Care Proxy:** Medical decisions.
* **Authorized Representative:** For Medicaid application/process only.

14. Pay Rates & Benefits (2025)
| Location | Base Pay | Melody Card | PTO Pay | Total (Without OT) |
| :--- | :--- | :--- | :--- | :--- |
| **New York** | $19.10/hr | $0.85/hr | $1.69/hr | **$21.64/hr** |
| **Nassau** | $19.10/hr | $0.85/hr | $0.82/hr | **$20.77/hr** |
Overtime: **1.5x base** for >40 hours.
Holiday Pay (Worked): **2x pay** for up to 8 hours (New Year, Memorial Day, Independence Day, Labor Day, Thanksgiving, Christmas).
PTO: Sick leave (**NY up to 56 hrs**, **Nassau up to 40 hrs**). Vacation (**NY/Nassau up to 40 hrs**).

15. Additional Programs
* **OPWDD (Office for People With Developmental Disabilities):** Supports individuals with developmental disabilities (Medicaid code 95).
* **NHTD (Nursing Home Transition and Diversion) Waiver:** Helps people with disabilities/seniors avoid nursing home placement.

16. Abbreviations (Quick Reference)
STC (Short Term Care), MLTC (Managed Long Term Care), MAP (Medicaid Advantage Plus), HMO (Health Maintenance Org), POC (Plan of Care), OTC (Over the Counter), PCP (Primary Care Physician), PT (Patient), CG (Caregiver), PTO (Paid time off), CHHA (Certified Home Health Agency), PACE (Programs of All-Inclusive Care for the Elderly), DOH (Department of Health), NYIA (New York Independent Accessor), PA (Personal Assistant), CDPAP/CDPAS (Consumer-directed personal assistance program/ service), D/C (Discharge), HHA (Home health aide), SOC (Start of care), SCA (Single case agreement), PO (Physician’s orders), HF (Home first), EP (Elder plan), CPHL (Centers plan healthy living), HRA (Human Resources Administration), CL (Center light), TC (Transfer call).

17. Contact Info (Detailed)
* **Cottage / Celestial Home Care Services**
    * Phone: **(516) 367-2266**
    * Fax: **(516) 367-1067**
    * License Number: **923L001**
    * Provider ID: **1357744**
    * NPI (National Provider Identifier) Numbers: Cottage: **1003961426**, Celestial: **1275076804**
* **RiverSpring**
    * Main: **800-370-3600**
    * Mudassar (Scheduling): **646-532-1338**
    * Raj: **929-384-9183**
    * Kamilla (Intake): **917-880-7851**
* **CPHL**
    * Main: **855-270-1600**
    * Secondary: **718-215-7001**
    * MAP: **718-697-6055**
    * FHS Department (Medicaid Recertification): **718-951-2200**
    * Kainat: **315-849-3780**
* **HomeFirst (HF)**
    * Enrollment: **718-759-3620 / 866-360-1934**
    * Member Service: **718-759-4510**
    * Providers: **800-353-3765 / 718-921-7772** (Option #4)
    * Placement: **866-694-3147**
* **Elderplan MAP**
    * Enrollment: **718-759-4646**
    * Member Service: **877-891-6447**
    * Ann Gerson (Ext 463): **347-289-7542**
* **Empire**
    * Main: **855-800-4683**
    * Intake: **929-946-6500**
    * Emilia: **516-476-8646**
* **VNSNY**
    * Main: **855-282-4642** (Ext 1122 for Rep)
    * Enrollment: **866-783-1444 / 212-609-4885**
    * VNS MAP: **855-216-8307** (Coleman)
    * Assessment Team: **212-216-9915**
* **CenterLight**
    * Main: **833-252-2737 / 877-212-8877**
    * Intake (Nav Khan): **718-652-5799**
* **Hamaspik**
    * Main: **855-552-4642**
    * Shelly: **845-503-0598**
* **SWHNY (Senior Whole Health)**
    * Intake: **877-353-0188**
    * Authorization: **877-353-9819**
* **Fidelis**
    * Main: **888-343-3547**
* **Americare**
    * Main: **718-535-3100**
* **HRA**
    * Main: **718-557-1399**
    * Alternate: **888-692-6116**
* **MAXIMUS (NYIA)**
    * Main: **855-222-8350**
* **MLTC Complaint**
    * Main: **866-712-7197**
* **Translation Service**
    * Main: **888-322-6671**
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
