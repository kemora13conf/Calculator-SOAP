package org.example;// CalculatorService.java
import javax.jws.WebMethod;
import javax.jws.WebService;

@WebService
public class CalculatorService {
    @WebMethod
    public int add(int a, int b) {
        return a + b;
    }

    @WebMethod
    public int subtract(int a, int b) {
        return a - b;
    }
}