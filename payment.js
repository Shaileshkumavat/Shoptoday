function redirectToPayment(method) {
    switch (method) {
        case 'gpay':
            window.location.href = 'https://pay.google.com'; // Replace with actual GPay URL
            break;
        case 'paytm':
            window.location.href = 'https://paytm.com'; // Replace with actual Paytm URL
            break;
        case 'phonepe':
            window.location.href = 'https://phonepe.com'; // Replace with actual PhonePe URL
            break;
        case 'netbanking':
            window.location.href = 'https://netbanking.example.com'; // Replace with actual Net Banking URL
            break;
        case 'card':
            window.location.href = 'https://cardpayment.example.com'; // Replace with actual Card Payment URL
            break;
        default:
            alert('Payment method not supported');
    }
}