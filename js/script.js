//importing Json file
import states from "./states.js";

//declaring variables
let state = $("#state");
let form = $("#form");
let tbody = $("#tbody");

//  JQuerry Validation
form.validate({
  //validation rules
  rules: {
    firstname: {
      required: true,
    },
    lastname: {
      required: true,
    },
    middlename: {
      required: true,
    },
    dob: {
      required: true,
    },
    sex: {
      required: true,
    },
    phone: {
      required: true,
    },
    country: {
      required: true,
    },
    state: {
      required: true,
    },
    lga: {
      required: true,
    },
  },
  //validation messages
  messages: {
    firstname: {
      required: "Please enter your legal first name",
    },
    lastname: {
      required: "Please enter your legal last name",
    },
    middlename: {
      required: "Please enter your legal middle name",
    },
    dob: {
      required: "Please enter your Date of Birth",
    },
    sex: {
      required: "Please enter your gender",
    },
    phone: {
      required: "Please enter your phone number",
    },
    state: {
      required: "Please enter your state of origin",
    },
    lga: {
      required: "Please enter your local government area",
    },
  },
});

// DataTable
$("#table_id").DataTable({
  // to limit records
  pageLength: 4,

  recordsTotal: 50,
});

// Mapping all the states
states.forEach(function (allstate) {
  let diffStates = Object.keys(allstate);
  for (let i = 0; i <= diffStates.length; i++) {
    state.append(`<option> ${diffStates[i]} </option>`);

    // state.change(function(e){
    //   let target = e.target.value;
    //   if (target === diffStates[i]){
    //     let objValues = Object.values(allstate)
    //     objValues.map(function(object){
    //       for(let Objects of object){
    //         $("#lga").append(`<option> ${Object.values(object)}</option>`)}
    //     })
    //   }
    // })
  }
});

//Form event
form.submit(function () {

  // Appending the table body content
  tbody.append(
    `   <tr class="tr border-bottom">
        <td class="fs-6">${$("#firstname").val()}</td>
        <td class="fs-6">${$("#middlename").val()}</td>
        <td class="fs-6">${$("#lastname").val()}</td>
        <td class="fs-6">${$("#dob").val()}</td>
        <td class="fs-6">${$("#sex option:selected").val()}</td>
        <td class="fs-6">${$("#phone").val()}</td>
        <td class="fs-6">${$("#country").val()}</td>
        <td class="fs-6">${$("#state").val()}</td>
        <td class="fs-6">${$("#lga").val()}</td>
        <td class="fs-6"><button type="button" class="btn btn-danger remove"> Remove </button> </td>
        </tr>
        `
  );

  // Remove Table content
  $(".remove").click(function(e){
    this.closest('tr').remove()
  })
});

