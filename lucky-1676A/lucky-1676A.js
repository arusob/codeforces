
function ifTheTicketIsLucky(ticket) {
  let ticketLength = ticket.length;
  let firstPartTicket = 0;
  for (let i = 0; i <= ticketLength / 2 - 1; i++) {
    firstPartTicket = firstPartTicket + Number(ticket.charAt(i));
  }
  let lastPartTicket = 0;
  for (let j = ticketLength - 1; j >= ticketLength / 2; j--) {
    lastPartTicket = lastPartTicket + Number(ticket.charAt(j));
  }
  if (firstPartTicket === lastPartTicket) {
    return "YES";
  } else if (firstPartTicket != lastPartTicket) {
    return "NO";
  }
  return "NO";
}

module.exports = ifTheTicketIsLucky;
