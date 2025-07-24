import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Country {
  country_id: string;
  country_name: string;
}

interface League {
  league_id: string;
  league_name: string;
  country_id: string;
}

interface Standing {
  team_id: string;
  team_name: string;
  overall_league_position: string;
  league_id: string;
  country_name: string;
}

@Injectable({ providedIn: 'root' })
export class FootballService {
  private baseUrl = 'http://localhost:8080/api/football'; // Your Spring Boot backend base URL

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/countries`);
  }

  getLeagues(countryId: string): Observable<League[]> {
    return this.http.get<League[]>(`${this.baseUrl}/leagues?countryId=${countryId}`);
  }

  getStandings(leagueId: string): Observable<Standing[]> {
    return this.http.get<Standing[]>(`${this.baseUrl}/standings?leagueId=${leagueId}`);
  }
}
