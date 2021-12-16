Feature: Shopping without Login

    Scenario Outline: Shop Apple watch without login
        Given User navigates to the website
        When "<product>" is searched
        And Product is choosed "<buttonTitle>""<productDetails>"
        And Sellers are choosed
        And Click to basket
        Then Choosen products should be list to sellers

        Examples:
            | product              | buttonTitle                                                                              | productDetails   |
            | Apple Watch Series 7 | Apple Watch Seri 7 Gps, 45MM Mavi Alüminyum Kasa ve Mavi Spor Kordon - Regular MKN83TU/A | Mavi Spor Kordon |