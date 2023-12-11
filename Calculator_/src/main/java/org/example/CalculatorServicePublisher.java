package org.example;// CalculatorServicePublisher.java
import javax.xml.ws.Endpoint;

public class CalculatorServicePublisher {
    public static void main(String[] args) {
        String url = "http://localhost:8080/calculator";
        Endpoint.publish(url, new CalculatorService());

        System.out.println("CalculatorService published at: " + url);
    }
}

