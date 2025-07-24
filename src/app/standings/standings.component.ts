import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootballService } from '../services/football.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-standings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss'],
})
export class StandingsComponent implements OnInit {
  countries: any[] = [];
  leagues: any[] = [];
  standings: any[] = [];

  selectedCountryId = '';
  selectedLeagueId = '';
  selectedTeamId = '';
  selectedTeam: any = null;
  overallLeaguePosition = '';

  constructor(private footballService: FootballService) {}

  ngOnInit() {
    this.loadCountries();
  }

  loadCountries() {
    this.footballService.getCountries().subscribe((data) => {
      this.countries = data;
      this.resetSelections();
    });
  }

  onCountryChange() {
    this.leagues = [];
    this.standings = [];
    this.selectedLeagueId = '';
    this.selectedTeamId = '';
    this.overallLeaguePosition = '';

    if (this.selectedCountryId) {
      this.footballService.getLeagues(this.selectedCountryId).subscribe((data) => {
        this.leagues = data;
      });
    }
  }

  onLeagueChange() {
    this.standings = [];
    this.selectedTeamId = '';
    this.overallLeaguePosition = '';

    if (this.selectedLeagueId) {
      this.footballService.getStandings(this.selectedLeagueId).subscribe((data) => {
        this.standings = data;
      });
    }
  }

  onTeamChange() {
    this.overallLeaguePosition = '';
    this.selectedTeam = null;
    if (this.selectedTeamId && this.standings.length > 0) {
      const selectedStanding = this.standings.find(
        (s) => s.team_id === this.selectedTeamId
      );
      if (selectedStanding) {
        this.overallLeaguePosition = selectedStanding.overall_league_position;
        this.selectedTeam = selectedStanding;
      }
    }
  }

  private resetSelections() {
    this.selectedCountryId = '';
    this.selectedLeagueId = '';
    this.selectedTeamId = '';
    this.leagues = [];
    this.standings = [];
    this.overallLeaguePosition = '';
  }
}
