export const APP_NAME = "Cottage Home Care AI";

// Extracted content from the PDF OCR provided in the prompt
export const TRAINING_DATA = `
COTTAGE HOME CARE SERVICES TRAINING MODULE: INTAKE GUIDELINES

1. Overview
An Intake Coordinator in a home care agency is the first point of contact for new clients. They help gather and organize all the information needed to begin home care services.
Key Duties: Receive Referrals, Collect Information, Verify Insurance, Explain Services, Follow Up, Maintain Records.

2. What is Long-Term Care?
Long-term care is a coordinated service plan to support extended care needs.
Options:
- CDPAP (Consumer Directed Personal Assistance Program): Allows a family member (excluding legally married spouses) to serve as a paid caregiver.
- HHA/PCA (Home Health Aide / Personal Care Assistant): Cottage Home Care provides a trained aide.
Important Notes: Services continue through the end of patient's life. Medicaid typically covers costs with no out-of-pocket expenses. The process includes two evaluations by a state-authorized nurse.
Additional Services: Assistance with food stamps, cash assistance, rental assistance.

3. MLTC Enrollment Journey Steps
1. Patient must have active Medicaid.
2. Complete two assessments (NYIA/Maximus): NYIA (855-222-8350). State nurse (3 hours), State doctor (1 hour).
3. Receive outcome letter within 7 business days.
4. Insurance conducts final assessment.
5. Confirmation of case start (e.g., SOC 5/1/2025).
Cutoff Dates:
- MLTC Enrollment: By the 20th of every month.
- MAP Enrollment: By the 25th of every month.

4. Medicaid
Public health insurance for low income.
Eligibility: Income level, Age (65+), Disability status.
Coverage: Doctor visits, Hospital, Prescription, Preventive, Long-term care, Mental health.
Asset Limits: Single ($30,000), Property ($1M max).
Income Limit (2025): Single ($1,800), Married ($2,433).
Surplus Income (Spend-down): If income exceeds limit, the surplus must be paid.
Pooled Income Trust (PIT): Reduces surplus payment. Instead of paying full surplus, contribute 10% (approx) plus fees. Minimum payment $30/month, Max $250/month + $250 signup.

5. Types of Medicaid & Codes
- Medicare Co-Insurance Deductible Only: No home care.
- EP (Family Planning): No home care.
- MA Eligible: Full coverage. Yes home care.
- Eligible PCP: Needs PCP auth.
- Community Coverage with CBLTC: Yes home care (most common).
- Code 54 (No LTC Coverage): Restriction code. Needs Supplement A form to remove.
- H-78 (Medicaid Linked to NY State): Managed at state level. Takes 3+ months to remove. Can be resolved via NYIA app.
- Code 95 (OPWDD): Developmental disabilities.
- S1 (Surplus Pending).

6. MLTC Plans
- CENTERLIGHT (PACE): PCA contract. 5 boroughs. Age 55+. Excludes chronically ill. OTC $170.
- CENTERSPLAN (CPHL): PCA contract. 5 boroughs.
- ELDERPLAN (Map)/HOMEFIRST (HF): PCA contract. NYC/Nassau/Westchester. No Suffolk.
- ELDERSERVE/RiverSpring: No Brooklyn contract.
- HAMASPIK Choice: NYC/Nassau/Suffolk.
- MOLINA/Senior Whole Health: Don't push.
- FIDELIS Care: MLTC+HMO. Prefers Queens.
- VNSNY Choice: Push as much PCA/HHA.

7. MAP (Medicare Advantage Plus)
For dual eligible (Medicare + Medicaid).
Includes OTC allowance, Medical coverage, Transportation, Overseas coverage ($50k).
MAP Plans:
- CENTERSPLAN (CPHL): OTC $340/month. No Suffolk.
- ELDERPLAN: OTC $900/quarterly. No Suffolk.
- HAMASPIK: OTC $215/month. All 5 boroughs.
- VNSNY: OTC $375/month. Cover Suffolk.

8. Assessments
- NYIA Assessment: Mandatory independent assessment (valid 1 year). Scoring: Cannot walk = 10 pts, Bedbound = 15 pts.
- MLTC RN Assessment: Done by the plan nurse after NYIA approval to finalize hours and care plan.

9. Agency Transfer Process
1. Collect Patient Demographics.
2. Obtain Caregiver Info (Certificates needed).
3. Forward to HR.
4. Contact Member Services (Patient must request transfer).

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
Plans: Americare, Revival (Straight Medicare only), Royal Care, Able Home Care, Prime Care, CL CHHA.

12. Private Pay
Minimum Hours: NYC (2.5-3 hrs/day), Nassau/Suffolk (4-5 hrs/day).
Rates: Standard $32/hr. Extended $35-$40/hr. Queens $30/hr.
Assessment Fee: $150 if total hours < 20.

13. Important Forms
- POA (Power of Attorney): Financial decisions.
- Health Care Proxy: Medical decisions.
- Authorized Representative: For Medicaid application only.

14. Pay Rates & Benefits (2025)
New York: Base $19.10/hr. Melody Card $0.85/hr. PTO $1.69/hr. Total $21.64/hr.
Nassau: Base $19.10/hr. Total $20.77/hr.
Overtime: 1.5x base for >40 hours.
Holidays: New Year, Memorial Day, Independence Day, Labor Day, Thanksgiving, Christmas (2x pay).
PTO: Sick leave (NY up to 56 hrs, Nassau up to 40 hrs). Vacation (NY/Nassau up to 40 hrs).

15. Contact Info
- Cottage: 516-367-2266.
- RiverSpring: 800-370-3600.
- CPHL: 855-270-1600.
- HomeFirst: 718-759-3620.
- VNSY: 855-282-4642.
- CenterLight: 833-252-2737.
- Hamaspik: 855-552-4642.
- Fidelis: 888-343-3547.
- Americare: 718-535-3100.

Abbreviations:
STC (Short Term Care), MLTC (Managed Long Term Care), MAP (Medicaid Advantage Plus), HMO (Health Maintenance Org), POC (Plan of Care), OTC (Over the Counter).
`;

export const SYSTEM_INSTRUCTION = `
You are an expert Intake Coordinator Assistant for "Cottage Home Care Services".
Your goal is to assist users by answering questions strictly based on the provided TRAINING_DATA context.

Context:
${TRAINING_DATA}

Guidelines:
1. Use a professional, warm, and helpful tone.
2. Answer ONLY based on the information in the context. If the user asks about something not covered (like specific medical advice outside of intake guidelines or laws not mentioned), politely say you don't have that information in the training module.
3. When discussing "Codes" (like Code 54, H-78), explain clearly what they mean and how to resolve them based on the text.
4. Format your answers nicely using Markdown (bolding key terms, using bullet points for lists).
5. If asked about pay rates, quote the 2025 figures provided.
6. Keep responses concise but thorough.
7. If the user asks about "Surplus", explain the Pooled Income Trust option mentioned in the text.
`;
