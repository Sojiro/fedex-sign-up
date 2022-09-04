import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UserService } from './services/user.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [UserService],
})
export class DataAccessModule {}
