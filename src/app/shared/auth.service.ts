import { Injectable } from '@angular/core';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword , AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth:AngularFireAuth ,private router:Router) { }

  //login method
  login(email:string,password:string){
    return this.fireauth.signInWithEmailAndPassword(email,password).then(
      ()=>{
        localStorage.setItem('token','true')
        this.router.navigate(['dashboard'])
      },error=>{
        alert("Something went wrong")
        this.router.navigate(['login'])
      }
    )
  }

  signup(email:string,password:string){
    return this.fireauth.createUserWithEmailAndPassword(email,password).then(
      ()=>{
        alert("Registration Successful")
        this.router.navigate(['login'])
        
      },error => {
        alert("Something went wrong")
        this.router.navigate(['register'])
      }
    )
  }

  logout(){
    return this.fireauth.signOut().then(
      ()=>{
        localStorage.removeItem('token')
        this.router.navigate(['login'])
      },error=>{
        alert("Something went wrong")
      }
    )
  }
}
