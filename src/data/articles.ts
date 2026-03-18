export interface Article {
  slug: string;
  title: string;
  description: string;
  category: "Dispute Guides" | "FCRA & Your Rights" | "Credit Score Help";
  intro: string;
  sections: { heading: string; body: string }[];
  cta: string;
}

export const articles: Article[] = [
  // ─────────────────────────────────────────────
  // DISPUTE GUIDES (15)
  // ─────────────────────────────────────────────
  {
    slug: "how-to-dispute-credit-report",
    title: "How to Dispute Your Credit Report Step by Step",
    description:
      "Learn how to dispute errors on your credit report using your FCRA rights. A step-by-step guide for everyday Americans to fix inaccurate items.",
    category: "Dispute Guides",
    intro:
      "If you have found errors on your credit report, you have the legal right to dispute them under the Fair Credit Reporting Act. Disputing inaccurate information can improve your credit score and remove items that should not be there. This guide walks you through every step of the process from start to finish.",
    sections: [
      {
        heading: "Step 1: Get Your Credit Reports",
        body: "Before you can dispute anything, you need to know what is on your reports. You are entitled to one free credit report per year from each of the three major bureaus — Equifax, Experian, and TransUnion — through AnnualCreditReport.com. Review all three carefully, because the same error may appear on one bureau but not the others. Print or save your reports so you have a record of what each report looked like before any disputes were filed.",
      },
      {
        heading: "Step 2: Identify Inaccurate or Unverifiable Items",
        body: "Go through every section of each report: personal information, accounts, collections, public records, and inquiries. Look for accounts you do not recognize, balances that are wrong, late payments that were actually on time, duplicate entries, and accounts that are past their legal reporting window. Make a list of every item you believe is inaccurate, incomplete, or unverifiable. The FCRA requires that only accurate and verifiable information be included on your report.",
      },
      {
        heading: "Step 3: Write and Send Your Dispute Letter",
        body: "For each item you want to dispute, you must notify the credit bureau in writing. Your dispute letter should clearly identify the item, state why you believe it is inaccurate, and request that it be corrected or removed. Include copies (never originals) of any supporting documents, such as payment records or account statements. Send your letter via certified mail with return receipt requested so you have proof of delivery. You can also dispute online, but a written letter creates a stronger paper trail.",
      },
      {
        heading: "Step 4: Wait for the Bureau to Investigate",
        body: "Under the FCRA, credit bureaus generally have 30 days to investigate your dispute after receiving it. During this time, they must contact the original furnisher of the information and ask them to verify its accuracy. If the furnisher cannot verify the item, the bureau is required to remove it from your report. You will receive written notice of the results of the investigation. If you submitted the dispute by mail, the bureau will send a corrected copy of your report if any changes were made.",
      },
      {
        heading: "Step 5: Review the Results and Take Next Steps",
        body: "Once you receive the investigation results, review them carefully. If the item was corrected or deleted, check your updated report to confirm the change was made accurately. If your dispute was rejected, you have options: you can add a 100-word consumer statement to your file, escalate by disputing directly with the original furnisher under FCRA Section 623, or file a complaint with the CFPB. Persistence matters — many consumers successfully remove items only after a second or third round of disputes.",
      },
    ],
    cta: "Ready to dispute? Upload your credit report to ScoreVera and let us help you structure your dispute letters the right way.",
  },
  {
    slug: "fcra-611-explained",
    title: "FCRA Section 611 Explained: Your Reinvestigation Rights",
    description:
      "FCRA Section 611 gives you the right to dispute inaccurate credit report items and demand reinvestigation. Here is what the law actually says.",
    category: "Dispute Guides",
    intro:
      "Section 611 of the Fair Credit Reporting Act is one of the most powerful tools available to consumers disputing credit report errors. It requires credit bureaus to conduct a reasonable reinvestigation of any item you dispute and to correct or delete information they cannot verify. Understanding what this section actually requires helps you hold bureaus accountable.",
    sections: [
      {
        heading: "What Section 611 Requires",
        body: "Under FCRA Section 611 (15 U.S.C. § 1681i), if you notify a credit reporting agency that you dispute the completeness or accuracy of an item in your file, the agency must conduct a reasonable reinvestigation within 30 days of receiving your dispute. The 30-day window can be extended to 45 days if you provide additional information after the initial dispute is filed. During the reinvestigation, the bureau must review all relevant information you submit.",
      },
      {
        heading: "What Happens During a Reinvestigation",
        body: "The credit bureau cannot simply rubber-stamp whatever the original creditor says. It must forward your dispute and any supporting documentation to the furnisher — the company that reported the information — and ask them to verify accuracy. If the furnisher does not respond or cannot verify the item, the bureau must delete it. If the bureau determines the item is inaccurate, it must promptly correct it. The bureau is also required to notify you in writing of the results within five business days of completing the investigation.",
      },
      {
        heading: "Your Rights After a Reinvestigation",
        body: "If the reinvestigation results in a change to your file, you can request that the bureau send a corrected report to anyone who pulled your credit in the past six months, or two years for employment purposes. If your dispute is denied and you still believe the item is wrong, you have the right to add a brief statement of dispute to your file. This statement will be included with any future disclosures of your credit report.",
      },
      {
        heading: "When Disputes Can Be Rejected as Frivolous",
        body: "Section 611 does allow bureaus to decline to investigate disputes they determine are frivolous or irrelevant. This can happen if you dispute the same item repeatedly without providing any new information or if the dispute contains no specific reason for believing the item is inaccurate. If your dispute is deemed frivolous, the bureau must notify you within five days and explain why. To avoid this, always provide a clear, specific reason for each dispute and include any supporting documentation you have.",
      },
    ],
    cta: "ScoreVera helps you draft Section 611-compliant dispute letters that are specific, documented, and harder to dismiss. Upload your report to get started.",
  },
  {
    slug: "dispute-letter-guide",
    title: "How to Write an Effective Credit Dispute Letter",
    description:
      "A step-by-step guide to writing a credit dispute letter that gets results. Learn what to include, what to avoid, and how to format your letter correctly.",
    category: "Dispute Guides",
    intro:
      "A well-written credit dispute letter is your most important tool when challenging inaccurate items on your credit report. The way you phrase your dispute, the information you include, and even how you send the letter can affect the outcome. This guide covers everything you need to write a dispute letter that stands up to scrutiny.",
    sections: [
      {
        heading: "What to Include in Every Dispute Letter",
        body: "Every dispute letter should contain your full legal name, current address, date of birth, and the last four digits of your Social Security number so the bureau can locate your file. Clearly identify the item you are disputing by listing the creditor name, account number (partial is fine), and the specific reason you believe the information is inaccurate — for example, \"This account was paid in full on March 15, 2023, but is still showing as unpaid.\" Attach copies of any supporting documents such as payment confirmations, settlement letters, or account statements.",
      },
      {
        heading: "How to Describe the Error",
        body: "Be specific and factual. Vague statements like \"this is not my account\" without any supporting explanation are easier for bureaus to dismiss. Instead, explain exactly what is wrong: the wrong balance, the wrong open date, a payment marked late that was made on time, an account that belongs to someone with a similar name, or a collection account past its seven-year reporting window. The more precise you are, the harder it is for the furnisher to simply confirm the same incorrect data.",
      },
      {
        heading: "How to Send Your Letter",
        body: "Mail your dispute letter via USPS certified mail with return receipt requested. This creates a paper trail with a postmark and a signed delivery confirmation. Keep a copy of everything you send. You can also dispute online through each bureau\'s website, but this often requires you to accept terms that limit your ability to use your records in a lawsuit later. For anything involving a significant error, certified mail is the safer choice and demonstrates that you are taking the dispute seriously.",
      },
      {
        heading: "Common Mistakes to Avoid",
        body: "Do not send original documents — always send copies. Do not use threatening or emotional language; keep your letter professional and factual. Do not dispute every item at once in a single letter; group disputes by bureau and by account so each one is clear. Do not skip the identification section, because bureaus will return unidentifiable letters. And do not assume one letter is enough — if you are disputing multiple items or items with multiple bureaus, you will need separate, tailored letters for each.",
      },
    ],
    cta: "ScoreVera helps you build organized, accurate dispute letters based on your actual report. Upload your report and start your first dispute today.",
  },
  {
    slug: "dispute-medical-collections",
    title: "How to Dispute Medical Collections on Your Credit Report",
    description:
      "Medical collections can appear on your credit report even for billing errors. Learn how to dispute them, and know your rights under new CFPB rules.",
    category: "Dispute Guides",
    intro:
      "Medical debt collections are one of the most common sources of credit report errors, often resulting from billing mistakes, insurance misapplication, or debts that never should have been sent to collections in the first place. Recent regulatory changes have also limited how medical debt can appear on your report. This guide explains how to dispute medical collections effectively.",
    sections: [
      {
        heading: "Why Medical Collections Are Often Inaccurate",
        body: "Medical billing is notoriously complex. Errors are common: insurance payments applied to the wrong account, duplicate charges, incorrect patient information, and amounts that do not reflect the contracted rate your insurer negotiated. Collections can also appear for debts you never received a bill for, or for debts that your insurer already paid. Before assuming a medical collection is valid, request an itemized bill from the original provider and compare it against your Explanation of Benefits from your insurer.",
      },
      {
        heading: "CFPB Rules on Medical Debt Reporting",
        body: "The Consumer Financial Protection Bureau has moved to limit the reporting of medical debt. As of 2025, the CFPB has finalized a rule that would remove medical debt from credit reports entirely for many consumers. Even before this rule takes full effect, paid medical collections under $500 are no longer factored into most credit scoring models. Check whether the medical collection on your report falls into a category that is no longer reportable or scoreable under current guidance.",
      },
      {
        heading: "How to Dispute a Medical Collection",
        body: "Start by disputing the collection with the credit bureau that is reporting it. Your letter should state that the debt is disputed, that you are requesting verification of the amount, the original creditor, and the dates associated with the debt. Simultaneously, you may want to send a debt validation letter to the collection agency under the Fair Debt Collection Practices Act, requiring them to prove the debt is valid and that they have the legal right to collect it. If they cannot validate, the collection must be removed.",
      },
      {
        heading: "Dealing With Insurance Errors",
        body: "If the collection exists because your insurer failed to pay or underpaid a claim, contact your insurer directly to resolve the underlying claim first. Get a letter from them confirming payment or confirming the amount they are responsible for. Then dispute the collection with the bureau, attaching the insurer\'s documentation. A collection that resulted from an insurer\'s error is a classic example of inaccurate information that does not belong on your report, and having that documentation makes your dispute much stronger.",
      },
    ],
    cta: "ScoreVera can help you organize your medical debt disputes and generate the right letters for each bureau. Upload your report to see what can be challenged.",
  },
  {
    slug: "remove-charge-off",
    title: "How to Remove a Charge-Off From Your Credit Report",
    description:
      "A charge-off on your credit report can damage your score for years. Learn what a charge-off is, your rights, and how to dispute or negotiate its removal.",
    category: "Dispute Guides",
    intro:
      "A charge-off is one of the most damaging items that can appear on your credit report, but it is not always permanent or even always accurate. Understanding what a charge-off means, how long it can legally remain on your report, and what options you have to challenge or address it is the first step toward cleaning up your credit history.",
    sections: [
      {
        heading: "What a Charge-Off Actually Means",
        body: "A charge-off occurs when a creditor writes off your account as a loss after you have gone approximately 180 days without making a payment. Despite the name, a charge-off does not mean the debt disappears or is forgiven. The creditor has simply reclassified the debt on their books for accounting purposes. You still legally owe the money, and the original creditor or a collection agency may still attempt to collect it. The charge-off itself will appear on your credit report and remain for up to seven years from the date of the original delinquency.",
      },
      {
        heading: "Disputing an Inaccurate Charge-Off",
        body: "If a charge-off on your report contains errors — wrong balance, wrong date of first delinquency, or it does not belong to you — you have the right to dispute it under the FCRA. The date of first delinquency is critical, because it determines when the seven-year clock starts. If a creditor has listed a more recent date to keep the charge-off on your report longer, that is a reporting violation you can dispute. Ask the bureau to verify the date of first delinquency against the creditor\'s original records.",
      },
      {
        heading: "Negotiating With the Creditor",
        body: "If the charge-off is accurate, you have fewer dispute options, but you still have negotiating leverage. You can contact the original creditor or the collection agency and offer to pay some or all of the debt in exchange for deletion of the trade line — this is often called a pay-for-delete agreement. Not all creditors will agree to this, and the FCRA does not require them to delete accurate information just because it is paid. However, some creditors will negotiate, and it is worth attempting if the charge-off is significantly harming your score.",
      },
      {
        heading: "What Happens After the Seven-Year Window",
        body: "Under the FCRA, most negative items including charge-offs must be removed from your credit report after seven years from the date of the original delinquency. If a charge-off is still appearing on your report after this window has passed, that is a clear FCRA violation and you should dispute it immediately with the bureau. Include documentation showing the original delinquency date and state explicitly that the item has exceeded its permissible reporting period. Bureaus are required to remove it promptly.",
      },
    ],
    cta: "Use ScoreVera to identify charge-offs with errors and build dispute letters targeting the specific violations. Upload your report to get started.",
  },
  {
    slug: "goodwill-letter",
    title: "How to Write a Goodwill Letter to Remove a Late Payment",
    description:
      "A goodwill letter asks a creditor to remove an accurate but isolated late payment as a gesture of good faith. Learn how to write one that actually works.",
    category: "Dispute Guides",
    intro:
      "A goodwill letter is a written request to a creditor asking them to remove an accurately reported negative item — usually a single late payment — from your credit report as a gesture of goodwill. Unlike a dispute letter, a goodwill letter is not challenging the accuracy of the information. It is a polite, human appeal that works best when you have an otherwise solid payment history and a reasonable explanation for the missed payment.",
    sections: [
      {
        heading: "When a Goodwill Letter Makes Sense",
        body: "Goodwill letters work best in specific situations: you have been a loyal customer for several years, the late payment was an isolated incident rather than a pattern, you have an explanation such as a medical emergency, job loss, or a billing error on the creditor\'s end, and you have since paid the account and kept it in good standing. If you have a history of multiple late payments, a goodwill letter is unlikely to succeed and a dispute letter addressing any inaccuracies may be more appropriate.",
      },
      {
        heading: "How to Write a Goodwill Letter",
        body: "Address the letter to the creditor\'s customer service or credit department. Keep it concise — one page is ideal. Start by identifying your account, then briefly explain the circumstances that led to the late payment without making excuses. Express genuine acknowledgment of the responsibility and describe how your financial situation has since stabilized. Politely ask the creditor to consider removing the late payment notation as a goodwill adjustment. Thank them for their time and include your contact information. The tone should be professional and humble, not demanding.",
      },
      {
        heading: "What Creditors Can and Cannot Do",
        body: "Creditors are not required to honor goodwill requests. The FCRA allows them to report accurate information for the full permissible reporting period. However, it does not prohibit them from voluntarily requesting the removal of accurate negative information. Some creditors — particularly credit unions and community banks — are more responsive to goodwill letters than large national lenders. Capital One, for example, has a stated policy against removing accurate late payments, while other lenders evaluate requests case by case.",
      },
      {
        heading: "Following Up After Sending Your Letter",
        body: "If you do not receive a response within 30 days, follow up with a polite phone call referencing your written request. Ask to speak with the customer retention or account management department, as they sometimes have more flexibility than general customer service. If the creditor declines your request, accept the answer gracefully — pushing aggressively can damage the relationship you are trying to leverage. You can try again in a few months, particularly if your account history continues to improve in the meantime.",
      },
    ],
    cta: "While goodwill letters address accurate items, ScoreVera helps you identify inaccurate late payments that should be disputed. Upload your report to see what qualifies.",
  },
  {
    slug: "pay-for-delete",
    title: "Pay for Delete: Does It Work and Is It Worth It?",
    description:
      "Pay for delete is a negotiation tactic where you offer to pay a debt in exchange for its removal from your credit report. Here is what you need to know.",
    category: "Dispute Guides",
    intro:
      "Pay for delete is the practice of negotiating with a collection agency or creditor to remove a negative item from your credit report in exchange for payment of the debt. It is not a right guaranteed by law, but it is a tactic that some consumers use successfully. Understanding how it works, when it is worth pursuing, and what to watch out for helps you approach the negotiation intelligently.",
    sections: [
      {
        heading: "How Pay for Delete Works",
        body: "When a debt goes to collections, the collection agency typically purchased the debt from the original creditor for a fraction of the face value. This means they often have room to negotiate. You contact the collection agency — preferably in writing — and offer to pay some or all of the balance in exchange for their agreement to delete the trade line from all three credit bureaus. If they agree, get the agreement in writing before you pay anything. Once you have written confirmation of the deletion agreement, make your payment and then monitor your reports to confirm the item is removed.",
      },
      {
        heading: "Why Creditors May Agree or Decline",
        body: "Collection agencies are not obligated to agree to pay for delete. Major creditors like banks and national lenders often have policies against it because their credit bureau agreements require them to report accurately. However, smaller third-party collectors sometimes agree because their primary goal is to recover the debt and they have more flexibility with reporting. The older the debt, the less the collector paid for it, and the more willing they may be to accept a settlement — even with a deletion attached.",
      },
      {
        heading: "Getting the Agreement in Writing",
        body: "Never pay before you have a written agreement. The written agreement should state the exact amount you are paying, that this constitutes satisfaction of the debt, and that the collection agency will request deletion of the trade line from Equifax, Experian, and TransUnion within a specific timeframe — typically 30 days after payment clears. Keep a copy of this letter permanently. If the agency later fails to remove the item, your written agreement gives you grounds to escalate the matter with the CFPB and potentially pursue legal remedies.",
      },
      {
        heading: "Alternatives to Pay for Delete",
        body: "If a collector will not agree to delete, you still have options. Paying the collection will update its status to \"paid,\" which looks better to many lenders even if the item still shows on your report. More importantly, check whether the collection contains any inaccuracies — wrong balance, wrong original creditor, wrong date — because those errors give you the right to dispute under the FCRA regardless of whether the underlying debt is valid. A debt validation letter can also force the collector to prove the debt is legitimate before you pay anything.",
      },
    ],
    cta: "Before you pay a collection, use ScoreVera to check for reporting errors that could give you grounds to dispute it outright. Upload your report today.",
  },
  {
    slug: "debt-validation-letter",
    title: "How to Write a Debt Validation Letter",
    description:
      "Under the FDCPA, you can demand a debt collector validate any debt before you pay it. Learn how to write a debt validation letter and what it must include.",
    category: "Dispute Guides",
    intro:
      "A debt validation letter is a written request you send to a collection agency demanding proof that the debt they are trying to collect is legitimate, that the amount is accurate, and that they have the legal right to collect it. This right comes from the Fair Debt Collection Practices Act, and using it properly can stop collectors in their tracks and remove invalid debts from your credit report.",
    sections: [
      {
        heading: "Your Right to Debt Validation Under the FDCPA",
        body: "The Fair Debt Collection Practices Act gives you the right to request validation of a debt within 30 days of first contact from a debt collector. When you send a written validation request, the collector must stop all collection activities — including reporting — until they provide you with adequate verification. If they cannot verify the debt, they are required to cease collection efforts and the item should be removed from your credit report. This right applies to third-party collectors, not the original creditor.",
      },
      {
        heading: "What to Include in Your Validation Letter",
        body: "Your debt validation letter should include your full name and address, the account number or reference number from their notice, and a clear statement that you are disputing the debt and requesting validation under the FDCPA. Ask them to provide the name and address of the original creditor, the amount owed and how it was calculated, a copy of any agreement showing you are responsible for the debt, and proof that they are licensed to collect in your state. Send the letter by certified mail with return receipt within the 30-day window.",
      },
      {
        heading: "What Qualifies as Proper Validation",
        body: "The bar for debt validation is somewhat low legally — courts have generally held that providing a statement of the account with the original creditor\'s name and the amount owed can be sufficient. However, requesting thorough documentation often reveals gaps or errors that can be used to dispute the debt further. If the collector cannot identify the original creditor, cannot show a chain of title proving they purchased the debt, or if the amount does not match what you believed you owed, those are grounds to dispute the collection both with the collector and with the credit bureaus.",
      },
      {
        heading: "After You Send the Validation Letter",
        body: "If the collector fails to respond within a reasonable time or cannot validate the debt, send a follow-up letter demanding the removal of the collection from your credit reports. If the collection continues to appear after an unsuccessful validation attempt, file a dispute with each bureau noting that the debt was not validated. You may also file a complaint with the CFPB and your state attorney general\'s office. Collectors who continue collection activities after receiving a validation request may be violating the FDCPA, which entitles you to sue for damages.",
      },
    ],
    cta: "ScoreVera helps you identify unverifiable collections and build the paper trail you need to challenge them. Upload your report to see what applies to you.",
  },
  {
    slug: "dispute-hard-inquiries",
    title: "How to Dispute Unauthorized Hard Inquiries on Your Credit Report",
    description:
      "Unauthorized hard inquiries can lower your credit score. Learn how to identify and dispute hard pulls you never authorized under the FCRA.",
    category: "Dispute Guides",
    intro:
      "Every time a lender or other entity makes a hard inquiry on your credit report without your authorization, it is a potential FCRA violation — and it can lower your credit score. Disputing unauthorized hard inquiries is a straightforward process that can help clean up your report and protect your credit from unauthorized access.",
    sections: [
      {
        heading: "Hard Inquiries vs. Soft Inquiries",
        body: "A hard inquiry occurs when a lender or creditor pulls your full credit report in connection with a credit application. Hard inquiries appear on your report and can affect your score for up to 12 months, though they remain on your report for two years. A soft inquiry — such as when you check your own credit or when a lender pre-screens you for a pre-approved offer — does not affect your score and is only visible to you. Only hard inquiries require your explicit authorization, typically through signing a credit application.",
      },
      {
        heading: "How to Identify Unauthorized Inquiries",
        body: "Review the inquiries section of each of your three credit reports. For each hard inquiry, ask yourself: did I apply for credit with this company around the date shown? If you do not recognize the company name, research it — some companies pull credit under a parent company\'s name. If you still do not recognize it, it may be unauthorized. Common sources of unauthorized hard inquiries include identity theft, employer background checks performed incorrectly, and creditors who pulled your credit without a permissible purpose.",
      },
      {
        heading: "How to Dispute an Unauthorized Hard Inquiry",
        body: "Write a dispute letter to the bureau reporting the inquiry, identify the specific inquiry by creditor name and date, and state that you did not authorize this inquiry and request its removal. Simultaneously, consider contacting the company that pulled your credit and asking them to confirm what permissible purpose they had. If they cannot provide a valid reason, request that they contact the bureau and request removal. Under the FCRA, inquiries made without a permissible purpose are illegal and must be removed.",
      },
      {
        heading: "If the Inquiry Is Part of Identity Theft",
        body: "If you find multiple unauthorized inquiries — especially accompanied by new accounts you did not open — this may indicate identity theft. Place a fraud alert or security freeze on your credit file immediately with all three bureaus. File an identity theft report with the FTC at IdentityTheft.gov and file a police report with your local law enforcement. With an FTC identity theft report, the bureau must block the fraudulent inquiries and accounts from appearing on your report, usually within four business days.",
      },
    ],
    cta: "ScoreVera helps you flag and dispute unauthorized hard inquiries with the right documentation. Upload your report and take back control of your credit.",
  },
  {
    slug: "dispute-timeline",
    title: "Credit Dispute Timeline: What to Expect and When",
    description:
      "Understanding the credit dispute timeline helps you know what to expect at each stage. Learn the FCRA deadlines bureaus and furnishers must follow.",
    category: "Dispute Guides",
    intro:
      "When you file a credit dispute, the FCRA sets specific deadlines that credit bureaus and data furnishers must follow. Understanding this timeline helps you know when to expect results, when to follow up, and when a bureau\'s failure to respond becomes a legal violation you can act on.",
    sections: [
      {
        heading: "Day 1: Filing Your Dispute",
        body: "The 30-day clock starts from the day the credit bureau receives your dispute, not the day you mail it. This is why certified mail with return receipt is so important — the delivery confirmation establishes the exact date your dispute was received. Online disputes start the clock from submission. Make sure your dispute clearly identifies the disputed item, states the reason for the dispute, and includes any supporting documentation. Incomplete disputes may be returned or deemed frivolous, which resets the clock.",
      },
      {
        heading: "Days 1-5: Bureau Notifies the Furnisher",
        body: "After receiving your dispute, the bureau must notify the furnisher of the information — the original creditor or collection agency — within five business days. The bureau forwards your dispute and all relevant information to the furnisher, who then has the opportunity to verify, modify, or delete the item. The furnisher must complete its review and report back to the bureau within the investigation window.",
      },
      {
        heading: "Days 1-30: The Investigation Window",
        body: "The bureau has 30 days from the receipt of your dispute to complete the investigation. This window extends to 45 days if you provide additional information after the original dispute is filed. During this time, the bureau must review all information submitted, contact the furnisher, and either confirm, correct, or delete the disputed item. If the bureau does not complete the investigation within the required timeframe, the item must be deleted.",
      },
      {
        heading: "After the Investigation: Results and Next Steps",
        body: "Within five business days of completing the investigation, the bureau must send you the results in writing. The notice will state whether the item was verified, modified, or deleted. If the item was deleted or corrected, you can request that the bureau notify anyone who received your report in the past six months — or two years for employment inquiries. If the item was verified and you disagree with the result, you can file a second dispute with new supporting information, escalate to the furnisher directly, or file a complaint with the CFPB.",
      },
    ],
    cta: "ScoreVera helps you track your disputes and respond at the right time in the process. Upload your report and take the first step.",
  },
  {
    slug: "escalate-dispute",
    title: "How to Escalate a Credit Dispute When the Bureau Won\'t Help",
    description:
      "If the credit bureau keeps verifying an item you know is wrong, here is how to escalate your dispute to the furnisher, CFPB, and beyond.",
    category: "Dispute Guides",
    intro:
      "Credit bureaus sometimes verify items that appear on the surface to be accurate but are actually wrong in ways the bureau\'s automated reinvestigation process misses. When a bureau keeps confirming an item you know is inaccurate, you have additional escalation paths available — from disputing directly with the furnisher to filing regulatory complaints and pursuing legal remedies.",
    sections: [
      {
        heading: "Dispute Directly With the Furnisher Under FCRA Section 623",
        body: "If disputing with the bureau has not worked, take your dispute directly to the original creditor or collection agency that is reporting the information. Under FCRA Section 623, furnishers have their own obligation to investigate disputes and must have reasonable procedures to ensure they are reporting accurate information. Send a detailed dispute letter to the furnisher\'s dispute department with all supporting documentation. A direct dispute forces the furnisher to independently verify their records rather than simply confirming what they already sent to the bureau.",
      },
      {
        heading: "File a Complaint With the CFPB",
        body: "The Consumer Financial Protection Bureau is the primary federal agency responsible for enforcing the FCRA. You can file a complaint online at consumerfinance.gov/complaint. When you file, the bureau or furnisher is typically required to respond within 15 days. While the CFPB cannot force deletion of an accurate item, its involvement often prompts more thorough investigations than the bureau\'s standard automated process. The CFPB also tracks complaint patterns, so your complaint contributes to regulatory oversight even if it does not immediately resolve your issue.",
      },
      {
        heading: "Contact Your State Attorney General",
        body: "Many states have their own consumer protection laws that parallel or extend FCRA protections. Your state attorney general\'s office may be able to investigate complaints against credit bureaus or collection agencies operating in your state. Some states have specific credit reporting laws that provide additional remedies beyond what federal law requires. Filing a state-level complaint alongside a CFPB complaint can increase the pressure on the bureau or furnisher to conduct a genuine investigation.",
      },
      {
        heading: "Consult a Consumer Law Attorney",
        body: "If a bureau or furnisher has repeatedly failed to correct a clear error, you may have grounds for a lawsuit under the FCRA. The FCRA allows consumers to sue for actual damages, punitive damages in cases of willful non-compliance, and attorney\'s fees. Many consumer law attorneys take FCRA cases on a contingency basis, meaning you pay nothing unless you win. Before pursuing litigation, document every step of your dispute process — every letter you sent, every response you received, and every date — because this paper trail is essential to building a case.",
      },
    ],
    cta: "ScoreVera helps you build the documentation record needed to escalate effectively. Upload your report and start documenting your dispute process today.",
  },
  {
    slug: "dispute-all-three-bureaus",
    title: "How to Dispute Errors With All Three Credit Bureaus at Once",
    description:
      "Errors often appear on multiple bureaus. Learn how to dispute the same item with Equifax, Experian, and TransUnion simultaneously and efficiently.",
    category: "Dispute Guides",
    intro:
      "A credit report error often appears on more than one bureau, but each bureau maintains its own database and must be disputed separately. Knowing how to manage disputes across Equifax, Experian, and TransUnion simultaneously — without duplicating effort unnecessarily — is key to a complete credit correction strategy.",
    sections: [
      {
        heading: "Why Errors Appear on Multiple Bureaus",
        body: "Most creditors report to all three major bureaus on a monthly cycle, so if they are reporting inaccurate information, it typically shows up everywhere. However, the same error may appear slightly differently on each bureau — with a different balance, date, or status — because each bureau processes incoming data independently. This means your dispute letters to each bureau may need to be slightly different, reflecting the specific inaccuracy as it appears on that bureau\'s version of your report.",
      },
      {
        heading: "How to File With Each Bureau",
        body: "Equifax accepts disputes online at equifax.com, by mail, or by phone. Experian accepts disputes at experian.com, by mail, or by phone. TransUnion accepts disputes at transunion.com, by mail, or by phone. For significant errors, send written letters to each bureau simultaneously via certified mail. Use the specific language that matches what each bureau is reporting — do not send an identical letter to all three if the error appears differently on each report. Each letter should also include your identifying information and copies of relevant supporting documents.",
      },
      {
        heading: "Tracking Three Disputes at Once",
        body: "Create a simple tracking log for your disputes. For each item you are disputing, record the bureau, the date your letter was received (confirmed by your return receipt), and the deadline date 30 days later. When you receive investigation results from each bureau, note the date received and the outcome. If one bureau corrects the error but another does not, you know exactly where to follow up. Organized documentation also helps if you need to escalate — it shows a clear history of your dispute attempts and the bureaus\' responses.",
      },
      {
        heading: "When Bureaus Give Conflicting Results",
        body: "It is common for the same dispute to produce different outcomes at different bureaus. One bureau might delete an item while another verifies it. This happens because each bureau contacts the furnisher independently and the furnisher may respond differently to each. If one bureau deletes an item as unverifiable and another verifies it, that discrepancy itself is worth noting in your escalation letters. Request that the bureaus that verified it re-investigate and point to the fact that the same furnisher could not verify the same item with a different bureau.",
      },
    ],
    cta: "ScoreVera makes it easy to organize disputes across all three bureaus from one place. Upload your reports and build your complete dispute strategy.",
  },
  {
    slug: "cfpb-complaint",
    title: "How to File a CFPB Complaint About Your Credit Report",
    description:
      "Learn how to file a complaint with the Consumer Financial Protection Bureau when a credit bureau or furnisher refuses to correct an error on your report.",
    category: "Dispute Guides",
    intro:
      "The Consumer Financial Protection Bureau is the federal agency responsible for enforcing the FCRA. Filing a complaint with the CFPB is a powerful escalation tool when a credit bureau or furnisher has ignored or improperly handled your dispute. The process is free, takes about 15 minutes, and often produces results that repeated dispute letters do not.",
    sections: [
      {
        heading: "When to File a CFPB Complaint",
        body: "Consider filing a CFPB complaint after you have made at least one good-faith attempt to resolve the issue directly with the bureau or furnisher and received an unsatisfactory result. Common reasons to file include: a bureau failed to investigate within the 30-day window, a bureau re-verified an item you have documented evidence is inaccurate, a collection agency refused to validate a debt, or a creditor is continuing to report information it knows is wrong. You can file a complaint against credit bureaus, original creditors, debt collectors, and other financial companies.",
      },
      {
        heading: "How to File Your Complaint",
        body: "Visit consumerfinance.gov/complaint and select the type of financial product (consumer reporting or debt collection, depending on the issue). Follow the prompts to describe the problem, which company is involved, and what you want to happen. You will be able to upload supporting documents — include copies of your dispute letters, the bureau\'s or furnisher\'s responses, and any documentation supporting your position. You do not need an attorney to file, and there is no cost. After submission, you will receive a tracking number and can monitor the status of your complaint online.",
      },
      {
        heading: "What Happens After You File",
        body: "The CFPB forwards your complaint to the company involved and asks them to respond within 15 days. Most companies respond because regulators monitor how quickly and how thoroughly complaints are resolved. You will receive the company\'s response through the CFPB\'s portal and can provide feedback on whether the response resolved your issue. If the company\'s response does not satisfy you, you can dispute their response in the portal. CFPB staff review complaint patterns and may take enforcement action against companies that show systemic issues.",
      },
      {
        heading: "Other Regulatory Options",
        body: "In addition to the CFPB, you can file complaints with the Federal Trade Commission at ReportFraud.ftc.gov, your state attorney general\'s consumer protection division, and your state banking regulator if the issue involves a bank or credit union. Filing complaints with multiple agencies simultaneously is not prohibited and can increase pressure on the company to resolve the issue. Keep copies of all complaints you file and all responses you receive — these records are valuable if you later consult an attorney about potential litigation.",
      },
    ],
    cta: "ScoreVera helps you document your dispute history so your CFPB complaint is detailed and compelling. Upload your report to start building your case.",
  },
  {
    slug: "after-dispute",
    title: "What to Do After Your Credit Dispute Is Resolved",
    description:
      "Learn what steps to take after your credit dispute is closed — whether the outcome was successful or not — to protect your credit going forward.",
    category: "Dispute Guides",
    intro:
      "Receiving the results of a credit dispute is not the end of the process — it is the beginning of the next phase. Whether the disputed item was removed, corrected, or verified, there are important steps to take to confirm the outcome, protect your credit, and decide whether further action is warranted.",
    sections: [
      {
        heading: "Verify the Change Was Made Correctly",
        body: "If the bureau reported that an item was deleted or corrected, do not take their word for it — pull an updated copy of your credit report from that bureau and verify the change yourself. Sometimes the bureau confirms a deletion in their letter but the item continues to appear on the actual report. If the item is still there, contact the bureau immediately with a copy of their own deletion confirmation letter. Documenting this discrepancy also strengthens any subsequent complaint you might file.",
      },
      {
        heading: "Check the Impact on Your Credit Score",
        body: "After a significant item is removed or corrected, check your credit score within a few weeks. The timing of score updates depends on when the bureau\'s next update cycle is processed. A removed collection, corrected late payment, or deleted charge-off can have a meaningful positive impact on your score — but only after it is processed. If your score does not change after a correction you expected to help, it may be because the item was not significant in the scoring model\'s calculation, or because other negative items are still affecting your score.",
      },
      {
        heading: "Request Updated Reports Be Sent to Recent Inquirers",
        body: "Under the FCRA, if an error is corrected, you can request that the bureau send an updated copy of your report to any employer who checked your credit in the past two years, or any other entity that pulled your report in the past six months. This is particularly useful if you were denied credit, housing, or employment based on the inaccurate information. Making this request ensures that the parties who saw the incorrect information also see the corrected version.",
      },
      {
        heading: "Plan Your Next Steps",
        body: "If the dispute was denied and you still believe the information is wrong, review the bureau\'s explanation for the denial, gather additional supporting documentation, and consider filing a second dispute with new evidence or escalating to the furnisher directly. If the dispute was successful, review the rest of your reports for any remaining errors and continue working through them systematically. Rebuilding credit after errors are removed takes time — focus on consistent on-time payments, low utilization, and avoiding new hard inquiries while your score recovers.",
      },
    ],
    cta: "ScoreVera helps you track dispute outcomes and plan your next steps. Upload your updated report to see what still needs attention.",
  },
  {
    slug: "round-2-disputes",
    title: "How to File a Second Round of Credit Disputes",
    description:
      "When the first dispute fails, a second round with new evidence and a different approach can succeed. Here is how to effectively re-dispute credit report errors.",
    category: "Dispute Guides",
    intro:
      "A denied credit dispute does not mean the process is over. Many consumers successfully remove inaccurate items only after a second or third round of disputes, particularly when they approach the reinvestigation differently and with stronger supporting documentation. This guide explains how to build a more effective second-round dispute.",
    sections: [
      {
        heading: "Why First-Round Disputes Sometimes Fail",
        body: "Most credit bureau disputes are initially processed through automated systems called e-OSCAR. The bureau sends the key points of your dispute electronically to the furnisher, and the furnisher\'s system automatically confirms the data without a human ever reviewing it. This automated verification can be inadequate when the error requires actually examining original account records. A second-round dispute that provides detailed documentation or raises specific factual questions forces more thorough handling.",
      },
      {
        heading: "How to Strengthen Your Second Dispute",
        body: "For your second dispute, provide new information you did not include the first time. This could include account statements, payment confirmations, settlement letters, insurance EOBs for medical debts, or identity documentation if the account is not yours. Be more specific in identifying the exact inaccuracy — instead of \"this balance is wrong,\" say \"the balance as of [date] was $X according to my account statement dated [date], attached herein as Exhibit A.\" This level of specificity is harder for an automated system to simply verify away.",
      },
      {
        heading: "Target the Furnisher Directly",
        body: "If the bureau keeps verifying the item, escalate to a direct dispute with the furnisher under FCRA Section 623. Send a detailed dispute letter directly to the creditor\'s or collector\'s dispute department — not their general customer service number. Include all documentation and reference the FCRA explicitly. A direct dispute bypasses the e-OSCAR system and requires the furnisher to conduct their own investigation using their original records. If their records actually support your position, a direct investigation is far more likely to produce a correction.",
      },
      {
        heading: "Document Everything for Potential Escalation",
        body: "Your second-round dispute serves two purposes: it may correct the error directly, and it strengthens your case for regulatory complaints or legal action if the bureau continues to maintain an item you can prove is wrong. Keep copies of every letter, every certified mail receipt, every investigation result. If you later consult a consumer law attorney, your documentation demonstrating that the bureau repeatedly verified inaccurate information despite evidence to the contrary is exactly what is needed to support an FCRA lawsuit for damages.",
      },
    ],
    cta: "ScoreVera helps you build stronger, more documented dispute letters for every round of the process. Upload your report and sharpen your approach.",
  },

  // ─────────────────────────────────────────────
  // FCRA & YOUR RIGHTS (15)
  // ─────────────────────────────────────────────
  {
    slug: "fcra-consumer-rights",
    title: "Your Consumer Rights Under the Fair Credit Reporting Act",
    description:
      "The FCRA gives you powerful rights over your credit report. Learn what you are entitled to, what creditors must do, and how to enforce your rights.",
    category: "FCRA & Your Rights",
    intro:
      "The Fair Credit Reporting Act, passed in 1970 and significantly strengthened in 2003, is the primary federal law governing credit reporting in the United States. It establishes the rules that credit bureaus, creditors, employers, and other users of credit information must follow, and it gives you specific rights to access, review, and dispute the information in your credit file.",
    sections: [
      {
        heading: "The Right to Access Your Credit Report",
        body: "You have the right to receive one free copy of your credit report from each of the three major bureaus — Equifax, Experian, and TransUnion — every 12 months through AnnualCreditReport.com. As of 2023, weekly free reports are available through this official site. You also have the right to a free report if you have been denied credit, insurance, or employment based on your credit report, if you are unemployed and plan to apply for a job within 60 days, if you are on public assistance, or if you believe your file contains errors due to fraud.",
      },
      {
        heading: "The Right to Dispute Inaccurate Information",
        body: "You have the right to dispute any information in your credit file that you believe is inaccurate, incomplete, or unverifiable. Credit bureaus must investigate your disputes within 30 days, contact the furnisher of the information, and either confirm, correct, or delete the item. If information cannot be verified, it must be deleted. You also have the right to dispute inaccurate information directly with the original creditor or collection agency under FCRA Section 623.",
      },
      {
        heading: "The Right to Know Who Has Accessed Your File",
        body: "Your credit report includes a list of all entities that have accessed your file in the past two years. Hard inquiries — those made in connection with a credit application — appear in the section visible to lenders. Soft inquiries appear only in the version you receive. If you see an inquiry you did not authorize, that may be a FCRA violation. Only entities with a permissible purpose — credit applications, employment checks, insurance underwriting, and certain others — are legally allowed to access your credit file.",
      },
      {
        heading: "The Right to Limit Certain Uses of Your Information",
        body: "You can opt out of pre-screened credit and insurance offers by calling 1-888-5-OPT-OUT or visiting optoutprescreen.com. You can also place a security freeze on your credit file at each bureau, which prevents new creditors from accessing your file entirely until you lift the freeze. A security freeze is free under federal law and is the strongest protection against new accounts being opened in your name. You can also place a fraud alert if you suspect identity theft, which requires lenders to take extra steps before extending credit in your name.",
      },
    ],
    cta: "Understanding your rights is the first step — ScoreVera helps you exercise them. Upload your credit report and see what disputes you may be entitled to file.",
  },
  {
    slug: "fcra-609",
    title: "FCRA Section 609: Your Right to Request Your Credit File",
    description:
      "FCRA Section 609 gives you the right to request disclosure of your full credit file. Learn what it covers, what it does not, and how to use it properly.",
    category: "FCRA & Your Rights",
    intro:
      "Section 609 of the Fair Credit Reporting Act covers your right to obtain disclosure of your credit file from a consumer reporting agency. This section is sometimes misunderstood and misrepresented online, but it does give you genuine rights worth knowing about. Understanding what Section 609 actually says — and what it does not say — helps you use the law correctly.",
    sections: [
      {
        heading: "What Section 609 Actually Says",
        body: "FCRA Section 609 (15 U.S.C. § 1681g) requires every consumer reporting agency to disclose to the consumer, upon request, all information in their file at the time of the request. This includes: the nature and substance of all information in your file, the sources of that information, and the identity of each person who obtained a consumer report about you for employment purposes in the two-year period preceding the request. The bureau must provide this disclosure in writing or electronically if you request it.",
      },
      {
        heading: "The \"609 Letter\" Myth",
        body: "You may have seen so-called \"Section 609 dispute letters\" sold online claiming they can remove any item from your credit report by demanding proof of the original signed contract. This is a misrepresentation of the law. Section 609 is about disclosure of your file, not a dispute mechanism. It does not require creditors to produce original signed contracts to keep items on your report. Using Section 609 letters as a dispute strategy is not more effective than filing a standard FCRA dispute, and some attorneys warn that it can backfire if bureaus flag your disputes as frivolous.",
      },
      {
        heading: "How to Properly Request Your Credit File Under Section 609",
        body: "You are entitled to request a complete disclosure of your credit file at any time. Requests can be submitted online through each bureau\'s website, by phone, or by mail. When requesting by mail, include your full name, address, date of birth, and Social Security number. The bureau has 15 days to provide the disclosure if you make a direct file request (not a dispute). This is separate from your annual free report — a Section 609 request can be used to confirm exactly what is in your file before filing a dispute.",
      },
      {
        heading: "What Section 609 Cannot Do",
        body: "Section 609 does not obligate the bureau to remove any item that you simply ask about. It does not require furnishers to prove the existence of a signed contract in order to continue reporting. It does not give you legal grounds to sue for removal of accurate information. The proper tool for removing inaccurate or unverifiable items is a Section 611 dispute. If you want to challenge information based on what the furnisher can or cannot verify, the dispute process under Section 611 — and potentially a direct furnisher dispute under Section 623 — is the right path.",
      },
    ],
    cta: "ScoreVera uses the right sections of the FCRA to help you dispute errors. Upload your report and build a legitimate, effective dispute strategy.",
  },
  {
    slug: "fcra-611",
    title: "FCRA Section 611: The Right to Reinvestigation",
    description:
      "FCRA Section 611 is the legal basis for credit report disputes. Learn exactly what it requires of credit bureaus and how to use it to challenge inaccurate items.",
    category: "FCRA & Your Rights",
    intro:
      "FCRA Section 611 is arguably the most important provision of the Fair Credit Reporting Act for everyday consumers. It is the legal foundation for the credit dispute process, establishing what bureaus must do when you challenge information in your file and what your rights are when those investigations fall short.",
    sections: [
      {
        heading: "The Core Obligation: Reasonable Reinvestigation",
        body: "Section 611 requires that when a consumer notifies a credit bureau of a dispute about the completeness or accuracy of an item, the bureau must conduct a reasonable reinvestigation within 30 days. The word \"reasonable\" is significant — courts have found that automated verification without any actual review of source documents is not always reasonable. This is especially true when the consumer has provided documentation demonstrating the error. A bureau that simply asks the furnisher to confirm the data and accepts their answer without genuine review may not be meeting its reinvestigation obligations.",
      },
      {
        heading: "Deadlines and the Frivolous Exception",
        body: "The standard investigation window is 30 days, extended to 45 days if you submit additional information during the investigation. If the bureau determines your dispute is frivolous — because it lacks specificity or raises no issue the bureau can investigate — it must notify you within five business days of that determination and explain the basis. To avoid having your dispute dismissed as frivolous, always provide specific reasons for disputing each item and include supporting documentation whenever possible.",
      },
      {
        heading: "What Happens When the Furnisher Cannot Verify",
        body: "If the furnisher of the information fails to respond to the bureau\'s inquiry or confirms they cannot verify the accuracy of the item, the bureau must delete it from your file. This is why disputing items can work even when you do not have extensive documentation — if the furnisher has sloppy records or simply does not respond in time, the item must come off your report. Deleted items generally cannot be reinserted without the bureau notifying you in writing within five business days of the reinsertion.",
      },
      {
        heading: "Post-Investigation Rights",
        body: "After the investigation is complete, the bureau must notify you of the results within five business days. If a change was made, you can request that the bureau send updated reports to anyone who accessed your file in the past six months (two years for employment purposes). You can also add a brief statement of dispute — up to 100 words — if you disagree with the investigation results. This statement will accompany any future disclosures of your report.",
      },
    ],
    cta: "ScoreVera structures your disputes to meet the requirements of Section 611 and make it harder for bureaus to dismiss them. Upload your report to get started.",
  },
  {
    slug: "fcra-623",
    title: "FCRA Section 623: How to Dispute Directly With Furnishers",
    description:
      "FCRA Section 623 lets you dispute inaccurate credit report information directly with the company that reported it. Learn how and when to use this powerful tool.",
    category: "FCRA & Your Rights",
    intro:
      "Most people know they can dispute credit report errors with the credit bureaus, but fewer know they can also dispute errors directly with the entity that is reporting the information. FCRA Section 623 imposes obligations on data furnishers — creditors, collection agencies, and other entities that report to bureaus — and gives consumers a direct path to challenge inaccurate reporting at the source.",
    sections: [
      {
        heading: "What Section 623 Requires of Furnishers",
        body: "Section 623 imposes several duties on companies that furnish information to credit bureaus. They must have reasonable procedures to ensure the accuracy and completeness of the information they report. They must promptly update information when they discover it is inaccurate. They must investigate disputes they receive directly from consumers and report the results back to the bureau. And they must notify the bureau when a consumer disputes an account, so the bureau can flag it accordingly.",
      },
      {
        heading: "When to Use a Direct Furnisher Dispute",
        body: "Disputing directly with the furnisher is most effective after a bureau investigation has failed to correct the error. If a bureau has verified an item that you believe is wrong, the problem may be that the bureau is accepting the furnisher\'s confirmation at face value. By going to the source, you force the furnisher to actually examine their own records. A direct dispute under Section 623 should be sent to the furnisher\'s dispute department in writing, with full documentation of the error and the basis for your dispute.",
      },
      {
        heading: "Furnisher Responsibilities After Receiving a Direct Dispute",
        body: "After receiving a direct dispute, the furnisher must conduct an investigation and complete it within a reasonable time. If the investigation reveals that the information is inaccurate, incomplete, or cannot be verified, the furnisher must modify, delete, or permanently block the information and notify every bureau to which they reported it of the correction. This means a successful direct dispute can fix the error across all three bureaus simultaneously, without the need for separate bureau disputes for each one.",
      },
      {
        heading: "Limits of Section 623",
        body: "Section 623 originally did not give consumers a private right of action against furnishers for direct violations — meaning you generally could not sue a furnisher simply because they failed to respond to a direct dispute. However, case law has evolved, and an increasing number of courts have found that violations of Section 623 can be actionable, particularly when combined with willful or negligent violations under other sections of the FCRA. If a furnisher repeatedly fails to investigate and correct a clear error, consulting a consumer law attorney is worthwhile.",
      },
    ],
    cta: "ScoreVera helps you build direct furnisher dispute letters under Section 623 to escalate when bureau disputes fall short. Upload your report to get started.",
  },
  {
    slug: "free-credit-report",
    title: "How to Get Your Free Credit Report (The Right Way)",
    description:
      "You are entitled to free credit reports by law. Learn how to access them safely, how often you can get them, and what to look for when you review them.",
    category: "FCRA & Your Rights",
    intro:
      "Under the FCRA, you have a legal right to access your credit reports for free — but only through the official, government-authorized channel. Knowing how to get your reports safely, how often you can access them, and what to look for when reviewing them is the foundation of managing your credit health effectively.",
    sections: [
      {
        heading: "AnnualCreditReport.com Is the Official Source",
        body: "The only website authorized by federal law to provide your free annual credit reports is AnnualCreditReport.com. This site was established jointly by Equifax, Experian, and TransUnion in compliance with the FCRA. Be wary of look-alike sites with similar names — some are commercial services that charge fees or sign you up for credit monitoring subscriptions. AnnualCreditReport.com does not charge a fee and does not require a credit card. It is operated on behalf of the three bureaus in compliance with federal requirements.",
      },
      {
        heading: "How Often You Can Access Your Reports",
        body: "As of 2023, the three major bureaus have made weekly free reports available through AnnualCreditReport.com on an ongoing basis. Previously, consumers were entitled to one free report per bureau per year; the expanded access was introduced during the COVID-19 pandemic and has since been made permanent. In addition to this, you may be entitled to additional free reports if you were denied credit based on your report, if you are a victim of identity theft, or if you receive public assistance.",
      },
      {
        heading: "What to Look For When Reviewing Your Report",
        body: "Review each section systematically. Check your personal information for accuracy — wrong addresses or names can indicate mixed files or identity theft. Review every account: verify the creditor names, account numbers, open dates, balances, payment history, and account status. Check the public records section for any judgments or bankruptcies that should not be there. Review all hard inquiries and confirm you authorized each one. Finally, check whether any negative items have exceeded their permissible reporting period.",
      },
      {
        heading: "What to Do If You Find Errors",
        body: "If you find errors, document them carefully before taking any action. Note the specific inaccuracy, the bureau reporting it, and any evidence you have that contradicts the reported information. Then file a written dispute with the bureau under FCRA Section 611. For significant errors — wrong accounts, fraud-related items, items past their legal reporting window — consider disputing simultaneously with all three bureaus and filing a complaint with the CFPB if the bureaus fail to correct the error.",
      },
    ],
    cta: "Once you have your reports, ScoreVera can help you identify disputable errors and generate the right letters. Upload your report to get started.",
  },
  {
    slug: "bureau-limits",
    title: "How Long Can Negative Items Stay on Your Credit Report?",
    description:
      "The FCRA sets strict time limits on how long negative information can stay on your credit report. Learn the limits for each type of item and what to do when they are exceeded.",
    category: "FCRA & Your Rights",
    intro:
      "The Fair Credit Reporting Act does not allow negative items to remain on your credit report indefinitely. For most types of derogatory information, the law establishes a maximum reporting period after which the bureau must remove the item. Understanding these limits lets you identify items that have stayed on your report too long — which is a clear and disputable violation.",
    sections: [
      {
        heading: "The Seven-Year Rule for Most Negative Items",
        body: "For the majority of negative credit information — including late payments, collections, charge-offs, repossessions, and most civil judgments — the maximum reporting period is seven years. The clock generally starts from the date of first delinquency: the date the account first became delinquent and was never brought current again. This date is critical because creditors sometimes manipulate it to extend the reporting period illegally. If an item is past the seven-year mark from the original delinquency date, it must be removed and you should dispute it immediately.",
      },
      {
        heading: "Bankruptcy Reporting Limits",
        body: "Chapter 7 bankruptcy can remain on your credit report for 10 years from the date of filing. Chapter 13 bankruptcy, which involves a repayment plan, is typically removed after seven years from the filing date. Accounts discharged in bankruptcy may show as discharged but should not continue to show as open or delinquent after the bankruptcy is finalized. Any accounts included in a bankruptcy should show a zero balance and a notation of the bankruptcy discharge or inclusion, not an ongoing unpaid balance.",
      },
      {
        heading: "Hard Inquiries",
        body: "Hard inquiries — those made in connection with a credit application — can appear on your report for up to two years. However, most credit scoring models only factor in hard inquiries from the past 12 months, and their impact on your score diminishes significantly after the first few months. Hard inquiries cannot be removed before the two-year window unless they were unauthorized, in which case they are a disputable FCRA violation regardless of their age.",
      },
      {
        heading: "Items With No Time Limit",
        body: "A small number of items have no maximum reporting period under the FCRA. These include: criminal convictions (though credit bureaus rarely report these), information reported in connection with a credit application for $150,000 or more, information reported in connection with life insurance underwriting for a policy of $150,000 or more, and employment applications for a position with an annual salary of $75,000 or more. For the vast majority of consumers in ordinary credit situations, the seven-year rule applies.",
      },
    ],
    cta: "ScoreVera helps you identify items that have exceeded their legal reporting period so you can dispute them quickly. Upload your report today.",
  },
  {
    slug: "debt-statute-of-limitations",
    title: "Debt Statute of Limitations: What It Means for Your Credit",
    description:
      "The statute of limitations on debt limits a collector\'s ability to sue you. It is different from the credit reporting window. Learn how both affect you.",
    category: "FCRA & Your Rights",
    intro:
      "The statute of limitations on debt and the credit reporting period are two separate legal concepts that are frequently confused. The statute of limitations determines how long a creditor or collector can sue you to collect a debt. The credit reporting period determines how long a negative item can appear on your credit report. Each has its own rules, and understanding the difference is essential.",
    sections: [
      {
        heading: "The Statute of Limitations on Debt",
        body: "The statute of limitations on debt is a state law that sets the maximum time a creditor or debt collector can file a lawsuit to collect an unpaid debt. This period varies significantly by state — typically ranging from three to six years, though some states go as high as ten years. The clock usually starts from the date of last activity on the account, which is typically the date of the last payment. Once the statute of limitations expires, the debt is \"time-barred,\" meaning a lawsuit to collect it would be dismissed.",
      },
      {
        heading: "Time-Barred Debt and Collection Activity",
        body: "Just because a debt is time-barred does not mean collectors will stop calling. Collectors can still attempt to collect time-barred debt; they simply cannot successfully sue you for it. However, if you make a payment on a time-barred debt — even a small payment — you may restart the statute of limitations clock in some states, making yourself vulnerable to a lawsuit again. Never make any payment on an old debt without first verifying whether it is time-barred and understanding your state\'s rules on restarting the clock.",
      },
      {
        heading: "The Credit Reporting Period Is Different",
        body: "The credit reporting period under the FCRA is completely separate from the statute of limitations. Under the FCRA, most negative items can appear on your credit report for up to seven years from the date of first delinquency, regardless of your state\'s statute of limitations. A debt can be time-barred for legal collection purposes — meaning no one can sue you for it — but it may still legally appear on your credit report if it is within the seven-year reporting window. Conversely, a debt can be past the seven-year reporting window even though it is still within the statute of limitations in some states.",
      },
      {
        heading: "What This Means Practically",
        body: "If you receive a collection call about an old debt, check two things: the date of first delinquency (to determine when the seven-year credit reporting window expires) and your state\'s statute of limitations (to determine whether a lawsuit is still possible). If a collection appears on your report for a debt that is past the seven-year window from the original delinquency date, dispute it as an FCRA violation. If a collector threatens to sue you for a debt past the statute of limitations, that threat itself may violate the FDCPA.",
      },
    ],
    cta: "ScoreVera helps you identify collections that may be past their legal reporting window. Upload your report and see what can be challenged.",
  },
  {
    slug: "fdcpa-explained",
    title: "The FDCPA Explained: Your Rights Against Debt Collectors",
    description:
      "The Fair Debt Collection Practices Act protects you from abusive, deceptive, and unfair debt collection tactics. Learn your rights and how to enforce them.",
    category: "FCRA & Your Rights",
    intro:
      "The Fair Debt Collection Practices Act (FDCPA) is a federal law that sets the rules for how third-party debt collectors can communicate with you, what they can and cannot say, and what rights you have when dealing with them. Understanding the FDCPA helps you recognize when collectors cross the line and gives you tools to stop abusive behavior.",
    sections: [
      {
        heading: "Who the FDCPA Covers",
        body: "The FDCPA applies to third-party debt collectors — companies or individuals who regularly collect debts owed to others. It does not apply to original creditors collecting their own debts in their own name, though some state laws extend similar protections to original creditors. The FDCPA covers collectors attempting to collect personal, family, or household debts, including credit card debt, medical debt, mortgages, and auto loans. It does not cover business debt collection.",
      },
      {
        heading: "Prohibited Collection Practices",
        body: "The FDCPA prohibits a wide range of abusive and deceptive practices. Collectors cannot call before 8 a.m. or after 9 p.m. They cannot call you at work if they know your employer prohibits it. They cannot threaten violence, use obscene language, or make false statements. They cannot falsely claim to be attorneys, law enforcement, or government officials. They cannot misrepresent the amount you owe. They cannot threaten to sue on time-barred debt. They cannot communicate about your debt with third parties other than your attorney or spouse.",
      },
      {
        heading: "Your Right to Request Validation",
        body: "Within five days of first contacting you, a debt collector must send you a written notice containing the amount of the debt, the name of the original creditor, and your right to dispute the debt. If you dispute the debt in writing within 30 days, the collector must stop all collection activities until they provide verification. This is your debt validation right and one of your most powerful tools for dealing with collectors of potentially inaccurate or time-barred debts.",
      },
      {
        heading: "Your Right to Stop Contact",
        body: "You have the right to send a written cease and desist letter to a debt collector demanding they stop contacting you. Once they receive this letter, they may only contact you to confirm they are ceasing contact or to notify you of a specific action such as filing a lawsuit. A cease and desist does not eliminate the debt, but it ends the harassment. If a collector violates the FDCPA, you can sue them in federal court for up to $1,000 in statutory damages per violation, plus actual damages and attorney\'s fees.",
      },
    ],
    cta: "If a collection is appearing on your credit report, ScoreVera can help you identify errors and build your dispute strategy. Upload your report today.",
  },
  {
    slug: "credit-report-timeline",
    title: "How Long Does Information Stay on Your Credit Report?",
    description:
      "From late payments to bankruptcies, different items have different credit report lifespans. Learn exactly how long each type of information can legally remain.",
    category: "FCRA & Your Rights",
    intro:
      "Not all credit report items age at the same rate. The FCRA sets specific maximum reporting periods for different types of information, and knowing these limits helps you plan your credit recovery timeline and identify items that should already be off your report.",
    sections: [
      {
        heading: "Late Payments (Up to 7 Years)",
        body: "A single late payment can remain on your credit report for up to seven years from the date it was reported as late. The impact of a late payment on your score diminishes over time — a late payment from five years ago hurts less than one from six months ago. If you bring the account current and maintain on-time payments afterward, the damage continues to fade. If a late payment is inaccurately reported — you paid on time and have records to prove it — it can be disputed at any time regardless of age.",
      },
      {
        heading: "Collections (Up to 7 Years)",
        body: "Collection accounts remain on your report for seven years from the date of first delinquency with the original creditor — not from the date the account was sent to collections or sold to a collector. This date is critical. If a creditor or collector reports a more recent date of first delinquency to keep the account on your report longer, that is called re-aging and it is an FCRA violation. Paid and unpaid collections are both subject to the same seven-year window, though some scoring models now ignore paid collections.",
      },
      {
        heading: "Bankruptcy (7-10 Years)",
        body: "Chapter 7 bankruptcy appears on your report for 10 years from the filing date. Chapter 13, because it involves a structured repayment plan, typically falls off after seven years. Individual accounts included in the bankruptcy will have their own notation but are still subject to the seven-year reporting limit for the underlying delinquency. After bankruptcy, you should monitor your reports closely to ensure accounts included in the discharge are properly updated and not still showing as open or delinquent.",
      },
      {
        heading: "Hard Inquiries, Positive Accounts, and Other Items",
        body: "Hard inquiries remain for two years but typically only affect your score for 12 months. Positive accounts — those with a good payment history — can remain on your report indefinitely and continue to benefit your score even after the account is closed. Closed accounts with negative history follow the seven-year rule. Tax liens were previously reportable but the bureaus removed most tax lien and civil judgment data from consumer reports in 2017-2018 following a data quality initiative.",
      },
    ],
    cta: "ScoreVera helps you spot items that have outlived their legal reporting period. Upload your report to identify what should already be gone.",
  },
  {
    slug: "inaccurate-information",
    title: "Types of Inaccurate Credit Report Information and How to Fix Them",
    description:
      "Credit report errors are more common than most people realize. Learn the most common types of inaccuracies and how each one can be disputed and corrected.",
    category: "FCRA & Your Rights",
    intro:
      "Studies have found that a significant percentage of credit reports contain at least one error. These errors range from minor personal information mistakes to major inaccuracies that can dramatically affect your credit score. Knowing the most common types of errors helps you review your own reports more effectively.",
    sections: [
      {
        heading: "Personal Information Errors",
        body: "These include misspelled names, wrong addresses, incorrect Social Security numbers, or wrong dates of birth. While personal information errors generally do not directly affect your credit score, they can indicate a mixed file — meaning someone else\'s credit information has been merged with yours — which can be very damaging. Verify that your personal information is accurate on all three reports and dispute any discrepancies, noting that incorrect personal information may indicate a data matching error.",
      },
      {
        heading: "Account Status Errors",
        body: "These are among the most damaging and common errors: an account shown as open when it was closed, a balance shown as unpaid when it was settled, a payment marked late when it was made on time, or a charge-off listed at a higher amount than the actual payoff balance. If you have records of the correct account status — statements, payoff letters, cancellation confirmations — these are strong grounds for a dispute with both the bureau and the furnisher.",
      },
      {
        heading: "Re-Aged Debt",
        body: "Re-aging occurs when a creditor or collector updates the date of first delinquency to a more recent date, effectively extending the period the item stays on your report. This is an FCRA violation. If you have an account that you believe should have been removed based on the original delinquency date but still appears, check whether the date of first delinquency shown on your report is accurate. You can request this date specifically and compare it to your original account records.",
      },
      {
        heading: "Duplicate Accounts and Unauthorized Items",
        body: "The same debt can sometimes appear twice — once from the original creditor and once from a collection agency that purchased it. While it is technically permissible for both to appear, they must both reflect the same underlying debt accurately. If the original account shows a balance and the collection also shows a balance, the balances may be inflated. Unauthorized accounts — those you never opened — may indicate identity theft or a mixed file and should be disputed immediately while also placing a fraud alert on your file.",
      },
    ],
    cta: "ScoreVera helps you categorize and dispute every type of credit report error systematically. Upload your report and see what needs to be challenged.",
  },
  {
    slug: "30-day-rule",
    title: "The 30-Day Dispute Rule: FCRA Deadlines Explained",
    description:
      "The FCRA requires credit bureaus to investigate your dispute within 30 days. Learn exactly how this rule works, when it extends to 45 days, and your rights if it is violated.",
    category: "FCRA & Your Rights",
    intro:
      "The 30-day investigation window is one of the most important consumer protections in the FCRA. It ensures that credit bureaus cannot sit on your dispute indefinitely and requires them to act promptly. Understanding how this deadline works — when it starts, when it can be extended, and what happens if it is missed — gives you real leverage in the dispute process.",
    sections: [
      {
        heading: "When the 30-Day Clock Starts",
        body: "The 30-day investigation window begins on the date the credit bureau receives your dispute, not the date you mailed it. This is why sending your dispute by certified mail with return receipt is so important — the delivery confirmation establishes exactly when the bureau received your letter, which is the start date for the clock. When you dispute online, the clock starts at the time of submission. Keep records of the receipt date so you know exactly when the deadline falls.",
      },
      {
        heading: "When the Window Extends to 45 Days",
        body: "If you provide additional relevant information to support your dispute after the initial filing, the investigation window may be extended from 30 to 45 days. This is the only circumstance under which the deadline legitimately extends. The bureau must notify you that it is taking the full 45 days and the reason for the extension. This extension provision should not discourage you from submitting additional documentation — the stronger your evidence, the more likely you are to succeed, even if it means the investigation takes a few extra days.",
      },
      {
        heading: "What Happens If the Bureau Misses the Deadline",
        body: "If the credit bureau fails to complete the investigation within the required 30 or 45-day period, the disputed item must be deleted from your report. This is an automatic remedy — the bureau does not get to continue the investigation indefinitely. If you discover that a bureau has exceeded the deadline without completing the investigation or deleting the item, this is a potential FCRA violation. Document the timeline carefully and consider filing a complaint with the CFPB or consulting a consumer law attorney.",
      },
      {
        heading: "Reinsertion Rules After Deletion",
        body: "If an item is deleted — whether because the furnisher could not verify it or because the investigation window expired — it cannot simply be reinserted on your report without proper process. Before reinserting a deleted item, the bureau must receive certification from the furnisher that the information is complete and accurate. The bureau must also notify you in writing within five business days of the reinsertion. If a deleted item reappears on your report without this notification, that reinsertion may be an FCRA violation.",
      },
    ],
    cta: "ScoreVera helps you track your dispute deadlines and respond quickly when bureaus are late. Upload your report and start your dispute today.",
  },
  {
    slug: "dispute-window",
    title: "Is There a Time Limit for Disputing Credit Report Errors?",
    description:
      "There is no statute of limitations on disputing credit report errors under the FCRA. Learn when you can dispute, how long items can remain, and what affects timing.",
    category: "FCRA & Your Rights",
    intro:
      "Many consumers wonder whether there is a deadline for disputing a credit report error. The answer, under federal law, is no — you can dispute inaccurate information on your credit report at any time while it still appears on your report. However, timing still matters strategically, and certain types of disputes benefit from acting quickly.",
    sections: [
      {
        heading: "No Time Limit on FCRA Disputes",
        body: "The FCRA does not impose a statute of limitations on your right to dispute inaccurate, incomplete, or unverifiable information in your credit file. As long as the item is appearing on your report, you have the right to challenge it. This means you can dispute a collection that appeared five years ago just as effectively as one that appeared last month — provided it is still within the seven-year reporting window. The only relevant question for whether to dispute is whether the item currently appears on your report and whether there is a basis to challenge it.",
      },
      {
        heading: "The FCRA\'s Statute of Limitations for Lawsuits",
        body: "While there is no time limit on filing a dispute, there is a statute of limitations for suing a credit bureau or furnisher for FCRA violations. You must file a lawsuit within two years from the date you discovered the violation, or five years from the date the violation occurred, whichever is earlier. This means if you find out today that a bureau failed to properly investigate a dispute two years ago, you may already be outside the window to sue. This is one reason to document your disputes carefully and follow up promptly on violations.",
      },
      {
        heading: "Why Acting Quickly Still Matters",
        body: "Even though you can dispute at any time, acting quickly has practical benefits. Fresher errors are easier to prove — account statements, correspondence, and payment records are more readily available. Furnishers are more likely to have accessible records for more recent accounts. And removing a negative item earlier means it hurts your score for less time. If you find an error, do not wait — file the dispute promptly and preserve your supporting documentation before it becomes harder to locate.",
      },
      {
        heading: "Items Approaching the Seven-Year Expiration",
        body: "If a negative item is approaching the end of its seven-year reporting window, you have a choice: dispute it now or wait for it to age off naturally. Disputing may or may not succeed, and even a failed dispute does not reset the seven-year clock. However, if the item contains inaccuracies that are affecting your ability to obtain credit right now, disputing it regardless of how close it is to expiration makes sense. Every month it remains on your report — even the last month of the seven years — it can affect your score.",
      },
    ],
    cta: "There is no wrong time to dispute an error. ScoreVera helps you build your case quickly and accurately. Upload your report and get started today.",
  },
  {
    slug: "bankruptcy-credit-report",
    title: "How Bankruptcy Appears on Your Credit Report and What to Do",
    description:
      "Bankruptcy stays on your credit report for 7 to 10 years, but the details matter. Learn how each chapter is reported and how to dispute related errors.",
    category: "FCRA & Your Rights",
    intro:
      "Filing for bankruptcy is one of the most significant financial events that can appear on a credit report, but how it is reported and for how long depends on the type of bankruptcy filed. Understanding how bankruptcy should appear on your report, how long it can legally remain, and what errors are common helps you take control of your credit recovery after bankruptcy.",
    sections: [
      {
        heading: "How Chapter 7 Bankruptcy Is Reported",
        body: "A Chapter 7 bankruptcy involves the liquidation of non-exempt assets to pay creditors, with most remaining debts discharged. It can remain on your credit report for up to 10 years from the date of filing. Individual accounts discharged in the bankruptcy should reflect a zero balance and show \"discharged in bankruptcy\" as their status. They should not continue to show as open accounts with unpaid balances after the discharge is granted. If they do, that is an error you can dispute.",
      },
      {
        heading: "How Chapter 13 Bankruptcy Is Reported",
        body: "Chapter 13 involves a court-approved repayment plan lasting three to five years, after which remaining eligible debts are discharged. A Chapter 13 filing typically falls off your credit report seven years from the filing date, not from the discharge date. This is more favorable than Chapter 7 because the seven-year clock starts at filing. As with Chapter 7, accounts included in the plan should be updated to reflect their status accurately, and any accounts still showing incorrect balances or statuses after the bankruptcy is completed should be disputed.",
      },
      {
        heading: "Common Bankruptcy-Related Reporting Errors",
        body: "Several types of errors are common after bankruptcy. Accounts included in the bankruptcy may continue to show as open, delinquent, or with non-zero balances rather than as discharged. The same bankruptcy may be listed twice under slightly different case numbers or filing dates. The filing date or type of bankruptcy may be reported incorrectly, which affects how long the item remains on your report. Or an account may not be listed as included in the bankruptcy at all, which means it still appears as an active delinquency when it should not.",
      },
      {
        heading: "Rebuilding Credit After Bankruptcy",
        body: "Once your bankruptcy is finalized, rebuilding credit is possible — it just requires patience and strategy. Start with a secured credit card, use it lightly, and pay it in full every month. Consider a credit-builder loan from a credit union. Authorized user accounts can also help. Monitor your credit reports regularly to ensure post-bankruptcy accounts are being reported correctly and that no discharged accounts reappear as active. Consistent on-time payment history is the single most effective rebuilding strategy.",
      },
    ],
    cta: "ScoreVera can help you identify bankruptcy-related reporting errors and draft the dispute letters to correct them. Upload your report today.",
  },
  {
    slug: "bureau-contact-info",
    title: "How to Contact Equifax, Experian, and TransUnion for Disputes",
    description:
      "Get the official dispute mailing addresses, online portals, and phone numbers for all three major credit bureaus so you can file disputes the right way.",
    category: "FCRA & Your Rights",
    intro:
      "Knowing how to reach each of the three major credit bureaus — and which contact method is appropriate for your situation — is a practical necessity when disputing credit report errors. Each bureau has specific addresses for dispute mail, online portals, and phone lines, and using the right channel can affect how your dispute is processed.",
    sections: [
      {
        heading: "Equifax Contact Information",
        body: "To dispute by mail, send your letter to: Equifax Information Services LLC, P.O. Box 740256, Atlanta, GA 30374. Use certified mail with return receipt. To dispute online, visit equifax.com and navigate to their dispute center — you will need to create or log into an account. For phone disputes, call 1-866-349-5191. Equifax also has a separate address for general credit report requests: P.O. Box 105139, Atlanta, GA 30348. Always use the dispute-specific address when filing a dispute.",
      },
      {
        heading: "Experian Contact Information",
        body: "To dispute by mail, send your letter to: Experian, P.O. Box 4500, Allen, TX 75013. Use certified mail with return receipt. To dispute online, visit experian.com/disputes. For phone support, call 1-888-397-3742. Experian\'s online dispute portal is relatively comprehensive, but for disputes involving significant errors or potential legal issues, written mail creates a more defensible paper trail. When writing, include your full name, address, date of birth, Social Security number, and a copy of a government ID.",
      },
      {
        heading: "TransUnion Contact Information",
        body: "To dispute by mail, send your letter to: TransUnion LLC, Consumer Dispute Center, P.O. Box 2000, Chester, PA 19016. Use certified mail with return receipt. To dispute online, visit transunion.com/credit-disputes. For phone support, call 1-800-916-8800. TransUnion\'s online portal allows you to upload supporting documents, which can be useful for complex disputes. As with the other bureaus, written mail is recommended for disputes where you may need to prove exactly what was submitted and when.",
      },
      {
        heading: "Tips for All Bureau Communications",
        body: "Regardless of which bureau you are contacting, include a copy of your government-issued ID and a utility bill or other proof of address with all written correspondence — bureaus sometimes require this to verify your identity before processing disputes. Never send original documents; always send copies. Keep a complete copy of everything you mail. Use certified mail with return receipt so you have proof of delivery for each bureau. If you are disputing the same item with multiple bureaus, send separate, individualized letters rather than one generic letter to all three.",
      },
    ],
    cta: "ScoreVera helps you organize disputes to all three bureaus simultaneously. Upload your report and generate your dispute letters with the right addresses pre-filled.",
  },
  {
    slug: "regulatory-complaints",
    title: "How to File Regulatory Complaints About Credit Reporting Violations",
    description:
      "If a credit bureau or furnisher violates your FCRA rights, you can file complaints with the CFPB, FTC, and state regulators. Here is how.",
    category: "FCRA & Your Rights",
    intro:
      "When a credit bureau or data furnisher fails to fulfill their legal obligations under the FCRA, you have recourse beyond simply re-disputing the item. Filing regulatory complaints with federal and state agencies creates an official record, prompts the company to respond, and contributes to regulatory oversight that can lead to enforcement action against repeat violators.",
    sections: [
      {
        heading: "Filing a Complaint With the CFPB",
        body: "The Consumer Financial Protection Bureau is the primary enforcer of the FCRA. To file a complaint, go to consumerfinance.gov/complaint and select \"Credit reporting, credit repair services, or other personal consumer reports\" as the product type. Describe the violation clearly: what the company did wrong, what FCRA provision applies, what you have done to resolve it already, and what you want to happen. You can upload supporting documents. The company is expected to respond within 15 days. CFPB complaints are tracked and can lead to formal regulatory investigations for companies with many similar complaints.",
      },
      {
        heading: "Filing a Complaint With the FTC",
        body: "The Federal Trade Commission also accepts FCRA complaints through ReportFraud.ftc.gov. While the FTC historically handles more general fraud reporting, its complaint database is used by law enforcement to identify patterns of illegal activity. If your complaint involves identity theft, the FTC\'s IdentityTheft.gov is a dedicated resource for creating a personal recovery plan, generating an official FTC identity theft report, and accessing customized dispute letters. An FTC identity theft report entitles you to special protections under the FCRA, including the right to block fraudulent information.",
      },
      {
        heading: "Filing Complaints With State Agencies",
        body: "Your state attorney general\'s office has the authority to bring actions under the FCRA and may have additional state consumer protection laws that apply. Many states have enacted laws mirroring or extending federal FCRA protections, particularly around security freezes, identity theft protections, and debt collection. Contact your state attorney general\'s consumer protection division and your state\'s department of financial institutions or banking regulator, depending on whether the violator is a credit bureau, a bank, or a collection agency.",
      },
      {
        heading: "Private Lawsuits Under the FCRA",
        body: "Beyond regulatory complaints, the FCRA gives consumers the right to sue credit bureaus and furnishers directly in federal or state court. For negligent violations, you can recover actual damages and attorney\'s fees. For willful violations — where the bureau or furnisher knowingly violated the law — you can also seek punitive damages of up to $1,000 per violation. Many consumer protection attorneys take FCRA cases on a contingency basis, so there is often no upfront cost to you. If you have strong documentation of a repeated, clear violation, a consultation with an attorney is worth considering.",
      },
    ],
    cta: "ScoreVera helps you build the dispute record you need before filing a regulatory complaint or consulting an attorney. Upload your report today.",
  },

  // ─────────────────────────────────────────────
  // CREDIT SCORE HELP (12)
  // ─────────────────────────────────────────────
  {
    slug: "credit-score-calculation",
    title: "How Is Your Credit Score Calculated?",
    description:
      "Your credit score is calculated from five main factors. Learn how each one is weighted and what you can do to improve your score in each category.",
    category: "Credit Score Help",
    intro:
      "Your credit score is a three-digit number that lenders use to evaluate how likely you are to repay borrowed money. Understanding how that number is calculated — what factors are included, how they are weighted, and what behaviors help or hurt — is the foundation of any credit improvement strategy.",
    sections: [
      {
        heading: "Payment History (35%)",
        body: "Payment history is the single largest factor in your credit score, accounting for approximately 35% of your FICO score. This reflects whether you have paid your bills on time. Late payments, collections, charge-offs, and bankruptcies all negatively impact this category. A single missed payment can significantly lower your score, especially if your history is otherwise clean. The key to a strong payment history is simple: pay at least the minimum balance on every account by the due date every month. Setting up automatic minimum payments eliminates the risk of accidental missed payments.",
      },
      {
        heading: "Credit Utilization (30%)",
        body: "Credit utilization — the ratio of your current credit card balances to your total credit limits — makes up about 30% of your score. Most scoring experts recommend keeping your utilization below 30% on any individual card and across all cards combined. The lower, the better: people with the highest credit scores typically have utilization well below 10%. High utilization signals potential financial stress and increases perceived risk. You can improve this factor by paying down balances, requesting credit limit increases, or spreading charges across multiple cards.",
      },
      {
        heading: "Length of Credit History (15%)",
        body: "The length of your credit history accounts for about 15% of your score. This includes the age of your oldest account, the age of your newest account, and the average age of all your accounts. Longer history generally means a better score in this category. This is one reason closing old credit cards — even ones you no longer use — can temporarily hurt your score: removing the old account reduces the average age of your accounts. Keeping old accounts open and occasionally using them for small purchases is a simple way to preserve your credit history length.",
      },
      {
        heading: "Credit Mix and New Credit (10% Each)",
        body: "Credit mix (10%) refers to the variety of credit types in your file: revolving accounts like credit cards, installment loans like mortgages and auto loans, and other account types. Having a mix generally signals that you can manage different types of credit responsibly. New credit (10%) reflects recently opened accounts and recent hard inquiries. Opening several new accounts in a short period can lower your score temporarily because it suggests increased risk. Space out new credit applications when possible and only apply for credit you genuinely need.",
      },
    ],
    cta: "Before you focus on building credit, make sure your report is accurate. ScoreVera helps you dispute errors that may be holding your score back. Upload your report today.",
  },
  {
    slug: "good-credit-score",
    title: "What Is a Good Credit Score and Why Does It Matter?",
    description:
      "Credit score ranges differ by model, but generally a score above 700 is considered good. Learn what different score ranges mean and how your score affects your life.",
    category: "Credit Score Help",
    intro:
      "Your credit score is one of the most consequential numbers in your financial life. It affects your ability to borrow money, the interest rates you pay, your ability to rent an apartment, and sometimes even your eligibility for certain jobs. Understanding what score ranges mean and what is considered good helps you set realistic credit goals.",
    sections: [
      {
        heading: "FICO Score Ranges",
        body: "The most widely used credit scoring model is the FICO score, which ranges from 300 to 850. Scores below 580 are generally considered poor and will make it difficult to qualify for most conventional loans. Scores between 580 and 669 are considered fair. Scores between 670 and 739 are considered good — this is where the majority of American consumers fall. Scores between 740 and 799 are considered very good, and scores of 800 and above are considered exceptional, often qualifying for the best interest rates and terms available.",
      },
      {
        heading: "VantageScore vs. FICO",
        body: "FICO is not the only scoring model. VantageScore, developed jointly by the three major bureaus, uses the same 300-850 range but weights factors differently and uses different terminology for score ranges. Some lenders use VantageScore, especially in non-traditional lending situations. Many free credit score services provide a VantageScore rather than a FICO score. While the two scores will generally be in the same ballpark, they may differ by 20 to 50 points or more in some cases. Ask lenders which model they use when assessing your creditworthiness.",
      },
      {
        heading: "How Your Score Affects Borrowing Costs",
        body: "Even a modest difference in credit score can translate to thousands of dollars in extra interest over the life of a loan. On a 30-year mortgage, the difference in interest rate between a 620 and a 760 score can be 1.5 percentage points or more — on a $250,000 loan, that is over $80,000 in additional interest paid over the life of the loan. Higher scores also make it easier to qualify for credit cards with rewards and no annual fees, auto loans at low rates, and personal loans with favorable terms.",
      },
      {
        heading: "Non-Lending Uses of Credit Scores",
        body: "Your credit history and score affect more than just loans. Landlords routinely pull credit reports as part of rental applications — a poor score can result in a rental denial or require a larger security deposit. Insurers in most states use credit-based insurance scores to help determine auto and homeowner insurance premiums. Some employers, particularly for positions involving financial responsibility, pull credit reports as part of background checks (though they must get your written permission first and cannot access your actual score). Maintaining good credit protects you in all of these areas.",
      },
    ],
    cta: "If errors on your report are dragging down your score, ScoreVera can help you dispute them. Upload your credit report and find out what can be improved.",
  },
  {
    slug: "score-dropped",
    title: "Why Did My Credit Score Drop? Common Causes Explained",
    description:
      "A sudden credit score drop can have many causes. Learn the most common reasons scores fall and what steps to take to identify and address the cause.",
    category: "Credit Score Help",
    intro:
      "A sudden drop in your credit score can be alarming, especially if you feel you have not done anything wrong. Many score drops have clear, identifiable causes, and most of them are fixable. Understanding what typically drives score declines helps you diagnose your situation and take the right corrective action.",
    sections: [
      {
        heading: "A Late or Missed Payment Was Reported",
        body: "Payment history accounts for 35% of your FICO score, making a missed or late payment one of the most common causes of a sudden score drop. Even a single payment that is 30 days late can cause a significant decline — the impact is proportionally larger the higher your score was beforehand, and the smaller number of negative items you had before. If a late payment was reported in error — if you did pay on time but the creditor made a reporting mistake — you can dispute it. If it was genuinely late, focus on bringing the account current and maintaining on-time payments going forward.",
      },
      {
        heading: "Your Credit Utilization Increased",
        body: "If you charged a significant amount to a credit card and the high balance was reported before you paid it down, your utilization ratio may have spiked, causing a score drop. This is often a temporary issue — once you pay the balance down, your score should recover relatively quickly since utilization is a \"current snapshot\" factor rather than a history-based one. If you expect to have temporarily high utilization due to a large purchase, consider paying it down before the statement closing date, since that is typically when balances are reported to the bureaus.",
      },
      {
        heading: "A New Account or Hard Inquiry Was Added",
        body: "Each new hard inquiry can lower your score by a few points, and opening a new credit account also lowers the average age of your accounts. Both effects are usually temporary and minor. However, if you applied for several credit products in a short period — multiple credit cards, an auto loan, and a personal loan, for example — the cumulative impact can be more noticeable. Rate shopping for mortgages and auto loans within a short window (typically 14-45 days) is treated as a single inquiry by most scoring models, so that activity has less impact than applying for several different types of credit.",
      },
      {
        heading: "A Negative Item Was Added or an Old One Reappeared",
        body: "If a new collection, judgment, or charge-off was added to your report, that would cause a significant score drop. It is also possible for a previously deleted item to be reinserted if the furnisher provides re-verification to the bureau — though the bureau is required to notify you within five business days if this occurs. Check your full credit reports when your score drops unexpectedly. If a new negative item appeared that you believe is inaccurate, dispute it immediately. If a deleted item was reinserted without notification, that is an FCRA violation.",
      },
    ],
    cta: "If an inaccurate item caused your score to drop, ScoreVera can help you dispute it quickly. Upload your report and take action today.",
  },
  {
    slug: "build-credit",
    title: "How to Build Credit From Scratch",
    description:
      "Starting with no credit history can be frustrating, but there are proven strategies to build a strong credit profile from the ground up. Here is how.",
    category: "Credit Score Help",
    intro:
      "Having no credit history is sometimes called being \"credit invisible\" — lenders cannot assess your risk because there is no borrowing track record to evaluate. Building credit from scratch takes time and a deliberate strategy, but with the right tools and habits, you can establish a solid credit profile within 6 to 12 months.",
    sections: [
      {
        heading: "Start With a Secured Credit Card",
        body: "A secured credit card is the most accessible tool for building credit from zero. You deposit a sum of money — typically $200 to $500 — as collateral, which becomes your credit limit. Use the card for small, regular purchases like groceries or gas, and pay the full balance every month. This creates a payment history and keeps your utilization low. After 12 to 18 months of responsible use, many secured card issuers will upgrade you to a standard unsecured card and return your deposit.",
      },
      {
        heading: "Consider a Credit-Builder Loan",
        body: "Credit-builder loans, offered by many credit unions and community banks, are designed specifically to help people establish credit. Unlike a traditional loan, the money you \"borrow\" is held in a savings account while you make monthly payments. After you complete the payment term, you receive the funds. The on-time payment history is reported to the bureaus, building your credit profile. Because you never actually receive a lump sum, the risk to the lender is minimal, making these loans accessible even with no credit history.",
      },
      {
        heading: "Become an Authorized User",
        body: "If you have a family member or trusted friend with a long, clean credit history, ask them to add you as an authorized user on one of their credit card accounts. You do not need to actually use the card or even hold a physical card — simply being added as an authorized user causes the account\'s history to appear on your credit report. This can dramatically accelerate your credit building by giving you access to years of positive payment history immediately. The primary cardholder\'s behavior affects your score, so choose someone with reliable payment habits.",
      },
      {
        heading: "Maintain Good Habits From the Start",
        body: "Once you have one or two credit accounts, the habits you form immediately will shape your credit profile for years. Pay on time, every time — set up automatic minimum payments as a safety net. Keep balances well below your credit limit. Avoid opening too many new accounts quickly. Check your credit reports regularly to confirm the accounts are being reported correctly and that no errors have appeared. Building credit is a slow process measured in months and years, but establishing good patterns from the beginning makes the journey much smoother.",
      },
    ],
    cta: "Make sure your report starts clean. ScoreVera helps you catch any errors that might be holding back your credit building progress. Upload your report today.",
  },
  {
    slug: "credit-utilization",
    title: "Credit Utilization: How It Affects Your Score and How to Lower It",
    description:
      "Credit utilization is the second biggest factor in your credit score. Learn what it is, what ratio to aim for, and practical ways to lower your utilization.",
    category: "Credit Score Help",
    intro:
      "Credit utilization — the percentage of your available revolving credit that you are currently using — accounts for approximately 30% of your FICO score, making it the second most important factor after payment history. Because utilization is a real-time snapshot of your current balances, it is one of the fastest factors to improve.",
    sections: [
      {
        heading: "How Utilization Is Calculated",
        body: "Your utilization rate is calculated both per card and in aggregate across all revolving accounts. For example, if you have one card with a $5,000 limit and a $2,500 balance, your utilization on that card is 50%. If you have two cards with combined limits of $10,000 and combined balances of $3,000, your aggregate utilization is 30%. Most scoring experts recommend keeping both individual card utilization and overall utilization below 30%, with optimal scores typically associated with utilization below 10%. Installment loans like mortgages and auto loans are not included in this calculation.",
      },
      {
        heading: "Why High Utilization Hurts Your Score",
        body: "High utilization suggests to lenders that you may be relying heavily on credit, which can indicate financial stress or the possibility of overextension. Even if you pay your balance in full each month, your score reflects the balance at the time it is reported to the bureaus — which is typically your statement closing date. If you regularly charge a significant amount and pay it off in full, your score may still show the high balance if it is reported before you make the payment.",
      },
      {
        heading: "Strategies to Lower Your Utilization",
        body: "The most straightforward way to lower utilization is to pay down your credit card balances. If you cannot pay them down quickly, consider requesting a credit limit increase on your existing cards — higher limits with the same balance means lower utilization. You can also time your payments: pay down your balance before the statement closing date so a lower balance is reported to the bureaus. If you make large purchases that you pay off monthly, consider paying them off before the statement closes rather than after the due date.",
      },
      {
        heading: "Utilization and the Long Game",
        body: "Because utilization is based on your current balances, it responds quickly to changes. If you pay down $2,000 in credit card debt, your utilization improves and your score can increase within one to two billing cycles. However, the improvement is only maintained if you keep the balances low. Many consumers pay down cards and then charge them up again, resulting in a score that fluctuates rather than improves. Building a habit of keeping utilization consistently low — rather than just before applying for credit — produces more lasting score improvement.",
      },
    ],
    cta: "Inaccurate credit limits or balances on your report can inflate your utilization artificially. ScoreVera helps you spot and dispute these errors. Upload your report today.",
  },
  {
    slug: "payment-history",
    title: "Payment History: The #1 Factor in Your Credit Score",
    description:
      "Payment history accounts for 35% of your FICO score. Learn how it is tracked, what hurts it most, and the best ways to recover from late payment history.",
    category: "Credit Score Help",
    intro:
      "Payment history is the single most important factor in your credit score, making up approximately 35% of your FICO score. Every on-time payment you make works in your favor; every missed or late payment works against you. Understanding exactly how payment history is tracked and weighted helps you prioritize your financial behavior effectively.",
    sections: [
      {
        heading: "How Payment History Is Tracked",
        body: "Most creditors report your payment status to the credit bureaus once per month. Your account will show as either current, 30 days late, 60 days late, 90 days late, 120 days late, or in a charge-off or collection status. The longer you go without paying, the more severe the impact. A 90-day late payment hurts significantly more than a 30-day late payment. Each stage of delinquency is reported separately, which is why one period of financial difficulty can generate multiple negative marks.",
      },
      {
        heading: "The Severity and Recency of Late Payments",
        body: "Not all late payments are equal in their impact on your score. The most important factors are: how late the payment was (30, 60, or 90+ days), how recently it occurred, and how frequently late payments appear in your history. A single 30-day late payment from four years ago on an otherwise perfect record has a relatively minor impact. A 90-day late payment from six months ago has a much larger one. As time passes and you build positive payment history, the impact of older late payments diminishes.",
      },
      {
        heading: "Recovering From Late Payment History",
        body: "The most effective way to recover from late payment history is consistent, uninterrupted on-time payments going forward. You cannot undo the past, but you can build a positive track record that increasingly outweighs the negative. If a late payment was reported in error — your records show you paid on time — you can dispute it with the bureau and the furnisher. If the late payment was accurate, consider a goodwill letter to the creditor if it was an isolated incident and you have otherwise been a reliable customer.",
      },
      {
        heading: "Preventing Future Late Payments",
        body: "Set up automatic minimum payments on every credit account to eliminate the risk of accidentally missing a payment. Even if you intend to pay more than the minimum, automating the minimum ensures the account never goes delinquent. Calendar reminders for due dates provide an additional layer of protection. If you are struggling financially and cannot make a payment, contact the creditor proactively before the due date — many creditors have hardship programs that can temporarily reduce or defer payments without reporting a late payment to the bureaus.",
      },
    ],
    cta: "If you see late payments on your report that are inaccurate, ScoreVera can help you dispute them. Upload your report and protect your most important credit factor.",
  },
  {
    slug: "hard-vs-soft-inquiries",
    title: "Hard vs. Soft Credit Inquiries: What Is the Difference?",
    description:
      "Hard and soft inquiries affect your credit report differently. Learn which inquiries hurt your score, which do not, and how to dispute unauthorized hard pulls.",
    category: "Credit Score Help",
    intro:
      "When someone accesses your credit report, it is recorded as an inquiry. But not all inquiries are created equal. Hard inquiries — those made when you apply for credit — can affect your score and remain on your report for two years. Soft inquiries — such as when you check your own credit — do not affect your score at all. Understanding the difference matters for managing your credit strategically.",
    sections: [
      {
        heading: "What Is a Hard Inquiry?",
        body: "A hard inquiry occurs when a lender or creditor reviews your full credit report in connection with a credit application you have made. Examples include applying for a credit card, mortgage, auto loan, personal loan, student loan, or apartment rental. Hard inquiries require your authorization — generally through the act of applying for credit. Each hard inquiry can lower your score by a few points, typically five points or less, and the effect diminishes over time. Hard inquiries remain visible on your report for two years but most scoring models only factor them in for 12 months.",
      },
      {
        heading: "What Is a Soft Inquiry?",
        body: "A soft inquiry does not affect your credit score and is only visible to you on your credit report — not to lenders. Soft inquiries include checking your own credit score or report, pre-approval checks by credit card companies, background checks by employers (which use a different type of report), and account reviews by your existing creditors. You do not need to authorize soft inquiries and they have no impact on how lenders view your creditworthiness. Free credit monitoring services and score tools always use soft pulls.",
      },
      {
        heading: "Rate Shopping: When Multiple Inquiries Count as One",
        body: "If you are shopping for a mortgage, auto loan, or student loan, multiple hard inquiries within a short period are typically treated as a single inquiry by major scoring models. FICO models allow a window of 14 to 45 days (depending on the version of the model) during which all mortgage, auto, and student loan inquiries are counted as one. This encourages consumers to shop for the best rates without being penalized. This exception does not apply to credit card applications — each credit card application generates its own separate hard inquiry.",
      },
      {
        heading: "How to Handle Unauthorized Hard Inquiries",
        body: "If you see a hard inquiry on your report that you did not authorize — meaning you never applied for credit with that company — you have the right to dispute it as an FCRA violation. Write a dispute letter to the bureau, identify the specific inquiry by company name and date, and state that you did not authorize it. Contact the company directly as well and request that they confirm their permissible purpose for pulling your credit and contact the bureau to retract the inquiry if they cannot justify it. Multiple unauthorized inquiries combined with new accounts you did not open may indicate identity theft.",
      },
    ],
    cta: "ScoreVera helps you identify and dispute unauthorized hard inquiries quickly. Upload your credit report and review your inquiry history today.",
  },
  {
    slug: "secured-cards",
    title: "How Secured Credit Cards Help Build or Rebuild Credit",
    description:
      "Secured credit cards are one of the best tools for building or rebuilding credit. Learn how they work, what to look for, and how to use them effectively.",
    category: "Credit Score Help",
    intro:
      "A secured credit card is one of the most effective and accessible tools for building credit from scratch or rebuilding after financial setbacks. Unlike a prepaid debit card, a secured credit card reports to the credit bureaus just like a regular credit card, creating a payment history that forms the foundation of your credit score.",
    sections: [
      {
        heading: "How a Secured Credit Card Works",
        body: "With a secured credit card, you make a refundable security deposit — typically between $200 and $500 — that serves as your credit limit. The card issuer holds this deposit as collateral in case you do not pay your bill. You then use the card for purchases up to your credit limit and receive a monthly bill. If you pay on time, the issuer reports your positive payment history to the credit bureaus. Your deposit is returned when you close the account or upgrade to an unsecured card, provided your account is in good standing.",
      },
      {
        heading: "What to Look for in a Secured Card",
        body: "Not all secured cards are equal. Look for a card that reports to all three major credit bureaus — some only report to one or two, which limits the benefit. Look for low or no annual fees; some secured cards charge high fees that eat into the value of your deposit. Look for a card from an issuer that reviews your account for upgrade to an unsecured card after 12 to 18 months of responsible use, with return of your security deposit. Avoid cards with high application fees, monthly maintenance fees, or those that charge a fee for basic features like online account access.",
      },
      {
        heading: "How to Use Your Secured Card Strategically",
        body: "The key to making a secured card work for you is simple: use it lightly and pay it in full every month. Make one or two small purchases per month — a tank of gas or a streaming subscription — and set up autopay for the full statement balance. This demonstrates responsible usage, keeps your utilization low, and ensures you never pay interest charges. Never let the balance exceed 30% of the limit, and ideally keep it below 10%. Consistent, disciplined use over 12 to 18 months can lead to a meaningful score improvement.",
      },
      {
        heading: "Graduating to an Unsecured Card",
        body: "After approximately 12 to 18 months of responsible use, contact your card issuer and inquire about upgrading to an unsecured card. Many major issuers — including Discover, Capital One, and several credit unions — have secured card programs with clear upgrade paths. When you upgrade, your credit line is typically maintained or increased, your deposit is returned, and the account history continues without interruption. This continuity is important because closing the secured account and opening a new unsecured one would reset your account age and temporarily affect your score.",
      },
    ],
    cta: "Before applying for a secured card, make sure your report is clean. ScoreVera helps you dispute errors that could affect your ability to qualify. Upload your report today.",
  },
  {
    slug: "credit-mix",
    title: "Credit Mix: Why Having Different Types of Credit Helps Your Score",
    description:
      "Credit mix accounts for 10% of your FICO score. Learn what types of credit count, why diversity matters, and whether you need to take any action to improve this factor.",
    category: "Credit Score Help",
    intro:
      "Credit mix refers to the variety of credit account types in your file — revolving accounts like credit cards, installment loans like mortgages and auto loans, and other types like retail accounts. While it is a relatively small factor at 10% of your FICO score, understanding it helps you make smart decisions about the types of credit you apply for and manage.",
    sections: [
      {
        heading: "Types of Credit That Contribute to Mix",
        body: "The two main categories of credit are revolving and installment. Revolving credit — like credit cards and home equity lines of credit — has a variable balance and a set credit limit. Installment credit — like mortgages, auto loans, student loans, and personal loans — has a fixed payment amount over a set term. Having at least one of each type generally helps your credit mix score. Some models also consider open accounts like charge cards (which must be paid in full monthly) and retail or store cards as distinct categories.",
      },
      {
        heading: "Why Lenders Value Credit Mix",
        body: "Lenders use credit mix as one signal that you have experience managing different types of financial obligations. Someone who has successfully managed both a revolving line of credit and an installment loan has demonstrated adaptability and responsibility across different credit structures. This does not mean you need to take out loans you do not need — the benefit of a more diverse credit mix is real but modest. Only add new types of credit when it makes financial sense for reasons other than your credit score.",
      },
      {
        heading: "Should You Take Out a Loan to Improve Credit Mix?",
        body: "Adding a new type of account purely to improve your credit mix is generally not worth the cost unless the account provides other financial benefits. For example, if you are already considering an auto loan or a personal loan for a legitimate financial need, knowing that it will also benefit your credit mix is a bonus. However, taking out an unnecessary loan or opening a credit card you do not need — just to improve a factor that accounts for only 10% of your score — introduces new risk and expense without proportional reward.",
      },
      {
        heading: "Credit-Builder Loans as a Mix Strategy",
        body: "If you have only credit cards and no installment loan history, a credit-builder loan from a credit union is one low-risk way to add an installment account. These loans are specifically designed for credit building, typically have low interest rates, and the \"loan\" proceeds are held in a savings account until you complete the payment term. This adds an installment account to your mix, builds a payment history for that account type, and results in a small savings balance at the end — making it one of the more genuinely useful credit mix strategies.",
      },
    ],
    cta: "Before diversifying your credit, make sure the accounts already on your report are accurate. ScoreVera helps you dispute errors that may be affecting your score. Upload today.",
  },
  {
    slug: "bureau-score-differences",
    title: "Why Your Credit Score Is Different at Each Bureau",
    description:
      "Your Equifax, Experian, and TransUnion scores are often different. Learn why scores vary across bureaus and what to do when there is a large discrepancy.",
    category: "Credit Score Help",
    intro:
      "If you have ever checked your credit score and found three different numbers from three different bureaus, you are not alone. It is completely normal for your scores to vary between Equifax, Experian, and TransUnion, sometimes by 20 to 50 points or more. Understanding why these differences exist helps you interpret them correctly and identify when a discrepancy warrants investigation.",
    sections: [
      {
        heading: "Different Data in Each Bureau\'s File",
        body: "Not all creditors report to all three bureaus. Some creditors report to only one or two, which means each bureau\'s file on you may contain different accounts, different balances, or different delinquency histories. An account that appears on your Experian report may not exist in your TransUnion file at all. This means the raw underlying data that your score is calculated from can differ bureau to bureau, leading to different scores even if the same scoring model is applied.",
      },
      {
        heading: "Different Scoring Models",
        body: "In addition to different data, different scoring models can produce different numbers from the same data. FICO has many different versions of its scoring model — FICO 8, FICO 9, FICO 10, and industry-specific versions for mortgages and auto loans, among others. VantageScore also has multiple versions. The version of the model a lender uses, and the version used by free credit monitoring services, may both differ from the version the bureaus use internally. This means even if the underlying data were identical, you might still see different scores depending on the model version applied.",
      },
      {
        heading: "Timing Differences in Reporting",
        body: "Creditors report to bureaus on different schedules. A payment made this week may have been reflected in one bureau\'s data but not yet in another\'s if they are on different reporting cycles. A new collection or hard inquiry may appear at one bureau days or weeks before it appears at another. This means your scores at any given moment represent a snapshot in time, and because that snapshot was captured at slightly different moments for each bureau, the scores naturally differ.",
      },
      {
        heading: "When a Large Discrepancy Warrants Investigation",
        body: "A difference of 20 to 30 points between bureaus is common and typically benign. A difference of 50 points or more is worth investigating. Pull your reports from all three bureaus and compare them side by side. Look for accounts or negative items that appear on one bureau but not the others — these differences may explain the score gap. If you find a collection, charge-off, or late payment on one bureau that does not appear on the others and that you believe is inaccurate, dispute it with the bureau that is reporting it.",
      },
    ],
    cta: "ScoreVera helps you compare your reports across bureaus and identify discrepancies worth disputing. Upload your reports and see where the differences lie.",
  },
  {
    slug: "raise-credit-score-fast",
    title: "How to Raise Your Credit Score Fast: What Actually Works",
    description:
      "Some credit score improvements take months, but a few actions can raise your score relatively quickly. Learn what actually works and what timelines to expect.",
    category: "Credit Score Help",
    intro:
      "While building an excellent credit score is a long-term project, there are a few specific actions that can produce faster results than others. Understanding which factors respond quickly to changes — and which require months or years of patience — helps you prioritize the right actions when you need to improve your score before a major financial event.",
    sections: [
      {
        heading: "Pay Down Credit Card Balances (Fastest Impact)",
        body: "Because credit utilization is calculated from your current balances and limits, paying down revolving debt can raise your score within one to two billing cycles — the time it takes for the lower balance to be reported to the bureaus. This is one of the fastest levers available. If you have multiple cards with balances, prioritize paying down the one with the highest utilization rate first, then work through the others. Even a partial paydown can produce a meaningful score bump if it brings your utilization below a key threshold like 30% or 10%.",
      },
      {
        heading: "Dispute Errors on Your Report",
        body: "If your report contains errors — accounts that are not yours, late payments that were actually on time, balances that are higher than your actual debt — disputing and removing them can produce a score improvement relatively quickly once the correction is processed. The dispute and investigation process typically takes 30 to 45 days, after which corrected information is reported and your score adjusts. The size of the improvement depends on how significant the error was. Removing a collection or correcting a missed payment that was actually on time can have a substantial impact.",
      },
      {
        heading: "Request a Credit Limit Increase",
        body: "If you are not able to pay down your balances quickly, increasing your credit limits on existing cards has the same mathematical effect on utilization — you are raising the denominator rather than lowering the numerator. Many issuers allow you to request a limit increase online without a hard inquiry, especially if you have been a customer for several years and have a good payment history with them. Check whether a soft or hard inquiry will be conducted before requesting; you want to avoid a hard pull if possible.",
      },
      {
        heading: "Actions That Take Longer",
        body: "Some improvements simply take time regardless of what you do. Adding positive payment history requires months of consistent on-time payments. Increasing your average account age requires keeping accounts open and not opening too many new ones. The impact of a hard inquiry fades over 12 months on its own. A bankruptcy or charge-off fades gradually over years. Focus the quick strategies on factors that respond to current behavior — utilization, errors, new accounts — and practice patience with the factors driven by history. A realistic timeline for meaningful score improvement is three to six months of consistent effort.",
      },
    ],
    cta: "Disputing errors is one of the fastest ways to raise your score. ScoreVera helps you identify and challenge them. Upload your report and start today.",
  },
  {
    slug: "what-lenders-check",
    title: "What Lenders Actually Check When You Apply for Credit",
    description:
      "Lenders look at more than just your credit score. Learn what factors, reports, and criteria lenders actually evaluate when you apply for a mortgage, auto loan, or credit card.",
    category: "Credit Score Help",
    intro:
      "Your credit score is important, but it is only one part of what lenders evaluate when you apply for credit. Understanding the full picture of what lenders see — and what factors they weigh most heavily for different types of loans — helps you present the strongest possible application and know what to work on before you apply.",
    sections: [
      {
        heading: "Credit Score and Credit Report",
        body: "Your credit score is typically the first filter lenders apply. Different lenders have different minimum score requirements: a conventional mortgage typically requires a score of at least 620, though the best rates go to applicants with scores of 740 or above. Credit card lenders may approve applicants with scores in the 580-620 range, though at higher interest rates. Beyond the score itself, lenders pull your full credit report to review your payment history, the types and ages of your accounts, current balances, and any negative items. They also check how many recent hard inquiries are on your report.",
      },
      {
        heading: "Debt-to-Income Ratio",
        body: "Debt-to-income ratio (DTI) is particularly important for mortgage and auto loan lenders. It is calculated by dividing your total monthly debt payments (minimum payments on all accounts plus the new loan payment) by your gross monthly income. For mortgages, most conventional lenders prefer a DTI of 43% or below, with the best rates going to applicants below 36%. A high credit score cannot compensate for a DTI that is too high — lenders need to see that you have enough income to cover the proposed monthly payment along with your existing obligations.",
      },
      {
        heading: "Employment and Income Verification",
        body: "Most lenders will ask for proof of income and employment, particularly for larger loans. This typically involves W-2s or tax returns for the past two years, recent pay stubs, and sometimes a verbal verification of employment directly with your employer. Self-employed borrowers usually need to provide two years of tax returns and sometimes a profit and loss statement. The consistency and stability of your income matters — a long history with the same employer is viewed more favorably than frequent job changes, even if the income is similar.",
      },
      {
        heading: "Assets and Reserves",
        body: "For mortgages in particular, lenders also evaluate the assets you have available. Down payment funds, savings, retirement accounts, and other assets demonstrate financial stability and reduce the lender\'s risk. For conventional mortgages, having at least two months of mortgage payments in reserve after closing is typically expected. Lenders will ask for bank statements to verify these funds and confirm they have been in your account for at least 60 days, ruling out large last-minute deposits that might represent borrowed down payment funds.",
      },
    ],
    cta: "Make sure your credit report accurately reflects your financial history before you apply. ScoreVera helps you identify and dispute errors that could affect lender decisions. Upload your report today.",
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
