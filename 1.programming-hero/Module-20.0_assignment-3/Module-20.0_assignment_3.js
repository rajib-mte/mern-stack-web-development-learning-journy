//Problem-01: New Price for Eid Sale

function newPrice(currentPrice, discount) {
  if (
    typeof currentPrice !== "number" ||
    typeof discount !== "number" ||
    !Number.isFinite(currentPrice) ||
    !Number.isFinite(discount)
  ) {
    return "Invalid";
  }

  if (currentPrice < 0 || discount < 0 || discount > 100) {
    return "Invalid";
  }

  let discountAmount = (currentPrice * discount) / 100;
  let finalPrice = currentPrice - discountAmount;

  return finalPrice.toFixed(3);
}

// Problem-02: OTP Validation for zapshiftt
function validOtp(otp) {
  if (typeof otp !== "string") return "Invalid";

  if (otp.trim() !== otp) return false;

  if (otp.length === 8 && otp.slice(0, 3) === "ph-") {
    return true;
  }
  return false;
}

// Problem-03: BCS Final Score Calculators
function finalScore(omr) {
  if (typeof omr !== "object" || omr === null || Array.isArray(omr)) {
    return "Invalid";
  }

  let right = omr.right;
  let wrong = omr.wrong;
  let skip = omr.skip;

  if (
    !Number.isInteger(right) ||
    !Number.isInteger(wrong) ||
    !Number.isInteger(skip)
  ) {
    return "Invalid";
  }

  if (right + wrong + skip !== 100) return "Invalid";

  let score = right - wrong * 0.5;
  return Math.round(score);
}

// Problem 4: Upcoming Gono Vote
function gonoVote(array) {
  if (!Array.isArray(array)) return "Invalid";

  let ha = 0;
  let na = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "ha") ha++;
    else if (array[i] === "na") na++;
  }

  if (ha > na) return true;
  if (ha === na) return "equal";
  return false;
}

// Problem 5: Text Analyzer for company
function analyzeText(str) {
  if (typeof str !== "string") return "Invalid";

  str = str.trim();
  if (str === "") return "Invalid";

  let words = str.split(" ");

  let longest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") cnt++;
  }

  return {
    longwords: longest,
    token: cnt,
  };
}
