import java.util.Scanner;

public class Calci{

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.print("Enter first number:");
            int num1 = scanner.nextInt();
              
            System.out.print("Enter operator (+, -, *, /):");
            String operator = scanner.next();

            System.out.print("Enter second number:");
            int num2 = scanner.nextInt();
                

            int result = 0;

            switch (operator) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    if (num2 == 0) {
                        System.out.println("Error");
                        continue; 
                    }
                    result = num1 / num2;
                    break;
                default:
                    System.out.println("Invalid operator.");
                    continue; 
            }

            System.out.println("Result: " + result);

            System.out.print("Press X or x to Exit:");
            String ex = scanner.next();
            
            if ( ex == "X"){
                break;
            }
            else if ( ex == "x" ) {
                   break;
            }
            else {
                   continue;
            }
        }

        scanner.close();
    }
}
