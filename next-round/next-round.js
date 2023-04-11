// https://codeforces.com/problemset/problem/158/A

var qualification = "8 5";
var participants = "10 9 8 7 7 7 5 5";

function makeArrayFromQualification(qualification) {
  let qualificationArray = qualification.split(" ");
  let qualificationNumbersArray = [];
  qualificationArray.forEach((element) =>
    qualificationNumbersArray.push(element * 1)
  );
  return qualificationNumbersArray;
}
var arrayOfQualificationNumners = makeArrayFromQualification(qualification);

function makeArrayFromParticipants(participants) {
  let participantsArray = participants.split(" ");
  let participantsNumbersArray = [];
  participantsArray.forEach((element) =>
    participantsNumbersArray.push(element * 1)
  );
  return participantsNumbersArray;
}
var arrayOfParticipantsNumbers = makeArrayFromParticipants(participants);

function analyzeParticipants(
  arrayOfQualificationNumners,
  arrayOfParticipantsNumbers
) {
  let advanceNextRound = [];
  for (let i = 0; i <= arrayOfParticipantsNumbers.length - 1; i++) {
    if (arrayOfParticipantsNumbers[i] > arrayOfQualificationNumners[1]) {
      advanceNextRound.push(arrayOfParticipantsNumbers[i]);
    }
  }
  return advanceNextRound.length;
}

var output = analyzeParticipants(
  arrayOfQualificationNumners,
  arrayOfParticipantsNumbers
);
