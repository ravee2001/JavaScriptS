//isValidIP("1.2.3.4") -> true
//isValidIP("1.2.3") -> false
//isValidIP("1.2.3.4.5") -> false
//isValidIP("123.45.67.89") -> true
//isValidIP("123.456.78.90") -> false
//isValidIP("123.045.067.089") -> false



function ValidateIPaddress(ipaddress) {  
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
      return (true)  
    }  
    alert("You have entered an invalid IP address!")  
    return (false)  
  }  