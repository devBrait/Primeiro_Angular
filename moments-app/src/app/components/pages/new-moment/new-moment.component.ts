import { MomentService } from './../../../services/moment.service';
import { Component, OnInit, Input } from '@angular/core';
import { Moment } from '../../../Moment';
import { MessagesService } from '../../../services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent implements OnInit{

      btnText = 'Compartilhar!';

      constructor(
        private MomentService: MomentService, 
        private messagesService: MessagesService,
        private router: Router
      ){}

      ngOnInit(): void {
          
      }

      async createHandler(moment: Moment){
        const formData = new FormData()

        formData.append("title", moment.title)
        formData.append("description", moment.description)

        if(moment.image){
          formData.append('image', moment.image)
        }


        await this.MomentService.createMoment(formData).subscribe()

        this.messagesService.add("Momento adicionado com sucesso")

        this.router.navigate(['/'])
      }


}
