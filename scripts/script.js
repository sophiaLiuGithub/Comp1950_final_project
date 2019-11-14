//js file of COMP 1950 final project


//function to do user input validation
/* 
requirement: 

1. first/last name:
--can not be blank
--check if user input is a number

2. email
--can be balnk
--check if it fits the required format, e.g. abc123@gmail.com

3. student number:
--can be blank
--check if fits the required format: A + 8 digits, e.g. A01023456

*/
function formValidation(){

	//variables for form validation	
	var stuFName = document.getElementById("fname");
	var stuLName = document.getElementById("lname");
	var stuEmail = document.getElementById("email");	
	var stuNum = document.getElementById("stu_number");
	var stuCondition = document.getElementsByName("stuCondition");
	var stuCon = getStuCondition(stuCondition);	
	var comment = document.getElementById("comment");	

	//reset input fields if user input is not valid
	if(!checkFName(stuFName.value)) 
	{		
		stuFName.value = "";
		stuFName.focus();	
		return;
	}
	if(!checkLName(stuLName.value)) 
	{		
		stuLName.value = "";
		stuLName.focus();	
		return;
	}
	if(!checkEmail(stuEmail.value))
	{
		stuEmail.value = "";
		stuEmail.focus();	
		return;
	}
	if(!checkStuNum(stuNum.value))
	{
		stuNum.value = "";
		stuNum.focus();	
		return;
	}	

	//display thank you message and the details of user input
	alert("Your information has benn sent successfully!\n"+
	"Here is the details of your information:\n"+
	"First name: "+ stuFName.value + 
	"\nLast name: "+ stuLName.value +
	"\nEmail: "+ stuEmail.value+
	"\nStudent number: " + stuNum.value +
	"\nStudent condition: " + stuCon +
	"\nComments: " + comment.value);

	//submit user input
	document.getElementById("contact_form").submit();

	//reset form
	resetForm();
}

//function to valid first name
function checkFName(fName)
{
	var isFNameValid = false;
	if(isInputBlank(fName))
	{
		isFNameValid = false;
		alert("Please enter your first name!");
	}else if(!isNaN(fName))
	{
		isFNameValid = false;
		alert("First name can not be a number.\nPlease enter your first name again!");		
	}else{
		isFNameValid = true;
	}
	return isFNameValid;
}

//function to valid last name
function checkLName(lName)
{
	var isLNameValid = false;
	if(isInputBlank(lName))
	{
		isLNameValid = false;
		alert("Please enter your last name!");
	}else if(!isNaN(lName))
	{
		isLNameValid = false;
		alert("Last name can not be a number.\nPlease enter your last name again!");		
	}else{
		isLNameValid = true;
	}
	return isLNameValid;
}

//function to valid the format of email
function checkEmail(email)
{
	var isEmailValid = false;
	var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if(isInputBlank(email))
	{
		isEmailValid = true;
	}else
	{
		if(pattern.test(email)==false)
		{
			alert("The format of email is incorrect.\nPlease enter your email again.\nThank you!");
			isEmailValid = false;
		}else{			
			isEmailValid = true;		
		}
	} 	
	return isEmailValid;
}

//function to valid the format of student number
function checkStuNum(stuNum)
{
	var isStuNumValid = false;
	var pattern = /^A[\d]{8}$/;
	if(isInputBlank(stuNum))
	{
		isStuNumValid = true;
	}else
	{
		if(pattern.test(stuNum)==false)
		{
			alert("The format of student number is incorrect.\nPlease enter your student number again.\nThank you!");
			isStuNumValid = false;
		}else{			
			isStuNumValid = true;		
		}
	} 	
	return isStuNumValid;
}
//function to get the value of selected radio button
function getStuCondition(stuCondition)
{
	var stuCon = null;	 
	for(var i=0; i<stuCondition.length; i++){		
		if(stuCondition[i].checked){			
			stuCon = stuCondition[i].value;	
		}		
	}		
	return stuCon;
}

//function to check if the user input is blank
function isInputBlank(input)
{
	if(input == "")
		return true;
	else
		return false;
}

//function to reset the form when the "reset" button is clicked
function resetForm(){
	document.getElementById("contact_form").reset();	
}