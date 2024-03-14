function calculateAge() {
    var dobInput = document.getElementById('dob').value;
    var monthInput = document.getElementById('month').value;
    var yearInput = document.getElementById('year').value;

    if (dobInput && monthInput && yearInput) {
      var dob = new Date(yearInput, monthInput - 1, dobInput);
      var now = new Date();
      var age = now.getFullYear() - dob.getFullYear();

      // Check if the birthday has occurred this year
      if (now.getMonth() < dob.getMonth() || (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())) {
        age--;
      }

      document.getElementById('result').innerText = "Your age is: " + age;
    } else {
      alert("Please fill in all fields.");
    }
  }