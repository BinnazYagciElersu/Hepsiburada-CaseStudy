Feature: Shopping
    Scenario Outline: Shop Apple watch with login
        Given Hepsiburada is opened
        When Login with "<username>" and "<password>"
        And User searches "<product>"
        And User chooses product "<buttonTitle>""<productDetails>"
        And Sellers are clicked
        And User goes to cart
        Then Choosen products should be list to cart

        Examples:
            | username           | password | product              | buttonTitle                                                                              | productDetails   |
            | info@fovimarlo.com | Arcane12 | Apple Watch Series 7 | Apple Watch Seri 7 Gps, 45MM Mavi Alüminyum Kasa ve Mavi Spor Kordon - Regular MKN83TU/A | Mavi Spor Kordon |

