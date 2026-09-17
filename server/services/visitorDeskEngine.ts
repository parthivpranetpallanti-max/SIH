import { MONUMENTS_VISITOR_DATA, GENERAL_VISITOR_RULES } from '../../src/data/visitorDeskData';
import { MonumentVisitorDetail } from '../../src/types';

export interface VisitorInquiryResult {
  reply: string;
  matchedMonument?: MonumentVisitorDetail;
  rules?: typeof GENERAL_VISITOR_RULES;
  isGeneralQuery?: boolean;
}

export function processVisitorInquiry(query: string): VisitorInquiryResult {
  const q = query.toLowerCase().trim();

  // 1. Check for specific monument
  let matchedMonument: MonumentVisitorDetail | undefined = undefined;
  for (const m of MONUMENTS_VISITOR_DATA) {
    if (
      q.includes(m.monumentTitle.toLowerCase()) ||
      q.includes(m.location.toLowerCase()) ||
      q.includes(m.id.toLowerCase()) ||
      (m.hindiTitle && q.includes(m.hindiTitle.toLowerCase()))
    ) {
      matchedMonument = m;
      break;
    }
  }

  if (matchedMonument) {
    let replyText = `Official Archaeological Survey of India (ASI) Visitor Schedule for ${matchedMonument.monumentTitle} (${matchedMonument.hindiTitle}):\n\n`;
    replyText += `• Status: ${matchedMonument.isFreeEntry ? '100% FREE ENTRY FOR ALL VISITORS' : 'ASI Ticketed Monument'}\n`;
    replyText += `• Indian Visitors: ${matchedMonument.indianEntryFee}\n`;
    replyText += `• Foreign Nationals: ${matchedMonument.foreignEntryFee}\n`;
    replyText += `• Visiting Hours: ${matchedMonument.openingTime} to ${matchedMonument.closingTime}\n`;
    replyText += `• Weekly Closed Day: ${matchedMonument.closedDays}\n`;
    replyText += `• Free Entry Benefit: ${matchedMonument.freeEntryEligibility.join(' ')}\n`;
    replyText += `• Required Details: ${matchedMonument.requiredDetails.join(' ')}`;

    return {
      reply: replyText,
      matchedMonument,
    };
  }

  // 2. Free monuments query
  if (q.includes('free') && (q.includes('which') || q.includes('all') || q.includes('list') || q.includes('monuments'))) {
    const freeMonuments = MONUMENTS_VISITOR_DATA.filter((m) => m.isFreeEntry);
    let replyText = `The following historic monuments in the Virtual Bharat Museum have 100% FREE entry for all visitors year-round:\n\n`;
    freeMonuments.forEach((m) => {
      replyText += `• ${m.monumentTitle} (${m.location}, ${m.state}) — Open daily ${m.openingTime} - ${m.closingTime}\n`;
    });
    replyText += `\nAdditionally, ALL centrally protected ASI-ticketed monuments across India have 100% FREE entry for children below 15 years of age (Indian & foreign)!`;

    return {
      reply: replyText,
      rules: GENERAL_VISITOR_RULES,
      isGeneralQuery: true,
    };
  }

  // 3. Child entry rules
  if (q.includes('child') || q.includes('children') || q.includes('age') || q.includes('below 15') || q.includes('kid')) {
    return {
      reply: `National ASI Free Entry Policy for Children:\n\n• Entry is 100% FREE for all children below 15 years of age at all centrally protected ASI monuments across India.\n• This applies equally to Indian citizens and international foreign children.\n• A valid date-of-birth ID (Aadhaar, School ID card, or Passport) must be carried for age verification at the entrance turnstiles.`,
      rules: GENERAL_VISITOR_RULES,
      isGeneralQuery: true,
    };
  }

  // 4. Taj Mahal specific closure / timings
  if (q.includes('taj') && (q.includes('friday') || q.includes('close') || q.includes('timing') || q.includes('fee'))) {
    const taj = MONUMENTS_VISITOR_DATA.find((m) => m.id === 'taj-mahal');
    return {
      reply: `Taj Mahal Friday Closing & Timing Alert:\n\n• The Taj Mahal is strictly CLOSED for tourism every Friday (open only for registered local worshippers during noon prayers).\n• Saturday to Thursday: Opens 30 minutes before sunrise and closes 30 minutes before sunset.\n• Entry ticket: ₹50 for Indian citizens (additional ₹200 optional for main tomb terrace), ₹1,100 for foreign tourists.\n• Physical ticket counters are closed; all tickets must be booked digitally via asi.payumoney.com or ASI QR codes.`,
      matchedMonument: taj,
    };
  }

  // 5. ID proofs
  if (q.includes('id') || q.includes('document') || q.includes('proof') || q.includes('aadhaar')) {
    return {
      reply: `Required Documents & ID Proof for Indian Monuments:\n\n1. Indian Visitors: Original Government photo ID (Aadhaar Card, Voter ID, Driving License, or Passport).\n2. Foreign Tourists: Original International Passport and valid Indian Visa.\n3. Student Concessions / Children: Valid School or University ID card.\n4. E-Ticket: Digital copy on smartphone or printed QR code voucher from official ASI portal.`,
      rules: GENERAL_VISITOR_RULES,
      isGeneralQuery: true,
    };
  }

  // Default response
  return {
    reply: `Here is the general Archaeological Survey of India (ASI) visitor guideline:\n\n• Most ticketed monuments charge ₹25–₹50 for Indian citizens and ₹300–₹600 for foreign nationals.\n• Children below 15 years enter FREE nationwide.\n• Living pilgrimage monuments (Brihadisvara, Basilica of Bom Jesus, Dilwara) have 100% free entrance.\n• You can also click the 'Rates Directory' tab above to see the full nationwide fee table!`,
    rules: GENERAL_VISITOR_RULES,
    isGeneralQuery: true,
  };
}
