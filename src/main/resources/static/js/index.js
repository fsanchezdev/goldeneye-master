


document.getElementsByTagName("form")[0].addEventListener('submit', submitForm);



/**
 * Manages the send to another API the email and show it in the browser 
 *
 * @param {*} evnt
 * @return {*} 
 */
async function submitForm(evnt) {
  evnt.preventDefault();

  if (validForm()) {
    //Concatenation to obtain the email
    let corpEmail = (`${document.getElementById("firstName").value.split(' ').filter(s => s).join('')[0]+document.getElementById("surName").value.split(' ').filter(s => s).join('')}.${document.querySelector("#selectDpt option:checked").text.split(' ').filter(s => s).join('')}@${document.querySelector("#selectOfc option:checked").text.split(' ').filter(s => s).join('')}.goldeneye.com`).toLowerCase();

    let url = ''; //SET YOUR API URL HERE
    try {
      let res = await fetch(url, {
        method: 'POST', headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(corpEmail)
      });
      
      deleteChilds('result');
      const result = generateElement('p',corpEmail,'',['d-xl-inline-block']);
      
      //We set css styles for animation, apend it and change the opacity

      document.getElementById('img').style.zIndex =-2 ;
      document.getElementById('result').style.cssText= "opacity: 1; transition: opacity 1s linear;";
      result.addEventListener('mousedown', clipboardCopy);
      result.setAttribute( 'title','Copy');
     
      document.getElementById('result').appendChild(result);
      document.querySelector('#result p').style.cursor= 'pointer';
      
      
      return await res.json();
    } catch (error) {
    
      console.log(error);
    }
  

  }

}


/**
 * Verify if the form have all the necesary data
 *
 * @return {*} 
 */
function validForm() {
  let valid = false;
  if (document.querySelector("#selectOfc option:checked").value.length == 1
    && document.querySelector("#selectDpt option:checked").value.length == 1
    && document.getElementById("firstName").value.length > 0
    && document.getElementById("surName").value.length > 0 && document.getElementById("surName").value.length <= 16)
    valid = true;
  return valid;
}



//select generation
const divSelect = generateElement('div', '', 'divSelect');
document.getElementById('selects').appendChild(divSelect);

const selectOffice = generateElement('select', '', 'selectOfc', ['form-select','mr-3','mb-5']);
selectOffice.addEventListener('change', renderDepartments);
document.getElementById('divSelect').appendChild(selectOffice);

let defaultOption = generateElement('option', 'Select office');
defaultOption.setAttribute('selected', 'selected');
document.getElementById('selectOfc').appendChild(defaultOption);


const selectDepartment = generateElement('select', '', 'selectDpt', ['form-select','mr-3','mb-5']);

document.getElementById('divSelect').appendChild(selectDepartment);
defaultOption = generateElement('option', 'Select department');
defaultOption.setAttribute('selected', 'selected');

document.getElementById('selectDpt').appendChild(defaultOption);


/**
 * Get the offices from the backend API
 *
 * @return {*} 
 */
async function getOffices() {
  let url = 'http://localhost:8080//goldeneye/api/offices';
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
	  
    console.log(error);
  }
}

/**
 * Create the html for selecting the office
 *
 */
async function renderOffices() {

  let offices = await getOffices();
  if(offices.error==null) {
	  Object.entries(offices).forEach(ofc => {
	    let option = generateElement('option', ofc[1]);
	    option.setAttribute('value', ofc[0]);
	    document.getElementById('selectOfc').appendChild(option);
	  })
  }
  else{
	  const result = generateElement('p','There is an internal error, try again later','',['d-xl-inline-block']);
      result.style.backgroundColor='crimson';
      
      //We set css styles for animation, apend it and change the opacity

      document.getElementById('img').style.zIndex =-2 ;
      document.getElementById('result').style.cssText= "opacity: 1; transition: opacity 1s linear;";
      document.getElementById('result').appendChild(result);
  }
}


renderOffices();


/**
 * Get the departments from the backend API
 *
 * @return {*} 
 */
async function getDepartments() {
  let url = 'http://localhost:8080/goldeneye/api/departments';
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}


/**
 * Create the html for selecting the department
 *
 */
async function renderDepartments() {
  let departments = await getDepartments();
  let dptSelected = 0;
  deleteChilds('selectDpt');

  defaultOption = generateElement('option', 'Select department');
  defaultOption.setAttribute('selected', 'selected');
  document.getElementById('selectDpt').appendChild(defaultOption);

  switch (document.getElementById("selectOfc").value) {
    case "1":
      dptSelected = departments.departments[1];
      break;
    case "2":
      dptSelected = departments.departments[2];
      break;
    case "3":
      dptSelected = departments.departments[3];
      break;


  }

  Object.entries(dptSelected).forEach(dpt => {
    let option = generateElement('option', dpt[1]);
    option.setAttribute('value', dpt[0]);
    document.getElementById('selectDpt').appendChild(option);
  })

}

/**
 * Generate a html element with some atributes if are provided
 *
 * @param {*} element
 * @param {string} [text='']
 * @param {string} [id='']
 * @param {string} [classes='']
 * @return {*} 
 */
function generateElement(element, text = '', id = '', classes = '') {
  const node = document.createElement(element);
  if (text !== '') {
    const myText = document.createTextNode(text);
    node.appendChild(myText);
  }
  if (classes !== '') {
    classes.forEach((item) => { node.classList.add(item) });
  }
  if (id !== '') { node.setAttribute('id', id); }
  return node;
}

/**
 * Delete childs from a element
 * @param {*} recivedNode
 */
function deleteChilds(recivedNode) {
  var node = document.getElementById(recivedNode);
  node.querySelectorAll('*').forEach(n => n.remove());
  
}

/**
 * Copy to the clipboard the email and changes de box shadow
 */
async function clipboardCopy() {
	  const result=document.querySelector('#result p');
	  document.querySelector('#result p').style.boxShadow='-18px -18px 15px -20px rgb(255 255 255 / 75%) inset, 18px 18px 15px -20px rgb(0 0 0 / 75%) inset';
	
	  result.addEventListener('mouseup',disableBoxShadow);
	  await navigator.clipboard.writeText(result.textContent);
	}

function disableBoxShadow(){

		document.querySelector('#result p').style.boxShadow='';
		
}