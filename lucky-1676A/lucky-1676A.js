// https://codeforces.com/problemset/problem/1676/A

var ticket = "045207";

function ifTheTicketIsLucky(ticket) {
  let firstPartTicket = 0;
  for (let i = 0; i <= ticket.length / 2 - 1; i++) {
    firstPartTicket = firstPartTicket + Number(ticket.charAt(i));
  }
  let lastPartTicket = 0;
  for (let j = ticket.length - 1; j >= ticket.length / 2; j--) {
    lastPartTicket = lastPartTicket + Number(ticket.charAt(j));
  }
  if (firstPartTicket === lastPartTicket) {
    return "YES";
  } else if (firstPartTicket != lastPartTicket) {
    return "NO";
  }
}

var output = ifTheTicketIsLucky(ticket);
