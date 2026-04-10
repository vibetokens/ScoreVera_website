"""Backfill faq: frontmatter on all ScoreVera state guide blog posts.

Reads each credit-dispute-rights-<state>.mdx file, builds a unique 3-4 item FAQ
based on the state's SOL and state-specific statutes, and inserts the faq: block
before the closing --- of the frontmatter (after notionId).
"""

from __future__ import annotations
import os
import re
import sys
from pathlib import Path

DIR = Path(r"C:\Users\jason\scorevera-web\content\blog\state-guides")

# Credit card SOL in years per state (verified from each post's own table).
SOL = {
    "alabama": 6, "alaska": 3, "arizona": 6, "arkansas": 5, "california": 4,
    "colorado": 6, "connecticut": 6, "delaware": 3, "florida": 5, "georgia": 6,
    "hawaii": 6, "idaho": 5, "illinois": 5, "indiana": 6, "iowa": 5,
    "kansas": 5, "kentucky": 5, "louisiana": 3, "maine": 6, "maryland": 3,
    "massachusetts": 6, "michigan": 6, "minnesota": 6, "mississippi": 3,
    "missouri": 5, "montana": 5, "nebraska": 5, "nevada": 6, "new-hampshire": 3,
    "new-jersey": 6, "new-mexico": 6, "new-york": 3, "north-carolina": 3,
    "north-dakota": 6, "ohio": 6, "oklahoma": 5, "oregon": 6, "pennsylvania": 4,
    "rhode-island": 10, "south-carolina": 3, "south-dakota": 6, "tennessee": 6,
    "texas": 4, "utah": 6, "vermont": 6, "virginia": 5, "washington": 6,
    "west-virginia": 10, "wisconsin": 6, "wyoming": 8,
}

# Display name per slug.
NAME = {k: " ".join(w.capitalize() for w in k.split("-")) for k in SOL}
NAME["new-hampshire"] = "New Hampshire"
NAME["new-jersey"] = "New Jersey"
NAME["new-mexico"] = "New Mexico"
NAME["new-york"] = "New York"
NAME["north-carolina"] = "North Carolina"
NAME["north-dakota"] = "North Dakota"
NAME["rhode-island"] = "Rhode Island"
NAME["south-carolina"] = "South Carolina"
NAME["south-dakota"] = "South Dakota"
NAME["west-virginia"] = "West Virginia"

def yq(s: str) -> str:
    """Quote a YAML scalar value inside double quotes, escaping embedded quotes."""
    return '"' + s.replace('\\', '\\\\').replace('"', '\\"') + '"'

def item(q: str, a: str) -> str:
    return f"  - q: {yq(q)}\n    a: {yq(a)}"

# Per-state FAQ builders. Each returns a list of (q, a) tuples, 3-4 items.
# Grounded in each state's actual SOL and the specific statutes named in each post.

def faqs_for(state: str) -> list[tuple[str, str]]:
    n = NAME[state]
    sol = SOL[state]
    sol_word = {3: "three", 4: "four", 5: "five", 6: "six", 8: "eight", 10: "ten"}[sol]
    # Each state gets a distinct mix of questions. Rotate which statute and angle.

    if state == "alabama":
        return [
            (f"What's the statute of limitations on credit card debt in Alabama?",
             f"Alabama applies a uniform six-year statute of limitations to credit card debt and most other consumer accounts. The clock runs from the date of your last payment or the date the account went delinquent, and a new payment can restart it."),
            (f"Does Alabama have its own debt collection law like the federal FDCPA?",
             f"Alabama does not have a standalone state debt collection statute, but the Alabama Deceptive Trade Practices Act (ADTPA) covers unfair or deceptive conduct by collectors and gives consumers a private right of action."),
            (f"How long do negative items stay on a credit report in Alabama?",
             f"Alabama follows federal FCRA timelines: most negative items remain for seven years from the date of first delinquency, and Chapter 7 bankruptcies stay for ten years."),
        ]
    if state == "alaska":
        return [
            (f"What's the statute of limitations on credit card debt in Alaska?",
             f"Alaska has a three-year statute of limitations on credit card debt and most open-account consumer debt, which is one of the shorter windows in the country. Written contracts can run longer, so verify the debt type before assuming the clock has run."),
            (f"Does Alaska have its own version of the federal FDCPA?",
             f"Alaska does not have a comprehensive state debt collection statute, so residents rely primarily on the federal FDCPA and FCRA. The Alaska Unfair Trade Practices and Consumer Protection Act can still cover deceptive collector conduct."),
            (f"How long do collections stay on an Alaska credit report?",
             f"Federal FCRA rules apply: most collections, charge-offs, and late payments must drop off after seven years, and Chapter 7 bankruptcies after ten years."),
        ]
    if state == "arizona":
        return [
            (f"What's the statute of limitations on credit card debt in Arizona?",
             f"Arizona applies a six-year statute of limitations to credit card debt under its written contract rules. The clock starts on the date of default or last payment, and making a new payment can reset it."),
            (f"Is Arizona a community property state, and does that matter for credit disputes?",
             f"Yes. Arizona is a community property state, which means debts incurred during marriage are generally considered joint, even if only one spouse signed. Both spouses should check their reports for the same accounts."),
            (f"Does Arizona have state-specific credit reporting protections?",
             f"Arizona does not add much beyond the federal FCRA for credit reporting, but the Arizona Consumer Fraud Act covers deceptive collection practices and allows the Attorney General to enforce against bad actors."),
        ]
    if state == "arkansas":
        return [
            (f"What's the statute of limitations on credit card debt in Arkansas?",
             f"Arkansas has a five-year statute of limitations on credit card debt and most open-account consumer debt. Once five years pass from the date of last payment, collectors cannot win a lawsuit against you in Arkansas court."),
            (f"What happens if a debt collector sues me on time-barred debt in Arkansas?",
             f"Time-barred debt is an affirmative defense in Arkansas — you must raise it when you answer the lawsuit or you can lose it by default. Suing on known time-barred debt can also be a federal FDCPA violation."),
            (f"How long do negative items stay on a credit report in Arkansas?",
             f"Arkansas follows federal FCRA rules: seven years for most negative items from the date of first delinquency, and ten years for Chapter 7 bankruptcies."),
        ]
    if state == "california":
        return [
            (f"What's the statute of limitations on credit card debt in California?",
             f"California has a four-year statute of limitations on credit card debt under its written contract rules (Code of Civil Procedure § 337). The clock runs from the date of default, and a payment can restart it."),
            (f"Can California residents use the CCRAA when disputing credit report errors?",
             f"Yes. The California Consumer Credit Reporting Agencies Act (Civil Code § 1785 et seq.) gives California residents a state-law cause of action for inaccurate credit reporting, in addition to the federal FCRA. It allows recovery of actual damages, attorney's fees, and punitive damages for willful violations."),
            (f"Does the Rosenthal Act give California consumers more than the federal FDCPA?",
             f"Yes. Unlike the federal FDCPA, California's Rosenthal Fair Debt Collection Practices Act applies to original creditors as well as third-party collectors. Violations carry statutory damages of up to $1,000 per action, and California is a community property state, so spousal debt can also appear on both reports."),
            (f"Must California collectors disclose that a debt is time-barred?",
             f"Yes. California law requires collectors to disclose in their first written notice whether a debt is beyond the statute of limitations. Failure to do so may violate the Rosenthal Act."),
        ]
    if state == "colorado":
        return [
            (f"What's the statute of limitations on credit card debt in Colorado?",
             f"Colorado applies a six-year statute of limitations to credit card debt and most consumer contracts. The clock runs from the date of default or last payment."),
            (f"Does Colorado have its own fair debt collection law?",
             f"Yes. The Colorado Fair Debt Collection Practices Act supplements the federal FDCPA and is enforced by the Colorado Attorney General's Collection Agency Board. It regulates licensed collection agencies operating in the state."),
            (f"How long do negative items stay on a Colorado credit report?",
             f"Federal FCRA timelines apply: seven years for most negative items, ten years for Chapter 7 bankruptcies."),
        ]
    if state == "connecticut":
        return [
            (f"What's the statute of limitations on credit card debt in Connecticut?",
             f"Connecticut applies a six-year statute of limitations to most written contracts, including credit card debt. The clock runs from the date of default or last activity on the account."),
            (f"Can Connecticut residents use CUTPA when disputing credit report errors?",
             f"Yes. The Connecticut Unfair Trade Practices Act (CGS § 42-110a et seq.) is one of the most consumer-friendly state laws in the country. It gives consumers a private right of action and allows recovery of actual damages, punitive damages, and attorney's fees for deceptive collector conduct."),
            (f"What happens if a debt collector violates Connecticut law?",
             f"Connecticut consumers can sue under CUTPA and recover actual and punitive damages plus fees. The Connecticut Department of Consumer Protection also actively enforces against bad actors."),
        ]
    if state == "delaware":
        return [
            (f"What's the statute of limitations on credit card debt in Delaware?",
             f"Delaware has one of the shortest windows in the country — a three-year statute of limitations on credit card debt and most consumer contracts. After three years from the last payment or default, collectors cannot win a lawsuit in Delaware court."),
            (f"Does Delaware have state consumer protections beyond the federal FDCPA?",
             f"Yes. The Delaware Consumer Fraud Act (6 Del. C. § 2511 et seq.) prohibits deceptive practices in trade, including debt collection, and gives consumers a private right of action."),
            (f"How long do negative items stay on a Delaware credit report?",
             f"Federal FCRA timelines apply: seven years for most negative items and ten years for Chapter 7 bankruptcies, regardless of Delaware's shorter SOL."),
        ]
    if state == "florida":
        return [
            (f"What's the statute of limitations on credit card debt in Florida?",
             f"Florida applies a five-year statute of limitations to credit card debt based on written contract rules (Fla. Stat. § 95.11(2)(b)). Oral contracts have a four-year SOL."),
            (f"Does FDUTPA cover credit disputes and debt collection in Florida?",
             f"Yes. The Florida Deceptive and Unfair Trade Practices Act (FDUTPA) prohibits unfair or deceptive practices in consumer transactions, including debt collection, and gives Florida consumers a private right of action for actual damages and attorney's fees."),
            (f"Does Florida have its own debt collection statute?",
             f"Yes. The Florida Consumer Collection Practices Act (Fla. Stat. § 559.55 et seq.) applies to both original creditors and third-party collectors — broader than the federal FDCPA — and allows recovery of up to $1,000 in statutory damages plus fees."),
        ]
    if state == "georgia":
        return [
            (f"What's the statute of limitations on credit card debt in Georgia?",
             f"Georgia applies a six-year statute of limitations to credit card debt under its written contract rules (O.C.G.A. § 9-3-24). The clock runs from the date of default or last payment."),
            (f"Does Georgia have its own debt collection law?",
             f"The Georgia Fair Business Practices Act prohibits deceptive business practices and can reach debt collection conduct, though Georgia residents generally rely on the federal FDCPA for collector-specific violations."),
            (f"How long do negative items stay on a credit report in Georgia?",
             f"Federal FCRA timelines apply: seven years for most negative items from the date of first delinquency, and ten years for Chapter 7 bankruptcies."),
        ]
    if state == "hawaii":
        return [
            (f"What's the statute of limitations on credit card debt in Hawaii?",
             f"Hawaii applies a six-year statute of limitations to credit card debt and written contracts (HRS § 657-1). The clock runs from the date of default or last activity."),
            (f"Does Hawaii have state consumer protections beyond the federal FDCPA?",
             f"Yes. Hawaii's Unfair and Deceptive Acts or Practices law (HRS § 480-2) prohibits deceptive practices in commerce, including debt collection, and allows consumers to recover treble damages plus attorney's fees."),
            (f"How long do negative items stay on a Hawaii credit report?",
             f"Federal FCRA timelines apply: seven years for most negative items and ten years for Chapter 7 bankruptcies."),
        ]
    if state == "idaho":
        return [
            (f"What's the statute of limitations on credit card debt in Idaho?",
             f"Idaho sets a five-year statute of limitations on credit card debt and most written contracts (Idaho Code § 5-216). The clock runs from the date of default or last payment."),
            (f"Does Idaho have state consumer protections beyond federal law?",
             f"Yes. The Idaho Consumer Protection Act (Idaho Code § 48-601 et seq.) prohibits unfair or deceptive business practices, including in debt collection, and allows consumers to recover actual damages and attorney's fees."),
            (f"Is Idaho a community property state?",
             f"Yes. Idaho is one of nine community property states, so debt incurred during marriage is generally considered joint even if only one spouse signed the account."),
        ]
    if state == "illinois":
        return [
            (f"What's the statute of limitations on credit card debt in Illinois?",
             f"Illinois applies a five-year statute of limitations to credit card debt under its unwritten contract rules (735 ILCS 5/13-205). Written contracts have a ten-year SOL."),
            (f"Can Illinois residents use ICFA when disputing debt collector conduct?",
             f"Yes. The Illinois Consumer Fraud and Deceptive Business Practices Act (815 ILCS 505/) gives consumers a private right of action against deceptive or unfair collector conduct, with recovery of actual damages and attorney's fees. Willful violations can carry civil penalties up to $50,000."),
            (f"Does Illinois have its own collection agency statute?",
             f"Yes. The Illinois Collection Agency Act licenses and regulates debt collectors doing business in Illinois, and unlicensed collection activity is a basis for a complaint to the Illinois Department of Financial and Professional Regulation."),
        ]
    if state == "indiana":
        return [
            (f"What's the statute of limitations on credit card debt in Indiana?",
             f"Indiana applies a six-year statute of limitations to credit card debt under its account stated rules (Ind. Code § 34-11-2-9). The clock runs from the date of default or last payment."),
            (f"Does Indiana have consumer protections beyond the federal FDCPA?",
             f"Yes. The Indiana Deceptive Consumer Sales Act prohibits deceptive practices in consumer transactions and can reach debt collection conduct. Indiana also licenses collection agencies through the Secretary of State."),
            (f"How long do collections stay on an Indiana credit report?",
             f"Federal FCRA timelines apply: seven years for most collections and charge-offs, and ten years for Chapter 7 bankruptcies."),
        ]
    if state == "iowa":
        return [
            (f"What's the statute of limitations on credit card debt in Iowa?",
             f"Iowa applies a five-year statute of limitations to credit card debt and most unwritten contracts (Iowa Code § 614.1). Written contracts have a ten-year window."),
            (f"Does Iowa have state consumer protections beyond federal law?",
             f"Yes. The Iowa Consumer Credit Code and the Iowa Debt Collection Practices Act provide state-level protections that supplement the federal FDCPA, and the Iowa Attorney General actively enforces against abusive collectors."),
            (f"Does Iowa allow wage garnishment on old credit card debt?",
             f"Iowa allows wage garnishment on credit card judgments but caps the amount based on income, and no garnishment is allowed once the statute of limitations has expired and the collector can no longer get a judgment."),
        ]
    if state == "kansas":
        return [
            (f"What's the statute of limitations on credit card debt in Kansas?",
             f"Kansas applies a five-year statute of limitations to credit card debt under its written contract rules (K.S.A. § 60-511). Oral agreements have a three-year SOL."),
            (f"Does Kansas have consumer protections beyond the federal FDCPA?",
             f"Yes. The Kansas Consumer Protection Act (K.S.A. § 50-623 et seq.) prohibits deceptive and unconscionable acts in consumer transactions, including debt collection, and allows recovery of civil penalties and attorney's fees."),
            (f"How long do negative items stay on a Kansas credit report?",
             f"Federal FCRA timelines apply: seven years for most negative items and ten years for Chapter 7 bankruptcies."),
        ]
    if state == "kentucky":
        return [
            (f"What's the statute of limitations on credit card debt in Kentucky?",
             f"Kentucky applies a five-year statute of limitations to credit card debt under its unwritten contract rules (KRS § 413.120). Written contracts can run for ten or fifteen years."),
            (f"Does Kentucky have state consumer protections beyond federal law?",
             f"Yes. The Kentucky Consumer Protection Act (KRS § 367.170) prohibits unfair, false, or deceptive acts in trade, and consumers can bring a private action for damages and attorney's fees."),
            (f"How long do collections stay on a Kentucky credit report?",
             f"Federal FCRA timelines apply: seven years for most collections and charge-offs, and ten years for Chapter 7 bankruptcies."),
        ]
    if state == "louisiana":
        return [
            (f"What's the statute of limitations on credit card debt in Louisiana?",
             f"Louisiana has a three-year prescriptive period on open-account credit card debt under Civil Code article 3494, one of the shortest in the country. Written promissory notes have a longer ten-year window."),
            (f"Is Louisiana a community property state?",
             f"Yes. Louisiana is a community property state, so debts incurred during marriage are generally the joint responsibility of both spouses even if only one signed."),
            (f"Does Louisiana have state consumer protections beyond federal law?",
             f"Yes. The Louisiana Unfair Trade Practices and Consumer Protection Law (LSA-R.S. § 51:1401 et seq.) prohibits unfair or deceptive practices, including in debt collection, and allows recovery of actual damages and attorney's fees."),
        ]
    if state == "maine":
        return [
            (f"What's the statute of limitations on credit card debt in Maine?",
             f"Maine applies a six-year statute of limitations to credit card debt and most written contracts (14 M.R.S. § 752). The clock runs from the date of default or last payment."),
            (f"Does Maine have its own debt collection statute?",
             f"Yes. The Maine Fair Debt Collection Practices Act (32 M.R.S. § 11001 et seq.) supplements the federal FDCPA and is enforced by the Maine Bureau of Consumer Credit Protection. Maine also licenses debt collectors doing business in the state."),
            (f"How long do negative items stay on a Maine credit report?",
             f"Federal FCRA timelines apply: seven years for most negative items and ten years for Chapter 7 bankruptcies."),
        ]
    if state == "maryland":
        return [
            (f"What's the statute of limitations on credit card debt in Maryland?",
             f"Maryland applies a three-year statute of limitations to credit card debt under its general civil contract rules (Md. Code Cts. & Jud. Proc. § 5-101). Instruments under seal have a longer twelve-year SOL."),
            (f"Does Maryland have its own collection law beyond the federal FDCPA?",
             f"Yes. The Maryland Consumer Debt Collection Act (MCDCA) and the Maryland Consumer Protection Act (MCPA) both apply to debt collection, give consumers a private right of action, and allow recovery of damages and attorney's fees."),
            (f"Are Maryland collectors required to be licensed?",
             f"Yes. Maryland requires debt collection agencies to hold a collection agency license from the Office of the Commissioner of Financial Regulation, and collecting without a license can be a defense in a collection lawsuit."),
        ]
    if state == "massachusetts":
        return [
            (f"What's the statute of limitations on credit card debt in Massachusetts?",
             f"Massachusetts applies a six-year statute of limitations to credit card debt under its contract rules (M.G.L. c. 260 § 2). The clock starts on the date of default or last payment."),
            (f"Can Massachusetts residents use Chapter 93A when disputing credit report errors?",
             f"Yes. Chapter 93A is one of the strongest consumer protection laws in the country. It prohibits unfair or deceptive acts in commerce and allows consumers to recover up to triple damages plus attorney's fees — but a 30-day demand letter is required before suing."),
            (f"Does Massachusetts license debt collectors?",
             f"Yes. Massachusetts requires debt collectors to hold a license from the Division of Banks, and also regulates collectors through the Attorney General's Debt Collection Regulations (940 CMR 7.00)."),
        ]
    if state == "michigan":
        return [
            (f"What's the statute of limitations on credit card debt in Michigan?",
             f"Michigan applies a six-year statute of limitations to credit card debt under its contract rules (MCL § 600.5807). The clock runs from the date of default or last payment."),
            (f"What happens if a debt collector violates the Michigan Collection Practices Act?",
             f"Consumers can sue under the MCPA (MCL § 445.251 et seq.) for actual damages plus $150 per violation, up to $1,000 total per action, plus attorney's fees. The separate Michigan Consumer Protection Act adds another layer of private remedies."),
            (f"How long do collections stay on a Michigan credit report?",
             f"Federal FCRA timelines apply: seven years for most collections and charge-offs, ten years for Chapter 7 bankruptcies."),
        ]
    if state == "minnesota":
        return [
            (f"What's the statute of limitations on credit card debt in Minnesota?",
             f"Minnesota applies a six-year statute of limitations to credit card debt under its contract rules (Minn. Stat. § 541.05). The clock runs from the date of default or last payment."),
            (f"Does Minnesota have its own debt collection statute?",
             f"Yes. The Minnesota Collection Agencies Act (Minn. Stat. § 332.31 et seq.) licenses and regulates collection agencies, and the Minnesota Department of Commerce enforces violations."),
            (f"Can Minnesota residents sue collectors under state consumer protection law?",
             f"Yes. The Minnesota Consumer Fraud Act and the Minnesota Prevention of Consumer Fraud Act cover deceptive collection conduct and allow private lawsuits with attorney's fees."),
        ]
    if state == "mississippi":
        return [
            (f"What's the statute of limitations on credit card debt in Mississippi?",
             f"Mississippi has a three-year statute of limitations on credit card debt and most open-account consumer debt (Miss. Code § 15-1-29). Written contracts have a longer three-year window as well for many types."),
            (f"Does Mississippi have state consumer protections beyond the federal FDCPA?",
             f"The Mississippi Consumer Protection Act prohibits unfair or deceptive acts in trade but generally requires use of the AG's informal dispute process before bringing a private suit. Federal FDCPA and FCRA are the primary private-action tools."),
            (f"How long do negative items stay on a Mississippi credit report?",
             f"Federal FCRA timelines apply: seven years for most negative items and ten years for Chapter 7 bankruptcies, regardless of the shorter state SOL."),
        ]
    if state == "missouri":
        return [
            (f"What's the statute of limitations on credit card debt in Missouri?",
             f"Missouri applies a five-year statute of limitations to credit card debt under its contract rules (RSMo § 516.120). Written promissory notes can carry a ten-year SOL."),
            (f"Does Missouri have state consumer protections beyond federal law?",
             f"Yes. The Missouri Merchandising Practices Act (MMPA, RSMo § 407.010 et seq.) prohibits deceptive practices in trade and gives consumers a private right of action, including for deceptive debt collection conduct."),
            (f"How long do negative items stay on a Missouri credit report?",
             f"Federal FCRA timelines apply: seven years for most collections and charge-offs, ten years for Chapter 7 bankruptcies."),
        ]
    if state == "montana":
        return [
            (f"What's the statute of limitations on credit card debt in Montana?",
             f"Montana applies a five-year statute of limitations to credit card debt under its open-account contract rules (Mont. Code § 27-2-202). Written contracts can have an eight-year SOL."),
            (f"Does Montana have state consumer protections beyond federal law?",
             f"Yes. The Montana Consumer Protection Act (Mont. Code § 30-14-101 et seq.) prohibits unfair or deceptive practices in trade and allows consumers to sue for actual damages, treble damages in some cases, and attorney's fees."),
            (f"How long do negative items stay on a Montana credit report?",
             f"Federal FCRA timelines apply: seven years for most negative items, ten years for Chapter 7 bankruptcies."),
        ]
    if state == "nebraska":
        return [
            (f"What's the statute of limitations on credit card debt in Nebraska?",
             f"Nebraska sets a five-year statute of limitations on credit card debt and most written contracts (Neb. Rev. Stat. § 25-205). Oral contracts carry a four-year SOL."),
            (f"Does Nebraska have state consumer protections beyond federal law?",
             f"Yes. The Nebraska Consumer Protection Act prohibits unfair or deceptive practices in commerce and allows consumers to sue for damages and attorney's fees. Nebraska also licenses collection agencies through the Secretary of State."),
            (f"How long do collections stay on a Nebraska credit report?",
             f"Federal FCRA timelines apply: seven years for most collections and charge-offs, ten years for Chapter 7 bankruptcies."),
        ]
    if state == "nevada":
        return [
            (f"What's the statute of limitations on credit card debt in Nevada?",
             f"Nevada applies a six-year statute of limitations to credit card debt under its written contract rules (NRS § 11.190). Open accounts and oral contracts have a four-year SOL."),
            (f"Is Nevada a community property state?",
             f"Yes. Nevada is a community property state, so debts incurred during marriage are generally joint obligations of both spouses regardless of who signed."),
            (f"Does Nevada have its own collection agency statute?",
             f"Yes. Nevada licenses and regulates collection agencies through the Financial Institutions Division (NRS Chapter 649), and the Nevada Deceptive Trade Practices Act gives consumers additional private remedies for deceptive collector conduct."),
        ]
    if state == "new-hampshire":
        return [
            (f"What's the statute of limitations on credit card debt in New Hampshire?",
             f"New Hampshire has a three-year statute of limitations on credit card debt and most personal actions on contracts (RSA § 508:4). Once three years pass from default, collectors cannot win a New Hampshire lawsuit."),
            (f"Does New Hampshire have consumer protections beyond the federal FDCPA?",
             f"Yes. The New Hampshire Consumer Protection Act (RSA § 358-A) prohibits unfair or deceptive acts in trade and allows consumers to recover actual damages, double or treble damages for willful violations, and attorney's fees."),
            (f"How long do negative items stay on a New Hampshire credit report?",
             f"Federal FCRA timelines apply: seven years for most negative items and ten years for Chapter 7 bankruptcies, independent of the shorter state SOL."),
        ]
    if state == "new-jersey":
        return [
            (f"What's the statute of limitations on credit card debt in New Jersey?",
             f"New Jersey applies a six-year statute of limitations to credit card debt under its contract rules (N.J.S.A. § 2A:14-1). The clock starts on the date of default or last payment."),
            (f"Can New Jersey residents use the NJCFA against debt collectors?",
             f"Yes. The New Jersey Consumer Fraud Act (N.J.S.A. § 56:8-1 et seq.) is one of the most powerful consumer laws in the country. Successful plaintiffs can recover mandatory treble damages plus attorney's fees — the treble damages are automatic, not discretionary, for qualifying violations."),
            (f"Does New Jersey license debt collectors?",
             f"New Jersey regulates collection practices primarily through the federal FDCPA and the NJCFA rather than a standalone licensing regime. The NJ Division of Consumer Affairs enforces consumer protection laws including against deceptive collector conduct."),
        ]
    if state == "new-mexico":
        return [
            (f"What's the statute of limitations on credit card debt in New Mexico?",
             f"New Mexico applies a six-year statute of limitations to credit card debt under its written contract rules (NMSA § 37-1-3). Open accounts have a four-year SOL and oral contracts carry four years."),
            (f"Is New Mexico a community property state?",
             f"Yes. New Mexico is a community property state, so debts incurred during marriage are generally joint obligations of both spouses regardless of which spouse signed."),
            (f"Does New Mexico have its own consumer protection law?",
             f"Yes. The New Mexico Unfair Practices Act (NMSA § 57-12-1 et seq.) prohibits unfair, deceptive, or unconscionable trade practices, allows consumers to recover actual damages or $100 (whichever is greater), and provides for attorney's fees and potential treble damages."),
        ]
    if state == "new-york":
        return [
            (f"What's the statute of limitations on credit card debt in New York?",
             f"New York has a three-year statute of limitations on credit card debt — reduced from six years in 2022 under CPLR § 214-i. The change was a major win for NY consumers, and the rule applies retroactively to existing debt."),
            (f"Can New York residents use CPLR 5014 or GBL § 349 when disputing credit reporting?",
             f"Yes. New York General Business Law § 349 prohibits deceptive business practices broadly, including in debt collection, and gives consumers a private right of action with statutory damages of $50 or actual damages (whichever is greater), plus attorney's fees and potential punitive damages for willful conduct."),
            (f"What makes a New York collection lawsuit time-barred?",
             f"If the credit card account went into default more than three years ago, it is past the SOL in New York. Under CPLR 214-i, a new payment does not restart the clock — another significant NY-specific protection."),
        ]
    if state == "north-carolina":
        return [
            (f"What's the statute of limitations on credit card debt in North Carolina?",
             f"North Carolina has a three-year statute of limitations on credit card debt under its contract rules (N.C.G.S. § 1-52). After three years from the date of last payment, collectors cannot win a lawsuit in North Carolina court."),
            (f"Does North Carolina have a state debt collection law?",
             f"Yes. The North Carolina Debt Collection Act (N.C.G.S. § 75-50 et seq.) applies to original creditors as well as third-party collectors — broader than the federal FDCPA — and allows consumers to recover actual damages plus statutory penalties of $500-$4,000 per violation."),
            (f"Does the North Carolina Collection Agency Act add more protection?",
             f"Yes. The Collection Agency Act requires third-party collectors to be licensed through the Department of Insurance, and unlicensed collection activity can be a defense."),
        ]
    if state == "north-dakota":
        return [
            (f"What's the statute of limitations on credit card debt in North Dakota?",
             f"North Dakota applies a six-year statute of limitations to credit card debt under its contract rules (N.D. Cent. Code § 28-01-16). The clock runs from the date of default or last payment."),
            (f"Does North Dakota license debt collectors?",
             f"Yes. North Dakota requires collection agencies to be licensed through the Department of Financial Institutions. Unlicensed collection activity can be a defense in a North Dakota collection lawsuit."),
            (f"How long do negative items stay on a North Dakota credit report?",
             f"Federal FCRA timelines apply: seven years for most collections and charge-offs, ten years for Chapter 7 bankruptcies."),
        ]
    if state == "ohio":
        return [
            (f"What's the statute of limitations on credit card debt in Ohio?",
             f"Ohio applies a six-year statute of limitations to credit card debt (ORC § 2305.07) — shortened from eight years in 2021. The clock runs from the date of default or last payment."),
            (f"Does Ohio have state consumer protections beyond the federal FDCPA?",
             f"Yes. The Ohio Consumer Sales Practices Act (ORC § 1345.01 et seq.) prohibits unfair, deceptive, or unconscionable sales practices and allows consumers to sue for actual damages or $200 (whichever is greater), plus treble damages in some cases and attorney's fees."),
            (f"How long do negative items stay on an Ohio credit report?",
             f"Federal FCRA timelines apply: seven years for most collections and charge-offs, ten years for Chapter 7 bankruptcies."),
        ]
    if state == "oklahoma":
        return [
            (f"What's the statute of limitations on credit card debt in Oklahoma?",
             f"Oklahoma applies a five-year statute of limitations to credit card debt under its written contract rules (12 O.S. § 95). Open-account claims have a three-year SOL."),
            (f"Does Oklahoma have state consumer protections beyond federal law?",
             f"Yes. The Oklahoma Consumer Protection Act (15 O.S. § 751 et seq.) prohibits unfair or deceptive practices in consumer transactions and allows consumers to recover actual damages, penalties, and attorney's fees."),
            (f"How long do negative items stay on an Oklahoma credit report?",
             f"Federal FCRA timelines apply: seven years for most negative items and ten years for Chapter 7 bankruptcies."),
        ]
    if state == "oregon":
        return [
            (f"What's the statute of limitations on credit card debt in Oregon?",
             f"Oregon applies a six-year statute of limitations to credit card debt under its contract rules (ORS § 12.080). The clock runs from the date of default or last payment."),
            (f"Does Oregon have its own debt collection statute?",
             f"Yes. The Oregon Unlawful Debt Collection Practices Act (ORS § 646.639) supplements the federal FDCPA and applies broadly. Consumers can recover actual damages or $200 (whichever is greater), plus punitive damages and attorney's fees."),
            (f"Does the Oregon UTPA also apply to collection practices?",
             f"Yes. The Oregon Unlawful Trade Practices Act gives consumers an additional private right of action against deceptive business conduct, including by debt collectors."),
        ]
    if state == "pennsylvania":
        return [
            (f"What's the statute of limitations on credit card debt in Pennsylvania?",
             f"Pennsylvania applies a four-year statute of limitations to credit card debt under its contract rules (42 Pa.C.S. § 5525). The clock starts on the date of default or last payment."),
            (f"Can Pennsylvania residents use the FCEUA-UTPCPL linkage for more damages?",
             f"Yes. Pennsylvania's Fair Credit Extension Uniformity Act (73 P.S. § 2270.1) incorporates FDCPA standards and makes violations of the FDCPA also violations of the UTPCPL — meaning FDCPA violations in Pennsylvania can result in treble damages plus attorney's fees."),
            (f"What does the Pennsylvania UTPCPL offer credit dispute plaintiffs?",
             f"The Unfair Trade Practices and Consumer Protection Law gives Pennsylvania consumers a private right of action with actual damages and attorney's fees, and courts may award treble damages for intentional violations — up to three times actual loss."),
        ]
    if state == "rhode-island":
        return [
            (f"What's the statute of limitations on credit card debt in Rhode Island?",
             f"Rhode Island has one of the longest windows in the country — a ten-year statute of limitations on credit card debt under its general contract rules (R.I. Gen. Laws § 9-1-13). The clock runs from the date of default."),
            (f"Does Rhode Island have state consumer protections beyond federal law?",
             f"Yes. The Rhode Island Deceptive Trade Practices Act (R.I. Gen. Laws § 6-13.1-1 et seq.) prohibits unfair or deceptive acts in trade and gives consumers a private right of action with actual damages and attorney's fees."),
            (f"How long do negative items stay on a Rhode Island credit report?",
             f"Federal FCRA timelines apply: seven years for most collections and charge-offs, ten years for Chapter 7 bankruptcies — much shorter than the state's ten-year SOL."),
        ]
    if state == "south-carolina":
        return [
            (f"What's the statute of limitations on credit card debt in South Carolina?",
             f"South Carolina has a three-year statute of limitations on credit card debt under its general contract rules (S.C. Code § 15-3-530). After three years from the date of default, collectors cannot win a lawsuit in South Carolina."),
            (f"Does South Carolina have its own consumer protection law?",
             f"Yes. The South Carolina Unfair Trade Practices Act (S.C. Code § 39-5-10 et seq.) prohibits unfair or deceptive acts in commerce and allows consumers to recover actual damages, treble damages for willful violations, and attorney's fees."),
            (f"How long do negative items stay on a South Carolina credit report?",
             f"Federal FCRA timelines apply: seven years for most collections and charge-offs, and ten years for Chapter 7 bankruptcies."),
        ]
    if state == "south-dakota":
        return [
            (f"What's the statute of limitations on credit card debt in South Dakota?",
             f"South Dakota applies a six-year statute of limitations to credit card debt under its contract rules (SDCL § 15-2-13). The clock runs from the date of default or last payment."),
            (f"Does South Dakota have state consumer protections beyond federal law?",
             f"Yes. The South Dakota Deceptive Trade Practices Act (SDCL § 37-24) prohibits deceptive acts in trade and gives consumers a private right of action for damages and attorney's fees."),
            (f"How long do negative items stay on a South Dakota credit report?",
             f"Federal FCRA timelines apply: seven years for most negative items and ten years for Chapter 7 bankruptcies."),
        ]
    if state == "tennessee":
        return [
            (f"What's the statute of limitations on credit card debt in Tennessee?",
             f"Tennessee applies a six-year statute of limitations to credit card debt under its contract rules (Tenn. Code § 28-3-109). The clock runs from the date of default or last payment."),
            (f"Does Tennessee have state consumer protections beyond the federal FDCPA?",
             f"Yes. The Tennessee Consumer Protection Act (Tenn. Code § 47-18-101 et seq.) prohibits unfair or deceptive acts in trade and allows consumers to recover actual damages, treble damages for willful violations, and attorney's fees."),
            (f"Does Tennessee license debt collectors?",
             f"Yes. Tennessee licenses collection service businesses through the Collection Service Board of the Department of Commerce and Insurance. Unlicensed collection activity can be a defense."),
        ]
    if state == "texas":
        return [
            (f"What's the statute of limitations on credit card debt in Texas?",
             f"Texas applies a four-year statute of limitations uniformly to consumer debt — credit cards, medical bills, auto loans, personal loans, and oral agreements all expire after four years (Tex. Civ. Prac. & Rem. Code § 16.004). The clock starts from the date of default or last payment."),
            (f"Can Texas residents use the TDCA when disputing credit report errors?",
             f"Yes. The Texas Debt Collection Act (Tex. Fin. Code § 392.001 et seq.) applies to original creditors as well as third-party collectors — broader than the federal FDCPA. Violations give consumers a right to sue for actual damages plus $100 per violation, plus attorney's fees."),
            (f"Does Texas allow wage garnishment for old credit card debt?",
             f"No. Texas is one of a small handful of states that prohibits wage garnishment for most consumer debts, including credit cards, medical bills, and personal loans. Texas also has an unlimited homestead exemption protecting the primary residence."),
            (f"Must Texas collectors disclose that a debt is time-barred?",
             f"Yes. Texas law requires collectors to disclose when a debt is time-barred and prohibits them from suing on time-barred debt or threatening to do so."),
        ]
    if state == "utah":
        return [
            (f"What's the statute of limitations on credit card debt in Utah?",
             f"Utah applies a six-year statute of limitations to credit card debt under its written contract rules (Utah Code § 78B-2-309). The clock runs from the date of default or last payment."),
            (f"Does Utah have consumer protections beyond the federal FDCPA?",
             f"Yes. The Utah Consumer Sales Practices Act (Utah Code § 13-11-1 et seq.) prohibits deceptive and unconscionable acts in consumer transactions and gives consumers a private right of action for damages, penalties, and attorney's fees."),
            (f"How long do negative items stay on a Utah credit report?",
             f"Federal FCRA timelines apply: seven years for most negative items and ten years for Chapter 7 bankruptcies."),
        ]
    if state == "vermont":
        return [
            (f"What's the statute of limitations on credit card debt in Vermont?",
             f"Vermont applies a six-year statute of limitations to credit card debt under its contract rules (12 V.S.A. § 511). The clock runs from the date of default or last payment."),
            (f"Does Vermont have its own consumer protection law?",
             f"Yes. The Vermont Consumer Protection Act (9 V.S.A. § 2451 et seq.) prohibits unfair or deceptive acts in commerce and allows consumers to recover actual damages, exemplary damages up to three times actual damages, and attorney's fees."),
            (f"How long do negative items stay on a Vermont credit report?",
             f"Federal FCRA timelines apply: seven years for most negative items and ten years for Chapter 7 bankruptcies."),
        ]
    if state == "virginia":
        return [
            (f"What's the statute of limitations on credit card debt in Virginia?",
             f"Virginia applies a five-year statute of limitations to credit card debt when treated as a written contract, and three years for unwritten contracts (Va. Code § 8.01-246). The clock runs from the date of default or last payment."),
            (f"Does Virginia have state consumer protections beyond the federal FDCPA?",
             f"Yes. The Virginia Consumer Protection Act (Va. Code § 59.1-196 et seq.) prohibits deceptive practices in consumer transactions and allows consumers to recover actual damages, civil penalties, and attorney's fees."),
            (f"How long do negative items stay on a Virginia credit report?",
             f"Federal FCRA timelines apply: seven years for most negative items and ten years for Chapter 7 bankruptcies."),
        ]
    if state == "washington":
        return [
            (f"What's the statute of limitations on credit card debt in Washington?",
             f"Washington applies a six-year statute of limitations to credit card debt under its written contract rules (RCW § 4.16.040). The clock starts on the date of default or last payment."),
            (f"Is Washington a community property state?",
             f"Yes. Washington is a community property state, so debts incurred during marriage are generally joint obligations of both spouses regardless of who signed the account."),
            (f"Does Washington have state consumer protections beyond federal law?",
             f"Yes. The Washington Consumer Protection Act (RCW § 19.86) prohibits unfair or deceptive acts in trade, allows private lawsuits with treble damages up to $25,000, and applies to debt collection conduct. Washington also licenses collection agencies through the Department of Licensing."),
        ]
    if state == "west-virginia":
        return [
            (f"What's the statute of limitations on credit card debt in West Virginia?",
             f"West Virginia has one of the longest windows in the country — a ten-year statute of limitations on credit card debt under its written contract rules (W. Va. Code § 55-2-6). The clock runs from the date of default or last payment."),
            (f"Does West Virginia have its own consumer protection law?",
             f"Yes. The West Virginia Consumer Credit and Protection Act (W. Va. Code § 46A-1-101 et seq.) is one of the most consumer-friendly state laws in the country. It covers debt collection broadly, gives consumers private remedies, and allows recovery of civil penalties per violation plus attorney's fees."),
            (f"How long do negative items stay on a West Virginia credit report?",
             f"Federal FCRA timelines apply: seven years for most collections and charge-offs, ten years for Chapter 7 bankruptcies — shorter than the state's ten-year SOL on collection lawsuits."),
        ]
    if state == "wisconsin":
        return [
            (f"What's the statute of limitations on credit card debt in Wisconsin?",
             f"Wisconsin applies a six-year statute of limitations to credit card debt under its contract rules (Wis. Stat. § 893.43). Wisconsin has a unique rule: once the SOL expires, the debt is considered extinguished entirely, not just unenforceable."),
            (f"Is Wisconsin a community property state?",
             f"Yes. Wisconsin is a marital property state (functionally community property), so debts incurred during marriage are generally joint obligations of both spouses regardless of who signed."),
            (f"Does Wisconsin have its own consumer protection law?",
             f"Yes. The Wisconsin Consumer Act (Wis. Stat. ch. 421-427) is one of the strongest state consumer credit laws, covering both original creditors and collectors, with private remedies and attorney's fees for violations."),
        ]
    if state == "wyoming":
        return [
            (f"What's the statute of limitations on credit card debt in Wyoming?",
             f"Wyoming has an unusually long eight-year statute of limitations on credit card debt under its open-account contract rules (Wyo. Stat. § 1-3-105). The clock runs from the date of default or last payment."),
            (f"Does Wyoming have state consumer protections beyond the federal FDCPA?",
             f"Yes. The Wyoming Consumer Protection Act (Wyo. Stat. § 40-12-101 et seq.) prohibits deceptive trade practices and allows consumers to bring private lawsuits. Wyoming also licenses collection agencies through the Collection Agency Board."),
            (f"How long do negative items stay on a Wyoming credit report?",
             f"Federal FCRA timelines apply: seven years for most collections and charge-offs, and ten years for Chapter 7 bankruptcies."),
        ]

    raise ValueError(f"No FAQ builder for {state}")


def build_faq_block(state: str) -> str:
    items = faqs_for(state)
    lines = ["faq:"]
    for q, a in items:
        lines.append(item(q, a))
    return "\n".join(lines) + "\n"


def process_file(path: Path) -> str:
    state = path.stem.replace("credit-dispute-rights-", "")
    text = path.read_text(encoding="utf-8")

    if re.search(r"^faq:\s*$", text, flags=re.MULTILINE):
        return f"SKIP (already has faq:): {state}"

    # Insert the faq: block right before the closing --- of the frontmatter.
    # Frontmatter = opening --- at start of file, then body, then closing ---.
    m = re.match(r"^(---\n.*?\n)(---\n)", text, flags=re.DOTALL)
    if not m:
        return f"SKIP (no frontmatter): {state}"

    fm_body = m.group(1)  # includes opening --- and content up to but not including closing ---
    closing = m.group(2)
    rest = text[m.end():]

    faq_block = build_faq_block(state)

    # fm_body ends with a newline; append faq block then closing ---.
    new_text = fm_body + faq_block + closing + rest
    path.write_text(new_text, encoding="utf-8")
    return f"OK: {state}"


def main():
    files = sorted(DIR.glob("credit-dispute-rights-*.mdx"))
    results = []
    for f in files:
        try:
            results.append(process_file(f))
        except Exception as e:
            results.append(f"ERROR: {f.name}: {e}")
    for r in results:
        print(r)
    ok = sum(1 for r in results if r.startswith("OK:"))
    print(f"\nTotal files: {len(files)}  Modified: {ok}")


if __name__ == "__main__":
    main()
