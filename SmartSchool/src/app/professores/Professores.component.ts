import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Professor } from '../models/professor';

@Component({
  selector: 'app-Professores',
  templateUrl: './Professores.component.html',
  styleUrls: ['./Professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public modalRef?: BsModalRef;
  public professorForm: FormGroup;
  public titulo = 'Professores';
  public professorSelecionado: Professor;
  public professores = [
  {id: 1, nome:'Lauro', disciplina: 'Matemática' },
  {id: 2, nome:'Roberto', disciplina: 'Física' },
  {id: 3, nome:'Ronaldo', disciplina: 'Português' },
  {id: 4, nome:'Rodrigo', disciplina: 'Inglês' },
  {id: 5, nome:'Alexandre', disciplina: 'Programação' }

  ]
  fb: any;


  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
  }

  professorSelect(professor: Professor){
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }

  professorSubmit(){
    console.log(this.professorForm.value);
  }

  voltar(){
    this.professorSelecionado = null;
  }

  criarForm(){
    this.professorForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    })
  }


}
