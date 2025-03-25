
function calculateAge() {
  const day = document.getElementById('day').value;
  const month = document.getElementById('month').value;
  const year = document.getElementById('year').value;

  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  document.getElementById('numberYears').innerHTML = ageYears;

  document.getElementById('numberMonths').innerHTML = ageMonths;

  document.getElementById('numberDays').innerHTML = ageDays;
  
  
  // `
  //   <div>${ageYears} years</div>
  //   <div>${ageMonths} months</div>
  //   <div>${ageDays} days</div>
  // `;
}
