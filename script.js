$(document).ready(function () {
    // Carousel functionality
    let currentIndex = 0;
    const images = $(".carousel img");
  
    function showNextImage() {
      images.eq(currentIndex).fadeOut();
      currentIndex = (currentIndex + 1) % images.length;
      images.eq(currentIndex).fadeIn();
    }
  
    setInterval(showNextImage, 3000);
  
    // Smooth scrolling for navigation
    $("nav a").on("click", function (e) {
      e.preventDefault();
      const target = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(target).offset().top }, 1000);
    });
  
    // Full Name validation
    $("#fullName").on("input", function () {
      const fullName = $(this).val();
      const regex = /^[A-Za-z\s]+$/;
      if (!regex.test(fullName)) {
        $("#fullNameError").text("Full Name must contain only letters and spaces.");
      } else {
        $("#fullNameError").text("");
      }
    });
  
    // Registration Number validation
    $("#regNumber").on("input", function () {
      const regNumber = $(this).val();
      const regex = /^BCS-\d{2}-\d{4}-\d{4}$/;
      if (!regex.test(regNumber)) {
        $("#regNumberError").text("Registration Number must follow the format BCS-00-0000-0000.");
      } else {
        $("#regNumberError").text("");
      }
    });
  
    // Email validation
    $("#email").on("input", function () {
      const email = $(this).val();
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(email)) {
        $("#emailError").text("Please enter a valid email address.");
      } else {
        $("#emailError").text("");
      }
    });
  
    // Password validation
    $("#password").on("input", function () {
      const password = $(this).val();
      const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      if (!regex.test(password)) {
        $("#passwordError").text("Password must be at least 8 characters long and include a number and a special character.");
      } else {
        $("#passwordError").text("");
      }
    });
  
    // Confirm Password validation
    $("#confirmPassword").on("input", function () {
      const confirmPassword = $(this).val();
      const password = $("#password").val();
      if (confirmPassword !== password) {
        $("#confirmPasswordError").text("Passwords do not match.");
      } else {
        $("#confirmPasswordError").text("");
      }
    });
  
    // Ajax for Regions and Districts
    const regions = {
      "ARUSHA": ["ARUSHA", "ARUSHA CC", "LONGIDO", "MERU", "NGORONGORO"],
      "GEITA": ["BUKOMBE", "CHATO", "GEITA", "GEITA TC", "MBOGWE", "NYANG'HWALE",],
      "KATAVI": ["MLELE", "MPANDA MC", "MPIMBWE", "NSIMBO", "TANGANYIKA"],
      "DAR ES SALAAM": ["DAR ES SALAAM CC", "KIGAMBONI MC", "KINONDONI MC", "TEMEKE MC", "UBUNGO MC"],
      "MBEYA": ["CHUNYA", "KYELA", "BUSOKELO", "MBARALI", "RUNGWE", "MBEYA"]
    };
  
    $("#region").on("change", function () {
      const selectedRegion = $(this).val();
      const districts = regions[selectedRegion] || [];
      $("#district").empty().append('<option value="">Select District</option>');
      districts.forEach(district => {
        $("#district").append(`<option value="${district}">${district}</option>`);
      });
    });
  
    // Populate Regions
    Object.keys(regions).forEach(region => {
      $("#region").append(`<option value="${region}">${region}</option>`);
    });
  });