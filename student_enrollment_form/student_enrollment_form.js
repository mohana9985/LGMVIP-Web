function EnrollForm(event){
  event.preventDefault();
  var Name = document.getElementById("Name").value;
  var Mail = document.getElementById("Mail").value;
  var PhoneNo = document.getElementById("Ph").value;
  var Website = document.getElementById("Website").value;
  var ImageLink = document.getElementById("Imagelink").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var skills = document.querySelectorAll('input[name="skills"]:checked');

  var skillValues = [];
  for (var i = 0; i < skills.length; i++) {
    skillValues.push(skills[i].value);
  }

  var FormData=
  {
    Name: Name,
    Mail: Mail,
    Ph:PhoneNo,
    Website: Website,
    Imagelink: ImageLink,
    gender: gender,
    skills: skillValues
  }
  var main = document.getElementById('enrollmentform');
  var studentData = document.createElement("div");
  studentData.id = 'details';
  var Image = document.createElement("div");
  Image.id = 'img';

  studentData.innerHTML = `
    <h2>Student Details:</h2>
    <p><strong>Name:</strong> ${FormData.Name}</p>
    <p><strong>Email:</strong> ${FormData.Mail}</p>
    <p><strong>Phone Number:</strong> ${FormData.Ph}</p>
    <p><strong>Website:</strong> ${FormData.Website}</p>
    <p><strong>Gender:</strong> ${FormData.gender}</p>
    <p><strong>Skills:</strong> ${FormData.skills.join(", ")}</p>
  `;
  Image.innerHTML='<p><strong>Image:</strong> <img src="' + document.getElementById("Imagelink").value + '" alt="Student Image" width="150" height="125"></p>';
  main.appendChild(studentData);
  main.appendChild(Image);

  document.getElementById("EnrollmentForm").reset();
}