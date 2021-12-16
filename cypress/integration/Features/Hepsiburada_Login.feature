Feature: Shopping
    Scenario Outline: Login with email adress
        Given User navigate to the website
        When User click to login button
        And User logs in "<mail_adress>" and click button
        And User logs in "<password>" and click password visible button
        And Click Login button
        Then Homepage should be visible user name

        Examples:
            | mail_adress        | password |
            | info@fovimarlo.com | Arcane12 |

    Scenario Outline: Login with phone number
        Given User navigate to the website
        When User click to login button
        And User logs in "<phone_number>" and click button
        And User logs in "<phone_code>" and click button
        Then Homepage should be visible user name

        Examples:
            | phone_number | phone_code |
            | 055555555555 | Arcane12   |


    Scenario Outline: Login with mail worst case
        Given User navigate to the website
        And  User click to login button
        And User logs in "<input1>" and click button, "<message1>"
        And User logs in "<input2>" and click button
        Then User logs in "<password>" and click button, "<message2>"


        Examples:
            | input1       | input2             | password | message 1                                                | message 2                           |
            | sdfdg        | info@fovimarlo.com | Arcan    | E-posta adresi eksik veya hatalı.                        | Girdiğiniz şifre eksik veya hatalı. |
            | asd@dsf      | info@fovimarlo.com | Arcan    | E-posta adresi eksik veya hatalı.                        | Girdiğiniz şifre eksik veya hatalı. |
            | asd@dsf .com | info@fovimarlo.com | Arcan    | E-posta adresi eksik veya hatalı.                        | Girdiğiniz şifre eksik veya hatalı. |
            |              | info@fovimarlo.com | Arcan    | E-posta adresinizi veya telefon numaranızı girmelisiniz. | Girdiğiniz şifre eksik veya hatalı. |


    Scenario Outline: Login with phone worst case
        Given User navigate to the website
        And  User click to login button
        And User logs in "<input3>" and click button, "<message3>"
        And User logs in "<input4>" and click button
        And Do not enter user code and wait 3 min, "<message4>"
        Then  User logs in "<password1>" and click button, "<message5>"

        Examples:
            | input3      | input4      | password1 | message 3                             | message 4     | message 5             |
            | 01234567111 | 05555555555 | 8765443   | Geçerli bir cep telefonu girmelisiniz | Süreniz doldu | Doğrulama kodu hatalı |
            | 0555625     | 05555555555 | 8765443   | Geçerli bir cep telefonu girmelisiniz | Süreniz doldu | Doğrulama kodu hatalı |

    Scenario Outline: Login with support
        Given User navigate to the website
        And  User click to login button
        And User click "Yardıma İhtiyacım Var" button
        And User Click "whatsapp destek hattı", see web.whatsapp tab and close this tab
        And Click "Anasayfaya git" button
        And User click to login button
        And User logs in "<input5>" and click button
        And Clik to "Şifremi unuttum" button and sifre yenileme page is opened and click gmail button
        Then Password  Mail is come from hepsiburada.com

        Examples:
            | input5             |
            | info@fovimarlo.com |
