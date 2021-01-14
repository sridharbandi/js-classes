Feature: Incrementing number

    Scenario Outline: Increment number
        Given number is <num>
        When number is incremented by <increment>
        Then number should be <result>

        Examples:
            | num | increment | result |
            | 5   | 3         | 8      |
            | 6   | 5         | 11     |

        Examples:
            | num | increment | result |
            | 2   | 1         | 3      |


    Scenario: Demo on DataTables
        Given Numbers are
            | numbers | num2 |
            | 2       | 6    |
            | 3       | 7    |
            | 4       | 8    |
            | 5       | 9    |

    Scenario: Demo on DataTables 2
        Given Numbers are
            | numbers | num2 |
            | 2       | 6    |
            | 3       | 7    |
            | 4       | 8    |
            | 5       | 9    |
            | 5       | 9    |
            | 5       | 9    |

    @execute
    Scenario: Demo on DataTables 3
        Given Numbers are
            | title     | author |
            | The Devil | Sri    |
            | The Lion  | Sri    |
            | Garden    | Mani   |


    Scenario: Different expressions
        Given my number is 10.55
        Given username is 'sridhar'
        Given some data is 10.55
        Given I have 10 rupes
        Given I have 1 rupe
        Given I have black color sandles
        Given I have black color shoes
