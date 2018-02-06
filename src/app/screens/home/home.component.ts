import { Component, OnInit } from '@angular/core';
import { Session } from '../../services/session.service';
import { UsersService } from '../../services/users.service';
import { MatchesService } from '../../services/matches.service';
import { Match } from '../../domain/model';

@Component({
  selector: 'sj-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  matches: Match[];
  allMatches: Match[];

  constructor(
    public session: Session,
    private userService: UsersService,
    private matchesService: MatchesService
  ) { }

  ngOnInit() {
    // this.matchesService.myMatches().subscribe(matches => this.matches = matches);
    this.matchesService.allMatches().subscribe(matches => {
      this.allMatches = matches;
      this.matches = matches.filter(match => match.owner._id.toString() === this.session.loggedUser()._id.toString());
    });
  }

}
