<?php
$inputEmail = "thuandinh.cuor_gmail.com#EXT#@thuandinhcuorgmail.onmicrosoft.com";

// Tách phần username và domain
list($usernameAndType, $domain) = explode('#EXT#@', $inputEmail);
list($username, $type) = explode('_', $usernameAndType);
$domainParts = explode('.', $domain);
$newEmail = $username . '@' . $domainParts[0] . '.com';
echo $newEmail;
?>
<script>
    let inputEmail = "thuandinh.cuor_gmail.com#EXT#@thuandinhcuorgmail.onmicrosoft.com";

// Tách phần username và domain
let [usernameAndType, domain] = inputEmail.split("#EXT#@");

// Tách phần username và loại email
let [username, type] = usernameAndType.split('_');

// Thay thế dấu '_' trong username thành '.'
username = username.replace('_', '.');

// Thay thế tên miền "onmicrosoft.com" thành "gmail.com"
domain = domain.replace('.onmicrosoft.com', '@gmail.com');

// Tạo email mới
let newEmail = username + '@' + type;

console.log(newEmail);
    </script>
