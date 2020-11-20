import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:3000/users';

  private hasLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  login(username: string, password: string): Observable<User> {
    return this.getUsers().pipe(
      map((stream: User[]) => stream.find(user => user.username === username && user.password === password))
    );
  }

  register(data: User): Observable<User> {
    return this.http.post<User>(this.url, data);
  }

  logout(): void {
    localStorage.removeItem('loggedUser');

    this.setHasLoggedIn(false);
  }

  setLoggedUser(user: User): void {
    localStorage.setItem('loggedUser', JSON.stringify(user));

    this.setHasLoggedIn(true);
  }

  getLoggedUser(): User {
    return JSON.parse(localStorage.getItem('loggedUser'));
  }

  setHasLoggedIn(hasLogged: boolean): void {
    this.hasLoggedIn$.next(hasLogged);
  }

  getHasLoggedIn(): Observable<boolean> {
    return this.hasLoggedIn$.asObservable();
  }
}
