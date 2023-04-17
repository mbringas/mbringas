// Initialize ChemDoodle Web Components
ChemDoodle.init();

// Initialize variables
let sketcher = new ChemDoodle.SketcherCanvas('drawing-area', 380, 380);
let chemicalName = "";
let certaintyLevel = 50;

// Get random chemical name from server
$.getJSON('/get_random_chemical_name', function(data) {
  // Set chemical name input value
  $('#chemical-name').val(data.chemical_name);
  // Clear sketcher
  sketcher.erase();
});

// Handle submit button click
$('#submit-btn').click(function() {
  // Get sketcher data as MOL file
  let molFile = sketcher.getMOL();
  // Get chemical name input value
  chemicalName = $('#chemical-name').val();
  // Get certainty level input value
  certaintyLevel = $('#certainty-level').val();
  // Send data to server
  $.ajax({
    url: '/submit',
    type: 'POST',
    data: JSON.stringify({
      chemical_name: chemicalName,
      mol_file: molFile,
      certainty_level: certaintyLevel
    }),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(data) {
      // Get new random chemical name from server
      $.getJSON('/get_random_chemical_name', function(data) {
        // Set chemical name input value
        $('#chemical-name').val(data.chemical_name);
        // Clear sketcher
        sketcher.erase();
