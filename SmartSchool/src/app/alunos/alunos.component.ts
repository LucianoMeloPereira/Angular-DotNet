import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/Aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  public modalRef?: BsModalRef;
  public alunoForm: FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno;
  public textSimple: string;

  public alunos: Aluno[];

    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }

  constructor(private fb: FormBuilder,
              private modalService: BsModalService,
              private alunoService: AlunoService) {


    this.criarForm();

  }

  ngOnInit(): void {
    this.carregarAlunos();
  }
  carregarAlunos(){
    this.alunoService.getAll().subscribe({
      next: (aluno: Aluno[]) =>{this.alunos = aluno;},
      error: (error: any) =>{console.error(error);}
    }

    );
  }

criarForm(){
  this.alunoForm = this.fb.group({
    nome: ['', Validators.required],
    sobrenome: ['', Validators.required],
    telefone: ['', Validators.required]
  })
}
  alunoSubmit(){
    console.log(this.alunoForm.value);
  }

  alunoSelect(aluno: Aluno){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar(){
    this.alunoSelecionado = null;
  }
}
