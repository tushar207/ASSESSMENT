
        function validate() {
            var fname = document.reg_form.fname;
            var lname = document.reg_form.lname;
            var email = document.reg_form.email;
            var mobile = document.reg_form.mobile;
            var gender = document.reg_form.gender;
            var date = document.reg_form.date;
            var address = document.reg_form.address;
            var city = document.reg_form.city;
            var pin = document.reg_form.pin;
            var state = document.reg_form.state;
            var qualification = document.reg_form.qualification;
            var hobbies = document.reg_form.hobbies;

            if (fname.value.length <= 0) {
                alert("Enter your first name");
                fname.focus();
                return false;
            }
            if (lname.value.length <= 0) {
                alert("Enter your first name");
                lname.focus();
                return false;
            }
            if (email.value.pattern="[a-z0-9]+@[a-z0-9]+\.[a-z]{3,}$") {
                alert("Email Id is required");
                email.focus();
                return false;
            }
            if (mobile.value.pattern=/^([0-9]{10}) /){
                alert("Mobile number is required");
                mobile.focus();
                return false;
            }
            if (gender.value.length <= 0) {
                alert("Gender is required");
                gender.focus();
                return false;
            }
            if (date.value.length <= 0) {
                alert("DOB is required");
                date.focus();
                return false;
            }
            if (address.value.length <= 20) {
                alert("Address is required");
                address.focus();
                return false;
            }
            if (city.value.length <= 3) {
                alert("City is required");
                city.focus();
                return false;
            }
            if (pin.value.length <= 5) {
                alert("pin is required");
                pin.focus();
                return false;
            }
            if (state.value.length <= 3) {
                alert("state is required");
                state.focus();
                return false;
            }
            if (qualification.value == "select qualification") {
                alert("qualification is required");
                qualification.focus();
                return false;
            }
            if (hobbies.value == "select hobbies") {
                alert("hobbies is required");
                hobbies.focus();
                return false;
            }
            return false
        }