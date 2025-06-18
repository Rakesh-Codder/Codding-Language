#include<iostream>
using namespace std;

//add two number
/*
int sum(int a, int b){
   int add = a + b;
   return add;
}
int main(){
   int add= sum(2,5);
   cout<<add;
}
*/



//MINIMU OF TWO NUMBER

/*
int a = 10 , b =50;
int min(int a,int b){
    if(a>b){
        cout<<a;
    }
    else{
        cout<<b;
    }
}
int main(){
    min(a,b);
}
    */
   

//is number odd or even
/*
int check(int n){
    if( n % 2==0){
        cout<<"even";
    }
        else{
            cout<<"odd";
        }
    }
int main(){
    check(5);
}
    */

 //sum of number from 1 to n
 /*
 int claculate(int n){
    int sum=0;
    for(int i=0;i<=n;i++){
        sum=sum+i;
    }
    cout<<sum;
 }   
 int main(){
    claculate(10);
 }
*/



 //is prime number or not
 /*
  void checkprime(int n){
    if(n<=1){
        cout<<"not prime number\n";
        return;
    }
    for(int i=2;i<n;i++){
        if(n % i == 0){
            cout<<"not prime number\n";
            return;
        }
    }
    cout<<"prime number";
 }
 int main(){
    checkprime(10);
 };

 */
 

 //HOMEWORK

 //CALCULATE "SIMPLE INTERAST" FROM PRINCIPAL(P) ,RATE ,& TIME .
/*
int SI(int a,int b,int c){
int si=a*b*c;
cout<<si;
};
 int main(){
    int principal=25;
    int rate=100;
    int time=50;
    SI(principal,rate,time);
 }
    */

    //calculate factorial of a number
/*
    int claculate(int n){
    int sum=1;
    for(int i=1;i<n;i++){
        sum=sum*i;
    }
    return sum;
 }   
 int main(){
    int sum=claculate(5);
    cout<<sum;
 }
    */

    //given a person age . find if they should get a driving licenceor not. 

    int main(){
        int age;
        cin>>age;
        cout<<age;
        if(age>18){
            cout<<"they can drive a car";
        }
        else{
            cout<<"they can not drive a car";
        }
    }