// Form validation for register.html - Debug Version
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const messageElement = document.getElementById('validationMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally
        
        // Get form values
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const mobile = document.getElementById('mobile').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        // Clear previous message and make it visible
        messageElement.innerHTML = '';
        messageElement.style.display = 'block';
        
        console.log('Form submitted!'); // Debug
        console.log('Password:', password); // Debug
        console.log('Confirm Password:', confirmPassword); // Debug
        console.log('Passwords match:', password === confirmPassword); // Debug
        
        // Simple validation - check each field step by step
        
        // 1. Check if all fields are filled
        if (!firstName) {
            showError('Please enter your first name.');
            return;
        }
        
        if (!lastName) {
            showError('Please enter your last name.');
            return;
        }
        
        if (!email) {
            showError('Please enter your email address.');
            return;
        }
        
        if (!mobile) {
            showError('Please enter your mobile number.');
            return;
        }
        
        if (!password) {
            showError('Please enter a password.');
            return;
        }
        
        if (!confirmPassword) {
            showError('Please confirm your password.');
            return;
        }
        
        // 2. Check first name contains only letters
        if (!/^[A-Za-z]+$/.test(firstName)) {
            showError('First name must contain only letters.');
            return;
        }
        
        // 3. Check last name contains only letters
        if (!/^[A-Za-z]+$/.test(lastName)) {
            showError('Last name must contain only letters.');
            return;
        }
        
        // 4. Check email format
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showError('Please enter a valid email address.');
            return;
        }
        
        // 5. Check mobile number (exactly 10 digits)
        if (!/^\d{10}$/.test(mobile)) {
            showError('Mobile number must contain exactly 10 digits.');
            return;
        }
        
        // 6. Check password length
        if (password.length < 6 || password.length > 12) {
            showError('Password must be between 6 and 12 characters long.');
            return;
        }
        
        // 7. Check if passwords match
        if (password !== confirmPassword) {
            showError('Passwords do not match. Please make sure both password fields are identical.');
            return;
        }
        
        // If we get here, everything is valid!
        showSuccess(firstName, lastName, email, mobile, password);
    });
    
    function showError(message) {
        messageElement.innerHTML = message;
        messageElement.style.color = 'red';
        messageElement.style.fontWeight = 'bold';
        messageElement.style.padding = '15px';
        messageElement.style.backgroundColor = '#ffe6e6';
        messageElement.style.border = '1px solid #ff9999';
        messageElement.style.borderRadius = '5px';
        messageElement.style.marginTop = '15px';
        messageElement.style.display = 'block';
    }
    
    function showSuccess(firstName, lastName, email, mobile, password) {
        const successMessage = `
            <strong>Registration Successful!</strong><br><br>
            <strong>First Name:</strong> ${firstName}<br>
            <strong>Last Name:</strong> ${lastName}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Mobile Number:</strong> ${mobile}<br>
            <strong>Password:</strong> ${'*'.repeat(password.length)} (${password.length} characters)<br><br>
            All information has been validated successfully!
        `;
        messageElement.innerHTML = successMessage;
        messageElement.style.color = 'green';
        messageElement.style.fontWeight = 'bold';
        messageElement.style.padding = '15px';
        messageElement.style.backgroundColor = '#e6ffe6';
        messageElement.style.border = '1px solid #99ff99';
        messageElement.style.borderRadius = '5px';
        messageElement.style.marginTop = '15px';
        messageElement.style.display = 'block';
    }
});