// Paste this whole file into script.google.com (see setup steps).
const TO_EMAIL = 'youremail@gmail.com';   // <-- where RSVPs are sent

function doPost(e) {
  const p = e.parameter || {};
  if (p.website) return ContentService.createTextOutput('ok'); // spam trap, ignore bots

  const body = [
    'Name: ' + (p.name || '-'),
    'Attending: ' + (p.attending || '-'),
    'Bringing a guest: ' + (p.guest || '-'),
    'Guest name(s): ' + (p.guest_names || '-'),
    'Dietary / allergies: ' + (p.dietary || '-')
  ].join('\n');

  MailApp.sendEmail({
    to: TO_EMAIL,
    subject: 'RSVP: ' + (p.name || 'Guest') + ' - ' + (p.attending || ''),
    body: body
  });
  return ContentService.createTextOutput('ok');
}
