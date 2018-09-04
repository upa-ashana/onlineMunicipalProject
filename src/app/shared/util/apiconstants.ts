export class APIConstants {
   
     public static  BASE_URL="http:localhost:8080/municipal";     
     public static  REST_BASE_URL=APIConstants.BASE_URL+"/rest";  
     public static  USER_URL=APIConstants.REST_BASE_URL+"/user";    
     public static  HOUSE_INFO =APIConstants.REST_BASE_URL+"/houseinfo";     
     public static  LAND_INFO=APIConstants.REST_BASE_URL+"/landinfo";      
     public static  PROPERTY_TAX_PAYMENT_URL=APIConstants.REST_BASE_URL+"/taxpayment";     
     public static  USER_PAY_TAX= APIConstants.PROPERTY_TAX_PAYMENT_URL+"/userpaytax";      
     public static  PROPERTY_TAX_CALCULATION_URL=APIConstants.PROPERTY_TAX_PAYMENT_URL+"/taxcalculation";          
     public static  USER_DO_NAMSARI_URL=APIConstants.REST_BASE_URL+"/user transfer property";    
     public static  PROPERTY_NAMSARI_URL =APIConstants.USER_DO_NAMSARI_URL+"/transfer";    
     public static  USER_REGISTER_PROPERTY_URL=APIConstants.REST_BASE_URL+"/User register property";   
     public static  PROPERTY_REGISTRATION_URL =APIConstants.USER_REGISTER_PROPERTY_URL+"/registration";     
     public static  USER_PAY_REGISTRATION_FEE_URL=APIConstants.REST_BASE_URL+"/payfee";   
     public static  REGISTRATION_FEE_PAYMENT_URL=APIConstants.USER_PAY_REGISTRATION_FEE_URL+"/registration payment";
     
}